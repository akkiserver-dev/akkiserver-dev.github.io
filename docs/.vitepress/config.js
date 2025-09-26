import fs from "fs";
import pathLib from "path";

/**
 * 1つ上の階層のフォルダパスを入手する。
 * @param {string} path
 */
const getTopDir = (path) => path.split("/").slice(0, -1).join("/");
/**
 * console.logが使えない環境下でエラーをスローして無理やりログを表示する。
 * @param {string} content
 */
function logByError(content) {
  throw new Error(`\n----Content----\n${content}\n----End of Content----\n`);
}
const sidebar = {};
const rootDir = getTopDir(__dirname.replaceAll("\\", "/"));
/**
 * `/wiki/accident`のような形式に変換する。
 * @param {string} path
 */
const getProjectFilePath = (path) => path.replace(rootDir, "");
/**
 * 特定ファイルが無視すべきファイルであるか判定する。
 * @param {string} filename
 */
function isnotIgnore(filename) {
  const ignoreList = ["public"];
  if (filename.startsWith(".")) return false;
  if (ignoreList.includes(filename)) return false;
  return true;
}
/**
 * contentをJSONで解析しようとしてみる。
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
 * markdownからメタデータを取得する。
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
    // プロパティの名前と内容に当てはまる正規表現
    const prop = /^([a-zA-Z0-9_\-]+):(?: )*(.+)$/.exec(line);
    if (!prop) continue;
    const title = prop[1];
    const value = parseOrKeep(prop[2]);
    metadatas[title] = value;
  }
  return metadatas;
}
/**
 * markdownからページ名を取得する。
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
 * そのディレクトリのオブジェクトを取得する。
 * @param {string} projectDirpath
 */
function getPagePathObject(projectDirpath) {
  let curDir = "/";
  // そのディレクトリ階層を1段階ずつ潜っていくときのパス
  const proDir = getProjectFilePath(projectDirpath)
    .split("/")
    .slice(1)
    .map((p) => {
      curDir += p + "/";
      return curDir;
    });
  // ルートのみ構造が違う
  sidebar[proDir[0]] ??= [];
  /**@type {{ text: string, link: string, items?:any[], M_noDisplay:boolean? }} */
  let curObj = { items: sidebar[proDir[0]] };
  // 1段階づつ潜っていき、ディレクトリを示すオブジェクトを捜索する
  proDir.slice(1).forEach((dirname) => {
    let findedPageobj = curObj.items.find((ob) => ob.link === dirname);
    if (!findedPageobj) {
      findedPageobj = {
        text: pathLib.basename(dirname),
        link: dirname,
        items: [],
        // index.mdはデフォルトで非表示としておく
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
 * 該当ファイルをサイドバーに追加する。
 * @param {string} path
 */
function addFileToList(path) {
  let filename = pathLib.basename(path);
  // 該当ファイルのフォルダのプロジェクトルートフォルダからのフォルダのリスト
  const proDir = getProjectFilePath(path).split("/").slice(1, -1);
  let curDir = "/";
  proDir.forEach((p) => {
    curDir += p;
  });
  const pageName = getPageName(path);
  const pageLink = getProjectFilePath(path);
  const pageObject = { text: pageName, link: pageLink };
  // ルートフォルダ
  if (proDir.length === 0) {
    sidebar[curDir] ??= [];
    sidebar[curDir].push(pageObject);
  } else {
    // 該当オブジェクトを探索する
    const curobj = getPagePathObject("/" + proDir.join("/"));
    const { M_noDisplay, M_collapsed } = getPageMetadata(path);
    if (filename === "index.md") {
      // index.mdのオブジェクトはすでにあるため、noDisplayを書き換えれば表示可能
      curobj.M_noDisplay = M_noDisplay;
      curobj.text = pageName;
      curobj.collapsed = M_collapsed ?? false;
    } else {
      pageObject.M_noDisplay = M_noDisplay;
      curobj.items.push(pageObject);
    }
  }
}
/**
 * パスの種別に合わせて追加関数を実行する。
 * @param {string} path  */
function jumpByDirectoryOrFile(path) {
  if (fs.statSync(path).isDirectory()) {
    addSidebarFromDirectory(path);
  } else {
    addFileToList(path);
  }
}
/**
 * 該当フォルダのサイドバーを生成する。
 * @param {string} dirPath
 */
function addSidebarFromDirectory(dirPath) {
  fs.readdirSync(dirPath)
    .filter((p) => isnotIgnore(p))
    .map((p) => dirPath + "/" + p)
    .forEach(jumpByDirectoryOrFile);
}
const nav = [{ text: "ホーム", link: "/" }];
/**
 * サイドバー生成で最後に行う処理。できれば必ず実行してほしいところ。
 */
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
  for (const path in sidebar) {
    if (path !== "/") sidebar[path].unshift({ text: "ホーム", link: "/" });
  }
  for (const key in sidebar) {
    removeNoDisplay({ items: sidebar[key] });
  }
}
/**
 * サイドバーオブジェクトからナビゲーターも生成する。
 */
function genNav() {
  const rootFolders = Object.keys(sidebar).filter((v) => v !== "/");
  rootFolders.forEach((path) => {
    nav.push({ text: getPageName(rootDir + path + "index.md"), link: path });
  });
}
addSidebarFromDirectory(rootDir);
finalize();
genNav();
// logByError(JSON.stringify(sidebar, null, 2));
export default {
  title: "あっきーサーバー",
  description: "",
  themeConfig: {
    nav,
    sidebar,
  },
};
