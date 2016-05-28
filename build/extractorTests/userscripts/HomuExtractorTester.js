// ==UserScript==
// @description Extractor for komica sites.
// @name Komica Extractor (Homu)
// @namespace https://github.com/thwonghenry/KomicaExtractor
// @version 0.1
// @match http://homu.komica.org/*/*
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";
	"use strict";
	// extractor for homu.komica.org/*
	var ExtractorState;
	(function (ExtractorState) {
	    ExtractorState[ExtractorState["START"] = 0] = "START";
	    ExtractorState[ExtractorState["FIRSTPOST"] = 1] = "FIRSTPOST";
	    ExtractorState[ExtractorState["REPLY"] = 2] = "REPLY";
	})(ExtractorState || (ExtractorState = {}));
	var replyInfoRegex = /^ (\d\d)\/(\d\d)\/(\d\d)...(\d\d):(\d\d):(\d\d) ID:(.*) No\.(.*) $/;
	function extractInfoToReply(infoText, reply) {
	    'use strict';
	    var regexMatch = infoText.match(replyInfoRegex);
	    // construct the date object from the info text
	    reply.date = new Date(2000 + parseInt(regexMatch[1], 10), // does not support < 2000
	    parseInt(regexMatch[2], 10), parseInt(regexMatch[3], 10), parseInt(regexMatch[4], 10), parseInt(regexMatch[5], 10), parseInt(regexMatch[6], 10));
	    reply.posterID = regexMatch[7];
	    reply.replyID = regexMatch[8];
	}
	function convertThread(nodes, isThreadList) {
	    'use strict';
	    var thread = {
	        replies: [],
	    };
	    var reply = {};
	    var state = ExtractorState.START;
	    thread.replies.push(reply);
	    for (var i = 0; i < nodes.length; i++) {
	        var node = nodes[i];
	        var nodeName = node.nodeName.toLowerCase();
	        // state machine to extract data
	        if (state === ExtractorState.START) {
	            // determine whether the first post contains thumbnail
	            if (nodeName === '#text') {
	                // "檔名" text node, ignore it
	                continue;
	            }
	            else if (nodeName === 'div') {
	                // if the previous post has no reply,
	                // there is a div for padding
	                continue;
	            }
	            else if (nodeName === 'a') {
	                // progress the node list to obtain the image
	                i += 5;
	                var imageElement = (nodes[i].children[0]);
	                reply.image = {
	                    filename: node.innerHTML,
	                    src: node.href,
	                    thumnnail: imageElement.src,
	                };
	                state = ExtractorState.FIRSTPOST;
	                i++; // skip the check box
	            }
	            else if (nodeName === 'input') {
	                state = ExtractorState.FIRSTPOST;
	            }
	            else {
	                // end of the page
	                break;
	            }
	        }
	        else if (state === ExtractorState.FIRSTPOST) {
	            reply.topic = node.innerText;
	            i += 2;
	            node = nodes[i];
	            reply.posterName = node.innerText;
	            i++;
	            node = nodes[i];
	            extractInfoToReply(node.data, reply);
	            // there are 4 extra node between the info text node and content node for thread list page
	            if (isThreadList) {
	                i += 7;
	            }
	            else {
	                i += 3;
	            }
	            node = nodes[i];
	            reply.content = node;
	            state = ExtractorState.REPLY;
	        }
	        else if (state === ExtractorState.REPLY) {
	            if (nodeName === 'div') {
	                state = undefined;
	                continue;
	            }
	            // if there are hidden replies, fill them with empty object
	            if (nodeName === 'font') {
	                var infoText = node.innerText;
	                var regexMatch = infoText.match(/回應有(\d*)篇被省略/);
	                var skip = parseInt(regexMatch[1], 10);
	                for (var s = 0; s < skip; s++) {
	                    thread.replies.push({});
	                }
	                i += 3;
	                node = nodes[i];
	            }
	            reply = {};
	            thread.replies.push(reply);
	            // each reply is embeded inside a table element
	            // retrieve the content node inside the table element
	            var post = node.children[0].children[0].children[1];
	            // retrieve the info of the reply
	            reply.topic = post.childNodes[2].innerText;
	            reply.posterName = post.childNodes[4].innerText;
	            extractInfoToReply(post.childNodes[5].data, reply);
	            // skip the text node after the table node
	            i++;
	            var content = post.childNodes[8].nodeName.toLowerCase();
	            if (content === 'blockquote') {
	                // has no thumbnail
	                reply.content = post.childNodes[8];
	            }
	            else {
	                // has thumbnail
	                reply.content = post.childNodes[16];
	                var imageElement = post.childNodes[15].children[0];
	                var anchorElement = post.childNodes[10];
	                reply.image = {
	                    filename: anchorElement.innerText,
	                    src: imageElement.src,
	                    thumnnail: anchorElement.href,
	                };
	            }
	        }
	    }
	    return thread;
	}
	var HomuExtractor = (function () {
	    function HomuExtractor(domain) {
	        this.domain = domain;
	    }
	    HomuExtractor.prototype.extractThreadList = function (doc) {
	        'use strict';
	        var threads = doc.getElementsByTagName('form')[1];
	        var threadNodes = [[]];
	        var threadIndex = 0;
	        for (var i = 0; i < threads.childNodes.length; i++) {
	            var node = threads.childNodes[i];
	            var nodeName = node.nodeName.toLowerCase();
	            if (nodeName === 'hr') {
	                // meet the boundary of previous thread, create new thread
	                threadIndex++;
	                threadNodes.push([]);
	            }
	            else {
	                threadNodes[threadIndex].push(node);
	            }
	        }
	        // remove the footer nodes
	        threadNodes.splice(-1);
	        return { threads: threadNodes.map(function (nodes) { return convertThread(nodes, true); }) };
	    };
	    HomuExtractor.prototype.extractReplyList = function (doc) {
	        'use strict';
	        var replies = doc.getElementsByTagName('form')[1];
	        var nodes = Array.prototype.slice.call(replies.childNodes);
	        // remove the footer nodes
	        var index = -1;
	        for (var i = 0; i < nodes.length; i++) {
	            if (nodes[i].nodeName.toLowerCase() === 'hr') {
	                index = i;
	                break;
	            }
	        }
	        if (index >= 0) {
	            nodes.splice(index);
	        }
	        return convertThread(nodes, false);
	    };
	    return HomuExtractor;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = HomuExtractor;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	"use strict";
	var HomuExtractor_1 = __webpack_require__(0);
	function init() {
	    'use strict';
	    var extractor = new HomuExtractor_1.default(window.location.host);
	    if (/.*\.php\?res=.*/.test(window.location.href)) {
	        console.log(extractor.extractReplyList(document));
	    }
	    else {
	        console.log(extractor.extractThreadList(document));
	    }
	}
	window.addEventListener('load', init);


/***/ }
/******/ ]);