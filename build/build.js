!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(14)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'body{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}td[bgColor="#F0E0D6"],td[bgColor="#FFFFEE"]{background-color:#222}td[bgColor="#eeaa88"]{color:maroon}td[bgColor="#DDDDEE"]{background-color:#453877}td[bgColor="#EEDDDD"]{background-color:#333}hr{border-color:#555}font[size="5"]{color:#b36666}center form{background-color:#444}',""])},function(t,e,n){"use strict";var r=n(9),o=function(){function t(t,e,n){this.method=t,this.url=e,this.xhr=new XMLHttpRequest,this.type=n}return t.prototype.start=function(){var t=this,e=new r.Promise(function(e,n){t.xhr.onload=function(){200===t.xhr.status?e(t.xhr.response):(console.log("reject",t.xhr.status),n())},t.xhr.onerror=n});return this.xhr.open(this.method,this.url,!0),this.type&&(this.xhr.responseType=this.type),this.xhr.send(),e},t}();e.Ajax=o},function(t,e,n){"use strict";function r(t,e,n,r,a,s){if(t)for(var u=0;u<t.length;u++){var c=t[u];n.quote.test(c.href)&&o.bindReplyToQuote(c,s,r,a)}i.resetButtons();for(var u=0;u<e.length;u++){var l=e[u];i.bindThumbnail(l,n,s)}}var o=n(5),i=n(6);e.injectThreadList=r},function(t,e,n){"use strict";function r(t,e,n,r){function o(){i&&r.removeChild(i),i=void 0,t.removeAttribute("hovering"),t.removeEventListener("mouseout",o)}var i;if(e){if(i=e.cloneNode(!0),i.removeAttribute("id"),/threadpost/.test(i.className)){i.className+=" reply";var a=i.children[0],s=a.children,u=s[s.length-2];"span"===u.tagName.toLowerCase()&&a.removeChild(u)}i.className+=" "+n;var c=t.getBoundingClientRect();i.setAttribute("style","left: "+Math.round(c.left+c.width)+"px; top: "+Math.round(c.top)+"px;"),r.appendChild(i)}t.addEventListener("mouseout",o)}function o(t,e,n,o){void 0===n&&(n=e.body);var u=t.href.match(/.*#r([0-9]*).*/);if(u&&!(u.length<2)){var c=u[1];t.addEventListener("mouseover",function(){var t=this,u=e.getElementById("r"+c);if(!u){var l=this.href.match(/.res=([0-9]*).*/);if(!l||2!==l.length)return;var f=l[1];if(a[f]||s[f])a[f]&&(u=a[f].getElementById("r"+c));else{s[f]=!0,this.setAttribute("style","cursor: wait;");var d=new i.Ajax("get",this.href,"document");d.start().then(function(e){a[f]=e,delete s[f],t.removeAttribute("style"),t.getAttribute("hovering")&&r(t,e.getElementById("r"+c),o,n)})}}r(this,u,o,n),this.setAttribute("hovering","true")})}}var i=n(3),a={},s={};e.bindReplyToQuote=o},function(t,e){"use strict";function n(t,e,n){var r=n.createElement("button");r.innerHTML="放大";var o=t.parentNode;o.parentNode.insertBefore(r,o.nextSibling);var a=!1,s=n.createElement("br"),u=e.getThumbnailSize(t);r.addEventListener("click",function(n){function i(){e.enlargeThumbnail(t),o.parentNode.insertBefore(s,r),r.innerHTML="縮小"}function c(){a=!0,r.removeAttribute("disabled"),t.removeEventListener("load",c),i()}n.preventDefault(),"放大"===r.innerHTML?a?i():(r.innerHTML="載入中...",r.setAttribute("disabled",""),t.addEventListener("load",c),t.src=o.href):"縮小"===r.innerHTML&&(e.setThumbnailSize(t,u),o.parentNode.removeChild(s),r.innerHTML="放大")}),i.push(r)}function r(){i=[]}function o(t,e){t.addEventListener("click",function(t){t.preventDefault();for(var e=0;e<i.length;e++){var n=i[e];"放大"===n.innerHTML&&n.click()}}),e.addEventListener("click",function(t){t.preventDefault();for(var e=0;e<i.length;e++){var n=i[e];"縮小"===n.innerHTML&&n.click()}})}var i=[];e.bindThumbnail=n,e.resetButtons=r,e.bindThumbnailControlButtons=o},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"html{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}hr{border-color:#555}h1{color:#b36666}.reply{background-color:#222}.reply_hl{background-color:#333}.Form_bg{color:maroon}#postform_main{background-color:#444}",""])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"#_2eGUfheU43xPZ0YQ95zjtc{position:fixed;top:40%;right:0}#_2eGUfheU43xPZ0YQ95zjtc ._3EO74nCLLSW2JFmOtb8Vk3{pointer-events:none;cursor:default;color:gray}#_2eGUfheU43xPZ0YQ95zjtc ._2KvFhudmobGZ7LsfCJObhJ{color:BBB;text-decoration:none;border-bottom:2px solid silver;margin-bottom:6px}#_2eGUfheU43xPZ0YQ95zjtc ._2aT6ysW3C7hMv4kjzCeeBy{position:fixed;border:2px solid #000;box-shadow:2px 2px 2px 2px rgba(0,0,0,.9)}#_1B3e95UCgnr5h4Yz5MYMmL,#_1XTpEdNo2Eqvzxv94tQTSz,#_2oOS8NI8XGX9610LYKZePt,#_14vfGXL7114oxyLpxp5UoB,#u3PQhoWzmvTQ9Uy2fWpO_{text-decoration:none}._37_oXwTPzLfm7xIy15z_fR{padding-top:30px;position:fixed;width:100%;height:33%;overflow-y:scroll;bottom:0;background-color:#ffc}._1IQ-zN1OjjPN-FYkSJRD43{display:none}",""]),e.locals={komicaHelper:"_2eGUfheU43xPZ0YQ95zjtc",disabledAnchor:"_3EO74nCLLSW2JFmOtb8Vk3",threadButtons:"_2KvFhudmobGZ7LsfCJObhJ",floatingReply:"_2aT6ysW3C7hMv4kjzCeeBy",update:"_14vfGXL7114oxyLpxp5UoB",expand:"u3PQhoWzmvTQ9Uy2fWpO_",contract:"_1XTpEdNo2Eqvzxv94tQTSz",create:"_1B3e95UCgnr5h4Yz5MYMmL",night:"_2oOS8NI8XGX9610LYKZePt",createNew:"_37_oXwTPzLfm7xIy15z_fR",hidden:"_1IQ-zN1OjjPN-FYkSJRD43"}},function(t,e,n){var r;(function(t,o,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.1.2
	 */
(function(){"use strict";function a(t){return"function"==typeof t||"object"==typeof t&&null!==t}function s(t){return"function"==typeof t}function u(t){G=t}function c(t){K=t}function l(){return function(){t.nextTick(v)}}function f(){return function(){J(v)}}function d(){var t=0,e=new tt(v),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=v,function(){t.port2.postMessage(0)}}function p(){return function(){setTimeout(v,1)}}function v(){for(var t=0;Z>t;t+=2){var e=rt[t],n=rt[t+1];e(n),rt[t]=void 0,rt[t+1]=void 0}Z=0}function m(){try{var t=n(20);return J=t.runOnLoop||t.runOnContext,f()}catch(e){return p()}}function g(t,e){var n=this,r=n._state;if(r===st&&!t||r===ut&&!e)return this;var o=new this.constructor(y),i=n._result;if(r){var a=arguments[r-1];K(function(){z(r,o,a,i)})}else B(n,o,t,e);return o}function b(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(y);return L(n,t),n}function y(){}function w(){return new TypeError("You cannot resolve a promise with itself")}function _(){return new TypeError("A promises callback cannot return that same promise.")}function x(t){try{return t.then}catch(e){return ct.error=e,ct}}function T(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function E(t,e,n){K(function(t){var r=!1,o=T(n,e,function(n){r||(r=!0,e!==n?L(t,n):j(t,n))},function(e){r||(r=!0,C(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,C(t,o))},t)}function S(t,e){e._state===st?j(t,e._result):e._state===ut?C(t,e._result):B(e,void 0,function(e){L(t,e)},function(e){C(t,e)})}function k(t,e,n){e.constructor===t.constructor&&n===ot&&constructor.resolve===it?S(t,e):n===ct?C(t,ct.error):void 0===n?j(t,e):s(n)?E(t,e,n):j(t,e)}function L(t,e){t===e?C(t,w()):a(e)?k(t,e,x(e)):j(t,e)}function A(t){t._onerror&&t._onerror(t._result),N(t)}function j(t,e){t._state===at&&(t._result=e,t._state=st,0!==t._subscribers.length&&K(N,t))}function C(t,e){t._state===at&&(t._state=ut,t._result=e,K(A,t))}function B(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+st]=n,o[i+ut]=r,0===i&&t._state&&K(N,t)}function N(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,a=0;a<e.length;a+=3)r=e[a],o=e[a+n],r?z(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function O(t,e){try{return t(e)}catch(n){return lt.error=n,lt}}function z(t,e,n,r){var o,i,a,u,c=s(n);if(c){if(o=O(n,r),o===lt?(u=!0,i=o.error,o=null):a=!0,e===o)return void C(e,_())}else o=r,a=!0;e._state!==at||(c&&a?L(e,o):u?C(e,i):t===st?j(e,o):t===ut&&C(e,o))}function P(t,e){try{e(function(e){L(t,e)},function(e){C(t,e)})}catch(n){C(t,n)}}function I(t){return new mt(this,t).promise}function H(t){function e(t){L(o,t)}function n(t){C(o,t)}var r=this,o=new r(y);if(!W(t))return C(o,new TypeError("You must pass an array to race.")),o;for(var i=t.length,a=0;o._state===at&&i>a;a++)B(r.resolve(t[a]),void 0,e,n);return o}function U(t){var e=this,n=new e(y);return C(n,t),n}function R(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function D(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function q(t){this._id=pt++,this._state=void 0,this._result=void 0,this._subscribers=[],y!==t&&("function"!=typeof t&&R(),this instanceof q?P(this,t):D())}function Q(t,e){this._instanceConstructor=t,this.promise=new t(y),Array.isArray(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?j(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&j(this.promise,this._result))):C(this.promise,this._validationError())}function Y(){var t;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;n&&"[object Promise]"===Object.prototype.toString.call(n.resolve())&&!n.cast||(t.Promise=vt)}var F;F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var J,G,X,W=F,Z=0,K=function(t,e){rt[Z]=t,rt[Z+1]=e,Z+=2,2===Z&&(G?G(v):X())},V="undefined"!=typeof window?window:void 0,$=V||{},tt=$.MutationObserver||$.WebKitMutationObserver,et="undefined"!=typeof t&&"[object process]"==={}.toString.call(t),nt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3);X=et?l():tt?d():nt?h():void 0===V?m():p();var ot=g,it=b,at=void 0,st=1,ut=2,ct=new M,lt=new M,ft=I,dt=H,ht=U,pt=0,vt=q;q.all=ft,q.race=dt,q.resolve=it,q.reject=ht,q._setScheduler=u,q._setAsap=c,q._asap=K,q.prototype={constructor:q,then:ot,"catch":function(t){return this.then(null,t)}};var mt=Q;Q.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},Q.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===at&&t>n;n++)this._eachEntry(e[n],n)},Q.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===it){var o=x(t);if(o===ot&&t._state!==at)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===vt){var i=new n(y);k(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},Q.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===at&&(this._remaining--,t===ut?C(r,n):this._result[e]=n),0===this._remaining&&j(r,this._result)},Q.prototype._willSettleAt=function(t,e){var n=this;B(t,void 0,function(t){n._settledAt(st,e,t)},function(t){n._settledAt(ut,e,t)})};var gt=Y,bt={Promise:vt,polyfill:gt};n(18).amd?(r=function(){return bt}.call(e,n,e,i),!(void 0!==r&&(i.exports=r))):"undefined"!=typeof i&&i.exports?i.exports=bt:"undefined"!=typeof this&&(this.ES6Promise=bt),gt()}).call(this)}).call(e,n(12),function(){return this}(),n(19)(t))},function(t,e,n){var r=n(11);t.exports=function(t){var e,n=[],o=t||{};return function(t,o,i,a,s,u,c){n.push("<div"+r.attr("id",a,!0,!0)+'><a href="#"'+r.attr("id",c,!0,!0)+'>更新</a><br><a href="#"'+r.attr("id",i,!0,!0)+'>放大所有圖片</a><br><a href="#"'+r.attr("id",t,!0,!0)+'>縮小所有圖片</a><br><a href="#"'+r.attr("id",o,!0,!0)+">"+r.escape(null==(e=s)?"":e)+'</a><br><a href="#"'+r.attr("id",u,!0,!0)+">夜間模式</a></div>")}.call(this,"contract"in o?o.contract:"undefined"!=typeof contract?contract:void 0,"create"in o?o.create:"undefined"!=typeof create?create:void 0,"expand"in o?o.expand:"undefined"!=typeof expand?expand:void 0,"komicaHelper"in o?o.komicaHelper:"undefined"!=typeof komicaHelper?komicaHelper:void 0,"newString"in o?o.newString:"undefined"!=typeof newString?newString:void 0,"night"in o?o.night:"undefined"!=typeof night?night:void 0,"update"in o?o.update:"undefined"!=typeof update?update:void 0),n.join("")}},function(t,e,n){"use strict";function r(t){return null!=t&&""!==t}function o(t){return(Array.isArray(t)?t.map(o):t&&"object"==typeof t?Object.keys(t).filter(function(e){return t[e]}):[t]).filter(r).join(" ")}function i(t){return s[t]||t}function a(t){var e=String(t).replace(u,i);return e===""+t?t:e}e.merge=function c(t,e){if(1===arguments.length){for(var n=t[0],o=1;o<t.length;o++)n=c(n,t[o]);return n}var i=t["class"],a=e["class"];(i||a)&&(i=i||[],a=a||[],Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),t["class"]=i.concat(a).filter(r));for(var s in e)"class"!=s&&(t[s]=e[s]);return t},e.joinClasses=o,e.cls=function(t,n){for(var r=[],i=0;i<t.length;i++)n&&n[i]?r.push(e.escape(o([t[i]]))):r.push(o(t[i]));var a=o(r);return a.length?' class="'+a+'"':""},e.style=function(t){return t&&"object"==typeof t?Object.keys(t).map(function(e){return e+":"+t[e]}).join(";"):t},e.attr=function(t,n,r,o){return"style"===t&&(n=e.style(n)),"boolean"==typeof n||null==n?n?" "+(o?t:t+'="'+t+'"'):"":0==t.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+t+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+e.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+t+'="'+n+'"')},e.attrs=function(t,n){var r=[],i=Object.keys(t);if(i.length)for(var a=0;a<i.length;++a){var s=i[a],u=t[s];"class"==s?(u=o(u))&&r.push(" "+s+'="'+u+'"'):r.push(e.attr(s,u,!1,n))}return r.join("")};var s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},u=/[&<>"]/g;e.escape=a,e.rethrow=function l(t,e,r,o){if(!(t instanceof Error))throw t;if(!("undefined"==typeof window&&e||o))throw t.message+=" on line "+r,t;try{o=o||n(21).readFileSync(e,"utf8")}catch(i){l(t,null,r)}var a=3,s=o.split("\n"),u=Math.max(r-a,0),c=Math.min(s.length,r+a),a=s.slice(u,c).map(function(t,e){var n=e+u+1;return(n==r?"  > ":"    ")+n+"| "+t}).join("\n");throw t.path=e,t.message=(e||"Jade")+":"+r+"\n"+a+"\n\n"+t.message,t},e.DebugItem=function(t,e){this.lineno=t,this.filename=e}},function(t,e){function n(){c=!1,a.length?u=a.concat(u):l=-1,u.length&&r()}function r(){if(!c){var t=setTimeout(n);c=!0;for(var e=u.length;e;){for(a=u,u=[];++l<e;)a&&a[l].run();l=-1,e=u.length}a=null,c=!1,clearTimeout(t)}}function o(t,e){this.fun=t,this.array=e}function i(){}var a,s=t.exports={},u=[],c=!1,l=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new o(t,e)),1!==u.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=i,s.addListener=i,s.once=i,s.off=i,s.removeListener=i,s.removeAllListeners=i,s.emit=i,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(t,e,n){"use strict";function r(t,e){return e.getElementById(t)}function o(t,e){return e.getElementsByTagName(t)}function i(t,e,n){var r=o(t,n);return r?r[e]:void 0}function a(t,e){return e.querySelectorAll(t)}function s(t){var e=t.style;return{height:parseInt(e.height,10),width:parseInt(e.width,10)}}function u(t){t.setAttribute("style","maxwidth: 100%; float: none;")}function c(t,e){t.setAttribute("style","width: "+e.width+"px; height: "+e.height+"px")}function l(t){return{height:t.height,width:t.width}}function f(t){t.setAttribute("maxwidth","100%"),t.removeAttribute("height"),t.removeAttribute("width"),t.removeAttribute("align")}function d(t,e){t.width=e.width,t.height=e.height,t.align="left"}function h(t,e){for(var n in e)t.hasOwnProperty(n)||(console.log("extending",n),t[n]=e[n])}function p(t){for(var e=0;e<m.length;e++){var n=m[e];if(n.match.test(t))return h(n,v),n}return console.log("using default config"),v}var v={darkStyle:n(7)[0][1],enlargeThumbnail:u,getCreateNewElement:r.bind(void 0,"postform_main"),getReplies:r.bind(void 0,"threads"),getThreads:r.bind(void 0,"threads"),getThumbnailSize:s,getThumbnails:a.bind(void 0,"#threads img"),match:/.*/,quote:/^((?!page_num).)*#r[0-9]*/,setThumbnailSize:c},m=[{match:/http:\/\/.*\.mykomica\.org.*/,quote:/.*#r[0-9]*/},{darkStyle:n(2)[0][1],enlargeThumbnail:f,getCreateNewElement:i.bind(void 0,"form",0),getReplies:i.bind(void 0,"form",1),getThreads:i.bind(void 0,"form",1),getThumbnailSize:l,getThumbnails:o.bind(void 0,"img"),match:/http:\/\/homu\.komica\.org.*/,quote:/.*#r[0-9]*/,setThumbnailSize:d},{darkStyle:n(2)[0][1],enlargeThumbnail:f,getCreateNewElement:r.bind(void 0,"form",0),getReplies:i.bind(void 0,"form",1),getThreads:i.bind(void 0,"body",0),getThumbnailSize:l,getThumbnails:o.bind(void 0,"img"),match:/http:\/\/pink\.komica\.org.*/,quote:/.*#r[0-9]*/,setThumbnailSize:d}];e.getConfigByURL=p},function(t,e,n){"use strict";function r(t,e,n){var r=document.createElement(t);r.innerHTML=e,n.appendChild(r)}function o(){var t=window.location.href,e=/\?res=/.test(t),o=n(8),f=o[0][1],d=o.locals;d.newString=e?"新回覆":"新主題";var h=n(10)(d),p=document.body;r("style",f,p),r("div",h,p);var v=document.getElementById(d.komicaHelper),m=a.getConfigByURL(t),g=document.getElementById(d.update);i.bindUpdateButton(t,e,document,v,m,d,g);var b=document.getElementsByClassName("qlink"),y=m.getThumbnails(document);u.injectThreadList(b,y,m,v,d.floatingReply,document);var w=document.getElementById(d.expand),_=document.getElementById(d.contract);s.bindThumbnailControlButtons(w,_);var x=m.getCreateNewElement(document);x.className+=d.createNew+" "+d.hidden;var T=document.getElementById(d.create);c.bindPostButton(d.hidden,T,x);var E=document.getElementById(d.night);l.bindNightModeButton(document,m.darkStyle,E)}var i=n(17),a=n(13),s=n(6),u=n(4),c=n(16),l=n(15);window.addEventListener("load",o)},function(t,e){"use strict";function n(t,e,n){var o=t.createElement("style");o.innerHTML=e,r&&t.body.appendChild(o),n.addEventListener("click",function(e){e.preventDefault(),r?t.body.removeChild(o):t.body.appendChild(o),r=!r,localStorage&&localStorage.setItem("night",r?"true":"false")})}var r=localStorage&&"true"===localStorage.getItem("night");e.bindNightModeButton=n},function(t,e){"use strict";function n(t,e,n){e.addEventListener("click",function(e){if(e.preventDefault(),r){var o=n.className.split(" ");o.splice(o.length-1,1),n.className=o.join(" ")}else n.className+=" "+t;r=!r})}var r=!0;e.bindPostButton=n},function(t,e,n){"use strict";function r(t,e,n,r,o,s){function u(t){c=p(t),l=p(n),f=c.children,d=l.children}void 0===r&&(r=n.body);var c,l,f,d,h=new i.Ajax("get",t,"document"),p=e?o.getThreads:o.getReplies;return e?function(){return h.start().then(function(t){u(t);for(var e=f.length-d.length,i=d[d.length-2],c=f.length-2,h=0;c>=0&&i.id!==f[c].id;c--,h++){l.insertBefore(f[c],d[d.length-1-h]);var p=n.querySelectorAll(f[c].id+" .qlink");if(p)for(var v=0;v<p.length;v++){var m=p[v];o.quote.test(m.href)&&a.bindReplyToQuote(m,n,r,s)}}return new Promise(function(t){t(e)})},function(){return console.log("rejected")})}:function(){return h.start().then(function(t){u(t),l.innerHTML=c.innerHTML;for(var e=n.getElementsByClassName("qlink"),i=0;i<e.length;i++){var f=e[i];o.quote.test(f.href)&&a.bindReplyToQuote(f,n,r,s)}return new Promise(function(t){t(0)})},function(){return console.log("rejected")})}}function o(t,e,n,o,i,a,u){var c=r(t,e,n,o,i,a.floatingReply),l=0;u.addEventListener("click",function(t){var r=this;t.preventDefault(),/disabledAnchor/.test(this.className)?console.log("waiting"):(this.className+=" "+a.disabledAnchor,this.innerHTML="更新中..",l&&clearTimeout(l),c().then(function(t){var e=r.className.split(" ");return e.splice(e.length-1,1),r.className=e.join(" "),new Promise(function(e){t?(r.innerHTML="更新(+"+t+")",l=setTimeout(e,5e3)):e()})}).then(function(){if(!e){var t=n.getElementsByClassName("qlink"),u=i.getThumbnails(n);s.injectThreadList(t,u,i,o,a.floatingReply,n)}r.innerHTML="更新"}))})}var i=n(3),a=n(5),s=n(4);e.bindUpdateButton=o},function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},function(t,e){},function(t,e){}]);