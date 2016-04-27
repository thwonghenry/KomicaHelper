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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(4);
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
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var thumbnail_1 = __webpack_require__(7);
	if (document.readyState !== 'loading') {
	    thumbnail_1.default();
	}
	else {
	    document.addEventListener('DOMContentLoaded', thumbnail_1.default.bind(undefined));
	}


/***/ }
/******/ ]);