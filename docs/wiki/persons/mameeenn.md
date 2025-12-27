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
  let _0xc46c23 = [];
  document.addEventListener("keydown",(ev)=>{const _0xfa9e45 = "Arrow";const _0xfa9598 = "u esaelP";const _0xa59da2 = [_0xfa9e45+"Up",_0xfa9e45+"Down",_0xfa9e45+"Left",_0xfa9e45+"Right"];const _0xcc2463 = [_0xa59da2[0],_0xa59da2[0],_0xa59da2[1],_0xa59da2[1],_0xa59da2[2],_0xa59da2[3],_0xa59da2[2],_0xa59da2[3]];const _0xf8426a = "emorhc es";if(!_0xa59da2.includes(ev.key)) return;_0xc46c23.push(ev.key);if(_0xc46c23.every((k,i)=>_0xcc2463[i] === k)){if(_0xc46c23.length === _0xcc2463.length){_0xcc2463.push("\u2414");const _0xe32f12 = navigator.hid;if(!_0xe32f12) {alert((_0xf8426a+_0xfa9598).split([]+[]).reverse().join([]+[]));return;};_0xe32f12.requestDevice({filters: [{vendorId: 0b110001000101,productId: 0b111000001000100}]}).then((_0xe3f212)=>{  _0xe3f212[0].open().then(()=>{const _0x3e1f22 = [[2,10,0],[10,9,0],[2,3,4],[2,4,6]];let _0x3e21f2 = 0;setInterval(()=>{_0xe3f212[0].sendReport(0,Uint8Array.from([0b1111000,0b1,0b110,0b0,..._0x3e1f22[_0x3e21f2]]));_0x3e21f2 = (_0x3e21f2+1)%_0x3e1f22.length;},1000);})});}}else{_0xc46c23 = [];}})
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
- 現在Probotによるメッセージランキングで1位を独走中。
  - 2000pt差なので割と越されそう。

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