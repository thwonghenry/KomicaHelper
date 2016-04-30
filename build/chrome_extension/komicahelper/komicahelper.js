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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var index_1 = __webpack_require__(20);
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
	// default config that is going to be extended
	var defaultConfig = {
	    darkStyle: index_1.default.default,
	    enlargeThumbnail: enlargeThumbnailByStyle,
	    getPostformElement: getElementById.bind(undefined, 'postform_main'),
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
	// config for different boards
	var configs = [
	    {
	        match: /http:\/\/.*\.mykomica\.org.*/,
	        quote: /.*#r[0-9]*/,
	    }, {
	        darkStyle: index_1.default.homu,
	        enlargeThumbnail: enlargeThumbnailByAttribute,
	        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
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
	        getPostformElement: getElementByTagNameIndex.bind(undefined, 'form', 0),
	        getReplies: getElementByTagNameIndex.bind(undefined, 'form', 1),
	        getThreads: getElementByTagNameIndex.bind(undefined, 'body', 0),
	        getThumbnailSize: getThumbnailSizeByAttribute,
	        getThumbnails: getElementsByTagName.bind(undefined, 'img'),
	        match: /http:\/\/pink\.komica\.org.*/,
	        quote: /.*#r[0-9]*/,
	        setThumbnailSize: setThumbnailSizeByAttribute,
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
	    console.log('using default config');
	    return defaultConfig;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = getConfigByURL;


/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(0);
	// get the night mode state from local storage
	var isNight = localStorage && localStorage.getItem('night') === 'true';
	var darkStyle;
	// bind the toggle button function
	function bindNightModeButton(doc, nightButton) {
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
	var url = window.location.href;
	// initialize this module by providing the dark style of this board
	function initializeNightMode(darkStyleString) {
	    'use strict';
	    if (darkStyleString === void 0) { darkStyleString = config_1.default(url).darkStyle; }
	    darkStyle = darkStyleString;
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializeNightMode;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(0);
	var isHiding = true;
	var locals;
	var postForm;
	// bind the post button function
	function bindPostButton(createButton) {
	    'use strict';
	    createButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        if (isHiding) {
	            // remove the 'hidden' class, show the post form
	            var classNames = postForm.className.split(' ');
	            classNames.splice(classNames.length - 1, 1);
	            postForm.className = classNames.join(' ');
	        }
	        else {
	            // add the 'hidden' class to hide the form
	            postForm.className += " " + locals.hidden;
	        }
	        // toggle the state
	        isHiding = !isHiding;
	    });
	}
	exports.bindPostButton = bindPostButton;
	function initializePostform(config) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(window.location.href); }
	    // import the css
	    var style = __webpack_require__(14);
	    var css = style[0][1];
	    locals = style.locals;
	    // append the style
	    var styleTag = document.createElement('style');
	    styleTag.innerHTML = css;
	    document.body.appendChild(styleTag);
	    postForm = config.getPostformElement(document);
	    if (postForm) {
	        postForm.className += locals.createNew + " " + locals.hidden;
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializePostform;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(0);
	var DOMWatcher_1 = __webpack_require__(6);
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
	var url = window.location.href;
	function initializeThumbnails(config, isThread) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(url); }
	    if (isThread === void 0) { isThread = config.isThread.test(url); }
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
	        // if no id to query, add a temporary id to the node
	        if (!id) {
	            reply.setAttribute('id', 'komica_helper_temp');
	            id = reply.id;
	            clear = true;
	        }
	        // query the thumbnail element
	        var img = document.querySelector("#" + id + " img");
	        if (img) {
	            bindThumbnail(img, config, document);
	        }
	        // if a temporary id is added, clear it at the end
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
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var DOMWatcher = (function () {
	    function DOMWatcher(parent) {
	        this.parent = parent;
	    }
	    // client attaches the event callback actively
	    DOMWatcher.prototype.onUpdate = function (onUpdateCallback) {
	        this.onUpdateCallback = onUpdateCallback;
	    };
	    DOMWatcher.prototype.onAddNode = function (onAddNodeCallback) {
	        this.onAddNodeCallback = onAddNodeCallback;
	    };
	    DOMWatcher.prototype.onRemoveNode = function (onRemoveNodeCallback) {
	        this.onRemoveNodeCallback = onRemoveNodeCallback;
	    };
	    // install the observer
	    DOMWatcher.prototype.start = function () {
	        var _this = this;
	        var mutationObserver = new MutationObserver(function (mutations, observer) {
	            if (_this.onUpdateCallback) {
	                _this.onUpdateCallback();
	            }
	            // only continue if both event callback exists
	            if (!_this.onAddNodeCallback && !_this.onRemoveNodeCallback) {
	                return;
	            }
	            mutations.forEach(function (mutation) {
	                // for each event type, trigger the callback
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(0);
	// a function that add html as DOM node to element
	function addHTMLToElement(tag, html, element) {
	    'use strict';
	    var node = document.createElement(tag);
	    node.innerHTML = html;
	    element.appendChild(node);
	}
	var url = window.location.href;
	// menu buttons
	var menu;
	var updateButton;
	var expandAllButton;
	var contractAllButton;
	var postformButton;
	var nightModeButton;
	var locals;
	// inject menu buttons
	function injectMenu(config, isThread) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(url); }
	    if (isThread === void 0) { isThread = config.isThread.test(url); }
	    // import assests
	    var style = __webpack_require__(13);
	    var css = style[0][1];
	    locals = style.locals;
	    menu = document.getElementById(locals.komicaHelper);
	    // only inject menu if it not exists
	    if (!menu) {
	        // render the menu buttons with local scoped id
	        var body = document.body;
	        locals.newString = isThread ? '新回覆' : '新主題';
	        var html = __webpack_require__(16)(locals);
	        // add the menu buttons
	        addHTMLToElement('div', html, body);
	        // add the buttons style from main.sass
	        addHTMLToElement('style', css, body);
	        menu = document.getElementById(locals.komicaHelper);
	    }
	    // retrieve the menu buttons
	    updateButton = document.getElementById(locals.update);
	    expandAllButton = document.getElementById(locals.expand);
	    contractAllButton = document.getElementById(locals.contract);
	    postformButton = document.getElementById(locals.postform);
	    nightModeButton = document.getElementById(locals.night);
	    return {
	        menu: menu, updateButton: updateButton, expandAllButton: expandAllButton, contractAllButton: contractAllButton, postformButton: postformButton, nightModeButton: nightModeButton, locals: locals,
	    };
	}
	exports.injectMenu = injectMenu;
	function enableButton(button) {
	    'use strict';
	    // remove the hiddenButton class
	    var classNames = button.className.split(' ');
	    var filtered = classNames.filter(function (className) { return className !== locals.hiddenButton; });
	    button.className = filtered.join(' ');
	}
	// enable the selected menu buttons
	function enableButtons(enables) {
	    'use strict';
	    if (enables === void 0) { enables = {
	        contractAllButton: true,
	        expandAllButton: true,
	        nightModeButton: true,
	        postformButton: true,
	        updateButton: true,
	    }; }
	    if (enables.updateButton) {
	        enableButton(updateButton);
	    }
	    if (enables.expandAllButton) {
	        enableButton(expandAllButton);
	    }
	    if (enables.contractAllButton) {
	        enableButton(contractAllButton);
	    }
	    if (enables.postformButton) {
	        enableButton(postformButton);
	    }
	    if (enables.nightModeButton) {
	        enableButton(nightModeButton);
	    }
	}
	exports.enableButtons = enableButtons;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Ajax_1 = __webpack_require__(5);
	var config_1 = __webpack_require__(0);
	var DOMWatcher_1 = __webpack_require__(6);
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
	        document.removeEventListener('scroll', removeElement);
	    }
	    quote.addEventListener('mouseout', removeElement);
	    document.addEventListener('scroll', removeElement);
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
	var url = window.location.href;
	function initializeQuotes(config, isThread, floatsParent) {
	    'use strict';
	    if (config === void 0) { config = config_1.default(url); }
	    if (isThread === void 0) { isThread = config.isThread.test(url); }
	    if (floatsParent === void 0) { floatsParent = document.body; }
	    // import the css
	    var style = __webpack_require__(15);
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
	                bindReplyToQuote(qlink, document, floatsParent, locals.floatingReply);
	            }
	        }
	    }
	    // attach a DOM watcher on the main thread or thread list
	    var parent = isThread ? config.getReplies(document) : config.getThreads(document);
	    var domWatcher = new DOMWatcher_1.default(parent);
	    // attach add node event callback
	    domWatcher.onAddNode(function (element) {
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
	                bindReplyToQuote(newQlinks[j], document, floatsParent, locals.floatingReply);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// update function after clicking update button
	var Ajax_1 = __webpack_require__(5);
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
	            this.innerHTML = '更新中..<br>';
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
	                        _this.innerHTML = "\u66F4\u65B0(+" + diff + ")<br>";
	                        timeout = setTimeout(resolve, 5000);
	                    }
	                    else {
	                        // reset immediately
	                        resolve();
	                    }
	                });
	            }).then(function () {
	                // reset the button text
	                _this.innerHTML = '更新<br>';
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// update function after clicking update button
	var Ajax_1 = __webpack_require__(5);
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
	            this.innerHTML = '更新中..<br>';
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
	                        _this.innerHTML = "\u66F4\u65B0(+" + diff + ")<br>";
	                        timeout = setTimeout(resolve, 5000);
	                    }
	                    else {
	                        // reset immediately
	                        resolve();
	                    }
	                });
	            }).then(function () {
	                // reset the button text
	                _this.innerHTML = '更新<br>';
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.i, "html {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\nhr {\n  border-color: #555555; }\n\nh1 {\n  color: #B36666; }\n\n.reply {\n  background-color: #222222; }\n\n.reply_hl {\n  background-color: #333333; }\n\n.Form_bg {\n  color: #800000; }\n\n#postform_main {\n  background-color: #444444; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.i, "body {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\ntd[bgColor=\"#F0E0D6\"], td[bgColor=\"#FFFFEE\"] {\n  background-color: #222222; }\n\ntd[bgColor=\"#eeaa88\"] {\n  color: #800000; }\n\ntd[bgColor=\"#DDDDEE\"] {\n  background-color: #453877; }\n\ntd[bgColor=\"#EEDDDD\"] {\n  background-color: #333333; }\n\nhr {\n  border-color: #555555; }\n\nfont[size=\"5\"] {\n  color: #B36666; }\n\ncenter form {\n  background-color: #444444; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.i, "#_2RKIDvBZ-c75YVkbPE3upo {\n  position: fixed;\n  top: 40%;\n  right: 0px; }\n  #_2RKIDvBZ-c75YVkbPE3upo ._239Ry-eeiEXoNyd-zFwfxk {\n    pointer-events: none;\n    cursor: default;\n    color: gray; }\n  #_2RKIDvBZ-c75YVkbPE3upo ._2HQO3DDkC7XaudXT9Urjzk {\n    color: BBB;\n    text-decoration: none;\n    border-bottom: 2px solid silver;\n    margin-bottom: 6px; }\n  #_2RKIDvBZ-c75YVkbPE3upo ._2bliZs_JXLzcFFvsue8m7Z {\n    display: none; }\n\n#pHE21zpZzvEWryqHMcJf1, #_2jg1ulKVXlhO3Zu-TeZl0r, #Gll4U5FrCKtIYknK7gnl, #_3sNxjFDihcy5wsRxcqmdTm, #_1abk3Qff5m62ALvruCfPMy {\n  text-decoration: none; }\n", ""]);

	// exports
	exports.locals = {
		"komicaHelper": "_2RKIDvBZ-c75YVkbPE3upo",
		"disabledAnchor": "_239Ry-eeiEXoNyd-zFwfxk",
		"threadButtons": "_2HQO3DDkC7XaudXT9Urjzk",
		"hiddenButton": "_2bliZs_JXLzcFFvsue8m7Z",
		"update": "pHE21zpZzvEWryqHMcJf1",
		"expand": "_2jg1ulKVXlhO3Zu-TeZl0r",
		"contract": "Gll4U5FrCKtIYknK7gnl",
		"postform": "_3sNxjFDihcy5wsRxcqmdTm",
		"night": "_1abk3Qff5m62ALvruCfPMy"
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.i, "._2tXlWf9rQklM_2v7bnrcDy {\n  padding-top: 30px;\n  position: fixed;\n  width: 100%;\n  height: 33%;\n  overflow-y: scroll;\n  bottom: 0px;\n  background-color: #FFFFCC; }\n\n._3Lgni0e7amfvqB2yrsBMK4 {\n  display: none; }\n", ""]);

	// exports
	exports.locals = {
		"createNew": "_2tXlWf9rQklM_2v7bnrcDy",
		"hidden": "_3Lgni0e7amfvqB2yrsBMK4"
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.i, "._1BwsIm2EUmmPCSaK5mocad {\n  position: fixed;\n  border: 2px solid black;\n  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.9); }\n", ""]);

	// exports
	exports.locals = {
		"floatingReply": "_1BwsIm2EUmmPCSaK5mocad"
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(17);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (contract, expand, hiddenButton, komicaHelper, newString, night, postform, update) {
	buf.push("<div" + (jade.attr("id", komicaHelper, true, true)) + "><a href=\"#\"" + (jade.attr("id", update, true, true)) + (jade.cls([hiddenButton], [true])) + ">更新<br></a><a href=\"#\"" + (jade.attr("id", expand, true, true)) + (jade.cls([hiddenButton], [true])) + ">放大所有圖片<br></a><a href=\"#\"" + (jade.attr("id", contract, true, true)) + (jade.cls([hiddenButton], [true])) + ">縮小所有圖片<br></a><a href=\"#\"" + (jade.attr("id", postform, true, true)) + (jade.cls([hiddenButton], [true])) + ">" + (jade.escape((jade_interp = newString) == null ? '' : jade_interp)) + "<br></a><a href=\"#\"" + (jade.attr("id", night, true, true)) + (jade.cls([hiddenButton], [true])) + ">夜間模式</a></div>");}.call(this,"contract" in locals_for_with?locals_for_with.contract:typeof contract!=="undefined"?contract:undefined,"expand" in locals_for_with?locals_for_with.expand:typeof expand!=="undefined"?expand:undefined,"hiddenButton" in locals_for_with?locals_for_with.hiddenButton:typeof hiddenButton!=="undefined"?hiddenButton:undefined,"komicaHelper" in locals_for_with?locals_for_with.komicaHelper:typeof komicaHelper!=="undefined"?komicaHelper:undefined,"newString" in locals_for_with?locals_for_with.newString:typeof newString!=="undefined"?newString:undefined,"night" in locals_for_with?locals_for_with.night:typeof night!=="undefined"?night:undefined,"postform" in locals_for_with?locals_for_with.postform:typeof postform!=="undefined"?postform:undefined,"update" in locals_for_with?locals_for_with.update:typeof update!=="undefined"?update:undefined));;return buf.join("");
	}

/***/ },
/* 17 */
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
	    str = str || __webpack_require__(21).readFileSync(filename, 'utf8')
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(0);
	var thumbnail_1 = __webpack_require__(4);
	var postform_1 = __webpack_require__(3);
	var nightmode_1 = __webpack_require__(2);
	var thumbnail_2 = __webpack_require__(4);
	var quote_1 = __webpack_require__(8);
	var postform_2 = __webpack_require__(3);
	var nightmode_2 = __webpack_require__(2);
	var replylistupdate_1 = __webpack_require__(9);
	var threadlistupdate_1 = __webpack_require__(10);
	var injectmenu_1 = __webpack_require__(7);
	// import {getSetting, setSetting} from '../src/settingsync';
	function initialize() {
	    'use strict';
	    var url = window.location.href;
	    var config = config_1.default(url);
	    var isThread = config.isThread.test(url);
	    // inject menu buttons
	    var menuButtons = injectmenu_1.injectMenu(config, isThread);
	    // enable all menu buttons
	    injectmenu_1.enableButtons();
	    // bind the update button base on the page type
	    if (isThread) {
	        replylistupdate_1.default(url, document, menuButtons.menu, config, menuButtons.locals, menuButtons.updateButton);
	    }
	    else {
	        threadlistupdate_1.default(url, document, menuButtons.menu, config, menuButtons.locals, menuButtons.updateButton);
	    }
	    // intialize thumbnails related function
	    thumbnail_2.default(config, isThread);
	    thumbnail_1.bindThumbnailControlButtons(menuButtons.expandAllButton, menuButtons.contractAllButton);
	    // initialize reply sticker events
	    quote_1.default(config, isThread, menuButtons.menu);
	    // bind the post button event
	    postform_2.default(config);
	    postform_1.bindPostButton(menuButtons.postformButton);
	    // bind the night mode toggle event
	    nightmode_2.default(config.darkStyle);
	    nightmode_1.bindNightModeButton(document, menuButtons.nightModeButton);
	    // setSetting({ komica_helper: '123' }, () => {
	    //     console.log('set done');
	    // });
	}
	// getSetting((setting: Object) => {
	//     console.log('setting');
	//     console.log(setting);
	// });
	if (document.readyState !== 'loading') {
	    initialize();
	}
	else {
	    document.addEventListener('DOMContentLoaded', initialize);
	}


/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var def = __webpack_require__(11)[0][1];
	var homu = __webpack_require__(12)[0][1];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    default: def,
	    homu: homu,
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ }
/******/ ]);