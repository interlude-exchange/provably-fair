(function(e){function t(t){for(var a,i,o=t[0],c=t[1],_=t[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return s.push.apply(s,_||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var _=0;_<o.length;_++)t(o[_]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"app-wrapper"},[e._m(0),r("div",{staticClass:"app-inner"},[r("h1",[e._v("Provably Fair")]),r("div",{staticClass:"select-wrapper"},[r("span",[e._v("Game type:")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.game_type,expression:"game_type"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.game_type=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"dice_pro"}},[e._v("Dice PRO")]),r("option",{attrs:{value:"dice_3d"}},[e._v("Dice 3D")])])]),r("h2",[e._v("Server Secret")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.server_secret,expression:"server_secret"}],domProps:{value:e.server_secret},on:{input:function(t){t.target.composing||(e.server_secret=t.target.value)}}}),r("h2",[e._v("Server Hash")]),e._m(1),r("input",{directives:[{name:"model",rawName:"v-model",value:e.server_hash,expression:"server_hash"}],staticClass:"disabled",attrs:{readonly:""},domProps:{value:e.server_hash},on:{input:function(t){t.target.composing||(e.server_hash=t.target.value)}}}),r("div",{staticClass:"proof-link-wrapper"},[r("span",[e._v("CyberChef proof:")]),r("a",{attrs:{href:e.server_hash_cyber_chef_link,target:"_blank"}},[e._v(e._s(e.server_hash_cyber_chef_link))])]),r("h2",[e._v("Client seed")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.client_seed,expression:"client_seed"}],domProps:{value:e.client_seed},on:{input:function(t){t.target.composing||(e.client_seed=t.target.value)}}}),e._m(2),r("input",{directives:[{name:"model",rawName:"v-model",value:e.client_seed_md5,expression:"client_seed_md5"}],staticClass:"disabled",attrs:{readonly:""},domProps:{value:e.client_seed_md5},on:{input:function(t){t.target.composing||(e.client_seed_md5=t.target.value)}}}),r("div",{staticClass:"proof-link-wrapper"},[r("span",[e._v("CyberChef proof:")]),r("a",{attrs:{href:e.client_seed_md5_cyber_chef_link,target:"_blank"}},[e._v(e._s(e.client_seed_md5_cyber_chef_link))])]),r("h2",[e._v("Game Hash")]),e._m(3),r("input",{directives:[{name:"model",rawName:"v-model",value:e.game_hash,expression:"game_hash"}],staticClass:"disabled",attrs:{readonly:""},domProps:{value:e.game_hash},on:{input:function(t){t.target.composing||(e.game_hash=t.target.value)}}}),r("div",{staticClass:"proof-link-wrapper"},[r("span",[e._v("CyberChef Proof:")]),r("a",{attrs:{href:e.game_hash_cyber_chef_link,target:"_blank"}},[e._v(e._s(e.game_hash_cyber_chef_link))])]),r("h2",[e._v("To Integer")]),r("textarea",{staticClass:"disabled",attrs:{disabled:"",rows:"1"},domProps:{value:e.game_int_string}}),r("div",{staticClass:"proof-link-wrapper"},[r("span",[e._v("CyberChef Proof:")]),r("a",{attrs:{href:e.game_int_cyber_chef_link,target:"_blank"}},[e._v(e._s(e.game_int_cyber_chef_link))])]),r("h2",[e._v("Result")]),r("textarea",{staticClass:"disabled",attrs:{disabled:""},domProps:{value:e.game_result_formula}}),r("p",{staticClass:"result"},[e._v(e._s(e.game_result))]),r("div",{staticClass:"proof-link-wrapper"},[r("span",[e._v("Wolframalpha Proof:")]),r("a",{attrs:{href:e.game_result_wolframalpha,target:"_blank"}},[e._v(e._s(e.game_result_wolframalpha))])])])])])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-disclaimer"},[r("p",[e._v("⚠ It's an open source single page application. You can download the source code and use it offline. "),r("a",{attrs:{href:"https://github.com/interlude-exchange/provably-fair",target:"_blank"}},[e._v("https://github.com/interlude-exchange/provably-fair")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("span",[e._v("SHA2 Hash")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("span",[e._v("MD5")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("span",[e._v("SHA256 HMAC")])])}],i=(r("99af"),r("caad"),r("d3b7"),r("ac1f"),r("25f0"),r("3ca3"),r("841c"),r("ddb0"),r("2b3d"),r("6c27")),o=r("e762"),c=o.Base64,_=r("6821"),l=r("901e"),u={name:"App",data:function(){return{game_type:"dice_pro",server_secret:"052428a5f58009fc5a4f5a1150b06253",client_seed:"CYjXtXsyQBQz7xM5"}},computed:{server_hash:function(){return i.hex(this.server_secret)},server_hash_cyber_chef_link:function(){return"https://gchq.github.io/CyberChef/#recipe=SHA2('256',64,160)&input="+c.encodeURI(this.server_secret)},client_seed_md5:function(){return _(this.client_seed)},client_seed_md5_cyber_chef_link:function(){return"https://gchq.github.io/CyberChef/#recipe=MD5()&input="+c.encodeURI(this.client_seed)},game_hash:function(){return i.hmac.update(this.server_secret,this.client_seed_md5)},game_hash_cyber_chef_link:function(){return"https://gchq.github.io/CyberChef/#recipe=HMAC(%7B'option':'UTF8','string':'"+this.server_secret+"'%7D,'SHA256')&input="+c.encodeURI(this.client_seed_md5)},game_int_string:function(){return new l(this.game_hash,16).toString(10)},game_int_cyber_chef_link:function(){return"https://gchq.github.io/CyberChef/#recipe=From_Base(16)&input="+c.encodeURI(this.game_hash)},int_min:function(){return"dice_3d"===this.game_type?5:0},int_max:function(){return"dice_3d"===this.game_type?56:9999},game_result:function(){var e=new l(this.game_hash,16);return parseInt(this.int_min+e.modulo(this.int_max-this.int_min+1).toNumber())},game_result_formula:function(){return"".concat(this.int_min," + (").concat(this.game_int_string," mod (").concat(this.int_max," - ").concat(this.int_min," + 1))")},game_result_wolframalpha:function(){return"https://www.wolframalpha.com/input/?i="+encodeURIComponent(this.game_result_formula)}},mounted:function(){var e=window.location.search.substring(1),t=new URLSearchParams(e),r=t.get("game_type");r&&["dice_pro","dice_3d"].includes(r)&&(this.game_type=r);var a=t.get("server_secret");a&&(this.server_secret=a);var n=t.get("client_seed");n&&(this.client_seed=n)}},p=u,h=(r("cf25"),r("2877")),d=Object(h["a"])(p,n,s,!1,null,null,null),f=d.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(f)}}).$mount("#app")},cf25:function(e,t,r){"use strict";r("fea6")},fea6:function(e,t,r){}});
//# sourceMappingURL=app.d6b40b7a.js.map