---
layout: doc
title: まめーんBot
...
---
# まめーんBot
名前の通り[まめーん](/wiki/persons/mameeenn)によるBot。  
まともな機能がない。

## Mk2
**作成開始**: 2023/08/02  
**使用場所**:
- V1
- V2
- V3
  
Mk1は別のサーバーで使われていたためなし。  
このバージョンが一番長く使われた。  

### コマンド
☆付き: Mk3に受け継がれた。
- /abbb: 「あばばばばば...」を特定の条件に沿ってランダムに生成する
- /afdsgfdskhfbkds: テスト用コマンドらしい。
- /basesixtyfour: テキストとBase64の変換。
- /createakki: 任意の文字であっきーのアイコンを表現する。☆
- /embedcreate: 極めて使いづらいUIで埋め込みを作れる。
- /enemy: 任意の文字列を敵としてそれっぽいHPで召喚する。
- /game: 入力した文字列によって出力が変わる。
- /ggrbk: [https://ggrbk.github.io](https://ggrbk.github.io)☆
- /mameeenn: 謎言語Mameeenn語を実行する。
- /minesweeper: トリッキーな操作でマインスイーパーをプレイする。
- /mix: 2つの文字列を混ぜ合わせる。
- /moonchat: ローマ字で打たれたチャットを日本語に変換するLunachatのようなもの。
- /nickname: botの名前を変更する。
- /pico: はーすむ案。`あいうえお→ぁぃぅぇぉ`のように文字を小さくする。
- /server: APIを用いてMinecraftサーバーの状態を確認する。
- /tellraw: MinecraftのtellrawコマンドをDiscordで疑似再現する。☆
- /testcommand: テスト用コマンドらしい。
- /tofile: 入力したテキストをファイルにして返す。
- /totuzenshi: 突　然　の　死
- /zxcvbn: パスワード強度判定システム[zxcvbn](https://github.com/dropbox/zxcvbn)をDiscord上で実行する。
  
### 追加機能
Minecraftのチャット連携を行うBotを利用し、Minecraftのチャット上からコマンドを実行することが可能。  
ただし本来コマンド実行時に要求されるInteractionインスタンスを偽装しているため、互換性が低い。

## Mk3
**作成開始**: 2024/12/28  
**使用場所**:
- V3
- V4

現行のまめーんBot。  
仕様は変わったが、JavaScriptがうまくなってから作り直したためコードがましである。  
一部コマンドを除き、未実装だがチャット上からの使用などにほぼ完全な互換性を持つ。  
コマンド少ないので増やしたいところ。  
### コマンド
- /createakki: Mk2からの完全移植。
- /debugcommand: Mk2でいうところの/testcommand。テスト用コマンド。
- /get: tellraw等で利用することがある。
- /ggrbk: Mk2からの完全移植。
- /selectgame: 広告でよく見る時間制限内に数字選ぶやつのチャット版。設定で選択肢数や時間、数字範囲等をいじれる。
- /tellraw: Mk2からの移植。clickEvent周辺の仕様が変化している。
  
### 追加機能
[コロックル](https://www.topman.co.jp/ky/download/Korockle/6530-010.html)の[Webアプリ](https://www.topman.co.jp/ky/download/Korockle/app/app_web/webapp.html)のネットワーク機能を利用したチャットアプリとDiscord間のメッセージ連携機能を持つ。