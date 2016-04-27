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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "html {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\nhr {\n  border-color: #555555; }\n\nh1 {\n  color: #B36666; }\n\n.reply {\n  background-color: #222222; }\n\n.reply_hl {\n  background-color: #333333; }\n\n.Form_bg {\n  color: #800000; }\n\n#postform_main {\n  background-color: #444444; }\n", ""]);

	// exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "body {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\ntd[bgColor=\"#F0E0D6\"], td[bgColor=\"#FFFFEE\"] {\n  background-color: #222222; }\n\ntd[bgColor=\"#eeaa88\"] {\n  color: #800000; }\n\ntd[bgColor=\"#DDDDEE\"] {\n  background-color: #453877; }\n\ntd[bgColor=\"#EEDDDD\"] {\n  background-color: #333333; }\n\nhr {\n  border-color: #555555; }\n\nfont[size=\"5\"] {\n  color: #B36666; }\n\ncenter form {\n  background-color: #444444; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	var DOMWatcher = (function () {
	    function DOMWatcher(parent) {
	        this.parent = parent;
	    }
	    DOMWatcher.prototype.onUpdate = function (onUpdateCallback) {
	        this.onUpdateCallback = onUpdateCallback;
	    };
	    DOMWatcher.prototype.onAddNode = function (onAddNodeCallback) {
	        this.onAddNodeCallback = onAddNodeCallback;
	    };
	    DOMWatcher.prototype.onRemoveNode = function (onRemoveNodeCallback) {
	        this.onRemoveNodeCallback = onRemoveNodeCallback;
	    };
	    DOMWatcher.prototype.start = function () {
	        var _this = this;
	        var mutationObserver = new MutationObserver(function (mutations, observer) {
	            if (_this.onUpdateCallback) {
	                _this.onUpdateCallback();
	            }
	            if (!_this.onAddNodeCallback && !_this.onRemoveNodeCallback) {
	                return;
	            }
	            mutations.forEach(function (mutation) {
	                // for all added nodes, bind the thumbnail to a button if exists
	                if (_this.onAddNodeCallback) {
	                    for (var i = 0; i < mutation.addedNodes.length; i++) {
	                        _this.onAddNodeCallback(mutation.addedNodes[i]);
	                    }
	                }
	                if (_this.onRemoveNodeCallback) {
	                    for (var i = 0; i < mutation.removedNodes.length; i++) {
	                        _this.onRemoveNodeCallback(mutation.removedNodes[i]);
	                    }
	                }
	            });
	        });
	        // attach a DOM watcher on the parent element
	        mutationObserver.observe(this.parent, {
	            childList: true,
	        });
	    };
	    return DOMWatcher;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = DOMWatcher;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(5);
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
	function getThumbnailSizeByStyle(img) {
	    'use strict';
	    var style = img.style;
	    return {
	        height: parseInt(style.height, 10),
	        width: parseInt(style.width, 10),
	    };
	}
	function enlargeThumbnailByStyle(img) {
	    'use strict';
	    img.setAttribute('style', 'max-width: 95%; float: none;');
	}
	function setThumbnailSizeByStyle(img, size) {
	    'use strict';
	    img.setAttribute('style', "width: " + size.width + "px; height: " + size.height + "px");
	}
	function getThumbnailSizeByAttribute(img) {
	    'use strict';
	    return {
	        height: img.height,
	        width: img.width,
	    };
	}
	function enlargeThumbnailByAttribute(img) {
	    'use strict';
	    img.setAttribute('style', 'max-width: 95%;');
	    img.removeAttribute('height');
	    img.removeAttribute('width');
	    img.removeAttribute('align');
	}
	function setThumbnailSizeByAttribute(img, size) {
	    'use strict';
	    img.removeAttribute('style');
	    img.width = size.width;
	    img.height = size.height;
	    img.align = 'left';
	}
	function extendConfig(oldConfig, newConfig) {
	    'use strict';
	    for (var key in newConfig) {
	        if (!oldConfig.hasOwnProperty(key)) {
	            console.log('extending', key);
	            oldConfig[key] = newConfig[key];
	        }
	    }
	}
	var defaultConfig = {
	    darkStyle: index_1.default.default,
	    enlargeThumbnail: enlargeThumbnailByStyle,
	    getCreateNewElement: getElementById.bind(undefined, 'postform_main'),
	    getQLinks: getElementsByClassName.bind(undefined, 'qlink'),
	    getReplies: getElementById.bind(undefined, 'threads'),
	    getThreads: getElementById.bind(undefined, 'threads'),
	    getThumbnailSize: getThumbnailSizeByStyle,
	    getThumbnails: getElementsByQuery.bind(undefined, '#threads img'),
	    isThread: /\?res=/,
	    match: /.*/,
	    quote: /^((?!page_num).)*#r[0-9]*/,
	    setThumbnailSize: setThumbnailSizeByStyle,
	};
	var configs = [
	    {
	        match: /http:\/\/.*\.mykomica\.org.*/,
	        quote: /.*#r[0-9]*/,
	    }, {
	        darkStyle: index_1.default.homu,
	        enlargeThumbnail: enlargeThumbnailByAttribute,
	        getCreateNewElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
	        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThreads: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThumbnailSize: getThumbnailSizeByAttribute,
	        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
	        match: /http:\/\/homu\.komica\.org.*/,
	        quote: /.*#r[0-9]*/,
	        setThumbnailSize: setThumbnailSizeByAttribute,
	    }, {
	        darkStyle: index_1.default.homu,
	        enlargeThumbnail: enlargeThumbnailByAttribute,
	        getCreateNewElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
	        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
	        getThumbnailSize: getThumbnailSizeByAttribute,
	        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
	        match: /http:\/\/pink\.komica\.org.*/,
	        quote: /.*#r[0-9]*/,
	        setThumbnailSize: setThumbnailSizeByAttribute,
	    },
	];
	function getConfigByURL(url) {
	    'use strict';
	    for (var i = 0; i < configs.length; i++) {
	        var config = configs[i];
	        if (config.match.test(url)) {
	            extendConfig(config, defaultConfig);
	            return config;
	        }
	    }
	    console.log('using default config');
	    return defaultConfig;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = getConfigByURL;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var def = __webpack_require__(1)[0][1];
	var homu = __webpack_require__(2)[0][1];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    default: def,
	    homu: homu,
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Ajax_1 = __webpack_require__(11);
	var config_1 = __webpack_require__(4);
	var DOMWatcher_1 = __webpack_require__(3);
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
	            clone.className += ' reply';
	            // remove the warn text
	            var toplevel = clone.children[0];
	            var children = toplevel.children;
	            var warnSpan = children[children.length - 2];
	            if (warnSpan.tagName.toLowerCase() === 'span') {
	                toplevel.removeChild(warnSpan);
	            }
	        }
	        clone.className += " " + floatClass;
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
	    }
	    quote.addEventListener('mouseout', removeElement);
	}
	// the threads cache
	var cache = {};
	// the locks of ajax call for thread document
	var getting = {};
	function bindReplyToQuote(anchor, doc, floatsParent, floatClass) {
	    'use strict';
	    if (floatsParent === void 0) { floatsParent = doc.body; }
	    // get all the quote element, a quote span may have multiple quote anchor points
	    var matched = anchor.href.match(/.*#r([0-9]*).*/);
	    if (!matched || matched.length < 2) {
	        return;
	    }
	    var targetID = matched[1];
	    anchor.addEventListener('mouseover', function () {
	        var _this = this;
	        var target = doc.getElementById("r" + targetID);
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
	function initializeQuotes(config, isThread, floatsParent) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(window.location.href); }
	    if (isThread === void 0) { isThread = config.isThread.test(window.location.href); }
	    if (floatsParent === void 0) { floatsParent = document.body; }
	    var style = __webpack_require__(8);
	    var css = style[0][1];
	    var locals = style.locals;
	    // append the style
	    var styleTag = document.createElement('style');
	    styleTag.innerHTML = css;
	    document.body.appendChild(styleTag);
	    var qlinks = config.getQLinks(document);
	    if (qlinks) {
	        for (var i = 0; i < qlinks.length; i++) {
	            var qlink = qlinks[i];
	            if (config.quote && config.quote.test(qlink.href)) {
	                bindReplyToQuote(qlink, document, floatsParent, locals.floatingReply);
	            }
	        }
	    }
	    // attach a DOM watcher on the main thread or thread list
	    var parent = isThread ? config.getReplies(document) : config.getThreads(document);
	    var domWatcher = new DOMWatcher_1.default(parent);
	    domWatcher.onAddNode(function (element) {
	        var reply = element;
	        var id = reply.id;
	        var clear = false;
	        // if the element is text node, return
	        if (!reply.setAttribute) {
	            return;
	        }
	        if (!id) {
	            reply.setAttribute('id', 'komica_helper_temp');
	            id = reply.id;
	            clear = true;
	        }
	        var newQlinks = document.querySelectorAll("#" + id + " .qlink");
	        if (newQlinks) {
	            for (var j = 0; j < newQlinks.length; j++) {
	                bindReplyToQuote(newQlinks[j], document, floatsParent, locals.floatingReply);
	            }
	        }
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
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "._1BwsIm2EUmmPCSaK5mocad {\n  position: fixed;\n  border: 2px solid black;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.9); }\n", ""]);

	// exports
	exports.locals = {
		"floatingReply": "_1BwsIm2EUmmPCSaK5mocad"
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var quote_1 = __webpack_require__(6);
	if (document.readyState !== 'loading') {
	    quote_1.default();
	}
	else {
	    document.addEventListener('DOMContentLoaded', quote_1.default.bind(undefined));
	}


/***/ },
/* 10 */,
/* 11 */
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


/***/ }
/******/ ]);