---
layout: doc
title: まめーん
...
---

<script setup>
import { ref } from 'vue';
//unused
const html = ref(`<h1>HTML Here</h1>`)
const copied = ref(`[Click to copy]`);
function copyPjsekai() {
  navigator.clipboard.writeText('558921495067344904');
  copied.value = "[Copied!]";
  setTimeout(()=>{
    copied.value = "[Click to copy]";
  },2000);
}
</script>


<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/mameeenn.png?raw=true" width="40" style="display:inline;margin-right:10px"><span style="font-size:40px;">まめーん / Mameeenn</span>

## 概要
- ただのあっきーサーバーのメンバーの1人。
- 一応モデレーター。
- 受験生。
- プロセカ大好き。
- MinecraftではCC:TweakedやMekanismを遊んだり遊ばなかったりする。
- [コロックル](https://topman.co.jp/ky/download/Korockle/6530-010.html)を愛しているため、ひとりごとのスレッドでよく遊んでいる光景が見れる。

## 1月鯖改・改改
闇鍋環境で3日で終わった伝説の環境1月鯖、それを私がテコ入れし、一月鯖改を作った。  
がその環境もすぐに突破された。この環境に執着心があった私がさらにテコ入れしたのが一月鯖改改。  
...<span style="font-size:120%;">しかし1回目はワールドデータ破損、2回目は謎のFPS低下によってクリアされなかった。</span>  
1か月くらいかけて作った意味とは何だったのだろうか。

<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/MameeennArea.png?raw=true" width="24" style="display:inline;margin-right:5px"><span style="font-size:24px;">MameeennArea</span>  
私があっきーサーバーのマイクラ上でサービスを提供するときしばし用いる名義。
だいたい社員は私とめだころである。
主に自動化設備で何かを生産したり、CC:Tweakedのコードを書いて人々に提供したりしていることがあったりもする気がすると考えている。
この会社名義で作成したCC:Tweakedのluaコードは[ここ](https://github.com/manmen2414/AKKI-Server-MameeennArea)で見れる。

## ソーシャル
- ホームページ: [https://manmen2414.github.io/](https://manmen2414.github.io/)
- Discord: [am_107ryu](https://discord.com/users/778582802504351745)
- MCID: [AM_107ryu](https://ja.namemc.com/profile/AM_107ryu)
- GitHub: [manmen2414](https://github.com/manmen2414)
- Steam: [inotitokokoro](https://steamcommunity.com/profiles/76561199135832390)
- PJSekai: <a href="javascript:void(0)" @click="copyPjsekai">558921495067344904 {{copied}}</a>
  - 誰かわからない不審なフレンド申請は普通に切ります。