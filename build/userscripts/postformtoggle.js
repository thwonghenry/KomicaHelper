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
// @description A plugin that add post form toggle
// @name Komica Post Form Togle
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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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
	            console.log('extending', key);
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
	var config = config_1.default(url);
	var isThread = config.isThread.test(url);
	// menu buttons
	var menu;
	var updateButton;
	var expandAllButton;
	var contractAllButton;
	var postformButton;
	var nightModeButton;
	var locals;
	// inject menu buttons
	function injectMenu() {
	    'use strict';
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
	    button.classList.remove(locals.hiddenButton);
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
	exports.push([module.i, "html._1CH0lDxiMIShbCcxHUrmod {\n  background-color: #111;\n  color: silver; }\n  html._1CH0lDxiMIShbCcxHUrmod body {\n    background-color: #111;\n    color: silver; }\n  html._1CH0lDxiMIShbCcxHUrmod a:link {\n    color: #6699FF; }\n  html._1CH0lDxiMIShbCcxHUrmod a:hover {\n    color: #FF9966; }\n  html._1CH0lDxiMIShbCcxHUrmod a:visited {\n    color: #99FF66; }\n  html._1CH0lDxiMIShbCcxHUrmod hr {\n    border-color: #555555; }\n  html._1CH0lDxiMIShbCcxHUrmod h1 {\n    color: #B36666; }\n  html._1CH0lDxiMIShbCcxHUrmod .reply {\n    background-color: #222222; }\n  html._1CH0lDxiMIShbCcxHUrmod .reply_hl {\n    background-color: #333333; }\n  html._1CH0lDxiMIShbCcxHUrmod .Form_bg {\n    color: #800000; }\n  html._1CH0lDxiMIShbCcxHUrmod #postform_main {\n    background-color: #444444; }\n  html._1CH0lDxiMIShbCcxHUrmod .page_switch .ul div.link a {\n    background-color: #222222; }\n  html._1CH0lDxiMIShbCcxHUrmod .pushpost {\n    background-color: #333333; }\n", ""]);

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
	exports.push([module.i, "html._3PcSwAIK8c5KIZxv3BleHH {\n  background-color: #111;\n  color: silver; }\n  html._3PcSwAIK8c5KIZxv3BleHH body {\n    background-color: #111;\n    color: silver; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:link {\n    color: #6699FF; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:hover {\n    color: #FF9966; }\n  html._3PcSwAIK8c5KIZxv3BleHH a:visited {\n    color: #99FF66; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#F0E0D6\"], html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#FFFFEE\"] {\n    background-color: #222222; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#eeaa88\"] {\n    color: #800000; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#DDDDEE\"] {\n    background-color: #453877; }\n  html._3PcSwAIK8c5KIZxv3BleHH td[bgColor=\"#EEDDDD\"] {\n    background-color: #333333; }\n  html._3PcSwAIK8c5KIZxv3BleHH hr {\n    border-color: #555555; }\n  html._3PcSwAIK8c5KIZxv3BleHH font[size=\"5\"] {\n    color: #B36666; }\n  html._3PcSwAIK8c5KIZxv3BleHH center form {\n    background-color: #444444; }\n", ""]);

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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var config_1 = __webpack_require__(1);
	var isHiding = true;
	var locals;
	var postForm;
	var url = window.location.href;
	var config = config_1.default(url);
	// bind the post button function
	function bindPostButton(createButton) {
	    'use strict';
	    createButton.addEventListener('click', function (event) {
	        event.preventDefault();
	        if (isHiding) {
	            postForm.classList.remove(locals.hidden);
	        }
	        else {
	            postForm.classList.add(locals.hidden);
	        }
	        // toggle the state
	        isHiding = !isHiding;
	    });
	}
	exports.bindPostButton = bindPostButton;
	function initializePostform() {
	    'use strict';
	    // import the css
	    var style = __webpack_require__(23);
	    var css = style[0][1];
	    locals = style.locals;
	    // append the style
	    var styleTag = document.createElement('style');
	    styleTag.innerHTML = css;
	    document.body.appendChild(styleTag);
	    postForm = config.getPostformElement(document);
	    if (postForm) {
	        postForm.classList.add(locals.createNew, locals.hidden);
	    }
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = initializePostform;


/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(0)();
	// imports


	// module
	exports.push([module.i, "._2tXlWf9rQklM_2v7bnrcDy {\n  padding-top: 30px;\n  position: fixed;\n  width: 100%;\n  height: 33%;\n  overflow-y: scroll;\n  bottom: 0px;\n  background-color: #FFFFCC; }\n\n._3Lgni0e7amfvqB2yrsBMK4 {\n  display: none; }\n", ""]);

	// exports
	exports.locals = {
		"createNew": "_2tXlWf9rQklM_2v7bnrcDy",
		"hidden": "_3Lgni0e7amfvqB2yrsBMK4"
	};

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var postform_1 = __webpack_require__(15);
	var injectmenu_1 = __webpack_require__(2);
	function initialize() {
	    'use strict';
	    // inject menu buttons
	    var menuButtons = injectmenu_1.injectMenu();
	    var postformButton = menuButtons.postformButton;
	    // enable the post form button
	    injectmenu_1.enableButtons({
	        postformButton: true,
	    });
	    // initialize post form display toggle
	    postform_1.default();
	    postform_1.bindPostButton(postformButton);
	}
	if (document.readyState !== 'loading') {
	    initialize();
	}
	else {
	    document.addEventListener('DOMContentLoaded', initialize.bind(undefined));
	}


/***/ }
/******/ ]);