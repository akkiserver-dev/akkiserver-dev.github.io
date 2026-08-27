---
layout: doc
title: まめーん
...
---

<script setup>
import { ref, watch, onMounted } from 'vue';
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


const toolLCResult = ref(``);
const toolLC = (test) => {
  toolLCResult.value = coinEval(test.target.value)
}
// LC Coin calculate Library
(()=>{class t{constructor(s=0){if(s instanceof t)this.i=s.i,this.p=s.p,this.t();else if("bigint"==typeof s)this.i=s,this.p=0;else{if("number"==typeof s&&(s=`${s}`),!/^-?(\d*)(\.\d*)?$/.test(s))throw new TypeError(`${s} is not vaild number`);s=(s=s.startsWith("-")?`-0${s.slice(1)}`:`0${s}`).replace(/(?<=\.(\d)*)0+$/,"");const[t,e]=s.split(".");this.i=BigInt(`${t}${e??""}`),this.p=(e??"").length,this.t()}}tN(){return Number(this.i)/10**this.p}toString(){let t=this.i.toString();if(0===this.p)return t;const s=t.startsWith("-"),e=s?t.slice(1):t;return`${s?"-":""}${e.slice(0,-this.p)||"0"}.${e.slice(-this.p).padStart(this.p,"0")}`}c(){return new t(this)}s(t){t<0&&(t=0);const s=Math.abs(this.p-t),e=10n**BigInt(s);return this.p>t?(this.i=this.i/e,this.p=t):(this.i=this.i*e,this.p=t),this}t(){let t=!1;const s=this.p-this.i.toString().split("").reverse().filter(s=>"0"===s&&!t||(t=!0,!1)).length;return this.s(s)}e(s){const e=this.c().t(),i=new t(s);return e.i===i.i&&e.p===i.p}g(s,e=!1){const i=new t(s),r=this.c(),n=Math.max(i.p,r.p);return i.s(n),r.s(n),r.i>i.i||e&&i.i===r.i}A(s){const e=new t(s),i=Math.max(e.p,this.p);return e.s(i),this.s(i),this.i+=e.i,this.t(),this}A_(...t){return this.c().A(...t)}S(s){const e=new t(s);return this.A(e.f())}S_(...t){return this.c().S(...t)}M(s){const e=new t(s);return this.i*=e.i,this.p+=e.p,this.t(),this}M_(...t){return this.c().M(...t)}D(s,e=Math.max(this.p,30)){const i=new t(s);return this.s(e),this.i*=BigInt(10**i.p),this.i/=i.i,this.t(),this}D_(...t){return this.c().D(...t)}f(){return this.i*=-1n,this}P(s){const e=new t(s);if(0!==e.p)throw new Error("BigNumber doesn't support number to the decimal number powered.");if(e.i<0n)throw new Error("BigNumber doesn't support number to the negative number powered.");return this.i**=e.i,this.p*=Number(e.i),this.t(),this}P_(...t){return this.c().P(...t)}floor(){return this.s(0)}F_(){return this.c().floor()}ceil(){return this.t(),0!==this.p&&this.A(1),this.floor()}C_(){return this.c().ceil()}round(){this.s(1);const t=this.i.toString();return 5<=parseInt(t[t.length-1])?this.ceil():this.floor()}R_(){return this.c().round()}Mo(s){const e=new t(s),i=Math.max(e.p,this.p);return e.s(i),this.s(i),this.i%=e.i,this.t(),this}Mo_(...t){return this.c().Mo(...t)}}const s=/[0-9０-９\.]/,e=/\+|＋/,i=/-|ー/,r=/\*|＊|×|×/,n=/\/|／|÷/,h=/\^|＾/,o=/\(|\)/,c=function(...t){return new RegExp(t.map(t=>`(?:${t.toString().slice(1,-1)})`).join("|"))}(e,i,r,n,h,o);class u{t=[];f=[];s="removeParentheses";constructor(t,s=30){this.d=s,this.e=t.replace(/\s/g,""),this.ce=this.e.replace(/%/g,"/100")}E(){this.R(),this.S(),this.F(),this.C(),this.N(),this.O(),this.P("*/"),this.P("+-");const s=this.t.find(s=>s instanceof t);if(!s)throw new Error("calculating failed");return s}R(){let t=0,s="",e="";for(const i of this.ce){if(t>0&&(e+=i),/\(/.test(i))t++;else if(/\)/.test(i)&&0!==t&&(t--,0===t)){s+=`(${new u(e.slice(0,-1)).E()}`,e=""}0===t&&(s+=i)}this.ce=s.replace(/__/g,"_")}S(){this.ce=this.ce.replace(/\*\*/g,"^");let e=null,i="";for(const r of this.ce){const n=s.test(r);if(null!==e){n||e&&(this.t.push(new t(i)),i="");c.test(i)&&(this.t.push(i),i="")}e=n,i+=r}i&&(s.test(i)?this.t.push(new t(i)):this.t.push(i))}F(){this.t=this.t.map(s=>{if(s instanceof t)return s;if(e.test(s))return"+";if(i.test(s))return"-";if(r.test(s))return"*";if(n.test(s))return"/";if(h.test(s))return"^";if(o.test(s))return s;throw new Error(`${s} is not vaild token`)})}N(){for(let s=this.t.indexOf("-");-1!==s;s=this.t.indexOf("-")){let e=!1;for(;s<this.t.length;s++){const i=this.t[s];if("-"!==i){if("("!==i){if(i instanceof t){e&&i.f(),this.t=this.t.filter(t=>""!==t);break}throw new Error(`Not correct formula: [${s}](${i})`)}this.t[s]=""}else this.t[s]="",e=!e,")"===this.t[s-1]&&(this.t[s-1]="")}}}O(){let s=null;const e=[];for(const i of this.t){const r="string"==typeof i?"op":"num";s?(i instanceof t?("num"===s&&e.push("+"),e.push(i)):o.test(i)?e.push("*"):e.push(i),s=r):(e.push(i),s=r)}this.t=e.filter((t,s,e)=>{if("string"==typeof t){if(0===s)return!1;if(s===e.length-1)return!1}if("*"===t){if("string"==typeof e[s-1])return!1;if("string"==typeof e[s+1]&&"*"!==e[s+1])return!1}return!0})}C(){for(;;){const s=this.t.findLastIndex(t=>"^"===t);if(-1===s)break;this.t[s]="";let e=null,i=null;for(const i of this.t.slice(0,s).reverse()){if(i instanceof t){e=i;break}if(!o.test(i))throw new Error(`Not correct formula: [${s}](a^b)`)}let r=!1;for(let e=s+1;e<this.t.length;e++){const n=this.t[e];if(this.t[e]="",n instanceof t){i=r?n.f():n;break}if("-"!==n){if(!o.test(n))throw new Error(`Not correct formula: [${s}](a^b)`)}else r=!r}if(!e||!i)return;e.P(i),this.t=this.t.filter(t=>""!==t)}}P(t){for(;;){const s=this.t.findIndex(s=>"string"==typeof s&&t.includes(s));if(-1===s)break;const e=this.t[s-1],i=this.t[s+1],r=this.t[s];if("string"==typeof e||"string"==typeof i)throw new Error(`Not correct formula: [${s}](${e}${r}${i})`);if("+"===r)e.A(i);else if("-"===r)e.S(i);else if("*"===r)e.M(i);else{if("/"!==r)throw new Error(`Not correct formula: [${s}](${e}${r}${i})`);e.D(i,this.d)}this.t[s]="",this.t[s+1]="",this.t=this.t.filter(t=>""!==t)}}}class f{static D={names:["n","d","e","g","i","c"],values:[10,10,10,10,10]};constructor(s,e){if(this.c=e??f.D,this.c.names.length!==this.c.values.length+1)throw new TypeError(`Wrong currencyCoins was given.\n${JSON.stringify(this.c)}`);switch(typeof s){case"string":this.v=f.c(s,this.c);break;case"number":case"bigint":this.v=new t(s);break;case"object":if(!(s instanceof t))throw new TypeError(`cur object not parseable: ${s}`);this.v=s.c()}}static c(s,e=f.D){s=s.replace(/\s/g,"");const i=new t;return e.names.forEach((r,n)=>{const h=e.values.slice(n).reduce((t,s)=>t*s,1),o=`([0-9.]+)${RegExp.escape(r)}`,c=RegExp(o).exec(s);if(!c)return;const u=new t(c[1]);Number.isNaN(u)||i.A(u.M(h))}),i}N(){return this.c.names}toString(t="name",s=!1,e="show"){const i=this.N(),r=i[i.length-1];let n="";return"value"===t?`${this.v}${r}`:(i.forEach((t,s)=>{const i=this.c.values.slice(s).reduce((t,s)=>t*s,1),h=this.v.D_(i,5);0!==s&&h.Mo(this.c.values[s-1]);const o=h.F_();if(t===r){if(0n===h.i)return;if("show"!==e)return void(n+=`${h[e]()}${t}`);if(0n!==o.i&&(n+=`${o}${t}`),0===h.p)return;const s=h.Mo(1);n+=` (+${s}${t})`}else 0n!==o.i&&(n+=`${o}${t}`)}),n||`0${r}`)}valueOf(t="show"){const s=this.v.tN();switch(t){case"show":return s;case"floor":case"ceil":case"round":return Math[t](s)}}toJSON(){return{coins:this.c,value:this.valueOf()}}}window.coinEval=function(t){if(!t)return"";const s=function(t,s=f.D){const e=s.names.map(t=>`${RegExp.escape(t)}`).join("|"),i=RegExp(`([0-9.]+(?:${e}))+`,"g");return t.replace(i,t=>new f(t).valueOf()+"")}(t),e=new u(s);let i=null;try{i=e.E()}catch(t){if(!(t instanceof Error))return console.error(t),"エラーが発生しました。";const s=t;return s.message.includes("division by zero")?"0除算が発生しました。":s.message.startsWith("BigNumber doesn't support number to the ")?"べき乗は0か自然数にしか対応してません。すまんな。":/ is not vaild (?:number|token)$/.test(s.message)?s.message.replace(/ is not vaild (?:number|token)$/,"はコインまたは数値、計算式ではありません。"):(console.error(t),"エラーが発生しました。")}if(null===i)return"";const r=new f(i);return`${r.toString()} / ${r.toString("value")}`}})();
</script>

<ClientOnly ref="clientScriptLoader">
</ClientOnly>


<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/mameeenn.png?raw=true" width="40" style="display:inline;margin-right:10px"><span style="font-size:40px;">まめーん / Mameeenn</span>

## 概要
- ただのあっきーサーバーのメンバーの1人。
  - 様々な事情で管理者に昇格。え？
- 趣味に関する自己紹介は https://mameeenn.com/ を参照。
  - ...なんもないけど
- このページで内容が異常に凝ってたりするページはだいたい私が書いてます(宣伝)
- Minecraftでは以下のmodを扱うことが多い。
  - [CC:Tweaked](https://tweaked.cc/)
  - [Mekanism](https://www.curseforge.com/minecraft/mc-mods/mekanism)
  - [Create](https://www.curseforge.com/minecraft/mc-mods/create)
  - [Applied Energistics 2](https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2)
  - [Construction Wand](https://www.curseforge.com/minecraft/mc-mods/construction-wand)

## 1月鯖改・改改
闇鍋環境で3日で終わった伝説の環境1月鯖、それを私がテコ入れし、一月鯖改を作った。  
がその環境もすぐに突破された。この環境に執着心があった私がさらにテコ入れしたのが一月鯖改改。  
...<span style="font-size:120%;">しかし1回目はワールドデータ破損、2回目は謎のFPS低下によってクリアされなかった。</span>  
1か月くらいかけて作った意味とは何だったのだろうか。

<img src="https://github.com/akkiserver-dev/akkiserver-dev.github.io/blob/main/docs/.assets/MameeennArea.png?raw=true" width="24" style="display:inline;margin-right:5px"><span style="font-size:24px;">[MameeennArea](/wiki/companies/mameeennarea)</span>  
私があっきーサーバーのマイクラ上でサービスを提供するときしばし用いる名義。  
詳しくは[MameeennArea](/wiki/companies/mameeennarea)を参照。


## ソーシャル
- ホームページ: https://mameeenn.com/
- Discord: [am_107ryu](https://discord.com/users/778582802504351745)
- MCID: [AM_107ryu](https://ja.namemc.com/profile/AM_107ryu)
- GitHub: [manmen2414](https://github.com/manmen2414)

## ツール
Lightmans Currency 計算機  
<sub>まめーんbotに搭載している機能と同等。 ライブラリサイズ: 7.17 kB</sub>

<input type="text" @input="toolLC"
style="border: 1px solid #888;border-radius:0120107929px;min-width:18em;padding: 2px 10px">
→ {{ toolLCResult }}
