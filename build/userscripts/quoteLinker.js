// ==UserScript==
// @match http://2cat.or.tl/*/*
// @match http://2cat.twbbs.org/*
// @match http://*.mykomica.org/*
// @match http://komica.yucie.net/*
// @match http://gzone-anime.info/UnitedSites/*
// @match http://www.dk.idv.tw/*
// @match http://komica.dbfoxtw.me/*
// @match http://www.netorare.org/*
// @match http://2nyan.org/*
// @match http://ningen.dreamhosters.com/*
// @match http://miyarei.org/*
// @match http://www.oreimo.net/*
// @match http://moecorner.com/iboards/*
// @match http://*.nagatoyuki.org/*
// @match http://www.megurineluka.com/*
// @match http://komica.chiisana.net/*
// @match http://tehepero.org/komica/main/*
// @match http://www.kagaminelen.org/*
// @match http://komica.yucie.net/*
// @match http://www.notomamiko.net/*
// @match http://www.minorin.com/*
// @match http://www.hiranoaya.org/*
// @match http://fenrisulfr.org/*
// @match http://komica.peroneko.org/*
// @match http://www.wowhk.org/wowhk/*
// @match http://acgspace.wsfun.com/*
// @match http://strange-komica.com/*
// @match http://www.hetalia.us/*
// @match http://www.ayanamirei.org/*
// @match http://idolma.ster.tw/*
// @match http://www.karlsland.net/*
// @match http://vocaloid.orzhk.net/*
// @match http://www.gainax.org/*
// @match http://mamiko.keyfans.net/*
// @match http://kana.keyfans.net/*
// @match http://www.kagaminerin.org/*
// @match http://www.kagaminelen.org/*
// @match http://alica.dreamhosters.com/*
// @match http://p.komica.acg.club.tw/*
// @match http://*.boguspix.com/*
// @match http://kemono.wtako.net/*
// @match http://broken.goodluck.com.tw/*
// @match http://doujin2.acgmoe.com/*
// @match http://spg-web.sytes.net/PasteChart/*
// @match http://rthost.fam.cx/*
// @match http://emc4.dreamhosters.com/*
// @match http://futaba.anacel.com/*
// @match http://k2slime.2nyan.org/*
// @match http://homu.komica.org/*/*
// @match http://pink.komica.org/*/*
// @description A plugin that stick the quoted reply directly
// @name Komica Quotes Linker
// @namespace https://github.com/thwonghenry/KomicaHelper
// @version 0.1
// ==/UserScript==

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(5);
	// helper functions that used for binding
	function getElementById(id, doc) {
	    'use strict';
	    return doc.getElementById(id);
	}
	function getElementsByTagName(tag, doc) {
	    'use strict';
	    return doc.getElementsByTagName(tag);
	}
	function getElementByTagNameIndex(tag, index, doc) {
	    'use strict';
	    var tags = getElementsByTagName(tag, doc);
	    if (tags) {
	        return tags[index];
	    }
	    return undefined;
	}
	function getElementsByClassName(className, doc) {
	    'use strict';
	    return doc.getElementsByClassName(className);
	}
	function getElementsByQuery(query, doc) {
	    'use strict';
	    return doc.querySelectorAll(query);
	}
	function extendConfig(oldConfig, newConfig) {
	    'use strict';
	    for (var key in newConfig) {
	        if (!oldConfig.hasOwnProperty(key)) {
	            oldConfig[key] = newConfig[key];
	        }
	    }
	}
	// default config that is going to be extended
	var defaultConfig = {
	    darkStyle: index_1.default.default,
	    getPostformElement: getElementById.bind(undefined, 'postform_main'),
	    getQLinks: getElementsByClassName.bind(undefined, 'qlink'),
	    getReplies: getElementById.bind(undefined, 'threads'),
	    getThreads: getElementById.bind(undefined, 'threads'),
	    getThumbnails: getElementsByQuery.bind(undefined, '#threads img'),
	    isThread: /\?res=/,
	    match: /.*/,
	    quote: /^((?!page_num).)*#r[0-9]*/,
	};
	// config for different boards
	var configs = [
	    {
	        match: /http:\/\/.*\.mykomica\.org.*/,
	        quote: /.*#r[0-9]*/,
	    }, {
	        darkStyle: index_1.default.homu,
	        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
	        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThreads: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
	        match: /http:\/\/homu\.komica\.org.*/,
	        quote: /.*#r[0-9]*/,
	    }, {
	        darkStyle: index_1.default.homu,
	        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
	        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
	        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
	        match: /http:\/\/pink\.komica\.org.*/,
	        quote: /.*#r[0-9]*/,
	    },
	];
	// function that get config base on the url
	function getConfigByURL(url) {
	    'use strict';
	    for (var i = 0; i < configs.length; i++) {
	        var config = configs[i];
	        if (config.match.test(url)) {
	            extendConfig(config, defaultConfig);
	            return config;
	        }
	    }
	    return defaultConfig;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = getConfigByURL;


/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "html._1CH0lDxiMIShbCcxHUrmod {\n  background-color: #111;\n  color: silver; }\n  html._1CH0lDxiMIShbCcxHUrmod body {\n    background-color: #111;\n    color: silver; }\n  html._1CH0lDxiMIShbCcxHUrmod a:link {\n    color: #6699FF; }\n  html._1CH0lDxiMIShbCcxHUrmod a:hover {\n    color: #FF9966; }\n  html._1CH0lDxiMIShbCcxHUrmod a:visited {\n    color: #99FF66; }\n  html._1CH0lDxiMIShbCcxHUrmod hr {\n    border-color: #555555; }\n  html._1CH0lDxiMIShbCcxHUrmod h1 {\n    color: #B36666; }\n  html._1CH0lDxiMIShbCcxHUrmod .reply {\n    background-color: #222222; }\n  html._1CH0lDxiMIShbCcxHUrmod .reply_hl {\n    background-color: #333333; }\n  html._1CH0lDxiMIShbCcxHUrmod .Form_bg {\n    color: #800000; }\n  html._1CH0lDxiMIShbCcxHUrmod .page_switch .ul div.link a {\n    background-color: #222222; }\n  html._1CH0lDxiMIShbCcxHUrmod .pushpost {\n    background-color: #333333; }\n", ""]);

	// exports
	exports.locals = {
		"night_mode": "_1CH0lDxiMIShbCcxHUrmod"
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "html._3PcSwAIK8c5KIZxv3BleHH {\n  background-color: #111;\n  color: silver; }\n  html._3PcSwAIK8c5KIZxv3BleHH body {\n    background-color: #111;\n    color: silver; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:link {\n    color: #6699FF; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:hover {\n    color: #FF9966; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:visited {\n    color: #99FF66; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#F0E0D6\"], html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#FFFFEE\"] {\n    background-color: #222222; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#eeaa88\"] {\n    color: #800000; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#DDDDEE\"] {\n    background-color: #453877; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#EEDDDD\"] {\n    background-color: #333333; }\n  html._3PcSwAIK8c5KIZxv3BleHH hr {\n    border-color: #555555; }\n  html._3PcSwAIK8c5KIZxv3BleHH font[size=\"5\"] {\n    color: #B36666; }\n", ""]);

	// exports
	exports.locals = {
		"night_mode": "_3PcSwAIK8c5KIZxv3BleHH"
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var def = __webpack_require__(3);
	var homu = __webpack_require__(4);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    default: def,
	    homu: homu,
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var Ajax = (function () {
	    function Ajax(method, url, type) {
	        this.method = method;
	        this.url = url;
	        this.xhr = new XMLHttpRequest();
	        this.type = type;
	    }
	    Ajax.prototype.start = function () {
	        var _this = this;
	        var onLoad = new Promise(function (resolve, reject) {
	            _this.xhr.onload = function () {
	                if (_this.xhr.status === 200) {
	                    resolve(_this.xhr.response);
	                }
	                else {
	                    console.log('reject', _this.xhr.status);
	                    reject();
	                }
	            };
	            _this.xhr.onerror = reject;
	        });
	        this.xhr.open(this.method, this.url, true);
	        if (this.type) {
	            this.xhr.responseType = this.type;
	        }
	        this.xhr.send();
	        return onLoad;
	    };
	    return Ajax;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Ajax;


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var EventEmitter_1 = __webpack_require__(13);
	var DOMWatcher = (function (_super) {
	    __extends(DOMWatcher, _super);
	    function DOMWatcher(parent) {
	        _super.call(this);
	        this.parent = parent;
	    }
	    // install the observer
	    DOMWatcher.prototype.start = function () {
	        var _this = this;
	        this.observer = new MutationObserver(function (mutations, observer) {
	            if (_this.hasSubscriber('update')) {
	                _this.emit('update');
	            }
	            // only continue if both event callback exists
	            if (!_this.hasSubscriber('addnode') && !_this.hasSubscriber('removenode')) {
	                return;
	            }
	            mutations.forEach(function (mutation) {
	                // for each event type, trigger the callback
	                if (_this.hasSubscriber('addnode')) {
	                    for (var i = 0; i < mutation.addedNodes.length; i++) {
	                        _this.emit('addnode', mutation.addedNodes[i]);
	                    }
	                }
	                if (_this.hasSubscriber('removenode')) {
	                    for (var i = 0; i < mutation.removedNodes.length; i++) {
	                        _this.emit('removenode', mutation.removedNodes[i]);
	                    }
	                }
	            });
	        });
	        // attach a DOM watcher on the parent element
	        this.observer.observe(this.parent, {
	            childList: true,
	        });
	    };
	    DOMWatcher.prototype.stop = function () {
	        if (this.observer) {
	            this.observer.disconnect();
	        }
	        delete this.observer;
	    };
	    return DOMWatcher;
	}(EventEmitter_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DOMWatcher;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	var EventEmitter = (function () {
	    function EventEmitter() {
	        this.subscribers = {};
	    }
	    EventEmitter.prototype.on = function (topic, callback) {
	        if (!(topic in this.subscribers)) {
	            this.subscribers[topic] = [callback];
	        }
	        else {
	            this.subscribers[topic].push(callback);
	        }
	    };
	    EventEmitter.prototype.off = function (topic, callback) {
	        if (topic in this.subscribers) {
	            var index = this.subscribers[topic].indexOf(callback);
	            if (index > -1) {
	                this.subscribers[topic].splice(index, 1);
	            }
	        }
	    };
	    EventEmitter.prototype.emit = function (topic) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        if (topic in this.subscribers) {
	            this.subscribers[topic].forEach(function (callback) { return callback.apply(void 0, args); });
	        }
	    };
	    EventEmitter.prototype.hasSubscriber = function (eventType) {
	        return this.subscribers[eventType] && this.subscribers[eventType].length > 0;
	    };
	    return EventEmitter;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EventEmitter;


/***/ },
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Ajax_1 = __webpack_require__(6);
	var config_1 = __webpack_require__(1);
	var DOMWatcher_1 = __webpack_require__(12);
	var url = window.location.href;
	var config = config_1.default(url);
	var isThread = config.isThread.test(url);
	// a function that stick the reply element near the quote
	function stickReply(quote, reply, floatClass, floatsParent) {
	    'use strict';
	    var clone;
	    if (reply) {
	        // clone the reply element, prevent duplicate ids and add float class
	        clone = reply.cloneNode(true);
	        clone.removeAttribute('id');
	        // if the reply is the post, add the reply class
	        if (/threadpost/.test(clone.className)) {
	            clone.classList.add('reply');
	            // remove the warn text
	            var toplevel = clone.children[0];
	            var children = toplevel.children;
	            var warnSpan = children[children.length - 2];
	            if (warnSpan.tagName.toLowerCase() === 'span') {
	                toplevel.removeChild(warnSpan);
	            }
	        }
	        clone.classList.add(floatClass);
	        // position it near the reply element
	        var rect = quote.getBoundingClientRect();
	        clone.setAttribute('style', "left: " + Math.round(rect.left + rect.width) + "px; top: " + Math.round(rect.top) + "px;");
	        floatsParent.appendChild(clone);
	    }
	    // bind the mouseout event that destroy the clone element
	    // if clone is undefined, still need it to remove "hovering" attribute
	    function removeElement() {
	        if (clone) {
	            floatsParent.removeChild(clone);
	        }
	        clone = undefined;
	        quote.removeAttribute('hovering');
	        quote.removeEventListener('mouseout', removeElement);
	        document.removeEventListener('scroll', removeElement);
	    }
	    quote.addEventListener('mouseout', removeElement);
	    document.addEventListener('scroll', removeElement);
	}
	// the threads cache
	var cache = {};
	// the locks of ajax call for thread document
	var getting = {};
	function bindReplyToQuote(anchor, floatsParent, floatClass) {
	    'use strict';
	    if (floatsParent === void 0) { floatsParent = document.body; }
	    // get all the quote element, a quote span may have multiple quote anchor points
	    var matched = anchor.href.match(/.*#r([0-9]*).*/);
	    if (!matched || matched.length < 2) {
	        return;
	    }
	    var targetID = matched[1];
	    anchor.addEventListener('mouseover', function () {
	        var _this = this;
	        var target = document.getElementById("r" + targetID);
	        if (!target) {
	            // if the reply is hide inside the thread
	            // get the thread ID
	            var threadIDmatch = this.href.match(/.res=([0-9]*).*/);
	            if (!threadIDmatch || threadIDmatch.length !== 2) {
	                return;
	            }
	            var threadID_1 = threadIDmatch[1];
	            // check if the thread is cached and the target is in the cache
	            if (!cache[threadID_1] && !getting[threadID_1]) {
	                // lock the ajax attempt
	                getting[threadID_1] = true;
	                // set the cursor pointing this quote to loading animation
	                this.setAttribute('style', 'cursor: wait;');
	                // start ajax loading the thread
	                var ajax = new Ajax_1.default('get', this.href, 'document');
	                ajax.start().then(function (newDoc) {
	                    cache[threadID_1] = newDoc;
	                    // unlock ajax attempt
	                    delete getting[threadID_1];
	                    // remove loading animation
	                    _this.removeAttribute('style');
	                    // if this quote is still hovered, stick the reply immediately
	                    if (_this.getAttribute('hovering')) {
	                        stickReply(_this, newDoc.getElementById('r' + targetID), floatClass, floatsParent);
	                    }
	                });
	            }
	            else if (cache[threadID_1]) {
	                target = cache[threadID_1].getElementById("r" + targetID);
	            }
	        }
	        // stick the quoted reply near the quote
	        stickReply(this, target, floatClass, floatsParent);
	        // set custom hovering attribute for after ajax loading
	        this.setAttribute('hovering', 'true');
	    });
	}
	exports.bindReplyToQuote = bindReplyToQuote;
	function initializeQuotes(floatsParent) {
	    'use strict';
	    if (floatsParent === void 0) { floatsParent = document.body; }
	    // import the css
	    var style = __webpack_require__(22);
	    var css = style[0][1];
	    var locals = style.locals;
	    // append the style
	    var styleTag = document.createElement('style');
	    styleTag.innerHTML = css;
	    document.body.appendChild(styleTag);
	    // bind all the quotes to stick reply event
	    var qlinks = config.getQLinks(document);
	    if (qlinks) {
	        for (var i = 0; i < qlinks.length; i++) {
	            var qlink = qlinks[i];
	            if (config.quote && config.quote.test(qlink.href)) {
	                bindReplyToQuote(qlink, floatsParent, locals.floatingReply);
	            }
	        }
	    }
	    // attach a DOM watcher on the main thread or thread list
	    var parent = isThread ? config.getReplies(document) : config.getThreads(document);
	    var domWatcher = new DOMWatcher_1.default(parent);
	    // attach add node event callback
	    domWatcher.on('addnode', function (element) {
	        var reply = element;
	        var id = reply.id;
	        var clear = false;
	        // if the element is text node, return
	        if (!reply.setAttribute) {
	            return;
	        }
	        // if no id to query, add a temporary id to the node
	        if (!id) {
	            reply.setAttribute('id', 'komica_helper_temp');
	            id = reply.id;
	            clear = true;
	        }
	        // query the qoute element
	        var newQlinks = document.querySelectorAll("#" + id + " .resquote .qlink");
	        if (newQlinks) {
	            for (var j = 0; j < newQlinks.length; j++) {
	                bindReplyToQuote(newQlinks[j], floatsParent, locals.floatingReply);
	            }
	        }
	        // if a temporary id is added, clear it at the end
	        if (clear) {
	            reply.removeAttribute('id');
	        }
	    });
	    domWatcher.start();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializeQuotes;
	;


/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "._1BwsIm2EUmmPCSaK5mocad {\n  position: fixed;\n  border: 2px solid black;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.9);\n  animation-duration: 0.25s;\n  animation-name: fadein; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n", ""]);

	// exports
	exports.locals = {
		"floatingReply": "_1BwsIm2EUmmPCSaK5mocad"
	};

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var quote_1 = __webpack_require__(15);
	if (document.readyState !== 'loading') {
	    quote_1.default();
	}
	else {
	    document.addEventListener('DOMContentLoaded', quote_1.default.bind(undefined));
	}


/***/ }
/******/ ]);