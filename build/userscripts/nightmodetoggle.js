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
// @description A plugin that add night mode style toggle
// @name Komica Night Mode Toggle
// @namespace https://github.com/thwonghenry/KomicaHelper
// @version 0.1
// @match http://web.komica.org/*
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
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
	    var style = __webpack_require__(6);
	    var css = style[0][1];
	    locals = style.locals;
	    menu = document.getElementById(locals.komicaHelper);
	    // only inject menu if it not exists
	    if (!menu) {
	        // render the menu buttons with local scoped id
	        var body = document.body;
	        locals.newString = isThread ? '新回覆' : '新主題';
	        var html = __webpack_require__(7)(locals);
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "html, body {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\nhr {\n  border-color: #555555; }\n\nh1 {\n  color: #B36666; }\n\n.reply {\n  background-color: #222222; }\n\n.reply_hl {\n  background-color: #333333; }\n\n.Form_bg {\n  color: #800000; }\n\n#postform_main {\n  background-color: #444444; }\n\n.page_switch .ul div.link a {\n  background-color: #222222; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "body {\n  background-color: #111;\n  color: silver; }\n\na:link {\n  color: #6699FF; }\n\na:hover {\n  color: #FF9966; }\n\na:visited {\n  color: #99FF66; }\n\ntd[bgColor=\"#F0E0D6\"], td[bgColor=\"#FFFFEE\"] {\n  background-color: #222222; }\n\ntd[bgColor=\"#eeaa88\"] {\n  color: #800000; }\n\ntd[bgColor=\"#DDDDEE\"] {\n  background-color: #453877; }\n\ntd[bgColor=\"#EEDDDD\"] {\n  background-color: #333333; }\n\nhr {\n  border-color: #555555; }\n\nfont[size=\"5\"] {\n  color: #B36666; }\n\ncenter form {\n  background-color: #444444; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var def = __webpack_require__(3)[0][1];
	var homu = __webpack_require__(4)[0][1];
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    default: def,
	    homu: homu,
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(8);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;
	;var locals_for_with = (locals || {});(function (contract, expand, hiddenButton, komicaHelper, newString, night, postform, update) {
	buf.push("<div" + (jade.attr("id", komicaHelper, true, true)) + "><a href=\"#\"" + (jade.attr("id", update, true, true)) + (jade.cls([hiddenButton], [true])) + ">更新<br></a><a href=\"#\"" + (jade.attr("id", expand, true, true)) + (jade.cls([hiddenButton], [true])) + ">放大所有圖片<br></a><a href=\"#\"" + (jade.attr("id", contract, true, true)) + (jade.cls([hiddenButton], [true])) + ">縮小所有圖片<br></a><a href=\"#\"" + (jade.attr("id", postform, true, true)) + (jade.cls([hiddenButton], [true])) + ">" + (jade.escape((jade_interp = newString) == null ? '' : jade_interp)) + "<br></a><a href=\"#\"" + (jade.attr("id", night, true, true)) + (jade.cls([hiddenButton], [true])) + ">夜間模式</a></div>");}.call(this,"contract" in locals_for_with?locals_for_with.contract:typeof contract!=="undefined"?contract:undefined,"expand" in locals_for_with?locals_for_with.expand:typeof expand!=="undefined"?expand:undefined,"hiddenButton" in locals_for_with?locals_for_with.hiddenButton:typeof hiddenButton!=="undefined"?hiddenButton:undefined,"komicaHelper" in locals_for_with?locals_for_with.komicaHelper:typeof komicaHelper!=="undefined"?komicaHelper:undefined,"newString" in locals_for_with?locals_for_with.newString:typeof newString!=="undefined"?newString:undefined,"night" in locals_for_with?locals_for_with.night:typeof night!=="undefined"?night:undefined,"postform" in locals_for_with?locals_for_with.postform:typeof postform!=="undefined"?postform:undefined,"update" in locals_for_with?locals_for_with.update:typeof update!=="undefined"?update:undefined));;return buf.join("");
	}

/***/ },
/* 8 */
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
	    str = str || __webpack_require__(9).readFileSync(filename, 'utf8')
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
/* 9 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var crossStorage = __webpack_require__(21);
	// used for cross storage hub
	function init() {
	    'use strict';
	    crossStorage.CrossStorageHub.init([
	        { allow: ['get', 'set', 'del'], origin: /.*/ },
	    ]);
	}
	exports.init = init;
	// get the setting and send it back with the callback
	function getSetting(key, callback) {
	    'use strict';
	    var storage = new crossStorage.CrossStorageClient('http://web.komica.org', {});
	    storage.onConnect().then(function () {
	        return storage.get("komica_helper_" + key);
	    }).then(function (setting) {
	        callback(JSON.parse(setting));
	        storage.close();
	    });
	}
	exports.getSetting = getSetting;
	// set the setting, call callback when finish
	function setSetting(key, setting, callback) {
	    'use strict';
	    var storage = new crossStorage.CrossStorageClient('http://web.komica.org', {});
	    storage.onConnect().then(function () {
	        return storage.set("komica_helper_" + key, setting);
	    }).then(function () {
	        if (callback) {
	            callback();
	        }
	        storage.close();
	    }, function (error) {
	        console.log('error');
	        console.log(error);
	    });
	}
	exports.setSetting = setSetting;
	// synchronize the setting between the menu page and local page
	function synchronizeSetting() {
	    'use strict';
	    var keys = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        keys[_i - 0] = arguments[_i];
	    }
	    keys = keys.map(function (key) { return ("komica_helper_" + key); });
	    var storage = new crossStorage.CrossStorageClient('http://web.komica.org', {});
	    return storage.onConnect().then(function () {
	        return storage.get.apply(storage, keys);
	    }).then(function (settings) {
	        settings = [].concat(settings); // ensure it is array
	        var promises = [];
	        if (settings) {
	            for (var i = 0; i < keys.length; i++) {
	                var crossSetting = settings[i];
	                var localSetting = JSON.parse(localStorage.getItem(keys[i]));
	                var crossTimestamp = 0;
	                var localTimestamp = 0;
	                if (crossSetting && crossSetting.timestamp) {
	                    crossTimestamp = parseInt(crossSetting.timestamp, 10) || 0;
	                }
	                if (localSetting && localSetting.timestamp) {
	                    localTimestamp = parseInt(localSetting.timestamp, 10) || 0;
	                }
	                // need to apply cross setting to local setting
	                if (crossTimestamp > localTimestamp) {
	                    localStorage.setItem(keys[i], JSON.stringify(crossSetting));
	                }
	                else if (crossTimestamp < localTimestamp) {
	                    promises.push(storage.set(keys[i], localSetting));
	                }
	            }
	        }
	        return Promise.all(promises);
	    }).then(function () {
	        storage.close();
	        return new Promise(function (resolve) {
	            resolve();
	        });
	    });
	}
	exports.synchronizeSetting = synchronizeSetting;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var settingsync_1 = __webpack_require__(12);
	// get the night mode state from local storage
	var isNight = false;
	var nightStyle = document.createElement('style');
	// bind the toggle button function
	function toggleNightMode(noSync) {
	    'use strict';
	    if (isNight) {
	        document.body.removeChild(nightStyle);
	    }
	    else {
	        document.body.appendChild(nightStyle);
	    }
	    // toggle the night mode state
	    isNight = !isNight;
	    if (!noSync) {
	        var setting = {
	            timestamp: "" + Math.floor(Date.now()),
	            value: isNight ? 'true' : 'false',
	        };
	        localStorage.setItem('komica_helper_nightmode', JSON.stringify(setting));
	        settingsync_1.setSetting('nightmode', setting);
	    }
	}
	function bindNightModeButton(nightButton) {
	    'use strict';
	    nightButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        toggleNightMode();
	    });
	}
	exports.bindNightModeButton = bindNightModeButton;
	var url = window.location.href;
	// initialize this module by providing the dark style of this board
	function initializeNightMode(darkStyleString, isMenu) {
	    'use strict';
	    if (darkStyleString === void 0) { darkStyleString = config_1.default(url).darkStyle; }
	    nightStyle.innerHTML = darkStyleString;
	    var localNightMode;
	    if (isMenu) {
	        var localSetting = localStorage.getItem('komica_helper_nightmode');
	        if (localSetting) {
	            localNightMode = JSON.parse(localSetting).value;
	        }
	        // if the page is a menu, attach storage change event
	        window.addEventListener('storage', function (event) {
	            if (event.key === 'komica_helper_nightmode') {
	                var newSetting = JSON.parse(event.newValue).value;
	                if ((newSetting.value === 'true') !== isNight) {
	                    toggleNightMode(true);
	                }
	            }
	        });
	    }
	    else {
	        var localSetting = localStorage.getItem('komica_helper_nightmode');
	        if (localSetting) {
	            localNightMode = JSON.parse(localSetting);
	        }
	        // if the page is a board, synchronize the setting with the menu page
	        settingsync_1.synchronizeSetting('nightmode').then(function () {
	            localNightMode = JSON.parse(localStorage.getItem('komica_helper_nightmode'));
	            if (localNightMode && (localNightMode.value === 'true') !== isNight) {
	                toggleNightMode(true);
	            }
	        });
	    }
	    if (localNightMode && localNightMode.value === 'true') {
	        toggleNightMode(true);
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializeNightMode;


/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	;(function(root) {
	  /**
	   * Constructs a new cross storage client given the url to a hub. By default,
	   * an iframe is created within the document body that points to the url. It
	   * also accepts an options object, which may include a timeout, frameId, and
	   * promise. The timeout, in milliseconds, is applied to each request and
	   * defaults to 5000ms. The options object may also include a frameId,
	   * identifying an existing frame on which to install its listeners. If the
	   * promise key is supplied the constructor for a Promise, that Promise library
	   * will be used instead of the default window.Promise.
	   *
	   * @example
	   * var storage = new CrossStorageClient('https://store.example.com/hub.html');
	   *
	   * @example
	   * var storage = new CrossStorageClient('https://store.example.com/hub.html', {
	   *   timeout: 5000,
	   *   frameId: 'storageFrame'
	   * });
	   *
	   * @constructor
	   *
	   * @param {string} url    The url to a cross storage hub
	   * @param {object} [opts] An optional object containing additional options,
	   *                        including timeout, frameId, and promise
	   *
	   * @property {string}   _id        A UUID v4 id
	   * @property {function} _promise   The Promise object to use
	   * @property {string}   _frameId   The id of the iFrame pointing to the hub url
	   * @property {string}   _origin    The hub's origin
	   * @property {object}   _requests  Mapping of request ids to callbacks
	   * @property {bool}     _connected Whether or not it has connected
	   * @property {bool}     _closed    Whether or not the client has closed
	   * @property {int}      _count     Number of requests sent
	   * @property {function} _listener  The listener added to the window
	   * @property {Window}   _hub       The hub window
	   */
	  function CrossStorageClient(url, opts) {
	    opts = opts || {};

	    this._id        = CrossStorageClient._generateUUID();
	    this._promise   = opts.promise || Promise;
	    this._frameId   = opts.frameId || 'CrossStorageClient-' + this._id;
	    this._origin    = CrossStorageClient._getOrigin(url);
	    this._requests  = {};
	    this._connected = false;
	    this._closed    = false;
	    this._count     = 0;
	    this._timeout   = opts.timeout || 5000;
	    this._listener  = null;

	    this._installListener();

	    var frame;
	    if (opts.frameId) {
	      frame = document.getElementById(opts.frameId);
	    }

	    // If using a passed iframe, poll the hub for a ready message
	    if (frame) {
	      this._poll();
	    }

	    // Create the frame if not found or specified
	    frame = frame || this._createFrame(url);
	    this._hub = frame.contentWindow;
	  }

	  /**
	   * The styles to be applied to the generated iFrame. Defines a set of properties
	   * that hide the element by positioning it outside of the visible area, and
	   * by modifying its display.
	   *
	   * @member {Object}
	   */
	  CrossStorageClient.frameStyle = {
	    display:  'none',
	    position: 'absolute',
	    top:      '-999px',
	    left:     '-999px'
	  };

	  /**
	   * Returns the origin of an url, with cross browser support. Accommodates
	   * the lack of location.origin in IE, as well as the discrepancies in the
	   * inclusion of the port when using the default port for a protocol, e.g.
	   * 443 over https. Defaults to the origin of window.location if passed a
	   * relative path.
	   *
	   * @param   {string} url The url to a cross storage hub
	   * @returns {string} The origin of the url
	   */
	  CrossStorageClient._getOrigin = function(url) {
	    var uri, protocol, origin;

	    uri = document.createElement('a');
	    uri.href = url;

	    if (!uri.host) {
	      uri = window.location;
	    }

	    if (!uri.protocol || uri.protocol === ':') {
	      protocol = window.location.protocol;
	    } else {
	      protocol = uri.protocol;
	    }

	    origin = protocol + '//' + uri.host;
	    origin = origin.replace(/:80$|:443$/, '');

	    return origin;
	  };

	  /**
	   * UUID v4 generation, taken from: http://stackoverflow.com/questions/
	   * 105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
	   *
	   * @returns {string} A UUID v4 string
	   */
	  CrossStorageClient._generateUUID = function() {
	    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	      var r = Math.random() * 16|0, v = c == 'x' ? r : (r&0x3|0x8);

	      return v.toString(16);
	    });
	  };

	  /**
	   * Returns a promise that is fulfilled when a connection has been established
	   * with the cross storage hub. Its use is required to avoid sending any
	   * requests prior to initialization being complete.
	   *
	   * @returns {Promise} A promise that is resolved on connect
	   */
	  CrossStorageClient.prototype.onConnect = function() {
	    var client = this;

	    if (this._connected) {
	      return this._promise.resolve();
	    } else if (this._closed) {
	      return this._promise.reject(new Error('CrossStorageClient has closed'));
	    }

	    // Queue connect requests for client re-use
	    if (!this._requests.connect) {
	      this._requests.connect = [];
	    }

	    return new this._promise(function(resolve, reject) {
	      var timeout = setTimeout(function() {
	        reject(new Error('CrossStorageClient could not connect'));
	      }, client._timeout);

	      client._requests.connect.push(function(err) {
	        clearTimeout(timeout);
	        if (err) return reject(err);

	        resolve();
	      });
	    });
	  };

	  /**
	   * Sets a key to the specified value, optionally accepting a ttl to passively
	   * expire the key after a number of milliseconds. Returns a promise that is
	   * fulfilled on success, or rejected if any errors setting the key occurred,
	   * or the request timed out.
	   *
	   * @param   {string}  key   The key to set
	   * @param   {*}       value The value to assign
	   * @param   {int}     ttl   Time to live in milliseconds
	   * @returns {Promise} A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype.set = function(key, value, ttl) {
	    return this._request('set', {
	      key:   key,
	      value: value,
	      ttl:   ttl
	    });
	  };

	  /**
	   * Accepts one or more keys for which to retrieve their values. Returns a
	   * promise that is settled on hub response or timeout. On success, it is
	   * fulfilled with the value of the key if only passed a single argument.
	   * Otherwise it's resolved with an array of values. On failure, it is rejected
	   * with the corresponding error message.
	   *
	   * @param   {...string} key The key to retrieve
	   * @returns {Promise}   A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype.get = function(key) {
	    var args = Array.prototype.slice.call(arguments);

	    return this._request('get', {keys: args});
	  };

	  /**
	   * Accepts one or more keys for deletion. Returns a promise that is settled on
	   * hub response or timeout.
	   *
	   * @param   {...string} key The key to delete
	   * @returns {Promise}   A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype.del = function() {
	    var args = Array.prototype.slice.call(arguments);

	    return this._request('del', {keys: args});
	  };

	  /**
	   * Returns a promise that, when resolved, indicates that all localStorage
	   * data has been cleared.
	   *
	   * @returns {Promise} A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype.clear = function() {
	    return this._request('clear');
	  };

	  /**
	   * Returns a promise that, when resolved, passes an array of all keys
	   * currently in storage.
	   *
	   * @returns {Promise} A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype.getKeys = function() {
	    return this._request('getKeys');
	  };

	  /**
	   * Deletes the iframe and sets the connected state to false. The client can
	   * no longer be used after being invoked.
	   */
	  CrossStorageClient.prototype.close = function() {
	    var frame = document.getElementById(this._frameId);
	    if (frame) {
	      frame.parentNode.removeChild(frame);
	    }

	    // Support IE8 with detachEvent
	    if (window.removeEventListener) {
	      window.removeEventListener('message', this._listener, false);
	    } else {
	      window.detachEvent('onmessage', this._listener);
	    }

	    this._connected = false;
	    this._closed = true;
	  };

	  /**
	   * Installs the necessary listener for the window message event. When a message
	   * is received, the client's _connected status is changed to true, and the
	   * onConnect promise is fulfilled. Given a response message, the callback
	   * corresponding to its request is invoked. If response.error holds a truthy
	   * value, the promise associated with the original request is rejected with
	   * the error. Otherwise the promise is fulfilled and passed response.result.
	   *
	   * @private
	   */
	  CrossStorageClient.prototype._installListener = function() {
	    var client = this;

	    this._listener = function(message) {
	      var i, origin, error, response;

	      // Ignore invalid messages or those after the client has closed
	      if (client._closed || !message.data || typeof message.data !== 'string') {
	        return;
	      }

	      // postMessage returns the string "null" as the origin for "file://"
	      origin = (message.origin === 'null') ? 'file://' : message.origin;

	      // Ignore messages not from the correct origin
	      if (origin !== client._origin) return;

	      // LocalStorage isn't available in the hub
	      if (message.data === 'cross-storage:unavailable') {
	        if (!client._closed) client.close();
	        if (!client._requests.connect) return;

	        error = new Error('Closing client. Could not access localStorage in hub.');
	        for (i = 0; i < client._requests.connect.length; i++) {
	          client._requests.connect[i](error);
	        }

	        return;
	      }

	      // Handle initial connection
	      if (message.data.indexOf('cross-storage:') !== -1 && !client._connected) {
	        client._connected = true;
	        if (!client._requests.connect) return;

	        for (i = 0; i < client._requests.connect.length; i++) {
	          client._requests.connect[i](error);
	        }
	        delete client._requests.connect;
	      }

	      if (message.data === 'cross-storage:ready') return;

	      // All other messages
	      try {
	        response = JSON.parse(message.data);
	      } catch(e) {
	        return;
	      }

	      if (!response.id) return;

	      if (client._requests[response.id]) {
	        client._requests[response.id](response.error, response.result);
	      }
	    };

	    // Support IE8 with attachEvent
	    if (window.addEventListener) {
	      window.addEventListener('message', this._listener, false);
	    } else {
	      window.attachEvent('onmessage', this._listener);
	    }
	  };

	  /**
	   * Invoked when a frame id was passed to the client, rather than allowing
	   * the client to create its own iframe. Polls the hub for a ready event to
	   * establish a connected state.
	   */
	  CrossStorageClient.prototype._poll = function() {
	    var client, interval, targetOrigin;

	    client = this;

	    // postMessage requires that the target origin be set to "*" for "file://"
	    targetOrigin = (client._origin === 'file://') ? '*' : client._origin;

	    interval = setInterval(function() {
	      if (client._connected) return clearInterval(interval);
	      if (!client._hub) return;

	      client._hub.postMessage('cross-storage:poll', targetOrigin);
	    }, 1000);
	  };

	  /**
	   * Creates a new iFrame containing the hub. Applies the necessary styles to
	   * hide the element from view, prior to adding it to the document body.
	   * Returns the created element.
	   *
	   * @private
	   *
	   * @param  {string}            url The url to the hub
	   * returns {HTMLIFrameElement} The iFrame element itself
	   */
	  CrossStorageClient.prototype._createFrame = function(url) {
	    var frame, key;

	    frame = window.document.createElement('iframe');
	    frame.id = this._frameId;

	    // Style the iframe
	    for (key in CrossStorageClient.frameStyle) {
	      if (CrossStorageClient.frameStyle.hasOwnProperty(key)) {
	        frame.style[key] = CrossStorageClient.frameStyle[key];
	      }
	    }

	    window.document.body.appendChild(frame);
	    frame.src = url;

	    return frame;
	  };

	  /**
	   * Sends a message containing the given method and params to the hub. Stores
	   * a callback in the _requests object for later invocation on message, or
	   * deletion on timeout. Returns a promise that is settled in either instance.
	   *
	   * @private
	   *
	   * @param   {string}  method The method to invoke
	   * @param   {*}       params The arguments to pass
	   * @returns {Promise} A promise that is settled on hub response or timeout
	   */
	  CrossStorageClient.prototype._request = function(method, params) {
	    var req, client;

	    if (this._closed) {
	      return this._promise.reject(new Error('CrossStorageClient has closed'));
	    }

	    client = this;
	    client._count++;

	    req = {
	      id:     this._id + ':' + client._count,
	      method: 'cross-storage:' + method,
	      params: params
	    };

	    return new this._promise(function(resolve, reject) {
	      var timeout, originalToJSON, targetOrigin;

	      // Timeout if a response isn't received after 4s
	      timeout = setTimeout(function() {
	        if (!client._requests[req.id]) return;

	        delete client._requests[req.id];
	        reject(new Error('Timeout: could not perform ' + req.method));
	      }, client._timeout);

	      // Add request callback
	      client._requests[req.id] = function(err, result) {
	        clearTimeout(timeout);
	        if (err) return reject(new Error(err));
	        resolve(result);
	      };

	      // In case we have a broken Array.prototype.toJSON, e.g. because of
	      // old versions of prototype
	      if (Array.prototype.toJSON) {
	        originalToJSON = Array.prototype.toJSON;
	        Array.prototype.toJSON = null;
	      }

	      // postMessage requires that the target origin be set to "*" for "file://"
	      targetOrigin = (client._origin === 'file://') ? '*' : client._origin;

	      // Send serialized message
	      client._hub.postMessage(JSON.stringify(req), targetOrigin);

	      // Restore original toJSON
	      if (originalToJSON) {
	        Array.prototype.toJSON = originalToJSON;
	      }
	    });
	  };

	  /**
	   * Export for various environments.
	   */
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = CrossStorageClient;
	  } else if (true) {
	    exports.CrossStorageClient = CrossStorageClient;
	  } else if (typeof define === 'function' && define.amd) {
	    define([], function() {
	      return CrossStorageClient;
	    });
	  } else {
	    root.CrossStorageClient = CrossStorageClient;
	  }
	}(this));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	;(function(root) {
	  var CrossStorageHub = {};

	  /**
	   * Accepts an array of objects with two keys: origin and allow. The value
	   * of origin is expected to be a RegExp, and allow, an array of strings.
	   * The cross storage hub is then initialized to accept requests from any of
	   * the matching origins, allowing access to the associated lists of methods.
	   * Methods may include any of: get, set, del, getKeys and clear. A 'ready'
	   * message is sent to the parent window once complete.
	   *
	   * @example
	   * // Subdomain can get, but only root domain can set and del
	   * CrossStorageHub.init([
	   *   {origin: /\.example.com$/,        allow: ['get']},
	   *   {origin: /:(www\.)?example.com$/, allow: ['get', 'set', 'del']}
	   * ]);
	   *
	   * @param {array} permissions An array of objects with origin and allow
	   */
	  CrossStorageHub.init = function(permissions) {
	    var available = true;

	    // Return if localStorage is unavailable, or third party
	    // access is disabled
	    try {
	      if (!window.localStorage) available = false;
	    } catch (e) {
	      available = false;
	    }

	    if (!available) {
	      try {
	        return window.parent.postMessage('cross-storage:unavailable', '*');
	      } catch (e) {
	        return;
	      }
	    }

	    CrossStorageHub._permissions = permissions || [];
	    CrossStorageHub._installListener();
	    window.parent.postMessage('cross-storage:ready', '*');
	  };

	  /**
	   * Installs the necessary listener for the window message event. Accommodates
	   * IE8 and up.
	   *
	   * @private
	   */
	  CrossStorageHub._installListener = function() {
	    var listener = CrossStorageHub._listener;
	    if (window.addEventListener) {
	      window.addEventListener('message', listener, false);
	    } else {
	      window.attachEvent('onmessage', listener);
	    }
	  };

	  /**
	   * The message handler for all requests posted to the window. It ignores any
	   * messages having an origin that does not match the originally supplied
	   * pattern. Given a JSON object with one of get, set, del or getKeys as the
	   * method, the function performs the requested action and returns its result.
	   *
	   * @param {MessageEvent} message A message to be processed
	   */
	  CrossStorageHub._listener = function(message) {
	    var origin, targetOrigin, request, method, error, result, response;

	    // postMessage returns the string "null" as the origin for "file://"
	    origin = (message.origin === 'null') ? 'file://' : message.origin;

	    // Handle polling for a ready message
	    if (message.data === 'cross-storage:poll') {
	      return window.parent.postMessage('cross-storage:ready', message.origin);
	    }

	    // Ignore the ready message when viewing the hub directly
	    if (message.data === 'cross-storage:ready') return;

	    request = JSON.parse(message.data);
	    method = request.method.split('cross-storage:')[1];

	    if (!method) {
	      return;
	    } else if (!CrossStorageHub._permitted(origin, method)) {
	      error = 'Invalid permissions for ' + method;
	    } else {
	      try {
	        result = CrossStorageHub['_' + method](request.params);
	      } catch (err) {
	        error = err.message;
	      }
	    }

	    response = JSON.stringify({
	      id: request.id,
	      error: error,
	      result: result
	    });

	    // postMessage requires that the target origin be set to "*" for "file://"
	    targetOrigin = (origin === 'file://') ? '*' : origin;

	    window.parent.postMessage(response, targetOrigin);
	  };

	  /**
	   * Returns a boolean indicating whether or not the requested method is
	   * permitted for the given origin. The argument passed to method is expected
	   * to be one of 'get', 'set', 'del' or 'getKeys'.
	   *
	   * @param   {string} origin The origin for which to determine permissions
	   * @param   {string} method Requested action
	   * @returns {bool}   Whether or not the request is permitted
	   */
	  CrossStorageHub._permitted = function(origin, method) {
	    var available, i, entry, match;

	    available = ['get', 'set', 'del', 'clear', 'getKeys'];
	    if (!CrossStorageHub._inArray(method, available)) {
	      return false;
	    }

	    for (i = 0; i < CrossStorageHub._permissions.length; i++) {
	      entry = CrossStorageHub._permissions[i];
	      if (!(entry.origin instanceof RegExp) || !(entry.allow instanceof Array)) {
	        continue;
	      }

	      match = entry.origin.test(origin);
	      if (match && CrossStorageHub._inArray(method, entry.allow)) {
	        return true;
	      }
	    }

	    return false;
	  };

	  /**
	   * Sets a key to the specified value. If a ttl is provided, an expiration
	   * timestamp is added to the object to be stored, prior to serialization.
	   *
	   * @param {object} params An object with key, value and optional ttl
	   */
	  CrossStorageHub._set = function(params) {
	    var ttl, item;

	    ttl = params.ttl;
	    if (ttl && parseInt(ttl, 10) !== ttl) {
	      throw new Error('ttl must be a number');
	    }

	    item = {value:  params.value};
	    if (ttl) {
	      item.expire = CrossStorageHub._now() + ttl;
	    }

	    window.localStorage.setItem(params.key, JSON.stringify(item));
	  };

	  /**
	   * Accepts an object with an array of keys for which to retrieve their values.
	   * Returns a single value if only one key was supplied, otherwise it returns
	   * an array. Any keys not set, or expired, result in a null element in the
	   * resulting array.
	   *
	   * @param   {object} params An object with an array of keys
	   * @returns {*|*[]}  Either a single value, or an array
	   */
	  CrossStorageHub._get = function(params) {
	    var storage, result, i, item, key;

	    storage = window.localStorage;
	    result = [];

	    for (i = 0; i < params.keys.length; i++) {
	      key = params.keys[i];
	      item = JSON.parse(storage.getItem(key));

	      if (item === null) {
	        result.push(null);
	      } else if (item.expire && item.expire < CrossStorageHub._now()) {
	        storage.removeItem(key);
	        result.push(null);
	      } else {
	        result.push(item.value);
	      }
	    }

	    return (result.length > 1) ? result : result[0];
	  };

	  /**
	   * Deletes all keys specified in the array found at params.keys.
	   *
	   * @param {object} params An object with an array of keys
	   */
	  CrossStorageHub._del = function(params) {
	    for (var i = 0; i < params.keys.length; i++) {
	      window.localStorage.removeItem(params.keys[i]);
	    }
	  };

	  /**
	   * Clears localStorage.
	   */
	  CrossStorageHub._clear = function() {
	    window.localStorage.clear();
	  };

	  /**
	   * Returns an array of all keys stored in localStorage.
	   *
	   * @returns {string[]} The array of keys
	   */
	  CrossStorageHub._getKeys = function(params) {
	    var i, length, keys;

	    keys = [];
	    length = window.localStorage.length;

	    for (i = 0; i < length; i++) {
	      keys.push(window.localStorage.key(i));
	    }

	    return keys;
	  };

	  /**
	   * Returns whether or not a value is present in the array. Consists of an
	   * alternative to extending the array prototype for indexOf, since it's
	   * unavailable for IE8.
	   *
	   * @param   {*}    value The value to find
	   * @parma   {[]*}  array The array in which to search
	   * @returns {bool} Whether or not the value was found
	   */
	  CrossStorageHub._inArray = function(value, array) {
	    for (var i = 0; i < array.length; i++) {
	      if (value === array[i]) return true;
	    }

	    return false;
	  };

	  /**
	   * A cross-browser version of Date.now compatible with IE8 that avoids
	   * modifying the Date object.
	   *
	   * @return {int} The current timestamp in milliseconds
	   */
	  CrossStorageHub._now = function() {
	    if (typeof Date.now === 'function') {
	      return Date.now();
	    }

	    return new Date().getTime();
	  };

	  /**
	   * Export for various environments.
	   */
	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = CrossStorageHub;
	  } else if (true) {
	    exports.CrossStorageHub = CrossStorageHub;
	  } else if (typeof define === 'function' && define.amd) {
	    define([], function() {
	      return CrossStorageHub;
	    });
	  } else {
	    root.CrossStorageHub = CrossStorageHub;
	  }
	}(this));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  CrossStorageClient: __webpack_require__(19),
	  CrossStorageHub:    __webpack_require__(20)
	};


/***/ },
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var nightmode_1 = __webpack_require__(13);
	var injectmenu_1 = __webpack_require__(2);
	var settingsync_1 = __webpack_require__(12);
	function initialize() {
	    'use strict';
	    // inject the menu buttons
	    var menuButtons = injectmenu_1.injectMenu();
	    var nightModeButton = menuButtons.nightModeButton;
	    // enable night mode toggle
	    injectmenu_1.enableButtons({
	        nightModeButton: true,
	    });
	    // initialize night mode toggle
	    nightmode_1.default();
	    nightmode_1.bindNightModeButton(nightModeButton);
	}
	function initializeMenu() {
	    'use strict';
	    nightmode_1.default(undefined, true);
	}
	var initFunction;
	// if the page is menu page, init for cross storage hub
	if (/web\.komica\.org/.test(window.location.href)) {
	    settingsync_1.init();
	    initFunction = initializeMenu;
	}
	else {
	    initFunction = initialize;
	}
	if (document.readyState !== 'loading') {
	    initFunction();
	}
	else {
	    document.addEventListener('DOMContentLoaded', initFunction.bind(undefined));
	}


/***/ }
/******/ ]);