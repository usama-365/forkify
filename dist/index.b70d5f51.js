function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},i={},o=t.parcelRequire3a11;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequire3a11=o),o.register("27Lyk",(function(t,n){var r,i;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>i),(e=>i=e));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("27Lyk").register(JSON.parse('{"f9fpV":"index.b70d5f51.js","eyyUD":"icons.c14567a0.svg"}'));var a,s,c={},u=function(e){return e&&e.Math==Math&&e};c=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")();var l,d;l=!(d=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var f,p={};f=!d((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h,m=Function.prototype.call;p=f?m.bind(m):function(){return m.apply(m,arguments)};var v={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!v.call({1:2},1);h=y?function(e){var t=g(this,e);return!!t&&t.enumerable}:v;var b;b=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var _,w,k,E,S={},O=Function.prototype,j=O.call,L=f&&O.bind.bind(j,j),F=(E=function(e){return f?L(e):function(){return j.apply(e,arguments)}})({}.toString),M=E("".slice);k=function(e){return M(F(e),8,-1)},w=function(e){if("Function"===k(e))return E(e)};var x=Object,$=w("".split);S=d((function(){return!x("z").propertyIsEnumerable(0)}))?function(e){return"String"==k(e)?$(e,""):x(e)}:x;var P,T;T=function(e){return null==e};var I=TypeError;P=function(e){if(T(e))throw I("Can't call method on "+e);return e},_=function(e){return S(P(e))};var H,q,N,R={},C={},A="object"==typeof document&&document.all,D=(N={all:A,IS_HTMLDDA:void 0===A&&void 0!==A}).all;C=N.IS_HTMLDDA?function(e){return"function"==typeof e||e===D}:function(e){return"function"==typeof e};var z=N.all;R=N.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:C(e)||e===z}:function(e){return"object"==typeof e?null!==e:C(e)};var U,W={},G=function(e){return C(e)?e:void 0};U=function(e,t){return arguments.length<2?G(c[e]):c[e]&&c[e][t]};var B={};B=w({}.isPrototypeOf);var J,V,Y,Q={};Q=U("navigator","userAgent")||"";var K,X,Z=c.process,ee=c.Deno,te=Z&&Z.versions||ee&&ee.version,ne=te&&te.v8;ne&&(X=(K=ne.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&Q&&(!(K=Q.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=Q.match(/Chrome\/(\d+)/))&&(X=+K[1]),Y=X,V=!!Object.getOwnPropertySymbols&&!d((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&Y&&Y<41})),J=V&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var re=Object;W=J?function(e){return"symbol"==typeof e}:function(e){var t=U("Symbol");return C(t)&&B(t.prototype,re(e))};var ie,oe,ae,se=String;ae=function(e){try{return se(e)}catch(e){return"Object"}};var ce=TypeError;oe=function(e){if(C(e))return e;throw ce(ae(e)+" is not a function")},ie=function(e,t){var n=e[t];return T(n)?void 0:oe(n)};var ue,le=TypeError;ue=function(e,t){var n,r;if("string"===t&&C(n=e.toString)&&!R(r=p(n,e)))return r;if(C(n=e.valueOf)&&!R(r=p(n,e)))return r;if("string"!==t&&C(n=e.toString)&&!R(r=p(n,e)))return r;throw le("Can't convert object to primitive value")};var de;var fe,pe={},he=Object.defineProperty;fe=function(e,t){try{he(c,e,{value:t,configurable:!0,writable:!0})}catch(n){c[e]=t}return t};var me=c["__core-js_shared__"]||fe("__core-js_shared__",{});pe=me,(de=function(e,t){return pe[e]||(pe[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.25.5",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"});var ve,ge={},ye=Object;ve=function(e){return ye(P(e))};var be=w({}.hasOwnProperty);ge=Object.hasOwn||function(e,t){return be(ve(e),t)};var _e,we=0,ke=Math.random(),Ee=w(1..toString);_e=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Ee(++we+ke,36)};var Se=de("wks"),Oe=c.Symbol,je=Oe&&Oe.for,Le=J?Oe:Oe&&Oe.withoutSetter||_e,Fe=TypeError,Me=function(e){if(!ge(Se,e)||!V&&"string"!=typeof Se[e]){var t="Symbol."+e;V&&ge(Oe,e)?Se[e]=Oe[e]:Se[e]=J&&je?je(t):Le(t)}return Se[e]}("toPrimitive");q=function(e,t){if(!R(e)||W(e))return e;var n,r=ie(e,Me);if(r){if(void 0===t&&(t="default"),n=p(r,e,t),!R(n)||W(n))return n;throw Fe("Can't convert object to primitive value")}return void 0===t&&(t="number"),ue(e,t)},H=function(e){var t=q(e,"string");return W(t)?t:t+""};var xe,$e,Pe=c.document,Te=R(Pe)&&R(Pe.createElement);$e=function(e){return Te?Pe.createElement(e):{}},xe=!l&&!d((function(){return 7!=Object.defineProperty($e("div"),"a",{get:function(){return 7}}).a}));var Ie,He,qe=Object.getOwnPropertyDescriptor,Ne=s=l?qe:function(e,t){if(e=_(e),t=H(t),xe)try{return qe(e,t)}catch(e){}if(ge(e,t))return b(!p(h,e,t),e[t])},Re={};He=l&&d((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var Ce,Ae=String,De=TypeError;Ce=function(e){if(R(e))return e;throw De(Ae(e)+" is not an object")};var ze=TypeError,Ue=Object.defineProperty,We=Object.getOwnPropertyDescriptor;Ie=l?He?function(e,t,n){if(Ce(e),t=H(t),Ce(n),"function"==typeof e&&"prototype"===t&&"value"in n&&"writable"in n&&!n.writable){var r=We(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1})}return Ue(e,t,n)}:Ue:function(e,t,n){if(Ce(e),t=H(t),Ce(n),xe)try{return Ue(e,t,n)}catch(e){}if("get"in n||"set"in n)throw ze("Accessors not supported");return"value"in n&&(e[t]=n.value),e},Re=l?function(e,t,n){return Ie(e,t,b(1,n))}:function(e,t,n){return e[t]=n,e};var Ge,Be,Je=Function.prototype,Ve=l&&Object.getOwnPropertyDescriptor,Ye=ge(Je,"name"),Qe={EXISTS:Ye,PROPER:Ye&&"something"===function(){}.name,CONFIGURABLE:Ye&&(!l||l&&Ve(Je,"name").configurable)}.CONFIGURABLE,Ke={},Xe=w(Function.toString);C(pe.inspectSource)||(pe.inspectSource=function(e){return Xe(e)}),Ke=pe.inspectSource;var Ze,et,tt=c.WeakMap;et=C(tt)&&/native code/.test(String(tt));var nt,rt=de("keys");nt=function(e){return rt[e]||(rt[e]=_e(e))};var it={};it={};var ot,at,st,ct=c.TypeError,ut=c.WeakMap;if(et||pe.state){var lt=pe.state||(pe.state=new ut);lt.get=lt.get,lt.has=lt.has,lt.set=lt.set,ot=function(e,t){if(lt.has(e))throw ct("Object already initialized");return t.facade=e,lt.set(e,t),t},at=function(e){return lt.get(e)||{}},st=function(e){return lt.has(e)}}else{var dt=nt("state");it[dt]=!0,ot=function(e,t){if(ge(e,dt))throw ct("Object already initialized");return t.facade=e,Re(e,dt,t),t},at=function(e){return ge(e,dt)?e[dt]:{}},st=function(e){return ge(e,dt)}}var ft=(Ze={set:ot,get:at,has:st,enforce:function(e){return st(e)?at(e):ot(e,{})},getterFor:function(e){return function(t){var n;if(!R(t)||(n=at(t)).type!==e)throw ct("Incompatible receiver, "+e+" required");return n}}}).enforce,pt=Ze.get,ht=Object.defineProperty,mt=l&&!d((function(){return 8!==ht((function(){}),"length",{value:8}).length})),vt=String(String).split("String"),gt=Be=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!ge(e,"name")||Qe&&e.name!==t)&&(l?ht(e,"name",{value:t,configurable:!0}):e.name=t),mt&&n&&ge(n,"arity")&&e.length!==n.arity&&ht(e,"length",{value:n.arity});try{n&&ge(n,"constructor")&&n.constructor?l&&ht(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=ft(e);return ge(r,"source")||(r.source=vt.join("string"==typeof t?t:"")),e};Function.prototype.toString=gt((function(){return C(this)&&pt(this).source||Ke(this)}),"toString"),Ge=function(e,t,n,r){r||(r={});var i=r.enumerable,o=void 0!==r.name?r.name:t;if(C(n)&&Be(n,o,r),r.global)i?e[t]=n:fe(t,n);else{try{r.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=n:Ie(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var yt,bt,_t,wt,kt,Et={},St={},Ot=Math.ceil,jt=Math.floor;St=Math.trunc||function(e){var t=+e;return(t>0?jt:Ot)(t)},kt=function(e){var t=+e;return t!=t||0===t?0:St(t)};var Lt=Math.max,Ft=Math.min;wt=function(e,t){var n=kt(e);return n<0?Lt(n+t,0):Ft(n,t)};var Mt,xt,$t=Math.min;xt=function(e){return e>0?$t(kt(e),9007199254740991):0},Mt=function(e){return xt(e.length)};var Pt=function(e){return function(t,n,r){var i,o=_(t),a=Mt(o),s=wt(r,a);if(e&&n!=n){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===n)return e||s||0;return!e&&-1}},Tt={includes:Pt(!0),indexOf:Pt(!1)}.indexOf,It=w([].push);_t=function(e,t){var n,r=_(e),i=0,o=[];for(n in r)!ge(it,n)&&ge(r,n)&&It(o,n);for(;t.length>i;)ge(r,n=t[i++])&&(~Tt(o,n)||It(o,n));return o};var Ht,qt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");bt=Object.getOwnPropertyNames||function(e){return _t(e,qt)},Ht=Object.getOwnPropertySymbols;var Nt=w([].concat);Et=U("Reflect","ownKeys")||function(e){var t=bt(Ce(e));return Ht?Nt(t,Ht(e)):t},yt=function(e,t,n){for(var r=Et(t),i=Ie,o=s,a=0;a<r.length;a++){var c=r[a];ge(e,c)||n&&ge(n,c)||i(e,c,o(t,c))}};var Rt={},Ct=/#|\.prototype\./,At=function(e,t){var n=zt[Dt(e)];return n==Wt||n!=Ut&&(C(t)?d(t):!!t)},Dt=At.normalize=function(e){return String(e).replace(Ct,".").toLowerCase()},zt=At.data={},Ut=At.NATIVE="N",Wt=At.POLYFILL="P";Rt=At,a=function(e,t){var n,r,i,o,a,s=e.target,u=e.global,l=e.stat;if(n=u?c:l?c[s]||fe(s,{}):(c[s]||{}).prototype)for(r in t){if(o=t[r],i=e.dontCallGetSet?(a=Ne(n,r))&&a.value:n[r],!Rt(u?r:s+(l?".":"#")+r,e.forced)&&void 0!==i){if(typeof o==typeof i)continue;yt(o,i)}(e.sham||i&&i.sham)&&Re(o,"sham",!0),Ge(n,r,o,e)}};var Gt,Bt={},Jt=Function.prototype,Vt=Jt.apply,Yt=Jt.call;Bt="object"==typeof Reflect&&Reflect.apply||(f?Yt.bind(Vt):function(){return Yt.apply(Vt,arguments)});var Qt,Kt=w(w.bind);Qt=function(e,t){return oe(e),void 0===t?e:f?Kt(e,t):function(){return e.apply(t,arguments)}};var Xt={};Xt=U("document","documentElement");var Zt={};Zt=w([].slice);var en,tn=TypeError;en=function(e,t){if(e<t)throw tn("Not enough arguments");return e};var nn;nn=/(?:ipad|iphone|ipod).*applewebkit/i.test(Q);var rn;rn="process"==k(c.process);var on,an,sn,cn,un=c.setImmediate,ln=c.clearImmediate,dn=c.process,fn=c.Dispatch,pn=c.Function,hn=c.MessageChannel,mn=c.String,vn=0,gn={};try{on=c.location}catch(e){}var yn=function(e){if(ge(gn,e)){var t=gn[e];delete gn[e],t()}},bn=function(e){return function(){yn(e)}},_n=function(e){yn(e.data)},wn=function(e){c.postMessage(mn(e),on.protocol+"//"+on.host)};un&&ln||(un=function(e){en(arguments.length,1);var t=C(e)?e:pn(e),n=Zt(arguments,1);return gn[++vn]=function(){Bt(t,void 0,n)},an(vn),vn},ln=function(e){delete gn[e]},rn?an=function(e){dn.nextTick(bn(e))}:fn&&fn.now?an=function(e){fn.now(bn(e))}:hn&&!nn?(cn=(sn=new hn).port2,sn.port1.onmessage=_n,an=Qt(cn.postMessage,cn)):c.addEventListener&&C(c.postMessage)&&!c.importScripts&&on&&"file:"!==on.protocol&&!d(wn)?(an=wn,c.addEventListener("message",_n,!1)):an="onreadystatechange"in $e("script")?function(e){Xt.appendChild($e("script")).onreadystatechange=function(){Xt.removeChild(this),yn(e)}}:function(e){setTimeout(bn(e),0)});var kn=(Gt={set:un,clear:ln}).clear;a({global:!0,bind:!0,enumerable:!0,forced:c.clearImmediate!==kn},{clearImmediate:kn});var En=Gt.set;a({global:!0,bind:!0,enumerable:!0,forced:c.setImmediate!==En},{setImmediate:En});var Sn=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new M(r||[]);return i(a,"_invoke",{value:O(e,n,s)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",m={};function v(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==n&&r.call(w,a)&&(b=w);var k=y.prototype=v.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,o,a,s){var c=d(e[i],e,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var o;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return o=o?o.then(i,i):i()}})}function O(e,t,n){var r=f;return function(i,o){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw o;return $()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var c=d(e,t,n);if("normal"===c.type){if(r=n.done?h:"suspendedYield",c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=h,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=d(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:$}}function $(){return{value:t,done:!0}}return g.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),u(k,c,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=x,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}({});try{regeneratorRuntime=Sn}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=Sn:Function("r","regeneratorRuntime = r")(Sn)}const On=function(e){return new Promise((function(t,n){setTimeout((function(){n(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},jn=async function(e){try{const t=await Promise.race([fetch(e),On(10)]),n=await t.json();if(!t.ok)throw new Error(`${t.status} ${n.message}`);return n}catch(e){throw e}},Ln=async function(e,t){try{const n=await Promise.race([fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),On(10)]),r=await n.json();if(!n.ok)throw new Error(`${n.status} ${r.message}`);return r}catch(e){throw e}},Fn={recipe:{},search:{query:"",page:1,results:[],resultsPerPage:10},bookmark:[]},Mn=function(e){let{data:{recipe:t}}=e;return{id:t.id,title:t.title,publisher:t.publisher,sourceURL:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},xn=function(e){Fn.search.page=e;const t=10*(e-1),n=10*e;return Fn.search.results.slice(t,n)},$n=function(){localStorage.setItem("bookmarks",JSON.stringify(Fn.bookmark))},Pn=function(e){Fn.bookmark.push(e),e.id===Fn.recipe.id&&(Fn.recipe.bookmarked=!0),$n()};!function(){const e=localStorage.getItem("bookmarks");e&&(Fn.bookmark=JSON.parse(e))}();const Tn=async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredients format! Please use the correct format");const[n,r,i]=t;return{quantity:n?+n:null,unit:r,description:i}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await Ln("https://forkify-api.herokuapp.com/api/v2/recipes/?key=c0586174-5683-4d13-9513-613b946a1e39",n);Fn.recipe=Mn(r),Pn(Fn.recipe)}catch(e){throw e}};var In;In=new URL(o("27Lyk").resolve("eyyUD"),import.meta.url).toString();class Hn{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=[...document.createRange().createContextualFragment(t).querySelectorAll("*")],r=[...this._parentElement.querySelectorAll("*")];n.forEach(((e,t)=>{const n=r[t];n.isEqualNode(e)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||[...e.attributes].forEach((e=>n.setAttribute(e.name,e.value)))}))}renderSpinner(){const e=`<div class="spinner">\n        <svg>\n          <use href="${n(In)}#icon-loader"></use>\n        </svg>\n      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){this._clear();const t=`<div class="error">\n            <div>\n                <svg>\n                    <use href="${n(In)}#icon-alert-triangle"></use>\n                </svg>\n            </div>\n            <p>${e}</p>\n        </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){this._clear();const t=`<div class="message">\n            <div>\n                <svg>\n                    <use href="${n(In)}#icon-smile"></use>\n                </svg>\n            </div>\n            <p>${e}</p>\n        </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentElement.innerHTML=""}}var qn,Nn,Rn,Cn=new class extends Hn{_parentElement=document.querySelector(".pagination");_generateMarkup(){const e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1!==this._data.page?this._data.page===e?this._markupLeftButton(e-1):this._markupLeftButton(this._data.page-1)+this._markupRightButton(this._data.page+1):e>1?this._markupRightButton(2):void 0}_markupLeftButton(e){return`<button class="btn--inline pagination__btn--prev" data-go-to="${e}">\n        <svg class="search__icon">\n          <use href="${n(In)}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${e}</span>\n      </button>`}_markupRightButton(e){return`<button class="btn--inline pagination__btn--next" data-go-to="${e}">\n        <span>Page ${e}</span>\n        <svg class="search__icon">\n          <use href="${n(In)}#icon-arrow-right"></use>\n        </svg>\n      </button>`}addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goTo;e(r)}))}};Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,i=num.split(" ");if(i[0]&&(n=i[0]),i[1]&&(r=i[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var o=n.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(Nn=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},Rn=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(Nn(this.denominator)){var e=Rn(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}Nn(this.numerator)&&(e=Rn(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return r.forEach((function(e){var t=i.indexOf(e);t>=0&&(n.push(e),i.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},qn=Fraction;var An=new class extends Hn{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try again.";_message="";addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--tiny");if(!n)return;const r=+n.dataset.updateTo;r>0&&e(r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`<figure class="recipe__fig">\n        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n        </figure>\n        \n        <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(In)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${n(In)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span>\n        \n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings-1}">\n              <svg>\n                <use href="${n(In)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings" data-update-to="${this._data.servings+1}">\n              <svg>\n                <use href="${n(In)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        \n        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n            <svg>\n              <use href="${n(In)}#icon-user"></use>\n            </svg>\n          </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${n(In)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n          </svg>\n        </button>\n        </div>\n        \n        <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n        </ul>\n        </div>\n        \n        <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.sourceURL}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${n(In)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n        </div>`}_generateMarkupIngredient(e){return`\n        <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n            <use href="${n(In)}#icon-check"></use>\n          </svg>\n          <div class="recipe__quantity">${e.quantity?new qn(e.quantity).toString():""}</div>\n          <div class="recipe__description">\n            <span class="recipe__unit">${e.unit}</span>\n            ${e.description}\n          </div>\n        </li>`}addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}};var Dn=new class extends Hn{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`<li class="preview">\n            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">\n                <figure class="preview__fig">\n                    <img src="${this._data.image}" alt="${this._data.title}" />\n                </figure >\n                <div class="preview__data">\n                    <h4 class="preview__title">${this._data.title}</h4>\n                    <p class="preview__publisher">${this._data.publisher}</p>\n                    <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n                        <svg>\n                            <use href="${n(In)}#icon-user"></use>\n                        </svg>\n                    </div>\n                </div>\n            </a >\n        </li > `}};var zn=new class extends Hn{_parentElement=document.querySelector(".results");_errorMessage="No recipe found for query";_message="";_generateMarkup(){return this._data.map((e=>Dn.render(e,!1))).join("")}};var Un=new class{_parentElement=document.querySelector(".search");getQuery(){return this._parentElement.querySelector(".search__field").value}addHandlerSearch(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault(),e()}))}clearInput(){this._parentElement.querySelector(".search__field").value=""}};var Wn=new class extends Hn{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it!";_message="";_generateMarkup(){return this._data.map((e=>Dn.render(e,!1))).join("")}addHandlerRender(e){window.addEventListener("load",e)}};var Gn=new class extends Hn{_parentElement=document.querySelector(".upload");_windowElement=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_message="Recipe was successfully uploaded";constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this))}toggleWindow(){this._overlay.classList.toggle("hidden"),this._windowElement.classList.toggle("hidden")}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Bn=async function(){try{const e=window.location.hash.slice(1);if(!e)return;An.renderSpinner(),zn.update(xn(Fn.search.page)),Wn.update(Fn.bookmark),await async function(e){try{const t=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=c0586174-5683-4d13-9513-613b946a1e39`);Fn.recipe=Mn(t),Fn.bookmark.some((t=>t.id===e))?Fn.recipe.bookmarked=!0:Fn.recipe.bookmarked=!1}catch(e){throw e}}(e);const{recipe:t}=Fn;An.render(t)}catch(e){An.renderError(e)}},Jn=async function(){try{const e=Un.getQuery();if(!e)return;Un.clearInput(),zn.renderSpinner(),await async function(e){try{Fn.search.query=e;const t=await jn(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${e}&key=c0586174-5683-4d13-9513-613b946a1e39`);Fn.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})))}catch(e){throw e}}(e),zn.render(xn(1)),Cn.render(Fn.search)}catch(e){}},Vn=function(e){zn.render(xn(e)),Cn.render(Fn.search)},Yn=function(e){var t;t=e,Fn.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*t/Fn.recipe.servings})),Fn.recipe.servings=t,An.update(Fn.recipe)},Qn=function(){Fn.recipe.bookmarked?function(e){const t=Fn.bookmark.findIndex((t=>t.id===e));Fn.bookmark.splice(t,1),e===Fn.recipe.id&&(Fn.recipe.bookmarked=!1),$n()}(Fn.recipe.id):Pn(Fn.recipe),An.update(Fn.recipe),Wn.render(Fn.bookmark)},Kn=function(){Wn.render(Fn.bookmark)},Xn=async function(e){try{Gn.renderSpinner(),await Tn(e),An.render(Fn.recipe),Gn.renderMessage(),Wn.render(Fn.bookmark),window.history.pushState(null,"",`#${Fn.recipe.id}`),setTimeout((function(){Gn.toggleWindow()}),2500)}catch(e){Gn.renderError(e.message)}};Wn.addHandlerRender(Kn),An.addHandlerRender(Bn),An.addHandlerUpdateServings(Yn),An.addHandlerAddBookmark(Qn),Un.addHandlerSearch(Jn),Cn.addHandlerClick(Vn),Gn.addHandlerUpload(Xn);
//# sourceMappingURL=index.b70d5f51.js.map
