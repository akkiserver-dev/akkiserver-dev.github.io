---
layout: doc
title: まめーん
...
---

<script setup>
import { ref, watch } from 'vue';
const copied = ref(`[Click to copy]`);
function copyPjsekai() {
  navigator.clipboard.writeText('558921495067344904');
  copied.value = "[Copied!]";
  setTimeout(()=>{
    copied.value = "[Click to copy]";
  },2000);
}
const clientScriptLoader = ref(null)
watch(clientScriptLoader, () => {
  let e=[];document.addEventListener("keydown",(t=>{const n="Arrow",r=[n+"Up",n+"Down",n+"Left",n+"Right"],o=[r[0],r[0],r[1],r[1],r[2],r[3],r[2],r[3]];if(r.includes(t.key))if(e.push(t.key),e.every(((e,t)=>o[t]===e))){if(e.length===o.length){o.push("@manmen2414");const e=navigator.hid;if(!e)return void alert("emorhc esu esaelP".split([]+[]).reverse().join([]+[]));e.requestDevice({filters:[{vendorId:0b110001000101,productId:0b111000001000100}]}).then((e=>{e[0].open().then((()=>{const t=[[2,10,0],[10,9,0],[2,3,4],[2,4,6]];let n=0;setInterval((()=>{e[0].sendReport(0,Uint8Array.from([120,1,6,0,...t[n]])),n=(n+1)%t.length}),1e3)}))}))}}else e=[]}));
}, { once: true })
</script>

<ClientOnly ref="clientScriptLoader">
</ClientOnly>


<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/mameeenn.png?raw=true" width="40" style="display:inline;margin-right:10px"><span style="font-size:40px;">まめーん / Mameeenn</span>

## 概要
- ただのあっきーサーバーのメンバーの1人。
- 一応モデレーター。
- 受験生。
- プロセカ大好き。
  - 推し: <a href="https://pjsekai.sega.jp/character/unite01/ichika/index.html?year=now" style="color:#00acf2" target="_blank">焼きそばパン狂</a>,<a href = "https://pjsekai.sega.jp/character/unite05/mafuyu/index.html?year=now" style="color:#8786d0" target="_blank">「よくわからない」</a>,<a href="https://pjsekai.sega.jp/character/unite05/mizuki/index.html?year=now" style="color:#efafd1" target="_blank">⋯⋯⋯⋯あ⋯⋯あ⋯⋯⋯⋯</a>
- MinecraftではCC:TweakedやMekanismを遊んだり遊ばなかったりする。
- [コロックル](https://topman.co.jp/ky/download/Korockle/6530-010.html)を愛しているため、ひとりごとのスレッドでよく遊んでいる光景が見れる。
  - 技術教材「[Life is tech!Lesson](https://lifeistech-lesson.jp/)」にもハマっている。
- 現在Probotのメッセージランキング及びVCランキングで1位を取っている。
  - メッセージの方は[あっきー](./akki)と1500xp差。広がったがまだ追いつかれる範囲。
  - VCは最長240時間を超える放置を叩き出すはーすむに打ち勝ち現在2300xp差。

## 1月鯖改・改改
闇鍋環境で3日で終わった伝説の環境1月鯖、それを私がテコ入れし、一月鯖改を作った。  
がその環境もすぐに突破された。この環境に執着心があった私がさらにテコ入れしたのが一月鯖改改。  
...<span style="font-size:120%;">しかし1回目はワールドデータ破損、2回目は謎のFPS低下によってクリアされなかった。</span>  
1か月くらいかけて作った意味とは何だったのだろうか。

<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/MameeennArea.png?raw=true" width="24" style="display:inline;margin-right:5px"><span style="font-size:24px;">[MameeennArea](/wiki/companies/mameeennarea)</span>  
私があっきーサーバーのマイクラ上でサービスを提供するときしばし用いる名義。  
詳しくは[MameeennArea](/wiki/companies/mameeennarea)を参照。


## ソーシャル
- ホームページ: [https://manmen2414.github.io/](https://manmen2414.github.io/)
- Discord: [am_107ryu](https://discord.com/users/778582802504351745)
- MCID: [AM_107ryu](https://ja.namemc.com/profile/AM_107ryu)
- GitHub: [manmen2414](https://github.com/manmen2414)
- Steam: [inotitokokoro](https://steamcommunity.com/profiles/76561199135832390)
- PJSekai: <a href="javascript:void(0)" @click="copyPjsekai">558921495067344904 {{copied}}</a>
  - 誰かわからない不審なフレンド申請は普通に切ります。

## ツール
好き勝手やってるのでもしかしたらここら辺にWebツールが追加されてるかもしれません(???????????)