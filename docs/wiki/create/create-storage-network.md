---
layout: doc
title: 物流ネットワーク 命名規則
...
---

## 物流ネットワーク 命名規則

以下のルールすべてに適用できる事項として、個人のネットワークなどで分ける場合は以下の例のように/で区別すること。
`akki/sub/Storage`
`meatwo/Mixer`
また、命名規則については基本的にすべて`PascalCase`かつ英語を使用する。

物流ネットワークにて、倉庫やクラフト施設の接頭辞として使うのは主に以下となる
- 物流倉庫 : `Storage` 
- クラフター : `Crafter`
- ファン
  - 精錬 : `Smelter`
  - 燻製 : `Smoker`
  - 洗浄 : `Washer`
  - 憑霊 : `Haunter`
- ミキサー
  - 通常 : `Mixer`
  - 加熱 : `Mixer-H`
  - 過熱 : `Mixer-SH`
- 圧縮
  - 通常 : `Compacting`
  - 過熱 : `Compacting-SH`
- メカニカルプレス : `Press`
- 製粉 : `Milling`
- 粉砕 : `Crushing`
- メカニカルソー : `Saw`
- デプロイヤー : `Deployer`

これらは加工やクラフトの種類によって分ける。(例: `Deployer/Polishing`, `Smelter/SmoothStone`)
その他自身の家や住所に関しては自由である。

備考: ミキサーと圧縮の接尾辞についている`H`と`SH`は、HeatedとSuper-Heatedの略です。

以上に含まれないものやミスがあれば教えてくれると助かります。

以下命名リスト/例

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
- `Plantation` 植林場などの耕地を使用しないもの
  - `Plantation/Oak` オークの植林場
  - `Plantation/Cactus` サボテン農場
  - `Plantation/SugarCane` サトウキビ農場
  - `Plantation/CocoaBeans` カカオ農場
- `Field` 耕地によって栽培されるもの
  - `Field/Wheat` 小麦の農場
  - `Field/Rice` 田 (実際には耕地を使用しないが例外的にここへ分類)
  - `Field/Potato` ジャガイモの農場
## ファン
- `Smelter` 精錬
  - `Smelter/SmoothStone` Createのフィルターの仕様上一度石に加工したあともう一度精錬するときになめらかな石に加工するか判別できないため別々で
- `Smoker` 燻製
- `Washer` 洗浄
- `Haunter` 憑霊
## ミキサー
- `Mixer` 混合
- `Mixer-H` 加熱混合
- `Mixer-H` 過熱混合
  - `Mixer/Lava` レシピに溶岩を使う混合
  - `Mixer/Water` レシピに水を使う混合
## 圧縮
- `Compacting` 圧縮
- `Compacting-H` 加熱圧縮
- `Compacting-SH` 過熱圧縮
## プレス
- `Press`
## 製粉
- `Milling`
## 破砕
- `Crushing`
## メカニカルソー
- `Saw`
  - `Saw/Shaft` 安山岩合金からシャフトへの加工(フィルター使用)
  - `Saw/Planks` 樹皮を剥いだ原木から木材への加工(フィルター使用)
## デプロイヤー
- `Deployer`
  - `Deployer/Polishing` やすり
  - `Deployer/PrecisionMechanism` 精密機構

耕地: `minecraft:farmland` (またはFarmer's Delightの肥沃な耕地)