(function(t){function e(e){for(var a,r,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-36e1afc3":"ad1c1d20","chunk-5e5f17c8":"1436a4ab","chunk-b5bb67e4":"38de4e56","chunk-5b20d51a":"caa4a294","chunk-6fe0a013":"d7572c71","chunk-706a12b6":"a8feb5e4"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-36e1afc3":1,"chunk-5e5f17c8":1,"chunk-b5bb67e4":1,"chunk-5b20d51a":1,"chunk-6fe0a013":1,"chunk-706a12b6":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-36e1afc3":"c144b8a1","chunk-5e5f17c8":"0aca18c1","chunk-b5bb67e4":"7ca3722a","chunk-5b20d51a":"ded19f7b","chunk-6fe0a013":"c5afb646","chunk-706a12b6":"ad381386"}[t]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"08b1":function(t,e,n){},"0ce1":function(t,e,n){"use strict";n("5c48")},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},4718:function(t,e,n){},4897:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},r=[],o={name:"Toast",props:{},data:function(){return{message:"",isShow:!1,timer:null}},methods:{show:function(t,e){var n=this;this.isShow=!0,this.message=t,setTimeout((function(){n.isShow=!1,n.message=""}),e)}}},i=o,c=(n("0ce1"),n("2877")),s=Object(c["a"])(i,a,r,!1,null,null,null);e["a"]=s.exports},"55fc":function(t,e,n){"use strict";n("4718")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tab-bar",[a("tab-bar-item",{attrs:{path:"/home"}},[a("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),a("tab-bar-item",{attrs:{path:"/category"}},[a("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),a("tab-bar-item",{attrs:{path:"/cart"}},[a("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),a("tab-bar-item",{attrs:{path:"/profile"}},[a("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),a("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),a("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},u=[],l={name:"TabBar"},f=l,p=(n("e104"),n("2877")),d=Object(p["a"])(f,s,u,!1,null,"1723465e",null),m=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},b=[],v=(n("c975"),n("ac1f"),n("5319"),{name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"red"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path).catch((function(t){}))}}}),g=v,y=(n("55fc"),Object(p["a"])(g,h,b,!1,null,"7993e938",null)),k=y.exports,x={name:"MainTabBar",components:{TabBar:m,TabBarItem:k}},_=x,w=Object(p["a"])(_,i,c,!1,null,"0707009a",null),O=w.exports,j={name:"app",components:{MainTabBar:O}},C=j,S=(n("034f"),Object(p["a"])(C,r,o,!1,null,null,null)),T=S.exports,E=(n("d3b7"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-b5bb67e4"),n.e("chunk-706a12b6")]).then(n.bind(null,"b3d7"))},$=function(){return Promise.all([n.e("chunk-b5bb67e4"),n.e("chunk-5b20d51a")]).then(n.bind(null,"bb51"))},A=function(){return n.e("chunk-36e1afc3").then(n.bind(null,"c228"))},B=function(){return n.e("chunk-5e5f17c8").then(n.bind(null,"3b42"))},L=function(){return Promise.all([n.e("chunk-b5bb67e4"),n.e("chunk-6fe0a013")]).then(n.bind(null,"6ab7"))};a["a"].use(E["a"]);var M=[{path:"",redirect:"/home"},{path:"/home",component:P},{path:"/category",component:$},{path:"/cart",component:A},{path:"/profile",component:B},{path:"/detail/:iid",component:L}],N=new E["a"]({routes:M,mode:"history",meta:{keepAlive:!0}}),D=N,I=n("b85c"),q=n("2f62");a["a"].use(q["a"]);var J=new q["a"].Store({state:{pop:0,new:0,sell:0,currentType:["pop","new","sell"],cartList:[],allCount:0},mutations:{addCount:function(t,e){e.count++},addToCart:function(t,e){t.cartList.push(e)}},actions:{addCart:function(t,e){return new Promise((function(n,a){t.state.allCount++;var r,o=null,i=Object(I["a"])(t.state.cartList);try{for(i.s();!(r=i.n()).done;){var c=r.value;c.iid===e.iid&&(o=c)}}catch(s){i.e(s)}finally{i.f()}o?(o.count++,n("当前商品+1")):(e.count=1,e.checked=!0,t.state.cartList.push(e),n("添加了新的商品"))}))}},modules:{}}),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},H=[],K=(n("1276"),new a["a"]({methods:{realPath:function(t){console.log(t);var e,n=this.$route.path.split(""),a="",r=0,o=Object(I["a"])(n);try{for(o.s();!(e=o.n()).done;){var i=e.value;if("/"!==i)a+=i;else if(r++,2===r)return a}}catch(c){o.e(c)}finally{o.f()}}}})),U=K,z=Object(p["a"])(U,F,H,!1,null,null,null),G=z.exports,Q=n("caf9"),R=n("4897"),V={install:function(t){var e=t.extend(R["a"]),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},W=V;a["a"].prototype.$bus=G,a["a"].use(W),a["a"].use(Q["a"],{loading:n("bc5e")}),a["a"].config.productionTip=!1,new a["a"]({router:D,store:J,render:function(t){return t(T)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"5c48":function(t,e,n){},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},e104:function(t,e,n){"use strict";n("08b1")},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.b9f303f8.js.map