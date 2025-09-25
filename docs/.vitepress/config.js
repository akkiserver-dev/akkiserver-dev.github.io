import fs from "fs";
import pathLib from "path";

//TODO: 忘れないうちにコメントを追加して見やすくしておく

/**
 * 1つ上の階層のフォルダパスを入手する
 * @param {string} path
 */
const getTopDir = (path) => path.split("\\").slice(0, -1).join("\\");
/**@param {string} content  */
function logByError(content) {
  throw new Error(`\n----Content----\n${content}\n----End of Content----\n`);
}
const sidebar = {};
const rootDir = getTopDir(__dirname);
/**
 * `/wiki/accident`のような形式に変換する
 * @param {string} path
 */
const getProjectFilePath = (path) => path.replace(rootDir, "");
/**
 * 特定ファイルが無視すべきファイルであるか判定する
 * @param {string} filename
 */
function isnotIgnore(filename) {
  const ignoreList = ["public"];
  if (filename.startsWith(".")) return false;
  if (ignoreList.includes(filename)) return false;
  return true;
}
/**
 * contentをJSONで解析しようとしてみる
 * @param {string} content
 */
function parseOrKeep(content) {
  try {
    return JSON.parse(content);
  } catch (ex) {
    return content;
  }
}
/**
 * markdownからメタデータを取得する
 * @param {string} path
 */
function getPageMetadata(path) {
  const content = fs.readFileSync(path, { encoding: "utf-8" });
  const metadatas = {};
  let i = -1;
  for (const line of content.split(/\r\n|\r|\n/)) {
    i++;
    if (i === 0 && line !== "---")
      throw new Error(
        `${path}は不正なページです。先頭に表形式でメタデータを追加してください。`
      );
    if (line === "...") break;
    if (i !== 0 && line === "---") break;
    const prop = /^([a-zA-Z0-9_\-]+):(?: )*(.+)$/.exec(line);
    if (!prop) continue;
    const title = prop[1];
    const value = parseOrKeep(prop[2]);
    metadatas[title] = value;
  }
  return metadatas;
}
/**
 * markdownからページ名を取得する
 * @param {string} path
 */
function getPageName(path) {
  const title = getPageMetadata(path).title;
  if (!title)
    throw new Error(
      `${path}は不正なページです。title: "名前"形式で名前メタデータを追加してください。`
    );
  return title;
}
/**
 * そのディレクトリのオブジェクトを取得する？
 * @param {string} projectDirpath
 */
function getPagePathObject(projectDirpath) {
  let curDir = "/";
  const proDir = getProjectFilePath(projectDirpath)
    .split("\\")
    .slice(1)
    .map((p) => {
      curDir += p + "/";
      return curDir;
    });
  //ルートのみ構造が違う
  sidebar[proDir[0]] ??= [];
  /**@type {{ text: string, link: string, items?:any[], M_noDisplay:boolean? }} */
  let curObj = { items: sidebar[proDir[0]] };
  proDir.slice(1).forEach((dirname) => {
    let findedPageobj = curObj.items.find((ob) => ob.link === dirname);
    if (!findedPageobj) {
      findedPageobj = {
        text: pathLib.basename(dirname),
        link: dirname,
        items: [],
        M_noDisplay: true,
      };
      curObj.items.push(findedPageobj);
    }
    if (!findedPageobj.items) {
      throw new Error(`${dirname}はフォルダではありません。`);
    }
    curObj = findedPageobj;
  });
  return curObj;
}
/**
 * @param {string} path
 */
function addFileToList(path) {
  let filename = pathLib.basename(path);
  //該当ファイルのフォルダのプロジェクトルートフォルダからのフォルダのリスト
  const proDir = getProjectFilePath(path).split("\\").slice(1, -1);
  let curDir = "\\";
  proDir.forEach((p) => {
    curDir += p;
  });
  const curDirSlashed = curDir.replaceAll("\\", "/");
  const pageName = getPageName(path);
  const pageLink = getProjectFilePath(path).replaceAll("\\", "/");
  const pageObject = { text: pageName, link: pageLink };
  //ルートフォルダ
  if (proDir.length === 0) {
    sidebar[curDirSlashed] ??= [];
    sidebar[curDirSlashed].push(pageObject);
  } else {
    //該当オブジェクトを探索する
    const curobj = getPagePathObject("\\" + proDir.join("\\"));
    const { M_noDisplay } = getPageMetadata(path);
    if (filename === "index.md") {
      curobj.M_noDisplay = M_noDisplay;
      curobj.text = pageName;
    } else {
      pageObject.M_noDisplay = M_noDisplay;
      curobj.items.push(pageObject);
    }
  }
}
/**@param {string} path  */
function jumpByDirectoryOrFile(path) {
  if (fs.statSync(path).isDirectory()) {
    getSidebarFromDirectory(path);
  } else {
    addFileToList(path);
  }
}
/**
 * @param {string} dirPath
 */
function getSidebarFromDirectory(dirPath) {
  fs.readdirSync(dirPath)
    .filter((p) => isnotIgnore(p))
    .map((p) => dirPath + "\\" + p)
    .forEach(jumpByDirectoryOrFile);
}
const nav = [{ text: "ホーム", link: "/" }];
function finalize() {
  /**
   * @param {{ text: string, link: string, items?:any[], M_noDisplay?:boolean }} page
   */
  function removeNoDisplay(page) {
    if (!!page.M_noDisplay) page.link = null;
    if (!!page.items) {
      page.items = page.items.filter(
        (val) => !(!val.items && !!val.M_noDisplay)
      );
      page.items.forEach(removeNoDisplay);
    }
  }
  Object.values(sidebar).forEach((arr) => {
    arr.unshift({ text: "ホーム", link: "/" });
  });
  for (const key in sidebar) {
    removeNoDisplay({ items: sidebar[key] });
  }
}
function genNav() {
  const rootFolders = Object.keys(sidebar).filter((v) => v !== "/");
  rootFolders.forEach((path) => {
    nav.push({ text: getPageName(rootDir + path + "index.md"), link: path });
  });
}
logByError(`__dirname: ${__dirname}\nrootDir: ${rootDir}`);
getSidebarFromDirectory(rootDir);
finalize();
genNav();
//logByError(JSON.stringify(sidebar, null, 2));
export default {
  title: "あっきーサーバー",
  description: "",
  themeConfig: {
    nav,
    sidebar,
  },
};
