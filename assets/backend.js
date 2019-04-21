/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./backend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend.js":
/*!********************!*\
  !*** ./backend.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


var Agent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'agent/Agent'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ProfileCollector = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'plugins/Profiler/ProfileCollector'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var TraceUpdatesBackendManager = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'plugins/TraceUpdates/TraceUpdatesBackendManager'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var Bridge = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'agent/Bridge'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var setupHighlighter = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'frontend/Highlighter/setup'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var setupHooksInspector = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'plugins/HooksInspector/backend'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))["default"];

var setupProfiler = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'plugins/Profiler/backend'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var inject = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'agent/inject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var wall = {
  listen: function listen(fn) {
    window.addEventListener('message', function (evt) {
      if (evt.source === window) {
        fn(evt.data);
      }
    });
  },
  send: function send(data) {
    window.postMessage(data, '*');
  }
};
var bridge = new Bridge(wall);
var agent = new Agent(window);
agent.addBridge(bridge);
inject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__, agent);
setupHighlighter(agent);
setupProfiler(bridge, agent, window.__REACT_DEVTOOLS_GLOBAL_HOOK__);
setupHooksInspector(bridge, agent);
ProfileCollector.init(agent);
TraceUpdatesBackendManager.init(agent);

/***/ })

/******/ });
//# sourceMappingURL=backend.js.map