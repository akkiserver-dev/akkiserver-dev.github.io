---
layout: doc
title: 物流ネットワーク 命名規則
...
---

# 物流ネットワーク 命名規則

以下のルールすべてに適用できる事項として、個人のネットワークなどで分ける場合は以下の例のように/で区別すること。

`akki/sub/Storage`
`meatwo/Mixer`

また、命名規則については基本的にすべて`PascalCase`かつ英語を使用する。

これらは加工やクラフトの種類によって分ける。(例: `Deploy/Polishing`, `Smelt/SmoothStone`)
その他自身の家や住所に関しては自由である。

物流ネットワークにて、倉庫やクラフト施設の接頭辞として使うのは主に以下となる。

## Create
- 物流倉庫 : `Storage` 
- クラフター : `Craft`
- ファン
  - 精錬 : `Smelt`
  - 燻製 : `Smoke`
  - 洗浄 : `Wash`
  - 憑霊 : `Haunt`
- ミキサー
  - 通常 : `Mixer`
  - 加熱 : `Mixer-H`
  - 過熱 : `Mixer-SH`
- 圧縮
  - 通常 : `Pack`
  - 加熱 : `Pack-H`
  - 過熱 : `Pack-SH`
- メカニカルプレス : `Press`
- 製粉 : `Mill`
- 粉砕 : `Crush`
- メカニカルソー : `Saw`
- デプロイヤー : `Deploy`
- 注液 : `Spout`

## Central Kitchen
- まな板の使用 : `Cut`

## Bitterballen
- フライヤー : `Fry`

## Metallurgy
- 溶解 : `Melt` ※CBCも共通
- るつぼ
  - 通常 : `Crucible`
  - 加熱 : `Crucible-H`
  - 過熱 : `Crucible-SH`
- 合金 : `Alloy`
- グラインダー : `Grind`
- 特定の加工ラインの場合 : `Foundry`
  - 例1: `Foundry/Steel`
  - 例2: `Foundry/Brass`

# 命名リスト/例

## クラフター
### 接頭辞
- `Crafter`
  - `Crafter/5x5`
  - `Crafter/2x2`
  - `Crafter/5x3`
### その他
- メカニカルクラフターのサイズはかならず3x3にする。
- それ以外のサイズに関しては/で区別する。(`Crafter/WxH`のように)(W=Width,H=Height)

## 畑
### 接頭辞
- `Plant` 植林場などの耕地を使用しないもの
  - `Plant/Oak` オークの植林場
  - `Plant/Cactus` サボテン農場
  - `Plant/SugarCane` サトウキビ農場
  - `Plant/CocoaBeans` カカオ農場
  - `Plant/Kelp` 昆布農場
- `Field` 耕地によって栽培されるもの
  - `Field/Wheat` 小麦の農場
  - `Field/Rice` 田 (実際には耕地を使用しないが例外的にここへ分類)
  - `Field/Potato` ジャガイモの農場

## ファン
- `Smelt` 精錬
  - `Smelt/SmoothStone` Createのフィルターの仕様上一度石に加工したあともう一度精錬するときになめらかな石に加工するか判別できないため別々で
- `Smoke` 燻製
- `Wash` 洗浄
- `Haunt` 憑霊

## ミキサー
- `Mixer` 混合
- `Mixer-H` 加熱混合
- `Mixer-SH` 過熱混合
  - `Mixer/Lava` レシピに溶岩を使う混合
  - `Mixer/Water` レシピに水を使う混合

## 圧縮
- `Pack` 圧縮
- `Pack-H` 加熱圧縮
- `Pack-SH` 過熱圧縮

## プレス
- `Press`

## 製粉
- `Mill`

## 破砕
- `Crush`

## メカニカルソー
- `Saw`
  - `Saw/Shaft` 安山岩合金からシャフトへの加工(フィルター使用)
  - `Saw/Planks` 樹皮を剥いだ原木から木材への加工(フィルター使用)

## デプロイヤー
- `Deploy`
  - `Deploy/Polishing` やすり
  - `Deploy/Mechanism` 精密機構

## 備考
- ミキサーと圧縮の接尾辞についている`H`と`SH`は、HeatedとSuper-Heatedの略です。
- 耕地: `minecraft:farmland` (またはFarmer's Delightの肥沃な耕地)
- 以上に含まれないものやミスがあれば教えてくれると助かります。