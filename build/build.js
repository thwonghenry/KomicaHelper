!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(12)},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,'body{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}td[bgColor="#F0E0D6"],td[bgColor="#FFFFEE"]{background-color:#222}td[bgColor="#eeaa88"]{color:maroon}td[bgColor="#DDDDEE"]{background-color:#453877}td[bgColor="#EEDDDD"]{background-color:#333}hr{border-color:#555}font[size="5"]{color:#b36666}center form{background-color:#444}',""])},function(e,t){"use strict";var n=function(){function e(e,t,n){this.method=e,this.url=t,this.xhr=new XMLHttpRequest,this.type=n}return e.prototype.start=function(){var e=this,t=new Promise(function(t,n){e.xhr.onload=function(){200===e.xhr.status?t(e.xhr.response):(console.log("reject",e.xhr.status),n())},e.xhr.onerror=n});return this.xhr.open(this.method,this.url,!0),this.type&&(this.xhr.responseType=this.type),this.xhr.send(),t},e}();t.Ajax=n},function(e,t,n){"use strict";function r(e,t,n,r,a,l){if(e)for(var s=0;s<e.length;s++){var u=e[s];n.quote&&n.quote.test(u.href)&&o.bindReplyToQuote(u,l,r,a)}i.resetButtons();for(var s=0;s<t.length;s++){var c=t[s];i.bindThumbnail(c,n,l)}}var o=n(5),i=n(6);t.injectThreadList=r},function(e,t,n){"use strict";function r(e,t,n,r){function o(){i&&r.removeChild(i),i=void 0,e.removeAttribute("hovering"),e.removeEventListener("mouseout",o)}var i;if(t){if(i=t.cloneNode(!0),i.removeAttribute("id"),/threadpost/.test(i.className)){i.className+=" reply";var a=i.children[0],l=a.children,s=l[l.length-2];"span"===s.tagName.toLowerCase()&&a.removeChild(s)}i.className+=" "+n;var u=e.getBoundingClientRect();i.setAttribute("style","left: "+Math.round(u.left+u.width)+"px; top: "+Math.round(u.top)+"px;"),r.appendChild(i)}e.addEventListener("mouseout",o)}function o(e,t,n,o){void 0===n&&(n=t.body);var s=e.href.match(/.*#r([0-9]*).*/);if(s&&!(s.length<2)){var u=s[1];e.addEventListener("mouseover",function(){var e=this,s=t.getElementById("r"+u);if(!s){var c=this.href.match(/.res=([0-9]*).*/);if(!c||2!==c.length)return;var d=c[1];if(a[d]||l[d])a[d]&&(s=a[d].getElementById("r"+u));else{l[d]=!0,this.setAttribute("style","cursor: wait;");var h=new i.Ajax("get",this.href,"document");h.start().then(function(t){a[d]=t,delete l[d],e.removeAttribute("style"),e.getAttribute("hovering")&&r(e,t.getElementById("r"+u),o,n)})}}r(this,s,o,n),this.setAttribute("hovering","true")})}}var i=n(3),a={},l={};t.bindReplyToQuote=o},function(e,t){"use strict";function n(e,t,n){var r=n.createElement("button");r.innerHTML="放大";var o=e.parentNode;o.parentNode.insertBefore(r,o.nextSibling);var a=!1,l=n.createElement("br"),s=t.getThumbnailSize(e);return s?(r.addEventListener("click",function(n){function i(){t.enlargeThumbnail(e),o.parentNode.insertBefore(l,r),r.innerHTML="縮小"}function u(){a=!0,r.removeAttribute("disabled"),e.removeEventListener("load",u),i()}n.preventDefault(),"放大"===r.innerHTML?a?i():(r.innerHTML="載入中...",r.setAttribute("disabled",""),e.addEventListener("load",u),e.src=o.href):"縮小"===r.innerHTML&&(t.setThumbnailSize(e,s),o.parentNode.removeChild(l),r.innerHTML="放大")}),void i.push(r)):void console.error("Error when getting the size of thumbnail")}function r(){i=[]}function o(e,t){e.addEventListener("click",function(e){e.preventDefault();for(var t=0;t<i.length;t++){var n=i[t];"放大"===n.innerHTML&&n.click()}}),t.addEventListener("click",function(e){e.preventDefault();for(var t=0;t<i.length;t++){var n=i[t];"縮小"===n.innerHTML&&n.click()}})}var i=[];t.bindThumbnail=n,t.resetButtons=r,t.bindThumbnailControlButtons=o},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"html{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}hr{border-color:#555}h1{color:#b36666}.reply{background-color:#222}.reply_hl{background-color:#333}.Form_bg{color:maroon}#postform_main{background-color:#444}",""])},function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"#_2eGUfheU43xPZ0YQ95zjtc{position:fixed;top:40%;right:0}#_2eGUfheU43xPZ0YQ95zjtc ._3EO74nCLLSW2JFmOtb8Vk3{pointer-events:none;cursor:default;color:gray}#_2eGUfheU43xPZ0YQ95zjtc ._2KvFhudmobGZ7LsfCJObhJ{color:BBB;text-decoration:none;border-bottom:2px solid silver;margin-bottom:6px}#_2eGUfheU43xPZ0YQ95zjtc ._2aT6ysW3C7hMv4kjzCeeBy{position:fixed;border:2px solid #000;box-shadow:2px 2px 2px 2px rgba(0,0,0,.9)}#_1B3e95UCgnr5h4Yz5MYMmL,#_1XTpEdNo2Eqvzxv94tQTSz,#_2oOS8NI8XGX9610LYKZePt,#_14vfGXL7114oxyLpxp5UoB,#u3PQhoWzmvTQ9Uy2fWpO_{text-decoration:none}._37_oXwTPzLfm7xIy15z_fR{padding-top:30px;position:fixed;width:100%;height:33%;overflow-y:scroll;bottom:0;background-color:#ffc}._1IQ-zN1OjjPN-FYkSJRD43{display:none}",""]),t.locals={komicaHelper:"_2eGUfheU43xPZ0YQ95zjtc",disabledAnchor:"_3EO74nCLLSW2JFmOtb8Vk3",threadButtons:"_2KvFhudmobGZ7LsfCJObhJ",floatingReply:"_2aT6ysW3C7hMv4kjzCeeBy",update:"_14vfGXL7114oxyLpxp5UoB",expand:"u3PQhoWzmvTQ9Uy2fWpO_",contract:"_1XTpEdNo2Eqvzxv94tQTSz",create:"_1B3e95UCgnr5h4Yz5MYMmL",night:"_2oOS8NI8XGX9610LYKZePt",createNew:"_37_oXwTPzLfm7xIy15z_fR",hidden:"_1IQ-zN1OjjPN-FYkSJRD43"}},function(e,t,n){var r=n(10);e.exports=function(e){var t,n=[],o=e||{};return function(e,o,i,a,l,s,u){n.push("<div"+r.attr("id",a,!0,!0)+'><a href="#"'+r.attr("id",u,!0,!0)+'>更新</a><br><a href="#"'+r.attr("id",i,!0,!0)+'>放大所有圖片</a><br><a href="#"'+r.attr("id",e,!0,!0)+'>縮小所有圖片</a><br><a href="#"'+r.attr("id",o,!0,!0)+">"+r.escape(null==(t=l)?"":t)+'</a><br><a href="#"'+r.attr("id",s,!0,!0)+">夜間模式</a></div>")}.call(this,"contract"in o?o.contract:"undefined"!=typeof contract?contract:void 0,"create"in o?o.create:"undefined"!=typeof create?create:void 0,"expand"in o?o.expand:"undefined"!=typeof expand?expand:void 0,"komicaHelper"in o?o.komicaHelper:"undefined"!=typeof komicaHelper?komicaHelper:void 0,"newString"in o?o.newString:"undefined"!=typeof newString?newString:void 0,"night"in o?o.night:"undefined"!=typeof night?night:void 0,"update"in o?o.update:"undefined"!=typeof update?update:void 0),n.join("")}},function(e,t,n){"use strict";function r(e){return null!=e&&""!==e}function o(e){return(Array.isArray(e)?e.map(o):e&&"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}):[e]).filter(r).join(" ")}function i(e){return l[e]||e}function a(e){var t=String(e).replace(s,i);return t===""+e?e:t}t.merge=function u(e,t){if(1===arguments.length){for(var n=e[0],o=1;o<e.length;o++)n=u(n,e[o]);return n}var i=e["class"],a=t["class"];(i||a)&&(i=i||[],a=a||[],Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),e["class"]=i.concat(a).filter(r));for(var l in t)"class"!=l&&(e[l]=t[l]);return e},t.joinClasses=o,t.cls=function(e,n){for(var r=[],i=0;i<e.length;i++)n&&n[i]?r.push(t.escape(o([e[i]]))):r.push(o(e[i]));var a=o(r);return a.length?' class="'+a+'"':""},t.style=function(e){return e&&"object"==typeof e?Object.keys(e).map(function(t){return t+":"+e[t]}).join(";"):e},t.attr=function(e,n,r,o){return"style"===e&&(n=t.style(n)),"boolean"==typeof n||null==n?n?" "+(o?e:e+'="'+e+'"'):"":0==e.indexOf("data")&&"string"!=typeof n?(-1!==JSON.stringify(n).indexOf("&")&&console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),n&&"function"==typeof n.toISOString&&console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0")," "+e+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'"):r?(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+t.escape(n)+'"'):(n&&"function"==typeof n.toISOString&&console.warn("Jade will stringify dates in ISO form after 2.0.0")," "+e+'="'+n+'"')},t.attrs=function(e,n){var r=[],i=Object.keys(e);if(i.length)for(var a=0;a<i.length;++a){var l=i[a],s=e[l];"class"==l?(s=o(s))&&r.push(" "+l+'="'+s+'"'):r.push(t.attr(l,s,!1,n))}return r.join("")};var l={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},s=/[&<>"]/g;t.escape=a,t.rethrow=function c(e,t,r,o){if(!(e instanceof Error))throw e;if(!("undefined"==typeof window&&t||o))throw e.message+=" on line "+r,e;try{o=o||n(16).readFileSync(t,"utf8")}catch(i){c(e,null,r)}var a=3,l=o.split("\n"),s=Math.max(r-a,0),u=Math.min(l.length,r+a),a=l.slice(s,u).map(function(e,t){var n=t+s+1;return(n==r?"  > ":"    ")+n+"| "+e}).join("\n");throw e.path=t,e.message=(t||"Jade")+":"+r+"\n"+a+"\n\n"+e.message,e},t.DebugItem=function(e,t){this.lineno=e,this.filename=t}},function(e,t,n){"use strict";function r(e,t){return t.getElementById(e)}function o(e,t){return t.getElementsByTagName(e)}function i(e,t,n){var r=o(e,n);return r?r[t]:void 0}function a(e,t){return t.querySelectorAll(e)}function l(e){var t=e.style;return{height:parseInt(t.height,10),width:parseInt(t.width,10)}}function s(e){e.setAttribute("style","max-width: 95%; float: none;")}function u(e,t){e.setAttribute("style","width: "+t.width+"px; height: "+t.height+"px")}function c(e){return{height:e.height,width:e.width}}function d(e){e.setAttribute("style","max-width: 95%;"),e.removeAttribute("height"),e.removeAttribute("width"),e.removeAttribute("align")}function h(e,t){e.removeAttribute("style"),e.width=t.width,e.height=t.height,e.align="left"}function f(e,t){for(var n in t)e.hasOwnProperty(n)||(console.log("extending",n),e[n]=t[n])}function g(e){for(var t=0;t<p.length;t++){var n=p[t];if(n.match.test(e))return f(n,m),n}return console.log("using default config"),m}var m={darkStyle:n(7)[0][1],enlargeThumbnail:s,getCreateNewElement:r.bind(void 0,"postform_main"),getReplies:r.bind(void 0,"threads"),getThreads:r.bind(void 0,"threads"),getThumbnailSize:l,getThumbnails:a.bind(void 0,"#threads img"),match:/.*/,quote:/^((?!page_num).)*#r[0-9]*/,setThumbnailSize:u},p=[{match:/http:\/\/.*\.mykomica\.org.*/,quote:/.*#r[0-9]*/},{darkStyle:n(2)[0][1],enlargeThumbnail:d,getCreateNewElement:i.bind(void 0,"form",0),getReplies:i.bind(void 0,"form",1),getThreads:i.bind(void 0,"form",1),getThumbnailSize:c,getThumbnails:o.bind(void 0,"img"),match:/http:\/\/homu\.komica\.org.*/,quote:/.*#r[0-9]*/,setThumbnailSize:h},{darkStyle:n(2)[0][1],enlargeThumbnail:d,getCreateNewElement:i.bind(void 0,"form",0),getReplies:i.bind(void 0,"form",1),getThreads:i.bind(void 0,"body",0),getThumbnailSize:c,getThumbnails:o.bind(void 0,"img"),match:/http:\/\/pink\.komica\.org.*/,quote:/.*#r[0-9]*/,setThumbnailSize:h}];t.getConfigByURL=g},function(e,t,n){"use strict";function r(e,t,n){var r=document.createElement(e);r.innerHTML=t,n.appendChild(r)}function o(){var e=window.location.href,t=/\?res=/.test(e),o=n(8),d=o[0][1],h=o.locals;h.newString=t?"新回覆":"新主題";var f=n(9)(h),g=document.body;r("style",d,g),r("div",f,g);var m=document.getElementById(h.komicaHelper),p=a.getConfigByURL(e),v=document.getElementById(h.update);i.bindUpdateButton(e,t,document,m,p,h,v);var b=document.getElementsByClassName("qlink"),y=p.getThumbnails(document);s.injectThreadList(b,y,p,m,h.floatingReply,document);var x=document.getElementById(h.expand),T=document.getElementById(h.contract);l.bindThumbnailControlButtons(x,T);var w=p.getCreateNewElement(document);if(w){w.className+=h.createNew+" "+h.hidden;var E=document.getElementById(h.create);u.bindPostButton(h.hidden,E,w)}var L=document.getElementById(h.night);c.bindNightModeButton(document,p.darkStyle,L)}var i=n(15),a=n(11),l=n(6),s=n(4),u=n(14),c=n(13);window.addEventListener("load",o)},function(e,t){"use strict";function n(e,t,n){var o=e.createElement("style");o.innerHTML=t,r&&e.body.appendChild(o),n.addEventListener("click",function(t){t.preventDefault(),r?e.body.removeChild(o):e.body.appendChild(o),r=!r,localStorage&&localStorage.setItem("night",r?"true":"false")})}var r=localStorage&&"true"===localStorage.getItem("night");t.bindNightModeButton=n},function(e,t){"use strict";function n(e,t,n){t.addEventListener("click",function(t){if(t.preventDefault(),r){var o=n.className.split(" ");o.splice(o.length-1,1),n.className=o.join(" ")}else n.className+=" "+e;r=!r})}var r=!0;t.bindPostButton=n},function(e,t,n){"use strict";function r(e,t,n,r,o,l){void 0===r&&(r=n.body);var s,u,c,d,h=new i.Ajax("get",e,"document"),f=t?o.getThreads:o.getReplies;return t?function(){return h.start().then(function(e){if(s=f(e),u=f(n),!s||!u)return void console.error("Error when getting the document of ajax result");c=s.children,d=u.children;for(var t=c.length-d.length,i=d[d.length-2],h=c.length-2,g=0;h>=0&&i.id!==c[h].id;h--,g++){u.insertBefore(c[h],d[d.length-1-g]);var m=n.querySelectorAll(c[h].id+" .qlink");if(m)for(var p=0;p<m.length;p++){var v=m[p];o.quote&&o.quote.test(v.href)&&a.bindReplyToQuote(v,n,r,l)}}return new Promise(function(e){e(t)})},function(){return console.log("rejected")})}:function(){return h.start().then(function(e){if(s=f(e),u=f(n),!s||!u)return void console.error("Error when getting the document of ajax result");c=s.children,d=u.children,u.innerHTML=s.innerHTML;for(var t=n.getElementsByClassName("qlink"),i=0;i<t.length;i++){var h=t[i];o.quote&&o.quote.test(h.href)&&a.bindReplyToQuote(h,n,r,l)}return new Promise(function(e){e(0)})},function(){return console.log("rejected")})}}function o(e,t,n,o,i,a,s){var u=r(e,t,n,o,i,a.floatingReply),c=0;s.addEventListener("click",function(e){var r=this;e.preventDefault(),/disabledAnchor/.test(this.className)?console.log("waiting"):(this.className+=" "+a.disabledAnchor,this.innerHTML="更新中..",c&&clearTimeout(c),u().then(function(e){var t=r.className.split(" ");return t.splice(t.length-1,1),r.className=t.join(" "),new Promise(function(t){e?(r.innerHTML="更新(+"+e+")",c=setTimeout(t,5e3)):t()})}).then(function(){if(!t){var e=n.getElementsByClassName("qlink"),s=i.getThumbnails(n);l.injectThreadList(e,s,i,o,a.floatingReply,n)}r.innerHTML="更新"}))})}var i=n(3),a=n(5),l=n(4);t.bindUpdateButton=o},function(e,t){}]);