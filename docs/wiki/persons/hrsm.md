---
layout: doc
title: はーすむ
...
---
<script setup>
  import {ref} from "vue"
  const showing = ref(null)
  const toggleRRB = (name) => {
    showing.value = showing.value === name ? null : name
  }
  const owoshoot = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1&mute=1"
  }
</script>

# はーすむ

## 概要
はーすむ (正式名称: HardSmoothy) は、あっきー鯖にV1時代から参加しているものの、あまりMinecraft鯖にいないメンバーである。
- 一時期「はーむす」と間違えられていたことから、サブアカウントの名前は「HardOmusubi」となっている。マイクラは知らん。
- 以前はモデレーターとして積極的に活動していたものの、ルールの厳格さを求めすぎるがあまり失敗したことがあり、それ以来はあまりモデレーターとして動いていない。  
- PvPが非常に苦手で、気配を感じるとMinecraft鯖から消えることもある。 
- 音楽が生きる源。初音ミクV4Xを持っているが、使われている形跡はない。
- いわゆる乗り鉄。鉄道を使う旅行はできるだけ変なルートで行きたい派。
  - 以前はマイクラ内でも鉄道を作っていた。が、なんだかんだで今はしなくなっている。当時の名残で信号などの知識は若干ある。

### ソーシャルアカウント
つったかたー: [HardSmoothyMC](https://x.com/HardSmoothyMC)
さうんどくりゃーど: [hardsmoothy_archade](https://soundcloud.com/hardsmoothy_archade)

## あそびましょ、あそびましょ
この項目は、このホームページの内部構造からなんとなく使えそうな構造を引っ張って遊んでいる項目です。


### お気に入りの作品紹介コーナー

- この枠の説明
<button @click="toggleRRB('00_desc')">
  {{ showing === '00_desc' ? "[x]" : "[?]"}}
</button>

<div v-if="showing === '00_desc'">

  > 現時点では、「最新までずっと追ってる」「新刊が出たら2ヶ月位内に買う」というレベルでのお気に入りを乗せています。掲載順でもなんでもなく、思い出した順に書いてます。  
    (タイトルの前に表示されてる[?]を押すと好きな理由とかが出るぞ！)

</div>

<!-- 内部idは、「追加順番号(2桁)_タイトルローマ字(先頭6～10文字)」に設定しています。-->

- せかねこ 「ほむら先生はたぶんモテない」
<button @click="toggleRRB('01_homura')">
  {{ showing === '01_homura' ? "[x]" : "[?]"}}
</button>
<div v-if="showing === '01_homura'">

  > [Pixivコミック](https://comic.pixiv.net/works/5733)  
    なんともゆっるーい雰囲気で進んでるのがめっちゃ癒される。あとカエルかわいい。

</div>


- HERO x 萩原ダイスケ 「ホリミヤ」
<button @click="toggleRRB('02_horimiya')">
  {{ showing === '02_horimiya' ? "[x]" : "[?]"}}
</button>
<div v-if="showing === '02_horimiya'">

  > [Gファンタジー](https://magazine.jp.square-enix.com/gfantasy/story/horimiya/)  
    なんか日常感があって、読むのが楽しいと思えた、そんな作品です。  
    ぜひ、大学生になってからも読んでみてください。

</div>


- 板垣巴留 「BEASTARS」
<button @click="toggleRRB('03_beasters')">
  {{ showing === '03_beasters' ? "[x]" : "[?]"}}
</button>
<div v-if="showing === '03_beasters'">

  > [チャンピョンクロス](https://championcross.jp/series/54da5cc996b67)  
    私は音楽で認識するくせがあるらしく、この作品の名前だけ知っている状態で読んでいました。  
    ほどほどな気分のときに読み進めることをおすすめします。

</div>


- Rayark Inc. 「DEEMO」
<button @click="toggleRRB('04_deemo')">
  {{ showing === '04_deemo' ? "[>_<]" : "[?]"}}
</button>
<div v-if="showing === '04_deemo'">

  > [公式ホームページ(DEEMO)](https://rayark.com/ja/games/deemo/) / [(DEEMO -Reborn-)](https://rayark.com/ja/games/deemoreborn/)  
    _「さよならも言わず、消えてしまわないで。」_ 

  <p>
    唯一ゲームからで失礼します。<br>
    DEEMOは、私が一番最初にプレイしたリズムゲームで、<strong>かつ一番心が動かされたゲームです。</strong><br>
    もしリズムゲームに興味がある方なら、ぜひ、やってみていただきたいと思います。<br>
    (ちなみに、Rebornはストーリーをそのままに色々変更が入ったブラッシュアップ版です。VRが好きな方はこちらをどうぞ。)<br>
  </p>

</div>



- にいち「現実もたまには嘘をつく」
<button @click="toggleRRB('05_realmo')">
  {{ showing === '05_realmo' ? "[x]" : "[?]"}}
</button>
<div v-if="showing === '05_realmo'">

  > [Pixiv](https://www.pixiv.net/artworks/70035405)  
    かわいいは正義！なんて言葉がありますが、こういう雰囲気と絵柄が好きなんですよね...。  

</div>


### OwO?
<button @click="owoshoot()">呼び出しボタン</button>
