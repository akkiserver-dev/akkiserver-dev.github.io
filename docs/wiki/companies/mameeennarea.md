---
layout: doc
title: "MameeennArea"
...
---

<script setup>
import { ref, watch } from "vue";

function reloader(){
  setTimeout(()=>{
    location.reload();
  },20)
}

const clientScriptLoader = ref(null);
watch(
  clientScriptLoader,
  () => {
    const isDestoryAnarouter = location.href.includes("destroy=FaxAnarouter");

    if (isDestoryAnarouter) {
      document.querySelector("#MameeennArea").remove();
      setTimeout(() => {
        const removes = [
          document.querySelector("#fa"),
          document.querySelector("#videoWrapper"),
        ];
        const animate = [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ];
        removes.forEach((removeAt) => {
          if (!removeAt) return;
          removeAt.animate(animate, 520);
        });
        setTimeout(() => {
          removes.forEach((removeAt) => {
            if (!removeAt) return;
            removeAt.remove();
          });
        }, 500);
      },4400);
    }else{
      document.querySelector("#DestoryAnarouter").remove();
    }
  },
  { once: true },
);

</script>

<ClientOnly ref="clientScriptLoader">
</ClientOnly>

<div id="MameeennArea">

<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/MameeennArea.png?raw=true" width="40" style="display:inline;margin-right:10px"><span style="font-size:40px;">MameeennArea</span>

## 概要
[まめーん](/wiki/persons/mameeenn)が社長である会社。  
2024年4月、Meatwoによって開かれていたStoneBlockサーバーにて設立され、何度もサーバー間引継ぎを行い現在まで続いている。  
だいたい社員はまめーんだけだが、たまにめだころが入る。  
主に自動化設備で何かを生産したり、CC:Tweakedのコードを書いて人々に提供したり、手動で鉱石を集めたりしている。

## 情報
現本社:   
リンク: https://discord.com/channels/1318155001411145758/1476463106006974556  
現社員:
- [まめーん](../persons/mameeenn)

備考:  
- サーバー情勢を鑑みた結果、両者の合意に基づきMAreaはマイクラント公国国有鉄道会社の子会社となった。
  
会社が設立されたサーバーリスト:  
- 石風呂本社
- 本社1号
- バリン鯖本社 / CC:Tweaked博物館
- 本社2号 
- あっきー鯖11月本社 
- 2025年1月本社 
- (2月: 子会社AreaFoodとして活動)
- 4月本社
- Re4月本社 / マーメイド拠点
- 9月番外鯖本社 / 緑駅
- 11月鯖
- 2026年3月鯖 (~3/30)
- 2026年3月鯖 (3/31): <a href="mameeennarea?destroy=FaxAnarouter" @click="reloader">"DestroyAnarouter"</a>

## CC: Tweaked
[https://github.com/manmen2414/AKKI-Server-MameeennArea](https://github.com/manmen2414/AKKI-Server-MameeennArea)にてサーバー区切りでプログラムを保管している。

</div>

<div id="DestoryAnarouter">

<div :class="$style.videoWrapper" id="videoWrapper"></div>
<div :class="$style.fa" id="fa">
  <video src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/FaxAnorouter.mp4?raw=true" autoplay width="1000%"></video>
</div>

# DestoryAnarouter
## 概要
目的は唯一つ。FaxAnarouterを破壊する、それだけ。

## 情報
現本社: 2026年3月鯖  
リンク: https://discord.com/channels/1318155001411145758/1476463106006974556  
現社員:
- [まめーん](../persons/mameeenn)
- [あっきー](../persons/akki)


<a href="mameeennarea" @click="reloader">MameeennAreaに戻る</a>

</div>

<style module>
.fa {
  width:100vmin;
  position:fixed;
  top: 50%;
  left:50%;
  z-index:100;
  transform: translate(-50%, -50%);
}
.videoWrapper{
  width:100vw;
  height:100vh;
  top:0;
  left:0;
  background-color: #000;  
  position:fixed;
  z-index:99;
}
</style>