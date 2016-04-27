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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(16);
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
	var config_1 = __webpack_require__(2);
	var DOMWatcher_1 = __webpack_require__(3);
	var buttons = [];
	function bindThumbnail(img, config, doc) {
	    'use strict';
	    // create the button element for image function
	    var button = doc.createElement('button');
	    button.innerHTML = '放大';
	    // insert the button alongside with the image
	    var anchor = img.parentNode;
	    anchor.parentNode.insertBefore(button, anchor.nextSibling);
	    // use for breaking line between the enlarged image and the reply
	    var br = doc.createElement('br');
	    // save the size of the thumbnail for restoring later
	    var size = config.getThumbnailSize(img);
	    if (!size) {
	        console.error('Error when getting the size of thumbnail');
	        return;
	    }
	    button.addEventListener('click', function (event) {
	        event.preventDefault();
	        // enlarge the image
	        if (button.innerHTML === '放大') {
	            img.src = anchor.href;
	            config.enlargeThumbnail(img);
	            anchor.parentNode.insertBefore(br, button);
	            button.innerHTML = '縮小';
	        }
	        else if (button.innerHTML === '縮小') {
	            // restore the image and button
	            config.setThumbnailSize(img, size);
	            anchor.parentNode.removeChild(br);
	            button.innerHTML = '放大';
	        }
	    });
	    buttons.push(button);
	}
	exports.bindThumbnail = bindThumbnail;
	function resetButtons() {
	    'use strict';
	    // reset the button list by setting empty array
	    console.log('reset');
	    buttons = [];
	}
	exports.resetButtons = resetButtons;
	function bindThumbnailControlButtons(expandButton, contractButton) {
	    'use strict';
	    // bind the button that expand all unexpanded thumbnails
	    expandButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        // click all the enlarge button
	        for (var i = 0; i < buttons.length; i++) {
	            var button = buttons[i];
	            if (button.innerHTML === '放大') {
	                button.click();
	            }
	        }
	    });
	    // bind the button that expand all expanded thumbnails
	    contractButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        // click all the contract button
	        for (var i = 0; i < buttons.length; i++) {
	            var button = buttons[i];
	            if (button.innerHTML === '縮小') {
	                button.click();
	            }
	        }
	    });
	}
	exports.bindThumbnailControlButtons = bindThumbnailControlButtons;
	function initializeThumbnails(config, isThread) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(window.location.href); }
	    if (isThread === void 0) { isThread = config.isThread.test(window.location.href); }
	    // bind all the thumbnails to a button
	    var imgs = config.getThumbnails(document);
	    for (var i = 0; i < imgs.length; i++) {
	        bindThumbnail(imgs[i], config, document);
	    }
	    // attach a DOM watcher on the main thread or thread list
	    var parent = isThread ? config.getReplies(document) : config.getThreads(document);
	    var domWatcher = new DOMWatcher_1.default(parent);
	    domWatcher.onAddNode(function (element) {
	        var reply = element;
	        var id = reply.id;
	        var clear = false;
	        // if the element is text node, continue;
	        if (!reply.setAttribute) {
	            return;
	        }
	        if (!id) {
	            reply.setAttribute('id', 'komica_helper_temp');
	            id = reply.id;
	            clear = true;
	        }
	        var img = document.querySelector("#" + id + " img");
	        if (img) {
	            bindThumbnail(img, config, document);
	        }
	        if (clear) {
	            reply.removeAttribute('id');
	        }
	    });
	    domWatcher.onUpdate(isThread ? undefined : resetButtons);
	    domWatcher.start();
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializeThumbnails;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(2);
	var thumbnail_1 = __webpack_require__(4);
	var postform_1 = __webpack_require__(13);
	var nightmode_1 = __webpack_require__(12);
	var thumbnail_2 = __webpack_require__(4);
	var quote_1 = __webpack_require__(14);
	var replyupdate_1 = __webpack_require__(15);
	var threadupdate_1 = __webpack_require__(17);
	// a function that add html as DOM node to element
	function addHTMLToElement(tag, html, element) {
	    'use strict';
	    var node = document.createElement(tag);
	    node.innerHTML = html;
	    element.appendChild(node);
	}
	function initialize() {
	    'use strict';
	    var url = window.location.href;
	    // import assests
	    var style = __webpack_require__(8);
	    var css = style[0][1];
	    var locals = style.locals;
	    // render the menu buttons with local scoped id
	    var body = document.body;
	    // load the config by url
	    var config = config_1.default(url);
	    var isThread = config.isThread.test(url);
	    locals.newString = isThread ? '新回覆' : '新主題';
	    var html = __webpack_require__(10)(locals);
	    // add the update button
	    addHTMLToElement('div', html, body);
	    // add the style from main.sass
	    addHTMLToElement('style', css, body);
	    // the menu buttons at the right
	    var menuButtons = document.getElementById(locals.komicaHelper);
	    // bind the update button event
	    var updateButton = document.getElementById(locals.update);
	    if (isThread) {
	        replyupdate_1.default(url, document, menuButtons, config, locals, updateButton);
	    }
	    else {
	        threadupdate_1.default(url, document, menuButtons, config, locals, updateButton);
	    }
	    thumbnail_2.default(config, isThread);
	    quote_1.default(config, isThread, menuButtons);
	    // bind all the thumbnail related menu buttons events
	    var expandButton = document.getElementById(locals.expand);
	    var contractButton = document.getElementById(locals.contract);
	    thumbnail_1.bindThumbnailControlButtons(expandButton, contractButton);
	    // bind the post button event
	    var createNewForm = config.getCreateNewElement(document);
	    if (createNewForm) {
	        createNewForm.className += locals.createNew + " " + locals.hidden;
	        var createButton = document.getElementById(locals.create);
	        postform_1.bindPostButton(locals.hidden, createButton, createNewForm);
	    }
	    // bind the night mode toggle event
	    var nightButton = document.getElementById(locals.night);
	    nightmode_1.bindNightModeButton(document, config.darkStyle, nightButton);
	}
	window.addEventListener('load', initialize);
	// let mutationObserver: MutationObserver = new MutationObserver((mutations: MutationRecord[], observer: MutationObserver) => {
	//     mutations.forEach((mutation: MutationRecord) => {
	//         if (mutation.removedNodes.length > 0) {
	//             console.log('hi');
	//             observer.disconnect();
	//         }
	//     });
	// });
	//
	// mutationObserver.observe(anchor.parentNode.parentNode, {
	//     childList: true,
	// });


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "html{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}hr{border-color:#555}h1{color:#b36666}.reply{background-color:#222}.reply_hl{background-color:#333}.Form_bg{color:maroon}#postform_main{background-color:#444}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "body{background-color:#111;color:silver}a:link{color:#69f}a:hover{color:#f96}a:visited{color:#9f6}td[bgColor=\"#F0E0D6\"],td[bgColor=\"#FFFFEE\"]{background-color:#222}td[bgColor=\"#eeaa88\"]{color:maroon}td[bgColor=\"#DDDDEE\"]{background-color:#453877}td[bgColor=\"#EEDDDD\"]{background-color:#333}hr{border-color:#555}font[size=\"5\"]{color:#b36666}center form{background-color:#444}", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "#_2eGUfheU43xPZ0YQ95zjtc{position:fixed;top:40%;right:0}#_2eGUfheU43xPZ0YQ95zjtc ._3EO74nCLLSW2JFmOtb8Vk3{pointer-events:none;cursor:default;color:gray}#_2eGUfheU43xPZ0YQ95zjtc ._2KvFhudmobGZ7LsfCJObhJ{color:BBB;text-decoration:none;border-bottom:2px solid silver;margin-bottom:6px}#_1B3e95UCgnr5h4Yz5MYMmL,#_1XTpEdNo2Eqvzxv94tQTSz,#_2oOS8NI8XGX9610LYKZePt,#_14vfGXL7114oxyLpxp5UoB,#u3PQhoWzmvTQ9Uy2fWpO_{text-decoration:none}._37_oXwTPzLfm7xIy15z_fR{padding-top:30px;position:fixed;width:100%;height:33%;overflow-y:scroll;bottom:0;background-color:#ffc}._1IQ-zN1OjjPN-FYkSJRD43{display:none}", ""]);

	// exports
	exports.locals = {
		"komicaHelper": "_2eGUfheU43xPZ0YQ95zjtc",
		"disabledAnchor": "_3EO74nCLLSW2JFmOtb8Vk3",
		"threadButtons": "_2KvFhudmobGZ7LsfCJObhJ",
		"update": "_14vfGXL7114oxyLpxp5UoB",
		"expand": "u3PQhoWzmvTQ9Uy2fWpO_",
		"contract": "_1XTpEdNo2Eqvzxv94tQTSz",
		"create": "_1B3e95UCgnr5h4Yz5MYMmL",
		"night": "_2oOS8NI8XGX9610LYKZePt",
		"createNew": "_37_oXwTPzLfm7xIy15z_fR",
		"hidden": "_1IQ-zN1OjjPN-FYkSJRD43"
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "._1Sft7RO8pKq7IlUlwvKnFx{position:fixed;border:2px solid #000;box-shadow:2px 2px 2px 2px rgba(0,0,0,.9)}", ""]);

	// exports
	exports.locals = {
		"floatingReply": "_1Sft7RO8pKq7IlUlwvKnFx"
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(11);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (contract, create, expand, komicaHelper, newString, night, update) {
	buf.push("<div" + (jade.attr("id", komicaHelper, true, true)) + "><a href=\"#\"" + (jade.attr("id", update, true, true)) + ">更新</a><br><a href=\"#\"" + (jade.attr("id", expand, true, true)) + ">放大所有圖片</a><br><a href=\"#\"" + (jade.attr("id", contract, true, true)) + ">縮小所有圖片</a><br><a href=\"#\"" + (jade.attr("id", create, true, true)) + ">" + (jade.escape((jade_interp = newString) == null ? '' : jade_interp)) + "</a><br><a href=\"#\"" + (jade.attr("id", night, true, true)) + ">夜間模式</a></div>");}.call(this,"contract" in locals_for_with?locals_for_with.contract:typeof contract!=="undefined"?contract:undefined,"create" in locals_for_with?locals_for_with.create:typeof create!=="undefined"?create:undefined,"expand" in locals_for_with?locals_for_with.expand:typeof expand!=="undefined"?expand:undefined,"komicaHelper" in locals_for_with?locals_for_with.komicaHelper:typeof komicaHelper!=="undefined"?komicaHelper:undefined,"newString" in locals_for_with?locals_for_with.newString:typeof newString!=="undefined"?newString:undefined,"night" in locals_for_with?locals_for_with.night:typeof night!=="undefined"?night:undefined,"update" in locals_for_with?locals_for_with.update:typeof update!=="undefined"?update:undefined));;return buf.join("");
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(18).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	// get the night mode state from local storage
	var isNight = localStorage && localStorage.getItem('night') === 'true';
	function bindNightModeButton(doc, darkStyle, nightButton) {
	    'use strict';
	    // create the night mode style element
	    var nightStyle = doc.createElement('style');
	    nightStyle.innerHTML = darkStyle;
	    // recover the night mode state
	    if (isNight) {
	        doc.body.appendChild(nightStyle);
	    }
	    nightButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        if (isNight) {
	            doc.body.removeChild(nightStyle);
	        }
	        else {
	            doc.body.appendChild(nightStyle);
	        }
	        // toggle the night mode state
	        isNight = !isNight;
	        if (localStorage) {
	            // update the state to the local storage
	            localStorage.setItem('night', isNight ? 'true' : 'false');
	        }
	    });
	}
	exports.bindNightModeButton = bindNightModeButton;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	// bind the new post button
	var isHiding = true;
	function bindPostButton(hiddenClass, createButton, createNewForm) {
	    'use strict';
	    createButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        if (isHiding) {
	            // remove the 'hidden' class, show the post form
	            var classNames = createNewForm.className.split(' ');
	            classNames.splice(classNames.length - 1, 1);
	            createNewForm.className = classNames.join(' ');
	        }
	        else {
	            // add the 'hidden' class to hide the form
	            createNewForm.className += " " + hiddenClass;
	        }
	        // toggle the state
	        isHiding = !isHiding;
	    });
	}
	exports.bindPostButton = bindPostButton;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Ajax_1 = __webpack_require__(1);
	var config_1 = __webpack_require__(2);
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
	    var style = __webpack_require__(9);
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// update function after clicking update button
	var Ajax_1 = __webpack_require__(1);
	function createUpdateCallback(url, doc, floatsParent, config, floatClass) {
	    'use strict';
	    if (floatsParent === void 0) { floatsParent = doc.body; }
	    // initialize ajax object
	    var ajax = new Ajax_1.default('get', url, 'document');
	    var newElements;
	    var oldElements;
	    var newChildren;
	    var oldChildren;
	    // get the method of obtaining replies
	    var getElements = config.getReplies;
	    return function () {
	        return ajax.start().then(function (newDoc) {
	            newElements = getElements(newDoc);
	            oldElements = getElements(doc);
	            if (!newElements || !oldElements) {
	                console.error('Error when getting the document of ajax result');
	                return;
	            }
	            newChildren = newElements.children;
	            oldChildren = oldElements.children;
	            var diff = newChildren.length - oldChildren.length;
	            // compare the difference on the number of threads reply
	            var lastReply = oldChildren[oldChildren.length - 2];
	            // insert the new replys from bottom of the new list to the bottom of the old list
	            for (var i = newChildren.length - 2, j = 0; i >= 0; i--, j++) {
	                if (lastReply.id === newChildren[i].id) {
	                    break;
	                }
	                else {
	                    oldElements.insertBefore(newChildren[i], oldChildren[oldChildren.length - 1 - j]);
	                }
	            }
	            // return the diff value
	            return new Promise(function (resolve) {
	                resolve(diff);
	            });
	        }, function () { return console.log('rejected'); });
	    };
	}
	function bindUpdateButton(url, doc, menuButtons, config, locals, updateButton) {
	    'use strict';
	    // create callback function
	    var clickCallback = createUpdateCallback(url, doc, menuButtons, config, locals.floatingReply);
	    // store the id of setTimeout in the click event below for later clearTimeout
	    var timeout = 0;
	    updateButton.addEventListener('click', function (event) {
	        var _this = this;
	        event.preventDefault();
	        // only invoke update function if it is not updating
	        if (!(/disabledAnchor/.test(this.className))) {
	            this.className += " " + locals.disabledAnchor;
	            this.innerHTML = '更新中..';
	            // remove any timeout that is started before
	            if (timeout) {
	                clearTimeout(timeout);
	            }
	            clickCallback().then(function (diff) {
	                // remove the "disabledAnchor" class
	                var classes = _this.className.split(' ');
	                classes.splice(classes.length - 1, 1);
	                _this.className = classes.join(' ');
	                return new Promise(function (resolve) {
	                    if (diff) {
	                        // if there are new thread, show the diff and reset after 5 seconds
	                        _this.innerHTML = "\u66F4\u65B0(+" + diff + ")";
	                        timeout = setTimeout(resolve, 5000);
	                    }
	                    else {
	                        // reset immediately
	                        resolve();
	                    }
	                });
	            }).then(function () {
	                // reset the button text
	                _this.innerHTML = '更新';
	            });
	        }
	        else {
	            console.log('waiting');
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = bindUpdateButton;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var def = __webpack_require__(6)[0][1];
	var homu = __webpack_require__(7)[0][1];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    default: def,
	    homu: homu,
	};


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// update function after clicking update button
	var Ajax_1 = __webpack_require__(1);
	function createUpdateCallback(url, doc, floatsParent, config, floatClass) {
	    'use strict';
	    if (floatsParent === void 0) { floatsParent = doc.body; }
	    // initialize ajax object
	    var ajax = new Ajax_1.default('get', url, 'document');
	    var newElements;
	    var oldElements;
	    var newChildren;
	    var oldChildren;
	    // get the method of obtaining threads
	    var getElements = config.getThreads;
	    return function () {
	        return ajax.start().then(function (newDoc) {
	            // create a new doc to plug in the ajax result
	            newElements = getElements(newDoc);
	            oldElements = getElements(doc);
	            if (!newElements || !oldElements) {
	                console.error('Error when getting the document of ajax result');
	                return;
	            }
	            newChildren = newElements.children;
	            oldChildren = oldElements.children;
	            // update the whole page
	            oldElements.innerHTML = newElements.innerHTML;
	            // return the diff value
	            return new Promise(function (resolve) {
	                resolve(0);
	            });
	        }, function () { return console.log('rejected'); });
	    };
	}
	function bindUpdateButton(url, doc, menuButtons, config, locals, updateButton) {
	    'use strict';
	    // create callback function
	    var clickCallback = createUpdateCallback(url, doc, menuButtons, config, locals.floatingReply);
	    // store the id of setTimeout in the click event below for later clearTimeout
	    var timeout = 0;
	    updateButton.addEventListener('click', function (event) {
	        var _this = this;
	        event.preventDefault();
	        // only invoke update function if it is not updating
	        if (!(/disabledAnchor/.test(this.className))) {
	            this.className += " " + locals.disabledAnchor;
	            this.innerHTML = '更新中..';
	            // remove any timeout that is started before
	            if (timeout) {
	                clearTimeout(timeout);
	            }
	            clickCallback().then(function (diff) {
	                // remove the "disabledAnchor" class
	                var classes = _this.className.split(' ');
	                classes.splice(classes.length - 1, 1);
	                _this.className = classes.join(' ');
	                return new Promise(function (resolve) {
	                    if (diff) {
	                        // if there are new thread, show the diff and reset after 5 seconds
	                        _this.innerHTML = "\u66F4\u65B0(+" + diff + ")";
	                        timeout = setTimeout(resolve, 5000);
	                    }
	                    else {
	                        // reset immediately
	                        resolve();
	                    }
	                });
	            }).then(function () {
	                // reset the button text
	                _this.innerHTML = '更新';
	            });
	        }
	        else {
	            console.log('waiting');
	        }
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = bindUpdateButton;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ }
/******/ ]);