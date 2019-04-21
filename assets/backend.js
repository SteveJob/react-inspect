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

/***/ "./app/agent/Agent.js":
/*!****************************!*\
  !*** ./app/agent/Agent.js ***!
  \****************************/
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _require = __webpack_require__(/*! events */ "./node_modules/events/events.js"),
    EventEmitter = _require.EventEmitter;

var assign = __webpack_require__(/*! object-assign */ "./app/node_modules/object-assign/index.js");

var nullthrows = __webpack_require__(/*! nullthrows */ "./app/node_modules/nullthrows/nullthrows.js").default;

var guid = __webpack_require__(/*! ../utils/guid */ "./app/utils/guid.js");

var getIn = __webpack_require__(/*! ./getIn */ "./app/agent/getIn.js");

/**
 * The agent lives on the page in the same context as React, observes events
 * from the `backend`, and communicates (via a `Bridge`) with the frontend.
 *
 * It is responsible for generating string IDs (ElementID) for each react
 * element, maintaining a mapping of those IDs to elements, handling messages
 * from the frontend, and translating between react elements and native
 * handles.
 *
 *
 *   React
 *     |
 *     v
 *  backend
 *     |
 *     v
 *  -----------
 * | **Agent** |
 *  -----------
 *     ^
 *     |
 *     v
 *  (Bridge)
 *     ^
 *     |
 * serialization
 *     |
 *     v
 *  (Bridge)
 *     ^
 *     |
 *     v
 *  ----------------
 * | Frontend Store |
 *  ----------------
 *
 *
 * Events from the `backend`:
 * - root (got a root)
 * - mount (a component mounted)
 * - update (a component updated)
 * - unmount (a component mounted)
 *
 * Events from the `frontend` Store:
 * - see `addBridge` for subscriptions
 *
 * Events that Agent fires:
 * - selected
 * - hideHighlight
 * - startInspecting
 * - stopInspecting
 * - shutdown
 * - highlight /highlightMany
 * - setSelection
 * - root
 * - mount
 * - update
 * - unmount
 */
var Agent =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Agent, _EventEmitter);

  // the window or global -> used to "make a value available in the console"
  function Agent(global, capabilities) {
    var _this;

    _classCallCheck(this, Agent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Agent).call(this));
    _this.global = global;
    _this.internalInstancesById = new Map();
    _this.idsByInternalInstances = new WeakMap();
    _this.renderers = new Map();
    _this.elementData = new Map();
    _this.roots = new Set();
    _this.reactInternals = {};
    var lastSelected;

    _this.on('selected', function (id) {
      var data = _this.elementData.get(id);

      if (data) {
        if (data.publicInstance && _this.global.$r === lastSelected) {
          _this.global.$r = data.publicInstance;
          lastSelected = data.publicInstance;
        }
      }
    });

    _this._prevSelected = null;
    _this._scrollUpdate = false;
    var isReactDOM = window.document && typeof window.document.createElement === 'function';
    _this.capabilities = assign({
      scroll: isReactDOM && typeof window.document.body.scrollIntoView === 'function',
      dom: isReactDOM,
      editTextContent: false
    }, capabilities);

    if (isReactDOM) {
      _this._updateScroll = _this._updateScroll.bind(_assertThisInitialized(_this));
      window.addEventListener('scroll', _this._onScroll.bind(_assertThisInitialized(_this)), true);
      window.addEventListener('click', _this._onClick.bind(_assertThisInitialized(_this)), true);
      window.addEventListener('mouseover', _this._onMouseOver.bind(_assertThisInitialized(_this)), true);
      window.addEventListener('resize', _this._onResize.bind(_assertThisInitialized(_this)), true);
    }

    return _this;
  } // returns an "unsubscribe" function


  _createClass(Agent, [{
    key: "sub",
    value: function sub(ev, fn) {
      var _this2 = this;

      this.on(ev, fn);
      return function () {
        _this2.removeListener(ev, fn);
      };
    }
  }, {
    key: "setReactInternals",
    value: function setReactInternals(renderer, reactInternals) {
      this.reactInternals[renderer] = reactInternals;
    }
  }, {
    key: "addBridge",
    value: function addBridge(bridge) {
      var _this3 = this;

      /** Events received from the frontend **/
      // the initial handshake
      bridge.on('requestCapabilities', function () {
        bridge.send('capabilities', _this3.capabilities);

        _this3.emit('connected');
      });
      bridge.on('setState', this._setState.bind(this));
      bridge.on('setProps', this._setProps.bind(this));
      bridge.on('setContext', this._setContext.bind(this));
      bridge.on('makeGlobal', this._makeGlobal.bind(this));
      bridge.on('highlight', function (id) {
        return _this3.highlight(id);
      });
      bridge.on('highlightMany', function (id) {
        return _this3.highlightMany(id);
      });
      bridge.on('hideHighlight', function () {
        return _this3.emit('hideHighlight');
      });
      bridge.on('startInspecting', function () {
        return _this3.emit('startInspecting');
      });
      bridge.on('stopInspecting', function () {
        return _this3.emit('stopInspecting');
      });
      bridge.on('selected', function (id) {
        return _this3.emit('selected', id);
      });
      bridge.on('isRecording', function (isRecording) {
        return _this3.emit('isRecording', isRecording);
      });
      bridge.on('setInspectEnabled', function (enabled) {
        _this3._inspectEnabled = enabled;

        _this3.emit('stopInspecting');
      });
      bridge.on('shutdown', function () {
        return _this3.emit('shutdown');
      });
      bridge.on('changeTextContent', function (_ref) {
        var id = _ref.id,
            text = _ref.text;

        var node = _this3.getNodeForID(id);

        if (!node) {
          return;
        }

        node.textContent = text;
      }); // used to "inspect node in Elements pane"

      bridge.on('putSelectedNode', function (id) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$node = _this3.getNodeForID(id);
      }); // used to "view source in Sources pane"

      bridge.on('putSelectedInstance', function (id) {
        var node = _this3.elementData.get(id);

        if (node) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$type = node.type;
        } else {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$type = null;
        }

        if (node && node.publicInstance) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$inst = node.publicInstance;
        } else {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$inst = null;
        }
      }); // used to select the inspected node ($0)

      bridge.on('checkSelection', function () {
        var newSelected = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$0;

        if (newSelected !== _this3._prevSelected) {
          _this3._prevSelected = newSelected;
          var sentSelected = window.__REACT_DEVTOOLS_GLOBAL_HOOK__.$node;

          if (newSelected !== sentSelected) {
            _this3.selectFromDOMNode(newSelected, true);
          }
        }
      });
      bridge.on('scrollToNode', function (id) {
        return _this3.scrollToNode(id);
      });
      bridge.on('traceupdatesstatechange', function (value) {
        return _this3.emit('traceupdatesstatechange', value);
      });
      bridge.on('colorizerchange', function (value) {
        return _this3.emit('colorizerchange', value);
      });
      /** Events sent to the frontend **/

      this.on('root', function (id) {
        return bridge.send('root', id);
      });
      this.on('mount', function (data) {
        return bridge.send('mount', data);
      });
      this.on('update', function (data) {
        return bridge.send('update', data);
      });
      this.on('updateProfileTimes', function (data) {
        return bridge.send('updateProfileTimes', data);
      });
      this.on('unmount', function (id) {
        bridge.send('unmount', id); // once an element has been unmounted, the bridge doesn't need to be
        // able to inspect it anymore.

        bridge.forget(id);
      });
      this.on('setSelection', function (data) {
        return bridge.send('select', data);
      });
      this.on('setInspectEnabled', function (data) {
        return bridge.send('setInspectEnabled', data);
      });
      this.on('isRecording', function (isRecording) {
        return bridge.send('isRecording', isRecording);
      });
      this.on('storeSnapshot', function (data) {
        return bridge.send('storeSnapshot', data);
      });
      this.on('clearSnapshots', function () {
        return bridge.send('clearSnapshots');
      });
    }
  }, {
    key: "scrollToNode",
    value: function scrollToNode(id) {
      var node = this.getNodeForID(id);

      if (!node) {
        console.warn('unable to get the node for scrolling');
        return;
      }

      var domElement = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;

      if (!domElement) {
        console.warn('unable to get the domElement for scrolling');
        return;
      }

      if (typeof domElement.scrollIntoViewIfNeeded === 'function') {
        domElement.scrollIntoViewIfNeeded();
      } else if (typeof domElement.scrollIntoView === 'function') {
        domElement.scrollIntoView();
      }

      this.highlight(id);
    }
  }, {
    key: "highlight",
    value: function highlight(id) {
      var data = this.elementData.get(id);
      var node = this.getNodeForID(id);

      if (data && node) {
        this.emit('highlight', {
          node: node,
          name: data.name,
          props: data.props
        });
      }
    }
  }, {
    key: "highlightMany",
    value: function highlightMany(ids) {
      var _this4 = this;

      var nodes = [];
      ids.forEach(function (id) {
        var node = _this4.getNodeForID(id);

        if (node) {
          nodes.push(node);
        }
      });

      if (nodes.length) {
        this.emit('highlightMany', nodes);
      }
    }
  }, {
    key: "getNodeForID",
    value: function getNodeForID(id) {
      var component = this.internalInstancesById.get(id);

      if (!component) {
        return null;
      }

      var renderer = this.renderers.get(id);

      if (renderer && this.reactInternals[renderer].getNativeFromReactElement) {
        return this.reactInternals[renderer].getNativeFromReactElement(component);
      }

      return null;
    }
  }, {
    key: "selectFromDOMNode",
    value: function selectFromDOMNode(node, quiet) {
      var offsetFromLeaf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var id = this.getIDForNode(node);

      if (!id) {
        return;
      }

      this.emit('setSelection', {
        id: id,
        quiet: quiet,
        offsetFromLeaf: offsetFromLeaf
      });
    } // TODO: remove this method because it's breaking encapsulation.
    // It was used by RN inspector but this required leaking Fibers to it.
    // RN inspector will use selectFromDOMNode() instead now.
    // Remove this method in a few months after this comment was added.

  }, {
    key: "selectFromReactInstance",
    value: function selectFromReactInstance(instance, quiet) {
      var id = this.getId(instance);

      if (!id) {
        console.log('no instance id', instance);
        return;
      }

      this.emit('setSelection', {
        id: id,
        quiet: quiet
      });
    }
  }, {
    key: "getIDForNode",
    value: function getIDForNode(node) {
      if (!this.reactInternals) {
        return null;
      }

      var component;

      for (var renderer in this.reactInternals) {
        // If a renderer doesn't know about a reactId, it will throw an error.
        try {
          // $FlowFixMe possibly null - it's not null
          component = this.reactInternals[renderer].getReactElementFromNative(node);
        } catch (e) {}

        if (component) {
          return this.getId(component);
        }
      }

      return null;
    }
  }, {
    key: "_setProps",
    value: function _setProps(_ref2) {
      var id = _ref2.id,
          path = _ref2.path,
          value = _ref2.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInProps === 'function') {
        data.updater.setInProps(path, value);
      } else {
        console.warn("trying to set props on a component that doesn't support it");
      }
    }
  }, {
    key: "_setState",
    value: function _setState(_ref3) {
      var id = _ref3.id,
          path = _ref3.path,
          value = _ref3.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInState === 'function') {
        data.updater.setInState(path, value);
      } else {
        console.warn("trying to set state on a component that doesn't support it");
      }
    }
  }, {
    key: "_setContext",
    value: function _setContext(_ref4) {
      var id = _ref4.id,
          path = _ref4.path,
          value = _ref4.value;
      var data = this.elementData.get(id);

      if (data && data.updater && typeof data.updater.setInContext === 'function') {
        // $FlowFixMe
        data.updater.setInContext(path, value);
      } else {
        console.warn("trying to set context on a component that doesn't support it");
      }
    }
  }, {
    key: "_makeGlobal",
    value: function _makeGlobal(_ref5) {
      var id = _ref5.id,
          path = _ref5.path;
      var data = this.elementData.get(id);

      if (!data) {
        return;
      }

      var value;

      if (path === 'instance') {
        value = data.publicInstance;
      } else {
        value = getIn(data, path);
      }

      this.global.$tmp = value;
      console.log('$tmp =', value);
    }
  }, {
    key: "getId",
    value: function getId(internalInstance) {
      if (_typeof(internalInstance) !== 'object' || !internalInstance) {
        return internalInstance;
      }

      if (!this.idsByInternalInstances.has(internalInstance)) {
        this.idsByInternalInstances.set(internalInstance, guid());
        this.internalInstancesById.set(nullthrows(this.idsByInternalInstances.get(internalInstance)), internalInstance);
      }

      return nullthrows(this.idsByInternalInstances.get(internalInstance));
    }
  }, {
    key: "addRoot",
    value: function addRoot(renderer, internalInstance) {
      var id = this.getId(internalInstance);
      this.roots.add(id);
      this.emit('root', id);
    }
  }, {
    key: "rootCommitted",
    value: function rootCommitted(renderer, internalInstance, data) {
      var id = this.getId(internalInstance);
      this.emit('rootCommitted', id, internalInstance, data);
    }
  }, {
    key: "onMounted",
    value: function onMounted(renderer, component, data) {
      var _this5 = this;

      var id = this.getId(component);
      this.renderers.set(id, renderer);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this5.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('mount', send);
    }
  }, {
    key: "onUpdated",
    value: function onUpdated(component, data) {
      var _this6 = this;

      var id = this.getId(component);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this6.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('update', send);
    }
  }, {
    key: "onUpdatedProfileTimes",
    value: function onUpdatedProfileTimes(component, data) {
      var _this7 = this;

      var id = this.getId(component);
      this.elementData.set(id, data);
      var send = assign({}, data);

      if (send.children && send.children.map) {
        send.children = send.children.map(function (c) {
          return _this7.getId(c);
        });
      }

      send.id = id;
      send.canUpdate = send.updater && send.updater.canUpdate;
      delete send.type;
      delete send.updater;
      this.emit('updateProfileTimes', send);
    }
  }, {
    key: "onUnmounted",
    value: function onUnmounted(component) {
      var id = this.getId(component);
      this.elementData.delete(id);

      if (this.roots.has(id)) {
        this.roots.delete(id);
        this.emit('rootUnmounted', id);
      }

      this.renderers.delete(id);
      this.emit('unmount', id);
      this.idsByInternalInstances.delete(component);
    }
  }, {
    key: "_onScroll",
    value: function _onScroll() {
      if (!this._scrollUpdate) {
        this._scrollUpdate = true;
        window.requestAnimationFrame(this._updateScroll);
      }
    }
  }, {
    key: "_updateScroll",
    value: function _updateScroll() {
      this.emit('refreshMultiOverlay');
      this.emit('stopInspecting');
      this._scrollUpdate = false;
    }
  }, {
    key: "_onClick",
    value: function _onClick(event) {
      if (!this._inspectEnabled) {
        return;
      }

      var id = this.getIDForNode(event.target);

      if (!id) {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
      this.emit('setSelection', {
        id: id
      });
      this.emit('setInspectEnabled', false);
    }
  }, {
    key: "_onMouseOver",
    value: function _onMouseOver(event) {
      if (this._inspectEnabled) {
        var id = this.getIDForNode(event.target);

        if (!id) {
          return;
        }

        this.highlight(id);
      }
    }
  }, {
    key: "_onResize",
    value: function _onResize(event) {
      this.emit('stopInspecting');
    }
  }]);

  return Agent;
}(EventEmitter);

module.exports = Agent;

/***/ }),

/***/ "./app/agent/Bridge.js":
/*!*****************************!*\
  !*** ./app/agent/Bridge.js ***!
  \*****************************/
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


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var consts = __webpack_require__(/*! ./consts */ "./app/agent/consts.js");

var hydrate = __webpack_require__(/*! ./hydrate */ "./app/agent/hydrate.js");

var dehydrate = __webpack_require__(/*! ./dehydrate */ "./app/agent/dehydrate.js");

var getIn = __webpack_require__(/*! ./getIn */ "./app/agent/getIn.js");

var performanceNow = __webpack_require__(/*! fbjs/lib/performanceNow */ "./node_modules/fbjs/lib/performanceNow.js"); // Use the polyfill if the function is not native implementation


function getWindowFunction(name, polyfill) {
  if (String(window[name]).indexOf('[native code]') === -1) {
    return polyfill;
  }

  return window[name];
} // Custom polyfill that runs the queue with a backoff.
// If you change it, make sure it behaves reasonably well in Firefox.


var lastRunTimeMS = 5;
var cancelIdleCallback = getWindowFunction('cancelIdleCallback', clearTimeout);
var requestIdleCallback = getWindowFunction('requestIdleCallback', function (cb, options) {
  // Magic numbers determined by tweaking in Firefox.
  // There is no special meaning to them.
  var delayMS = 3000 * lastRunTimeMS;

  if (delayMS > 500) {
    delayMS = 500;
  }

  return setTimeout(function () {
    var startTime = performanceNow();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Infinity;
      }
    });
    var endTime = performanceNow();
    lastRunTimeMS = (endTime - startTime) / 1000;
  }, delayMS);
});
/**
 * The bridge is responsible for serializing requests between the Agent and
 * the Frontend Store. It needs to be connected to a Wall object that can send
 * JSONable data to the bridge on the other side.
 *
 * complex data
 *     |
 *     v
 *  [Bridge]
 *     |
 * jsonable data
 *     |
 *     v
 *   [wall]
 *     |
 *     v
 * ~ some barrier ~
 *     |
 *     v
 *   [wall]
 *     |
 *     v
 *  [Bridge]
 *     |
 *     v
 * "hydrated" data
 *
 * When an item is passed in that can't be serialized (anything other than a
 * plain array, object, or literal value), the object is "cleaned", and
 * rehydrated on the other side with `Symbol` attributes indicating that the
 * object needs to be inspected for more detail.
 *
 * Example:
 *
 * bridge.send('evname', {id: 'someid', foo: MyCoolObjectInstance})
 * ->
 * shows up, hydrated as
 * {
 *   id: 'someid',
 *   foo: {
 *     [consts.name]: 'MyCoolObjectInstance',
 *     [consts.type]: 'object',
 *     [consts.meta]: {},
 *     [consts.inspected]: false,
 *   }
 * }
 *
 * The `consts` variables are Symbols, and as such are non-ennumerable.
 * The front-end therefore needs to check for `consts.inspected` on received
 * objects, and can thereby display object proxies and inspect them.
 *
 * Complex objects that are passed are expected to have a top-level `id`
 * attribute, which is used for later lookup + inspection. Once it has been
 * determined that an object is no longer needed, call `.forget(id)` to clean
 * up.
 */

var Bridge =
/*#__PURE__*/
function () {
  function Bridge(wall) {
    _classCallCheck(this, Bridge);

    this._cbs = new Map();
    this._inspectables = new Map();
    this._cid = 0;
    this._listeners = {};
    this._buffer = [];
    this._flushHandle = null;
    this._callers = {};
    this._paused = false;
    this._wall = wall;
    wall.listen(this._handleMessage.bind(this));
  }

  _createClass(Bridge, [{
    key: "inspect",
    value: function inspect(id, path, cb) {
      var _cid = this._cid++;

      this._cbs.set(_cid, function (data, cleaned, proto, protoclean) {
        if (cleaned.length) {
          hydrate(data, cleaned);
        }

        if (proto && protoclean.length) {
          hydrate(proto, protoclean);
        }

        if (proto) {
          data[consts.proto] = proto;
        }

        cb(data);
      });

      this._wall.send({
        type: 'inspect',
        callback: _cid,
        path: path,
        id: id
      });
    }
  }, {
    key: "call",
    value: function call(name, args, cb) {
      var _cid = this._cid++;

      this._cbs.set(_cid, cb);

      this._wall.send({
        type: 'call',
        callback: _cid,
        args: args,
        name: name
      });
    }
  }, {
    key: "onCall",
    value: function onCall(name, handler) {
      if (this._callers[name]) {
        throw new Error('only one call handler per call name allowed');
      }

      this._callers[name] = handler;
    }
  }, {
    key: "pause",
    value: function pause() {
      this._wall.send({
        type: 'pause'
      });
    }
  }, {
    key: "resume",
    value: function resume() {
      this._wall.send({
        type: 'resume'
      });
    }
  }, {
    key: "setInspectable",
    value: function setInspectable(id, data) {
      var prev = this._inspectables.get(id);

      if (!prev) {
        this._inspectables.set(id, data);

        return;
      }

      this._inspectables.set(id, _objectSpread({}, prev, data));
    }
  }, {
    key: "send",
    value: function send(evt, data) {
      this._buffer.push({
        evt: evt,
        data: data
      });

      this.scheduleFlush();
    }
  }, {
    key: "scheduleFlush",
    value: function scheduleFlush() {
      if (!this._flushHandle && this._buffer.length) {
        var timeout = this._paused ? 5000 : 500;
        this._flushHandle = requestIdleCallback(this.flushBufferWhileIdle.bind(this), {
          timeout: timeout
        });
      }
    }
  }, {
    key: "cancelFlush",
    value: function cancelFlush() {
      if (this._flushHandle) {
        cancelIdleCallback(this._flushHandle);
        this._flushHandle = null;
      }
    }
  }, {
    key: "flushBufferWhileIdle",
    value: function flushBufferWhileIdle(deadline) {
      this._flushHandle = null; // Magic numbers were determined by tweaking in a heavy UI and seeing
      // what performs reasonably well both when DevTools are hidden and visible.
      // The goal is that we try to catch up but avoid blocking the UI.
      // When paused, it's okay to lag more, but not forever because otherwise
      // when user activates React tab, it will freeze syncing.

      var chunkCount = this._paused ? 20 : 10;
      var chunkSize = Math.round(this._buffer.length / chunkCount);
      var minChunkSize = this._paused ? 50 : 100;

      while (this._buffer.length && (deadline.timeRemaining() > 0 || deadline.didTimeout)) {
        var take = Math.min(this._buffer.length, Math.max(minChunkSize, chunkSize));

        var currentBuffer = this._buffer.splice(0, take);

        this.flushBufferSlice(currentBuffer);
      }

      if (this._buffer.length) {
        this.scheduleFlush();
      }
    }
  }, {
    key: "flushBufferSlice",
    value: function flushBufferSlice(bufferSlice) {
      var _this = this;

      var events = bufferSlice.map(function (_ref) {
        var evt = _ref.evt,
            data = _ref.data;
        var cleaned = [];
        var san = dehydrate(data, cleaned);

        if (cleaned.length) {
          _this.setInspectable(data.id, data);
        }

        return {
          type: 'event',
          evt: evt,
          data: san,
          cleaned: cleaned
        };
      });

      this._wall.send({
        type: 'many-events',
        events: events
      });
    }
  }, {
    key: "forget",
    value: function forget(id) {
      this._inspectables.delete(id);
    }
  }, {
    key: "on",
    value: function on(evt, fn) {
      if (!this._listeners[evt]) {
        this._listeners[evt] = [fn];
      } else {
        this._listeners[evt].push(fn);
      }
    }
  }, {
    key: "off",
    value: function off(evt, fn) {
      if (!this._listeners[evt]) {
        return;
      }

      var ix = this._listeners[evt].indexOf(fn);

      if (ix !== -1) {
        this._listeners[evt].splice(ix, 1);
      }
    }
  }, {
    key: "once",
    value: function once(evt, fn) {
      var self = this;

      var listener = function listener() {
        fn.apply(this, arguments);
        self.off(evt, listener);
      };

      this.on(evt, listener);
    }
  }, {
    key: "_handleMessage",
    value: function _handleMessage(payload) {
      var _this2 = this;

      if (payload.type === 'resume') {
        this._paused = false;
        this.scheduleFlush();
        return;
      }

      if (payload.type === 'pause') {
        this._paused = true;
        this.cancelFlush();
        return;
      }

      if (payload.type === 'callback') {
        var callback = this._cbs.get(payload.id);

        if (callback) {
          callback.apply(void 0, _toConsumableArray(payload.args));

          this._cbs.delete(payload.id);
        }

        return;
      }

      if (payload.type === 'call') {
        this._handleCall(payload.name, payload.args, payload.callback);

        return;
      }

      if (payload.type === 'inspect') {
        this._inspectResponse(payload.id, payload.path, payload.callback);

        return;
      }

      if (payload.type === 'event') {
        // console.log('[bridge<-]', payload.evt);
        if (payload.cleaned) {
          hydrate(payload.data, payload.cleaned);
        }

        var fns = this._listeners[payload.evt];
        var data = payload.data;

        if (fns) {
          fns.forEach(function (fn) {
            return fn(data);
          });
        }
      }

      if (payload.type === 'many-events') {
        payload.events.forEach(function (event) {
          // console.log('[bridge<-]', payload.evt);
          if (event.cleaned) {
            hydrate(event.data, event.cleaned);
          }

          var handlers = _this2._listeners[event.evt];

          if (handlers) {
            handlers.forEach(function (fn) {
              return fn(event.data);
            });
          }
        });
      }
    }
  }, {
    key: "_handleCall",
    value: function _handleCall(name, args, callback) {
      if (!this._callers[name]) {
        console.warn('unknown call: "' + name + '"');
        return;
      }

      args = !Array.isArray(args) ? [args] : args;
      var result;

      try {
        result = this._callers[name].apply(null, args);
      } catch (e) {
        console.error('Failed to call', e);
        return;
      }

      this._wall.send({
        type: 'callback',
        id: callback,
        args: [result]
      });
    }
  }, {
    key: "_inspectResponse",
    value: function _inspectResponse(id, path, callback) {
      var inspectable = this._inspectables.get(id);

      var result = {};
      var cleaned = [];
      var proto = null;
      var protoclean = [];

      if (inspectable) {
        var val = getIn(inspectable, path);
        var protod = false;
        var isFn = typeof val === 'function';

        if (val && typeof val[Symbol.iterator] === 'function') {
          var iterVal = Object.create({}); // flow throws "object literal incompatible with object type"

          var count = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var entry = _step.value;

              if (count > 100) {
                // TODO: replace this if block with better logic to handle large iterables
                break;
              }

              iterVal[count] = entry;
              count++;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          val = iterVal;
        }

        Object.getOwnPropertyNames(val).forEach(function (name) {
          if (name === '__proto__') {
            protod = true;
          }

          if (isFn && (name === 'arguments' || name === 'callee' || name === 'caller')) {
            return;
          } // $FlowIgnore This is intentional


          result[name] = dehydrate(val[name], cleaned, [name]);
        });
        /* eslint-disable no-proto */

        if (!protod && val.__proto__ && val.constructor.name !== 'Object') {
          var newProto = {};
          var pIsFn = typeof val.__proto__ === 'function';
          Object.getOwnPropertyNames(val.__proto__).forEach(function (name) {
            if (pIsFn && (name === 'arguments' || name === 'callee' || name === 'caller')) {
              return;
            }

            newProto[name] = dehydrate(val.__proto__[name], protoclean, [name]);
          });
          proto = newProto;
        }
        /* eslint-enable no-proto */

      }

      this._wall.send({
        type: 'callback',
        id: callback,
        args: [result, cleaned, proto, protoclean]
      });
    }
  }]);

  return Bridge;
}();

module.exports = Bridge;

/***/ }),

/***/ "./app/agent/consts.js":
/*!*****************************!*\
  !*** ./app/agent/consts.js ***!
  \*****************************/
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


module.exports = {
  name: Symbol('name'),
  type: Symbol('type'),
  inspected: Symbol('inspected'),
  meta: Symbol('meta'),
  proto: Symbol('proto')
};

/***/ }),

/***/ "./app/agent/dehydrate.js":
/*!********************************!*\
  !*** ./app/agent/dehydrate.js ***!
  \********************************/
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
 // This threshold determines the depth at which the bridge "dehydrates" nested data.
// Dehydration means that we don't serialize the data for e.g. postMessage or stringify,
// unless the frontend explicitly requests it (e.g. a user clicks to expand a props object).
// We tried reducing this value from 2 to 1 to improve performance:
// https://github.com/facebook/react-devtools/issues/1200
// But this caused problems with the Profiler's interaction tracing output.
// Because React mutates Fibers, profiling data that is dehydrated for old commits–
// will not be available later from within the Profiler.
// This impacts props/state as well as Interactions.
// https://github.com/facebook/react-devtools/issues/1262

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var LEVEL_THRESHOLD = 2;
/**
 * Get a enhanced/artificial type string based on the object instance
 */

function getPropType(data) {
  if (!data) {
    return null;
  }

  var type = _typeof(data);

  if (type === 'object') {
    if (data._reactFragment) {
      return 'react_fragment';
    }

    if (Array.isArray(data)) {
      return 'array';
    }

    if (ArrayBuffer.isView(data)) {
      if (data instanceof DataView) {
        return 'data_view';
      }

      return 'typed_array';
    }

    if (data instanceof ArrayBuffer) {
      return 'array_buffer';
    }

    if (typeof data[Symbol.iterator] === 'function') {
      return 'iterator';
    }

    if (Object.prototype.toString.call(data) === '[object Date]') {
      return 'date';
    }
  }

  return type;
}
/**
 * Generate the dehydrated metadata for complex object instances
 */


function createDehydrated(type, data, cleaned, path) {
  var meta = {};

  if (type === 'array' || type === 'typed_array') {
    meta.length = data.length;
  }

  if (type === 'iterator' || type === 'typed_array') {
    meta.readOnly = true;
  }

  cleaned.push(path);
  return {
    type: type,
    meta: meta,
    name: !data.constructor || data.constructor.name === 'Object' ? '' : data.constructor.name
  };
}
/**
 * Strip out complex data (instances, functions, and data nested > LEVEL_THRESHOLD levels
 * deep). The paths of the stripped out objects are appended to the `cleaned`
 * list. On the other side of the barrier, the cleaned list is used to
 * "re-hydrate" the cleaned representation into an object with symbols as
 * attributes, so that a sanitized object can be distinguished from a normal
 * object.
 *
 * Input: {"some": {"attr": fn()}, "other": AnInstance}
 * Output: {
 *   "some": {
 *     "attr": {"name": the fn.name, type: "function"}
 *   },
 *   "other": {
 *     "name": "AnInstance",
 *     "type": "object",
 *   },
 * }
 * and cleaned = [["some", "attr"], ["other"]]
 */


function dehydrate(data, cleaned) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var type = getPropType(data);

  switch (type) {
    case 'function':
      cleaned.push(path);
      return {
        name: data.name,
        type: 'function'
      };

    case 'string':
      return data.length <= 500 ? data : data.slice(0, 500) + '...';
    // We have to do this assignment b/c Flow doesn't think "symbol" is
    // something typeof would return. Error 'unexpected predicate "symbol"'

    case 'symbol':
      cleaned.push(path);
      return {
        type: 'symbol',
        name: data.toString()
      };
    // React Fragments error if you try to inspect them.

    case 'react_fragment':
      return 'A React Fragment';
    // ArrayBuffers error if you try to inspect them.

    case 'array_buffer':
    case 'data_view':
      cleaned.push(path);
      return {
        type: type,
        name: type === 'data_view' ? 'DataView' : 'ArrayBuffer',
        meta: {
          length: data.byteLength,
          uninspectable: true
        }
      };

    case 'array':
      if (level > LEVEL_THRESHOLD) {
        return createDehydrated(type, data, cleaned, path);
      }

      return data.map(function (item, i) {
        return dehydrate(item, cleaned, path.concat([i]), level + 1);
      });

    case 'typed_array':
    case 'iterator':
      return createDehydrated(type, data, cleaned, path);

    case 'date':
      cleaned.push(path);
      return {
        name: data.toString(),
        type: 'date',
        meta: {
          uninspectable: true
        }
      };

    case 'object':
      if (level > LEVEL_THRESHOLD || data.constructor && typeof data.constructor === 'function' && data.constructor.name !== 'Object') {
        return createDehydrated(type, data, cleaned, path);
      } else {
        var res = {};

        for (var name in data) {
          res[name] = dehydrate(data[name], cleaned, path.concat([name]), level + 1);
        }

        return res;
      }

    default:
      return data;
  }
}

module.exports = dehydrate;

/***/ }),

/***/ "./app/agent/getIn.js":
/*!****************************!*\
  !*** ./app/agent/getIn.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Retrieves the value from the path of nested objects
 * @param  {Object} base Base or root object for path
 * @param  {Array<String>} path nested path
 * @return {any}      Value at end of path or `mull`
 */

function getIn(base, path) {
  return path.reduce(function (obj, attr) {
    if (obj) {
      if (hasOwnProperty.call(obj, attr)) {
        return obj[attr];
      }

      if (typeof obj[Symbol.iterator] === 'function') {
        // Convert iterable to array and return array[index]
        return _toConsumableArray(obj)[attr];
      }
    }

    return null;
  }, base);
}

module.exports = getIn;

/***/ }),

/***/ "./app/agent/hydrate.js":
/*!******************************!*\
  !*** ./app/agent/hydrate.js ***!
  \******************************/
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


var consts = __webpack_require__(/*! ./consts */ "./app/agent/consts.js");

function hydrate(data, cleaned) {
  cleaned.forEach(function (path) {
    var last = path.pop();
    var obj = path.reduce(function (obj_, attr) {
      return obj_ ? obj_[attr] : null;
    }, data);

    if (!obj || !obj[last]) {
      return;
    }

    var replace = {};
    replace[consts.name] = obj[last].name;
    replace[consts.type] = obj[last].type;
    replace[consts.meta] = obj[last].meta;
    replace[consts.inspected] = false;
    obj[last] = replace;
  });
}

module.exports = hydrate;

/***/ }),

/***/ "./app/agent/inject.js":
/*!*****************************!*\
  !*** ./app/agent/inject.js ***!
  \*****************************/
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


var setupBackend = __webpack_require__(/*! ../backend/backend */ "./app/backend/backend.js");

module.exports = function (hook, agent) {
  var subs = [// Basic functionality
  hook.sub('renderer-attached', function (_ref) {
    var id = _ref.id,
        renderer = _ref.renderer,
        helpers = _ref.helpers;
    agent.setReactInternals(id, helpers);
    helpers.walkTree(agent.onMounted.bind(agent, id), agent.addRoot.bind(agent, id));
  }), hook.sub('mount', function (_ref2) {
    var renderer = _ref2.renderer,
        internalInstance = _ref2.internalInstance,
        data = _ref2.data;
    return agent.onMounted(renderer, internalInstance, data);
  }), hook.sub('unmount', function (_ref3) {
    var renderer = _ref3.renderer,
        internalInstance = _ref3.internalInstance;
    return agent.onUnmounted(internalInstance);
  }), hook.sub('update', function (_ref4) {
    var renderer = _ref4.renderer,
        internalInstance = _ref4.internalInstance,
        data = _ref4.data;
    return agent.onUpdated(internalInstance, data);
  }), // Required by Profiler plugin
  hook.sub('root', function (_ref5) {
    var renderer = _ref5.renderer,
        internalInstance = _ref5.internalInstance;
    return agent.addRoot(renderer, internalInstance);
  }), hook.sub('rootCommitted', function (_ref6) {
    var renderer = _ref6.renderer,
        internalInstance = _ref6.internalInstance,
        data = _ref6.data;
    return agent.rootCommitted(renderer, internalInstance, data);
  }), hook.sub('updateProfileTimes', function (_ref7) {
    var renderer = _ref7.renderer,
        internalInstance = _ref7.internalInstance,
        data = _ref7.data;
    return agent.onUpdatedProfileTimes(internalInstance, data);
  })];
  var success = setupBackend(hook);

  if (!success) {
    return;
  }

  hook.emit('react-devtools', agent);
  hook.reactDevtoolsAgent = agent;
  agent.on('shutdown', function () {
    subs.forEach(function (fn) {
      return fn();
    });
    hook.reactDevtoolsAgent = null;
  });
};

/***/ }),

/***/ "./app/backend/ReactDebugHooks.js":
/*!****************************************!*\
  !*** ./app/backend/ReactDebugHooks.js ***!
  \****************************************/
/*! exports provided: inspectHooks, inspectHooksOfFiber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooks", function() { return inspectHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectHooksOfFiber", function() { return inspectHooksOfFiber; });
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ "./app/node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// This file was forked from the React GitHub repo:
// https://github.com/facebook/react/blob/master/packages/react-debug-tools/src/ReactDebugHooks.js
// It has been modified slightly though to account for "shared" imports and different lint configs.
// I've also removed some of the Flow types that don't exist in DevTools.
 // HACK: These values are copied from attachRendererFiber
// In the future, the react-debug-hooks package will be published to NPM,
// and be locked to a specific range of react versions
// For now we are just hard-coding the current/latest versions.

var ContextProvider = 10;
var ForwardRef = 11;
var FunctionComponent = 0;
var SimpleMemoComponent = 15; // Used to track hooks called during a render

var hookLog = []; // Primitives

var primitiveStackCache = null;

function getPrimitiveStackCache() {
  // This initializes a cache of all primitive hooks so that the top
  // most stack frames added by calling the primitive hook can be removed.
  if (primitiveStackCache === null) {
    var cache = new Map();
    var readHookLog;

    try {
      // Use all hooks here to add them to the hook log.
      Dispatcher.useContext({
        _currentValue: null
      });
      Dispatcher.useState(null);
      Dispatcher.useReducer(function (s, a) {
        return s;
      }, null);
      Dispatcher.useRef(null);
      Dispatcher.useLayoutEffect(function () {});
      Dispatcher.useEffect(function () {});
      Dispatcher.useImperativeHandle(undefined, function () {
        return null;
      });
      Dispatcher.useCallback(function () {});
      Dispatcher.useMemo(function () {
        return null;
      });
      Dispatcher.useDebugValue(null);
    } finally {
      readHookLog = hookLog;
      hookLog = [];
    }

    for (var i = 0; i < readHookLog.length; i++) {
      var hook = readHookLog[i];
      cache.set(hook.primitive, error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError));
    }

    primitiveStackCache = cache;
  }

  return primitiveStackCache;
}

var currentHook = null;

function nextHook() {
  var hook = currentHook;

  if (hook !== null) {
    currentHook = hook.next;
  }

  return hook;
}

function readContext(context, observedBits) {
  // For now we don't expose readContext usage in the hooks debugging info.
  return context._currentValue;
}

function useContext(context, observedBits) {
  hookLog.push({
    primitive: 'Context',
    stackError: new Error(),
    value: context._currentValue
  });
  return context._currentValue;
}

function useState(initialState) {
  var hook = nextHook();
  var state = hook !== null ? hook.memoizedState : typeof initialState === 'function' ? initialState() : initialState;
  hookLog.push({
    primitive: 'State',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useReducer(reducer, initialState, initialAction) {
  var hook = nextHook();
  var state = hook !== null ? hook.memoizedState : initialState;
  hookLog.push({
    primitive: 'Reducer',
    stackError: new Error(),
    value: state
  });
  return [state, function (action) {}];
}

function useRef(initialValue) {
  var hook = nextHook();
  var ref = hook !== null ? hook.memoizedState : {
    current: initialValue
  };
  hookLog.push({
    primitive: 'Ref',
    stackError: new Error(),
    value: ref.current
  });
  return ref;
}

function useLayoutEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'LayoutEffect',
    stackError: new Error(),
    value: create
  });
}

function useEffect(create, inputs) {
  nextHook();
  hookLog.push({
    primitive: 'Effect',
    stackError: new Error(),
    value: create
  });
}

function useImperativeHandle(ref, create, inputs) {
  nextHook(); // We don't actually store the instance anywhere if there is no ref callback
  // and if there is a ref callback it might not store it but if it does we
  // have no way of knowing where. So let's only enable introspection of the
  // ref itself if it is using the object form.

  var instance = undefined;

  if (ref !== null && _typeof(ref) === 'object') {
    instance = ref.current;
  }

  hookLog.push({
    primitive: 'ImperativeHandle',
    stackError: new Error(),
    value: instance
  });
}

function useCallback(callback, inputs) {
  var hook = nextHook();
  hookLog.push({
    primitive: 'Callback',
    stackError: new Error(),
    value: hook !== null ? hook.memoizedState[0] : callback
  });
  return callback;
}

function useDebugValue(value, formatterFn) {
  hookLog.push({
    primitive: 'DebugValue',
    stackError: new Error(),
    value: typeof formatterFn === 'function' ? formatterFn(value) : value
  });
}

function useMemo(nextCreate, inputs) {
  var hook = nextHook();
  var value = hook !== null ? hook.memoizedState[0] : nextCreate();
  hookLog.push({
    primitive: 'Memo',
    stackError: new Error(),
    value: value
  });
  return value;
}

var Dispatcher = {
  readContext: readContext,
  useCallback: useCallback,
  useContext: useContext,
  useEffect: useEffect,
  useImperativeHandle: useImperativeHandle,
  useDebugValue: useDebugValue,
  useLayoutEffect: useLayoutEffect,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState
}; // Inspect

// Don't assume
//
// We can't assume that stack frames are nth steps away from anything.
// E.g. we can't assume that the root call shares all frames with the stack
// of a hook call. A simple way to demonstrate this is wrapping `new Error()`
// in a wrapper constructor like a polyfill. That'll add an extra frame.
// Similar things can happen with the call to the dispatcher. The top frame
// may not be the primitive. Likewise the primitive can have fewer stack frames
// such as when a call to useState got inlined to use dispatcher.useState.
//
// We also can't assume that the last frame of the root call is the same
// frame as the last frame of the hook call because long stack traces can be
// truncated to a stack trace limit.
var mostLikelyAncestorIndex = 0;

function findSharedIndex(hookStack, rootStack, rootIndex) {
  var source = rootStack[rootIndex].source;

  hookSearch: for (var i = 0; i < hookStack.length; i++) {
    if (hookStack[i].source === source) {
      // This looks like a match. Validate that the rest of both stack match up.
      for (var a = rootIndex + 1, b = i + 1; a < rootStack.length && b < hookStack.length; a++, b++) {
        if (hookStack[b].source !== rootStack[a].source) {
          // If not, give up and try a different match.
          continue hookSearch;
        }
      }

      return i;
    }
  }

  return -1;
}

function findCommonAncestorIndex(rootStack, hookStack) {
  var rootIndex = findSharedIndex(hookStack, rootStack, mostLikelyAncestorIndex);

  if (rootIndex !== -1) {
    return rootIndex;
  } // If the most likely one wasn't a hit, try any other frame to see if it is shared.
  // If that takes more than 5 frames, something probably went wrong.


  for (var i = 0; i < rootStack.length && i < 5; i++) {
    rootIndex = findSharedIndex(hookStack, rootStack, i);

    if (rootIndex !== -1) {
      mostLikelyAncestorIndex = i;
      return rootIndex;
    }
  }

  return -1;
}

function isReactWrapper(functionName, primitiveName) {
  if (!functionName) {
    return false;
  }

  var expectedPrimitiveName = 'use' + primitiveName;

  if (functionName.length < expectedPrimitiveName.length) {
    return false;
  }

  return functionName.lastIndexOf(expectedPrimitiveName) === functionName.length - expectedPrimitiveName.length;
}

function findPrimitiveIndex(hookStack, hook) {
  var stackCache = getPrimitiveStackCache();
  var primitiveStack = stackCache.get(hook.primitive);

  if (primitiveStack === undefined) {
    return -1;
  }

  for (var i = 0; i < primitiveStack.length && i < hookStack.length; i++) {
    if (primitiveStack[i].source !== hookStack[i].source) {
      // If the next two frames are functions called `useX` then we assume that they're part of the
      // wrappers that the React packager or other packages adds around the dispatcher.
      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      if (i < hookStack.length - 1 && isReactWrapper(hookStack[i].functionName, hook.primitive)) {
        i++;
      }

      return i;
    }
  }

  return -1;
}

function parseTrimmedStack(rootStack, hook) {
  // Get the stack trace between the primitive hook function and
  // the root function call. I.e. the stack frames of custom hooks.
  var hookStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(hook.stackError);
  var rootIndex = findCommonAncestorIndex(rootStack, hookStack);
  var primitiveIndex = findPrimitiveIndex(hookStack, hook);

  if (rootIndex === -1 || primitiveIndex === -1 || rootIndex - primitiveIndex < 2) {
    // Something went wrong. Give up.
    return null;
  }

  return hookStack.slice(primitiveIndex, rootIndex - 1);
}

function parseCustomHookName(functionName) {
  if (!functionName) {
    return '';
  }

  var startIndex = functionName.lastIndexOf('.');

  if (startIndex === -1) {
    startIndex = 0;
  }

  if (functionName.substr(startIndex, 3) === 'use') {
    startIndex += 3;
  }

  return functionName.substr(startIndex);
}

function buildTree(rootStack, readHookLog) {
  var rootChildren = [];
  var prevStack = null;
  var levelChildren = rootChildren;
  var stackOfChildren = [];

  for (var i = 0; i < readHookLog.length; i++) {
    var hook = readHookLog[i];
    var stack = parseTrimmedStack(rootStack, hook);

    if (stack !== null) {
      // Note: The indices 0 <= n < length-1 will contain the names.
      // The indices 1 <= n < length will contain the source locations.
      // That's why we get the name from n - 1 and don't check the source
      // of index 0.
      var commonSteps = 0;

      if (prevStack !== null) {
        // Compare the current level's stack to the new stack.
        while (commonSteps < stack.length && commonSteps < prevStack.length) {
          var stackSource = stack[stack.length - commonSteps - 1].source;
          var prevSource = prevStack[prevStack.length - commonSteps - 1].source;

          if (stackSource !== prevSource) {
            break;
          }

          commonSteps++;
        } // Pop back the stack as many steps as were not common.


        for (var j = prevStack.length - 1; j > commonSteps; j--) {
          levelChildren = stackOfChildren.pop();
        }
      } // The remaining part of the new stack are custom hooks. Push them
      // to the tree.


      for (var _j = stack.length - commonSteps - 1; _j >= 1; _j--) {
        var children = [];
        levelChildren.push({
          name: parseCustomHookName(stack[_j - 1].functionName),
          value: undefined,
          subHooks: children
        });
        stackOfChildren.push(levelChildren);
        levelChildren = children;
      }

      prevStack = stack;
    }

    levelChildren.push({
      name: hook.primitive,
      value: hook.value,
      subHooks: []
    });
  } // Associate custom hook values (useDebugValue() hook entries) with the correct hooks.


  rollupDebugValues(rootChildren, null);
  return rootChildren;
} // Custom hooks support user-configurable labels (via the useDebugValue() hook).
// That hook adds the user-provided values to the hooks tree.
// This method removes those values (so they don't appear in DevTools),
// and bubbles them up to the "value" attribute of their parent custom hook.


function rollupDebugValues(hooksTree, parentHooksNode) {
  var debugValueHooksNodes = [];

  for (var i = 0; i < hooksTree.length; i++) {
    var hooksNode = hooksTree[i];

    if (hooksNode.name === 'DebugValue' && hooksNode.subHooks.length === 0) {
      hooksTree.splice(i, 1);
      i--;
      debugValueHooksNodes.push(hooksNode);
    } else {
      rollupDebugValues(hooksNode.subHooks, hooksNode);
    }
  } // Bubble debug value labels to their parent custom hook.
  // If there is no parent hook, just ignore them.
  // (We may warn about this in the future.)


  if (parentHooksNode !== null) {
    if (debugValueHooksNodes.length === 1) {
      parentHooksNode.value = debugValueHooksNodes[0].value;
    } else if (debugValueHooksNodes.length > 1) {
      parentHooksNode.value = debugValueHooksNodes.map(function (_ref) {
        var value = _ref.value;
        return value;
      });
    }
  }
}

function inspectHooks(renderFunction, props, currentDispatcher) {
  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function setupContexts(contextMap, fiber) {
  var current = fiber;

  while (current) {
    if (current.tag === ContextProvider) {
      var providerType = current.type;
      var context = providerType._context;

      if (!contextMap.has(context)) {
        // Store the current value that we're going to restore later.
        contextMap.set(context, context._currentValue); // Set the inner most provider value on the context.

        context._currentValue = current.memoizedProps.value;
      }
    }

    current = current.return;
  }
}

function restoreContexts(contextMap) {
  contextMap.forEach(function (value, context) {
    return context._currentValue = value;
  });
}

function inspectHooksOfForwardRef(renderFunction, props, ref, currentDispatcher) {
  var previousDispatcher = currentDispatcher.current;
  var readHookLog;
  currentDispatcher.current = Dispatcher;
  var ancestorStackError;

  try {
    ancestorStackError = new Error();
    renderFunction(props, ref);
  } finally {
    readHookLog = hookLog;
    hookLog = [];
    currentDispatcher.current = previousDispatcher;
  }

  var rootStack = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(ancestorStackError);
  return buildTree(rootStack, readHookLog);
}

function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = Object.assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function inspectHooksOfFiber(fiber, currentDispatcher) {
  if (fiber.tag !== FunctionComponent && fiber.tag !== SimpleMemoComponent && fiber.tag !== ForwardRef) {
    throw new Error('Unknown Fiber. Needs to be a function component to inspect hooks.');
  } // Warm up the cache so that it doesn't consume the currentHook.


  getPrimitiveStackCache();
  var type = fiber.type;
  var props = fiber.memoizedProps;

  if (type !== fiber.elementType) {
    props = resolveDefaultProps(type, props);
  } // Set up the current hook so that we can step through and read the
  // current state from them.


  currentHook = fiber.memoizedState;
  var contextMap = new Map();

  try {
    setupContexts(contextMap, fiber);

    if (fiber.tag === ForwardRef) {
      return inspectHooksOfForwardRef(type.render, props, fiber.ref, currentDispatcher);
    }

    return inspectHooks(type, props, currentDispatcher);
  } finally {
    currentHook = null;
    restoreContexts(contextMap);
  }
}

/***/ }),

/***/ "./app/backend/attachRenderer.js":
/*!***************************************!*\
  !*** ./app/backend/attachRenderer.js ***!
  \***************************************/
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


var getData = __webpack_require__(/*! ./getData */ "./app/backend/getData.js");

var getData012 = __webpack_require__(/*! ./getData012 */ "./app/backend/getData012.js");

var attachRendererFiber = __webpack_require__(/*! ./attachRendererFiber */ "./app/backend/attachRendererFiber.js");

/**
 * This takes care of patching the renderer to emit events on the global
 * `Hook`. The returned object has a `.cleanup` method to un-patch everything.
 */
function attachRenderer(hook, rid, renderer) {
  var rootNodeIDMap = new Map();
  var extras = {}; // Before 0.13 there was no Reconciler, so we patch Component.Mixin

  var isPre013 = !renderer.Reconciler; // React Fiber

  if (typeof renderer.findFiberByHostInstance === 'function') {
    return attachRendererFiber(hook, rid, renderer);
  } // React Native


  if (renderer.Mount.findNodeHandle && renderer.Mount.nativeTagToRootNodeID) {
    extras.getNativeFromReactElement = function (component) {
      return renderer.Mount.findNodeHandle(component);
    };

    extras.getReactElementFromNative = function (nativeTag) {
      var id = renderer.Mount.nativeTagToRootNodeID(nativeTag);
      return rootNodeIDMap.get(id);
    }; // React DOM 15+

  } else if (renderer.ComponentTree) {
    extras.getNativeFromReactElement = function (component) {
      return renderer.ComponentTree.getNodeFromInstance(component);
    };

    extras.getReactElementFromNative = function (node) {
      return renderer.ComponentTree.getClosestInstanceFromNode(node);
    }; // React DOM

  } else if (renderer.Mount.getID && renderer.Mount.getNode) {
    extras.getNativeFromReactElement = function (component) {
      try {
        return renderer.Mount.getNode(component._rootNodeID);
      } catch (e) {
        return undefined;
      }
    };

    extras.getReactElementFromNative = function (node) {
      // $FlowFixMe
      var id = renderer.Mount.getID(node);

      while (node && node.parentNode && !id) {
        node = node.parentNode; // $FlowFixMe

        id = renderer.Mount.getID(node);
      }

      return rootNodeIDMap.get(id);
    };
  } else {
    console.warn('Unknown react version (does not have getID), probably an unshimmed React Native');
  }

  var oldMethods;
  var oldRenderComponent;
  var oldRenderRoot; // React DOM

  if (renderer.Mount._renderNewRootComponent) {
    oldRenderRoot = decorateResult(renderer.Mount, '_renderNewRootComponent', function (internalInstance) {
      hook.emit('root', {
        renderer: rid,
        internalInstance: internalInstance
      });
    }); // React Native
  } else if (renderer.Mount.renderComponent) {
    oldRenderComponent = decorateResult(renderer.Mount, 'renderComponent', function (internalInstance) {
      hook.emit('root', {
        renderer: rid,
        internalInstance: internalInstance._reactInternalInstance
      });
    });
  }

  if (renderer.Component) {
    console.error('You are using a version of React with limited support in this version of the devtools.\nPlease upgrade to use at least 0.13, or you can downgrade to use the old version of the devtools:\ninstructions here https://github.com/facebook/react-devtools/tree/devtools-next#how-do-i-use-this-for-react--013'); // 0.11 - 0.12
    // $FlowFixMe renderer.Component is not "possibly undefined"

    oldMethods = decorateMany(renderer.Component.Mixin, {
      mountComponent: function mountComponent() {
        var _this = this;

        rootNodeIDMap.set(this._rootNodeID, this); // FIXME DOMComponent calls Component.Mixin, and sets up the
        // `children` *after* that call, meaning we don't have access to the
        // children at this point. Maybe we should find something else to shim
        // (do we have access to DOMComponent here?) so that we don't have to
        // setTimeout.

        setTimeout(function () {
          hook.emit('mount', {
            internalInstance: _this,
            data: getData012(_this),
            renderer: rid
          });
        }, 0);
      },
      updateComponent: function updateComponent() {
        var _this2 = this;

        setTimeout(function () {
          hook.emit('update', {
            internalInstance: _this2,
            data: getData012(_this2),
            renderer: rid
          });
        }, 0);
      },
      unmountComponent: function unmountComponent() {
        hook.emit('unmount', {
          internalInstance: this,
          renderer: rid
        });
        rootNodeIDMap.delete(this._rootNodeID);
      }
    });
  } else if (renderer.Reconciler) {
    oldMethods = decorateMany(renderer.Reconciler, {
      mountComponent: function mountComponent(internalInstance, rootID, transaction, context) {
        var data = getData(internalInstance);
        rootNodeIDMap.set(internalInstance._rootNodeID, internalInstance);
        hook.emit('mount', {
          internalInstance: internalInstance,
          data: data,
          renderer: rid
        });
      },
      performUpdateIfNecessary: function performUpdateIfNecessary(internalInstance, nextChild, transaction, context) {
        hook.emit('update', {
          internalInstance: internalInstance,
          data: getData(internalInstance),
          renderer: rid
        });
      },
      receiveComponent: function receiveComponent(internalInstance, nextChild, transaction, context) {
        hook.emit('update', {
          internalInstance: internalInstance,
          data: getData(internalInstance),
          renderer: rid
        });
      },
      unmountComponent: function unmountComponent(internalInstance) {
        hook.emit('unmount', {
          internalInstance: internalInstance,
          renderer: rid
        });
        rootNodeIDMap.delete(internalInstance._rootNodeID);
      }
    });
  }

  extras.walkTree = function (visit, visitRoot) {
    var onMount = function onMount(component, data) {
      rootNodeIDMap.set(component._rootNodeID, component);
      visit(component, data);
    };

    walkRoots(renderer.Mount._instancesByReactRootID || renderer.Mount._instancesByContainerID, onMount, visitRoot, isPre013);
  };

  extras.cleanup = function () {
    if (oldMethods) {
      if (renderer.Component) {
        restoreMany(renderer.Component.Mixin, oldMethods);
      } else {
        restoreMany(renderer.Reconciler, oldMethods);
      }
    }

    if (oldRenderRoot) {
      renderer.Mount._renderNewRootComponent = oldRenderRoot;
    }

    if (oldRenderComponent) {
      renderer.Mount.renderComponent = oldRenderComponent;
    }

    oldMethods = null;
    oldRenderRoot = null;
    oldRenderComponent = null;
  };

  extras.renderer = null;
  return extras;
}

function walkRoots(roots, onMount, onRoot, isPre013) {
  for (var name in roots) {
    walkNode(roots[name], onMount, isPre013);
    onRoot(roots[name]);
  }
}

function walkNode(internalInstance, onMount, isPre013) {
  var data = isPre013 ? getData012(internalInstance) : getData(internalInstance);

  if (data.children && Array.isArray(data.children)) {
    data.children.forEach(function (child) {
      return walkNode(child, onMount, isPre013);
    });
  }

  onMount(internalInstance, data);
}

function decorateResult(obj, attr, fn) {
  var old = obj[attr];

  obj[attr] = function (instance) {
    var res = old.apply(this, arguments);
    fn(res);
    return res;
  };

  return old;
}

function decorate(obj, attr, fn) {
  var old = obj[attr];

  obj[attr] = function (instance) {
    var res = old.apply(this, arguments);
    fn.apply(this, arguments);
    return res;
  };

  return old;
}

function decorateMany(source, fns) {
  var olds = {};

  for (var name in fns) {
    olds[name] = decorate(source, name, fns[name]);
  }

  return olds;
}

function restoreMany(source, olds) {
  for (var name in olds) {
    source[name] = olds[name];
  }
}

module.exports = attachRenderer;

/***/ }),

/***/ "./app/backend/attachRendererFiber.js":
/*!********************************************!*\
  !*** ./app/backend/attachRendererFiber.js ***!
  \********************************************/
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var semver = __webpack_require__(/*! semver */ "./node_modules/semver/semver.js");

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "./app/backend/copyWithSet.js");

var getDisplayName = __webpack_require__(/*! ./getDisplayName */ "./app/backend/getDisplayName.js"); // Taken from ReactElement.


function resolveDefaultProps(Component, baseProps) {
  if (Component && Component.defaultProps) {
    // Resolve default props. Taken from ReactElement
    var props = Object.assign({}, baseProps);
    var defaultProps = Component.defaultProps;

    for (var propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  return baseProps;
}

function getInternalReactConstants(version) {
  var ReactTypeOfWork;
  var ReactSymbols;
  var ReactTypeOfSideEffect; // **********************************************************
  // The section below is copied from files in React repo.
  // Keep it in sync, and add version guards if it changes.
  // **********************************************************

  if (semver.gte(version, '16.6.0-beta.0')) {
    ReactTypeOfWork = {
      ClassComponent: 1,
      ContextConsumer: 9,
      ContextProvider: 10,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      ForwardRef: 11,
      Fragment: 7,
      FunctionComponent: 0,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: 17,
      IndeterminateComponent: 2,
      LazyComponent: 16,
      MemoComponent: 14,
      Mode: 8,
      Profiler: 12,
      SimpleMemoComponent: 15,
      SuspenseComponent: 13,
      YieldComponent: -1 // Removed

    };
  } else if (semver.gte(version, '16.4.3-alpha')) {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 11,
      ContextProvider: 12,
      CoroutineComponent: -1,
      // Removed
      CoroutineHandlerPhase: -1,
      // Removed
      ForwardRef: 13,
      Fragment: 9,
      FunctionComponent: 0,
      HostComponent: 7,
      HostPortal: 6,
      HostRoot: 5,
      HostText: 8,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 4,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 10,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      YieldComponent: -1 // Removed

    };
  } else {
    ReactTypeOfWork = {
      ClassComponent: 2,
      ContextConsumer: 12,
      ContextProvider: 13,
      CoroutineComponent: 7,
      CoroutineHandlerPhase: 8,
      ForwardRef: 14,
      Fragment: 10,
      FunctionComponent: 1,
      HostComponent: 5,
      HostPortal: 4,
      HostRoot: 3,
      HostText: 6,
      IncompleteClassComponent: -1,
      // Doesn't exist yet
      IndeterminateComponent: 0,
      LazyComponent: -1,
      // Doesn't exist yet
      MemoComponent: -1,
      // Doesn't exist yet
      Mode: 11,
      Profiler: 15,
      SimpleMemoComponent: -1,
      // Doesn't exist yet
      SuspenseComponent: 16,
      YieldComponent: 9
    };
  }

  ReactSymbols = {
    CONCURRENT_MODE_NUMBER: 0xeacf,
    CONCURRENT_MODE_SYMBOL_STRING: 'Symbol(react.concurrent_mode)',
    DEPRECATED_ASYNC_MODE_SYMBOL_STRING: 'Symbol(react.async_mode)',
    CONTEXT_CONSUMER_NUMBER: 0xeace,
    CONTEXT_CONSUMER_SYMBOL_STRING: 'Symbol(react.context)',
    CONTEXT_PROVIDER_NUMBER: 0xeacd,
    CONTEXT_PROVIDER_SYMBOL_STRING: 'Symbol(react.provider)',
    FORWARD_REF_NUMBER: 0xead0,
    FORWARD_REF_SYMBOL_STRING: 'Symbol(react.forward_ref)',
    MEMO_NUMBER: 0xead3,
    MEMO_SYMBOL_STRING: 'Symbol(react.memo)',
    PROFILER_NUMBER: 0xead2,
    PROFILER_SYMBOL_STRING: 'Symbol(react.profiler)',
    STRICT_MODE_NUMBER: 0xeacc,
    STRICT_MODE_SYMBOL_STRING: 'Symbol(react.strict_mode)',
    SUSPENSE_NUMBER: 0xead1,
    SUSPENSE_SYMBOL_STRING: 'Symbol(react.suspense)',
    DEPRECATED_PLACEHOLDER_SYMBOL_STRING: 'Symbol(react.placeholder)'
  };
  ReactTypeOfSideEffect = {
    PerformedWork: 1
  }; // **********************************************************
  // End of copied code.
  // **********************************************************

  return {
    ReactTypeOfWork: ReactTypeOfWork,
    ReactSymbols: ReactSymbols,
    ReactTypeOfSideEffect: ReactTypeOfSideEffect
  };
}

function attachRendererFiber(hook, rid, renderer) {
  var overrideProps = renderer.overrideProps;

  var _getInternalReactCons = getInternalReactConstants(renderer.version),
      ReactTypeOfWork = _getInternalReactCons.ReactTypeOfWork,
      ReactSymbols = _getInternalReactCons.ReactSymbols,
      ReactTypeOfSideEffect = _getInternalReactCons.ReactTypeOfSideEffect;

  var PerformedWork = ReactTypeOfSideEffect.PerformedWork;
  var FunctionComponent = ReactTypeOfWork.FunctionComponent,
      ClassComponent = ReactTypeOfWork.ClassComponent,
      ContextConsumer = ReactTypeOfWork.ContextConsumer,
      Fragment = ReactTypeOfWork.Fragment,
      ForwardRef = ReactTypeOfWork.ForwardRef,
      HostRoot = ReactTypeOfWork.HostRoot,
      HostPortal = ReactTypeOfWork.HostPortal,
      HostComponent = ReactTypeOfWork.HostComponent,
      HostText = ReactTypeOfWork.HostText,
      IncompleteClassComponent = ReactTypeOfWork.IncompleteClassComponent,
      IndeterminateComponent = ReactTypeOfWork.IndeterminateComponent,
      MemoComponent = ReactTypeOfWork.MemoComponent,
      SimpleMemoComponent = ReactTypeOfWork.SimpleMemoComponent;
  var CONCURRENT_MODE_NUMBER = ReactSymbols.CONCURRENT_MODE_NUMBER,
      CONCURRENT_MODE_SYMBOL_STRING = ReactSymbols.CONCURRENT_MODE_SYMBOL_STRING,
      DEPRECATED_ASYNC_MODE_SYMBOL_STRING = ReactSymbols.DEPRECATED_ASYNC_MODE_SYMBOL_STRING,
      CONTEXT_CONSUMER_NUMBER = ReactSymbols.CONTEXT_CONSUMER_NUMBER,
      CONTEXT_CONSUMER_SYMBOL_STRING = ReactSymbols.CONTEXT_CONSUMER_SYMBOL_STRING,
      CONTEXT_PROVIDER_NUMBER = ReactSymbols.CONTEXT_PROVIDER_NUMBER,
      CONTEXT_PROVIDER_SYMBOL_STRING = ReactSymbols.CONTEXT_PROVIDER_SYMBOL_STRING,
      PROFILER_NUMBER = ReactSymbols.PROFILER_NUMBER,
      PROFILER_SYMBOL_STRING = ReactSymbols.PROFILER_SYMBOL_STRING,
      STRICT_MODE_NUMBER = ReactSymbols.STRICT_MODE_NUMBER,
      STRICT_MODE_SYMBOL_STRING = ReactSymbols.STRICT_MODE_SYMBOL_STRING,
      SUSPENSE_NUMBER = ReactSymbols.SUSPENSE_NUMBER,
      SUSPENSE_SYMBOL_STRING = ReactSymbols.SUSPENSE_SYMBOL_STRING,
      DEPRECATED_PLACEHOLDER_SYMBOL_STRING = ReactSymbols.DEPRECATED_PLACEHOLDER_SYMBOL_STRING; // TODO: we might want to change the data structure
  // once we no longer support Stack versions of `getData`.

  function getDataFiber(fiber) {
    var elementType = fiber.elementType;
    var type = fiber.type;
    var key = fiber.key;
    var ref = fiber.ref;
    var tag = fiber.tag;
    var source = fiber._debugSource;
    var publicInstance = null;
    var props = null;
    var state = null;
    var children = null;
    var context = null;
    var updater = null;
    var nodeType = null;
    var name = null;
    var text = null;
    var resolvedContext = null; // Tracing

    var memoizedInteractions = null; // Profiler

    var actualDuration = null;
    var actualStartTime = null;
    var treeBaseDuration = null; // Suspense

    var isTimedOutSuspense = false; // Hooks inspection

    var containsHooks = (tag === FunctionComponent || tag === SimpleMemoComponent || tag === ForwardRef) && !!fiber.memoizedState;
    var resolvedType = type;

    if (_typeof(type) === 'object' && type !== null) {
      if (typeof type.then === 'function') {
        resolvedType = type._reactResult;
      }
    }

    if (typeof overrideProps === 'function') {
      updater = {
        canUpdate: true,
        setState: null,
        setInProps: overrideProps.bind(null, fiber),
        setInState: null,
        setInContext: null
      };
    }

    switch (tag) {
      case ClassComponent:
      case FunctionComponent:
      case IncompleteClassComponent:
      case IndeterminateComponent:
        nodeType = 'Composite';
        name = getDisplayName(resolvedType);
        publicInstance = fiber.stateNode;
        props = fiber.memoizedProps;
        state = fiber.memoizedState;

        if (publicInstance != null) {
          context = publicInstance.context;

          if (context && Object.keys(context).length === 0) {
            context = null;
          }
        }

        var inst = publicInstance;

        if (inst) {
          updater = {
            canUpdate: true,
            setState: inst.setState && inst.setState.bind(inst),
            setInProps: inst.forceUpdate && setInProps.bind(null, fiber),
            setInState: inst.forceUpdate && setInState.bind(null, inst),
            setInContext: inst.forceUpdate && setInContext.bind(null, inst)
          };
        }

        children = [];
        break;

      case ForwardRef:
        var functionName = getDisplayName(resolvedType.render, '');
        nodeType = 'Special';
        name = resolvedType.displayName || (functionName !== '' ? "ForwardRef(".concat(functionName, ")") : 'ForwardRef');
        props = fiber.memoizedProps;
        state = fiber.memoizedState;
        children = [];
        break;

      case HostRoot:
        nodeType = 'Wrapper';
        children = [];
        memoizedInteractions = fiber.stateNode.memoizedInteractions;
        break;

      case HostPortal:
        nodeType = 'Portal';
        name = 'ReactPortal';
        props = {
          target: fiber.stateNode.containerInfo
        };
        children = [];
        break;

      case HostComponent:
        nodeType = 'Native';
        name = fiber.type; // TODO (bvaughn) we plan to remove this prefix anyway.
        // We can cut this special case out when it's gone.

        name = name.replace('topsecret-', '');
        publicInstance = fiber.stateNode;
        props = fiber.memoizedProps;

        if (typeof props.children === 'string' || typeof props.children === 'number') {
          children = props.children.toString();
        } else {
          children = [];
        }

        if (typeof fiber.stateNode.setNativeProps === 'function') {
          // For editing styles in RN
          updater = {
            setNativeProps: function setNativeProps(nativeProps) {
              fiber.stateNode.setNativeProps(nativeProps);
            }
          };
        }

        break;

      case HostText:
        nodeType = 'Text';
        publicInstance = fiber.stateNode;
        text = fiber.memoizedProps;
        break;

      case Fragment:
        nodeType = 'Wrapper';
        children = [];
        break;

      case MemoComponent:
      case SimpleMemoComponent:
        nodeType = 'Composite';

        if (elementType.displayName) {
          name = elementType.displayName;
        } else {
          var displayName = type.displayName || type.name;
          name = displayName ? "Memo(".concat(displayName, ")") : 'Memo';
        }

        props = fiber.memoizedProps;
        state = fiber.memoizedState;
        children = [];
        break;

      default:
        var symbolOrNumber = _typeof(type) === 'object' && type !== null ? type.$$typeof : type; // $FlowFixMe facebook/flow/issues/2362

        var switchValue = _typeof(symbolOrNumber) === 'symbol' ? symbolOrNumber.toString() : symbolOrNumber;

        switch (switchValue) {
          case CONCURRENT_MODE_NUMBER:
          case CONCURRENT_MODE_SYMBOL_STRING:
          case DEPRECATED_ASYNC_MODE_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'ConcurrentMode';
            children = [];
            break;

          case CONTEXT_PROVIDER_NUMBER:
          case CONTEXT_PROVIDER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps; // 16.3.0 exposed the context object as "context"
            // PR #12501 changed it to "_context" for 16.3.1+

            resolvedContext = fiber.type._context || fiber.type.context;
            name = "".concat(resolvedContext.displayName || 'Context', ".Provider");
            children = [];
            break;

          case CONTEXT_CONSUMER_NUMBER:
          case CONTEXT_CONSUMER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps; // 16.3-16.5 read from "type" because the Consumer is the actual context object.
            // 16.6+ should read from "type._context" because Consumer can be different (in DEV).

            resolvedContext = fiber.type._context || fiber.type; // NOTE: TraceUpdatesBackendManager depends on the name ending in '.Consumer'
            // If you change the name, figure out a more resilient way to detect it.

            name = "".concat(resolvedContext.displayName || 'Context', ".Consumer");
            children = [];
            break;

          case STRICT_MODE_NUMBER:
          case STRICT_MODE_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'StrictMode';
            children = [];
            break;

          case SUSPENSE_NUMBER:
          case SUSPENSE_SYMBOL_STRING:
          case DEPRECATED_PLACEHOLDER_SYMBOL_STRING:
            nodeType = 'Special';
            name = 'Suspense';
            props = fiber.memoizedProps;
            children = []; // Suspense components only have a non-null memoizedState if they're timed-out.

            isTimedOutSuspense = fiber.memoizedState !== null;
            break;

          case PROFILER_NUMBER:
          case PROFILER_SYMBOL_STRING:
            nodeType = 'Special';
            props = fiber.memoizedProps;
            name = "Profiler(".concat(fiber.memoizedProps.id, ")");
            children = [];
            break;

          default:
            nodeType = 'Native';
            props = fiber.memoizedProps;
            name = 'TODO_NOT_IMPLEMENTED_YET';
            children = [];
            break;
        }

        break;
    }

    if (props !== null && _typeof(fiber.elementType) !== undefined && fiber.type !== fiber.elementType) {
      props = resolveDefaultProps(fiber.type, props);
    }

    if (Array.isArray(children)) {
      if (isTimedOutSuspense) {
        // The behavior of timed-out Suspense trees is unique.
        // Rather than unmount the timed out content (and possibly lose important state),
        // React re-parents this content within a hidden Fragment while the fallback is showing.
        // This behavior doesn't need to be observable in the DevTools though.
        // It might even result in a bad user experience for e.g. node selection in the Elements panel.
        // The easiest fix is to strip out the intermediate Fragment fibers,
        // so the Elements panel and Profiler don't need to special case them.
        var primaryChildFragment = fiber.child;
        var primaryChild = primaryChildFragment.child;
        var fallbackChildFragment = primaryChildFragment.sibling;
        var fallbackChild = fallbackChildFragment.child;
        children.push(primaryChild);
        children.push(fallbackChild);
      } else {
        var child = fiber.child;

        while (child) {
          children.push(getOpaqueNode(child));
          child = child.sibling;
        }
      }
    }

    if (fiber.actualDuration !== undefined) {
      actualDuration = fiber.actualDuration;
      actualStartTime = fiber.actualStartTime;
      treeBaseDuration = fiber.treeBaseDuration;
    }

    if (publicInstance === null) {
      // publicInstance is used for $r.
      // If we have nothing useful to expose, at least give props and state.
      // This is an escape hatch to avoid a situation where there is useful
      // data in the tree but DevTools don't offer any way to get it through console.
      publicInstance = {
        props: props,
        state: state,
        type: type
      };
    } // $FlowFixMe


    return {
      nodeType: nodeType,
      type: type,
      key: key,
      ref: ref,
      source: source,
      name: name,
      props: props,
      state: state,
      context: context,
      children: children,
      text: text,
      updater: updater,
      publicInstance: publicInstance,
      // Tracing
      memoizedInteractions: memoizedInteractions,
      // Profiler data
      actualDuration: actualDuration,
      actualStartTime: actualStartTime,
      treeBaseDuration: treeBaseDuration,
      // Hooks inspection
      containsHooks: containsHooks
    };
  }

  function setInProps(fiber, path, value) {
    var inst = fiber.stateNode;
    fiber.pendingProps = copyWithSet(inst.props, path, value);

    if (fiber.alternate) {
      // We don't know which fiber is the current one because DevTools may bail out of getDataFiber() call,
      // and so the data object may refer to another version of the fiber. Therefore we update pendingProps
      // on both. I hope that this is safe.
      fiber.alternate.pendingProps = fiber.pendingProps;
    }

    fiber.stateNode.forceUpdate();
  }

  function setInState(inst, path, value) {
    setIn(inst.state, path, value);
    inst.forceUpdate();
  }

  function setInContext(inst, path, value) {
    setIn(inst.context, path, value);
    inst.forceUpdate();
  }

  function setIn(obj, path, value) {
    var last = path.pop();
    var parent = path.reduce(function (obj_, attr) {
      return obj_ ? obj_[attr] : null;
    }, obj);

    if (parent) {
      parent[last] = value;
    }
  } // This is a slightly annoying indirection.
  // It is currently necessary because DevTools wants
  // to use unique objects as keys for instances.
  // However fibers have two versions.
  // We use this set to remember first encountered fiber for
  // each conceptual instance.


  var opaqueNodes = new Set();

  function getOpaqueNode(fiber) {
    if (opaqueNodes.has(fiber)) {
      return fiber;
    }

    var alternate = fiber.alternate;

    if (alternate != null && opaqueNodes.has(alternate)) {
      return alternate;
    }

    opaqueNodes.add(fiber);
    return fiber;
  }

  function hasDataChanged(prevFiber, nextFiber) {
    switch (nextFiber.tag) {
      case ClassComponent:
      case FunctionComponent:
      case ContextConsumer:
      case MemoComponent:
      case SimpleMemoComponent:
        // For types that execute user code, we check PerformedWork effect.
        // We don't reflect bailouts (either referential or sCU) in DevTools.
        // eslint-disable-next-line no-bitwise
        return (nextFiber.effectTag & PerformedWork) === PerformedWork;
      // Note: ContextConsumer only gets PerformedWork effect in 16.3.3+
      // so it won't get highlighted with React 16.3.0 to 16.3.2.

      default:
        // For host components and other types, we compare inputs
        // to determine whether something is an update.
        return prevFiber.memoizedProps !== nextFiber.memoizedProps || prevFiber.memoizedState !== nextFiber.memoizedState || prevFiber.ref !== nextFiber.ref;
    }
  }

  function haveProfilerTimesChanged(prevFiber, nextFiber) {
    return prevFiber.actualDuration !== undefined && ( // Short-circuit check for non-profiling builds
    prevFiber.actualDuration !== nextFiber.actualDuration || prevFiber.actualStartTime !== nextFiber.actualStartTime || prevFiber.treeBaseDuration !== nextFiber.treeBaseDuration);
  }

  var pendingEvents = [];

  function flushPendingEvents() {
    var events = pendingEvents;
    pendingEvents = [];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      hook.emit(event.type, event);
    }
  }

  function enqueueMount(fiber) {
    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: getDataFiber(fiber),
      renderer: rid,
      type: 'mount'
    });
    var isRoot = fiber.tag === HostRoot;

    if (isRoot) {
      pendingEvents.push({
        internalInstance: getOpaqueNode(fiber),
        renderer: rid,
        type: 'root'
      });
    }
  }

  function enqueueUpdateIfNecessary(fiber, hasChildOrderChanged) {
    var data = getDataFiber(fiber);

    if (!hasChildOrderChanged && !hasDataChanged(fiber.alternate, fiber)) {
      // If only timing information has changed, we still need to update the nodes.
      // But we can do it in a faster way since we know it's safe to skip the children.
      // It's also important to avoid emitting an "update" signal for the node in this case,
      // Since that would indicate to the Profiler that it was part of the "commit" when it wasn't.
      if (haveProfilerTimesChanged(fiber.alternate, fiber)) {
        pendingEvents.push({
          internalInstance: getOpaqueNode(fiber),
          data: data,
          renderer: rid,
          type: 'updateProfileTimes'
        });
      }

      return;
    }

    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: data,
      renderer: rid,
      type: 'update'
    });
  }

  function enqueueUnmount(fiber) {
    var isRoot = fiber.tag === HostRoot;
    var opaqueNode = getOpaqueNode(fiber);
    var event = {
      internalInstance: opaqueNode,
      renderer: rid,
      type: 'unmount'
    };

    if (isRoot) {
      pendingEvents.push(event);
    } else {
      // Non-root fibers are deleted during the commit phase.
      // They are deleted in the child-first order. However
      // DevTools currently expects deletions to be parent-first.
      // This is why we unshift deletions rather than push them.
      pendingEvents.unshift(event);
    }

    opaqueNodes.delete(opaqueNode);
  }

  function markRootCommitted(fiber) {
    pendingEvents.push({
      internalInstance: getOpaqueNode(fiber),
      data: getDataFiber(fiber),
      renderer: rid,
      type: 'rootCommitted'
    });
  }

  function mountFiber(fiber) {
    // Depth-first.
    // Logs mounting of children first, parents later.
    var node = fiber;

    outer: while (true) {
      if (node.child) {
        node.child.return = node;
        node = node.child;
        continue;
      }

      enqueueMount(node);

      if (node == fiber) {
        return;
      }

      if (node.sibling) {
        node.sibling.return = node.return;
        node = node.sibling;
        continue;
      }

      while (node.return) {
        node = node.return;
        enqueueMount(node);

        if (node == fiber) {
          return;
        }

        if (node.sibling) {
          node.sibling.return = node.return;
          node = node.sibling;
          continue outer;
        }
      }

      return;
    }
  }

  function updateFiber(nextFiber, prevFiber) {
    // Suspense components only have a non-null memoizedState if they're timed-out.
    var isTimedOutSuspense = nextFiber.tag === ReactTypeOfWork.SuspenseComponent && nextFiber.memoizedState !== null;

    if (isTimedOutSuspense) {
      // The behavior of timed-out Suspense trees is unique.
      // Rather than unmount the timed out content (and possibly lose important state),
      // React re-parents this content within a hidden Fragment while the fallback is showing.
      // This behavior doesn't need to be observable in the DevTools though.
      // It might even result in a bad user experience for e.g. node selection in the Elements panel.
      // The easiest fix is to strip out the intermediate Fragment fibers,
      // so the Elements panel and Profiler don't need to special case them.
      var primaryChildFragment = nextFiber.child;
      var fallbackChildFragment = primaryChildFragment.sibling;
      var fallbackChild = fallbackChildFragment.child; // The primary, hidden child is never actually updated in this case,
      // so we can skip any updates to its tree.
      // We only need to track updates to the Fallback UI for now.

      if (fallbackChild.alternate) {
        updateFiber(fallbackChild, fallbackChild.alternate);
      } else {
        mountFiber(fallbackChild);
      }

      enqueueUpdateIfNecessary(nextFiber, false);
    } else {
      var hasChildOrderChanged = false;

      if (nextFiber.child !== prevFiber.child) {
        // If the first child is different, we need to traverse them.
        // Each next child will be either a new child (mount) or an alternate (update).
        var nextChild = nextFiber.child;
        var prevChildAtSameIndex = prevFiber.child;

        while (nextChild) {
          // We already know children will be referentially different because
          // they are either new mounts or alternates of previous children.
          // Schedule updates and mounts depending on whether alternates exist.
          // We don't track deletions here because they are reported separately.
          if (nextChild.alternate) {
            var prevChild = nextChild.alternate;
            updateFiber(nextChild, prevChild); // However we also keep track if the order of the children matches
            // the previous order. They are always different referentially, but
            // if the instances line up conceptually we'll want to know that.

            if (!hasChildOrderChanged && prevChild !== prevChildAtSameIndex) {
              hasChildOrderChanged = true;
            }
          } else {
            mountFiber(nextChild);

            if (!hasChildOrderChanged) {
              hasChildOrderChanged = true;
            }
          } // Try the next child.


          nextChild = nextChild.sibling; // Advance the pointer in the previous list so that we can
          // keep comparing if they line up.

          if (!hasChildOrderChanged && prevChildAtSameIndex != null) {
            prevChildAtSameIndex = prevChildAtSameIndex.sibling;
          }
        } // If we have no more children, but used to, they don't line up.


        if (!hasChildOrderChanged && prevChildAtSameIndex != null) {
          hasChildOrderChanged = true;
        }
      }

      enqueueUpdateIfNecessary(nextFiber, hasChildOrderChanged);
    }
  }

  function walkTree() {
    hook.getFiberRoots(rid).forEach(function (root) {
      // Hydrate all the roots for the first time.
      mountFiber(root.current);
      markRootCommitted(root.current);
    });
    flushPendingEvents();
  }

  function cleanup() {// We don't patch any methods so there is no cleanup.
  }

  function handleCommitFiberUnmount(fiber) {
    // This is not recursive.
    // We can't traverse fibers after unmounting so instead
    // we rely on React telling us about each unmount.
    enqueueUnmount(fiber);
  }

  function handleCommitFiberRoot(root) {
    var current = root.current;
    var alternate = current.alternate;

    if (alternate) {
      // TODO: relying on this seems a bit fishy.
      var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
      var isMounted = current.memoizedState != null && current.memoizedState.element != null;

      if (!wasMounted && isMounted) {
        // Mount a new root.
        mountFiber(current);
      } else if (wasMounted && isMounted) {
        // Update an existing root.
        updateFiber(current, alternate);
      } else if (wasMounted && !isMounted) {
        // Unmount an existing root.
        enqueueUnmount(current);
      }
    } else {
      // Mount a new root.
      mountFiber(current);
    }

    markRootCommitted(current); // We're done here.

    flushPendingEvents();
  } // The naming is confusing.
  // They deal with opaque nodes (fibers), not elements.


  function getNativeFromReactElement(fiber) {
    try {
      var opaqueNode = fiber;
      var hostInstance = renderer.findHostInstanceByFiber(opaqueNode);
      return hostInstance;
    } catch (err) {
      // The fiber might have unmounted by now.
      return null;
    }
  }

  function getReactElementFromNative(hostInstance) {
    var fiber = renderer.findFiberByHostInstance(hostInstance);

    if (fiber != null) {
      // TODO: type fibers.
      var opaqueNode = getOpaqueNode(fiber);
      return opaqueNode;
    }

    return null;
  }

  return {
    getNativeFromReactElement: getNativeFromReactElement,
    getReactElementFromNative: getReactElementFromNative,
    handleCommitFiberRoot: handleCommitFiberRoot,
    handleCommitFiberUnmount: handleCommitFiberUnmount,
    cleanup: cleanup,
    walkTree: walkTree,
    renderer: renderer
  };
}

module.exports = attachRendererFiber;

/***/ }),

/***/ "./app/backend/backend.js":
/*!********************************!*\
  !*** ./app/backend/backend.js ***!
  \********************************/
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
 *
 * This is the chrome devtools
 *
 * 1. Devtools sets the __REACT_DEVTOOLS_GLOBAL_HOOK__ global.
 * 2. React (if present) calls .inject() with the internal renderer
 * 3. Devtools sees the renderer, and then adds this backend, along with the Agent
 *    and whatever else is needed.
 * 4. The agent then calls `.emit('react-devtools', agent)`
 *
 * Now things are hooked up.
 *
 * When devtools closes, it calls `cleanup()` to remove the listeners
 * and any overhead caused by the backend.
 */


var attachRenderer = __webpack_require__(/*! ./attachRenderer */ "./app/backend/attachRenderer.js");

module.exports = function setupBackend(hook) {
  var oldReact = window.React && window.React.__internals;

  if (oldReact && Object.keys(hook._renderers).length === 0) {
    hook.inject(oldReact);
  }

  for (var rid in hook._renderers) {
    hook.helpers[rid] = attachRenderer(hook, rid, hook._renderers[rid]);
    hook.emit('renderer-attached', {
      id: rid,
      renderer: hook._renderers[rid],
      helpers: hook.helpers[rid]
    });
  }

  hook.on('renderer', function (_ref) {
    var id = _ref.id,
        renderer = _ref.renderer;
    hook.helpers[id] = attachRenderer(hook, id, renderer);
    hook.emit('renderer-attached', {
      id: id,
      renderer: renderer,
      helpers: hook.helpers[id]
    });
  });

  var shutdown = function shutdown() {
    for (var id in hook.helpers) {
      hook.helpers[id].cleanup();
    }

    hook.off('shutdown', shutdown);
  };

  hook.on('shutdown', shutdown);
  return true;
};

/***/ }),

/***/ "./app/backend/copyWithSet.js":
/*!************************************!*\
  !*** ./app/backend/copyWithSet.js ***!
  \************************************/
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


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function copyWithSetImpl(obj, path, idx, value) {
  if (idx >= path.length) {
    return value;
  }

  var key = path[idx];
  var updated = Array.isArray(obj) ? obj.slice() : _objectSpread({}, obj); // $FlowFixMe number or string is fine here

  updated[key] = copyWithSetImpl(obj[key], path, idx + 1, value);
  return updated;
}

function copyWithSet(obj, path, value) {
  return copyWithSetImpl(obj, path, 0, value);
}

module.exports = copyWithSet;

/***/ }),

/***/ "./app/backend/getData.js":
/*!********************************!*\
  !*** ./app/backend/getData.js ***!
  \********************************/
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
 // ----------------------------------------------------
// This is Stack-only version.
// The Fiber version is inlined in attachRendererFiber.
// ----------------------------------------------------

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "./app/backend/copyWithSet.js");

var getDisplayName = __webpack_require__(/*! ./getDisplayName */ "./app/backend/getDisplayName.js");

var traverseAllChildrenImpl = __webpack_require__(/*! ./traverseAllChildrenImpl */ "./app/backend/traverseAllChildrenImpl.js");
/**
 * Convert a react internal instance to a sanitized data object.
 */


function getData(internalInstance) {
  var children = null;
  var props = null;
  var state = null;
  var context = null;
  var updater = null;
  var name = null;
  var type = null;
  var key = null;
  var ref = null;
  var source = null;
  var text = null;
  var publicInstance = null;
  var nodeType = 'Native'; // If the parent is a native node without rendered children, but with
  // multiple string children, then the `element` that gets passed in here is
  // a plain value -- a string or number.

  if (_typeof(internalInstance) !== 'object') {
    nodeType = 'Text';
    text = internalInstance + '';
  } else if (internalInstance._currentElement === null || internalInstance._currentElement === false) {
    nodeType = 'Empty';
  } else if (internalInstance._renderedComponent) {
    nodeType = 'NativeWrapper';
    children = [internalInstance._renderedComponent];
    props = internalInstance._instance.props;
    state = internalInstance._instance.state;
    context = internalInstance._instance.context;

    if (context && Object.keys(context).length === 0) {
      context = null;
    }
  } else if (internalInstance._renderedChildren) {
    children = childrenList(internalInstance._renderedChildren);
  } else if (internalInstance._currentElement && internalInstance._currentElement.props) {
    // This is a native node without rendered children -- meaning the children
    // prop is the unfiltered list of children.
    // This may include 'null' or even other invalid values, so we need to
    // filter it the same way that ReactDOM does.
    // Instead of pulling in the whole React library, we just copied over the
    // 'traverseAllChildrenImpl' method.
    // https://github.com/facebook/react/blob/240b84ed8e1db715d759afaae85033718a0b24e1/src/isomorphic/children/ReactChildren.js#L112-L158
    var unfilteredChildren = internalInstance._currentElement.props.children;
    var filteredChildren = [];
    traverseAllChildrenImpl(unfilteredChildren, '', // nameSoFar
    function (_traverseContext, child) {
      var childType = _typeof(child);

      if (childType === 'string' || childType === 'number') {
        filteredChildren.push(child);
      }
    } // traverseContext
    );

    if (filteredChildren.length <= 1) {
      // children must be an array of nodes or a string or undefined
      // can't be an empty array
      children = filteredChildren.length ? String(filteredChildren[0]) : undefined;
    } else {
      children = filteredChildren;
    }
  }

  if (!props && internalInstance._currentElement && internalInstance._currentElement.props) {
    props = internalInstance._currentElement.props;
  } // != used deliberately here to catch undefined and null


  if (internalInstance._currentElement != null) {
    type = internalInstance._currentElement.type;

    if (internalInstance._currentElement.key) {
      key = String(internalInstance._currentElement.key);
    }

    source = internalInstance._currentElement._source;
    ref = internalInstance._currentElement.ref;

    if (typeof type === 'string') {
      name = type;

      if (internalInstance._nativeNode != null) {
        publicInstance = internalInstance._nativeNode;
      }

      if (internalInstance._hostNode != null) {
        publicInstance = internalInstance._hostNode;
      }
    } else if (typeof type === 'function') {
      nodeType = 'Composite';
      name = getDisplayName(type); // 0.14 top-level wrapper
      // TODO(jared): The backend should just act as if these don't exist.

      if (internalInstance._renderedComponent && (internalInstance._currentElement.props === internalInstance._renderedComponent._currentElement || internalInstance._currentElement.type.isReactTopLevelWrapper)) {
        nodeType = 'Wrapper';
      }

      if (name === null) {
        name = 'No display name';
      }
    } else if (typeof internalInstance._stringText === 'string') {
      nodeType = 'Text';
      text = internalInstance._stringText;
    } else {
      name = getDisplayName(type);
    }
  }

  if (internalInstance._instance) {
    var inst = internalInstance._instance; // A forceUpdate for stateless (functional) components.

    var forceUpdate = inst.forceUpdate || inst.updater && inst.updater.enqueueForceUpdate && function (cb) {
      inst.updater.enqueueForceUpdate(this, cb, 'forceUpdate');
    };

    updater = {
      canUpdate: true,
      setState: inst.setState && inst.setState.bind(inst),
      setInProps: forceUpdate && setInProps.bind(null, internalInstance, forceUpdate),
      setInState: inst.forceUpdate && setInState.bind(null, inst),
      setInContext: forceUpdate && setInContext.bind(null, inst, forceUpdate)
    };

    if (typeof type === 'function') {
      publicInstance = inst;
    } // TODO: React ART currently falls in this bucket, but this doesn't
    // actually make sense and we should clean this up after stabilizing our
    // API for backends


    if (inst._renderedChildren) {
      children = childrenList(inst._renderedChildren);
    }
  }

  if (typeof internalInstance.setNativeProps === 'function') {
    // For editing styles in RN
    updater = {
      setNativeProps: function setNativeProps(nativeProps) {
        internalInstance.setNativeProps(nativeProps);
      }
    };
  } // $FlowFixMe


  return {
    nodeType: nodeType,
    type: type,
    key: key,
    ref: ref,
    source: source,
    name: name,
    props: props,
    state: state,
    context: context,
    children: children,
    text: text,
    updater: updater,
    publicInstance: publicInstance
  };
}

function setInProps(internalInst, forceUpdate, path, value) {
  var element = internalInst._currentElement;
  internalInst._currentElement = _objectSpread({}, element, {
    props: copyWithSet(element.props, path, value)
  });
  forceUpdate.call(internalInst._instance);
}

function setInState(inst, path, value) {
  setIn(inst.state, path, value);
  inst.forceUpdate();
}

function setInContext(inst, forceUpdate, path, value) {
  setIn(inst.context, path, value);
  forceUpdate.call(inst);
}

function setIn(obj, path, value) {
  var last = path.pop();
  var parent = path.reduce(function (obj_, attr) {
    return obj_ ? obj_[attr] : null;
  }, obj);

  if (parent) {
    parent[last] = value;
  }
}

function childrenList(children) {
  var res = [];

  for (var name in children) {
    res.push(children[name]);
  }

  return res;
}

module.exports = getData;

/***/ }),

/***/ "./app/backend/getData012.js":
/*!***********************************!*\
  !*** ./app/backend/getData012.js ***!
  \***********************************/
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
 // ----------------------------------------------------
// This is Stack-only version.
// The Fiber version is inlined in attachRendererFiber.
// ----------------------------------------------------

var copyWithSet = __webpack_require__(/*! ./copyWithSet */ "./app/backend/copyWithSet.js");

function getData012(internalInstance) {
  var children = null;
  var props = internalInstance.props;
  var state = internalInstance.state;
  var context = internalInstance.context;
  var updater = null;
  var name = null;
  var type = null;
  var key = null;
  var ref = null;
  var text = null;
  var publicInstance = null;
  var nodeType = 'Native';

  if (internalInstance._renderedComponent) {
    nodeType = 'Wrapper';
    children = [internalInstance._renderedComponent];

    if (context && Object.keys(context).length === 0) {
      context = null;
    }
  } else if (internalInstance._renderedChildren) {
    name = internalInstance.constructor.displayName;
    children = childrenList(internalInstance._renderedChildren);
  } else if (typeof props.children === 'string') {
    // string children
    name = internalInstance.constructor.displayName;
    children = props.children;
    nodeType = 'Native';
  }

  if (!props && internalInstance._currentElement && internalInstance._currentElement.props) {
    props = internalInstance._currentElement.props;
  }

  if (internalInstance._currentElement) {
    type = internalInstance._currentElement.type;

    if (internalInstance._currentElement.key) {
      key = String(internalInstance._currentElement.key);
    }

    ref = internalInstance._currentElement.ref;

    if (typeof type === 'string') {
      name = type;
    } else {
      nodeType = 'Composite';
      name = type.displayName;

      if (!name) {
        name = 'No display name';
      }
    }
  }

  if (!name) {
    name = internalInstance.constructor.displayName || 'No display name';
    nodeType = 'Composite';
  }

  if (typeof props === 'string') {
    nodeType = 'Text';
    text = props;
    props = null;
    name = null;
  }

  if (internalInstance.forceUpdate) {
    updater = {
      canUpdate: true,
      setState: internalInstance.setState.bind(internalInstance),
      setInProps: internalInstance.forceUpdate && setInProps.bind(null, internalInstance),
      setInState: internalInstance.forceUpdate && setInState.bind(null, internalInstance),
      setInContext: internalInstance.forceUpdate && setInContext.bind(null, internalInstance)
    };
    publicInstance = internalInstance;
  } // $FlowFixMe


  return {
    nodeType: nodeType,
    type: type,
    key: key,
    ref: ref,
    source: null,
    name: name,
    props: props,
    state: state,
    context: context,
    children: children,
    text: text,
    updater: updater,
    publicInstance: publicInstance
  };
}

function setInProps(inst, path, value) {
  inst.props = copyWithSet(inst.props, path, value);
  inst.forceUpdate();
}

function setInState(inst, path, value) {
  setIn(inst.state, path, value);
  inst.forceUpdate();
}

function setInContext(inst, path, value) {
  setIn(inst.context, path, value);
  inst.forceUpdate();
}

function setIn(obj, path, value) {
  var last = path.pop();
  var parent = path.reduce(function (obj_, attr) {
    return obj_ ? obj_[attr] : null;
  }, obj);

  if (parent) {
    parent[last] = value;
  }
}

function childrenList(children) {
  var res = [];

  for (var name in children) {
    res.push(children[name]);
  }

  return res;
}

module.exports = getData012;

/***/ }),

/***/ "./app/backend/getDisplayName.js":
/*!***************************************!*\
  !*** ./app/backend/getDisplayName.js ***!
  \***************************************/
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


var FB_MODULE_RE = /^(.*) \[from (.*)\]$/;
var cachedDisplayNames = new WeakMap();

function getDisplayName(type) {
  var fallbackName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
  var nameFromCache = cachedDisplayNames.get(type);

  if (nameFromCache != null) {
    return nameFromCache;
  }

  var displayName; // The displayName property is not guaranteed to be a string.
  // It's only safe to use for our purposes if it's a string.
  // github.com/facebook/react-devtools/issues/803

  if (typeof type.displayName === 'string') {
    displayName = type.displayName;
  }

  if (!displayName) {
    displayName = type.name || fallbackName;
  } // Facebook-specific hack to turn "Image [from Image.react]" into just "Image".
  // We need displayName with module name for error reports but it clutters the DevTools.


  var match = displayName.match(FB_MODULE_RE);

  if (match) {
    var componentName = match[1];
    var moduleName = match[2];

    if (componentName && moduleName) {
      if (moduleName === componentName || moduleName.startsWith(componentName + '.')) {
        displayName = componentName;
      }
    }
  }

  cachedDisplayNames.set(type, displayName);
  return displayName;
}

module.exports = getDisplayName;

/***/ }),

/***/ "./app/backend/traverseAllChildrenImpl.js":
/*!************************************************!*\
  !*** ./app/backend/traverseAllChildrenImpl.js ***!
  \************************************************/
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (_typeof(component) === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}
/**
 * We do a copied the 'traverseAllChildrenImpl' method from
 * `React.Children` so that we don't pull in the whole React library.
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = _typeof(children);

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' || // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = ITERATOR_SYMBOL && children[ITERATOR_SYMBOL] || children[FAUX_ITERATOR_SYMBOL];

    if (typeof iteratorFn === 'function') {
      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = ' If you meant to render a collection of children, use an array ' + 'instead.';
      var childrenString = '' + children;
      invariant(false, 'The React Devtools cannot render an object as a child. (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

module.exports = traverseAllChildrenImpl;

/***/ }),

/***/ "./app/frontend/Highlighter/Highlighter.js":
/*!*************************************************!*\
  !*** ./app/frontend/Highlighter/Highlighter.js ***!
  \*************************************************/
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Overlay = __webpack_require__(/*! ./Overlay */ "./app/frontend/Highlighter/Overlay.js");

var MultiOverlay = __webpack_require__(/*! ./MultiOverlay */ "./app/frontend/Highlighter/MultiOverlay.js");
/**
 * Manages the highlighting of items on an html page, as well as
 * hover-to-inspect.
 */


var Highlighter =
/*#__PURE__*/
function () {
  function Highlighter(win, onSelect) {
    _classCallCheck(this, Highlighter);

    this._win = win;
    this._onSelect = onSelect;
    this._overlay = null;
    this._multiOverlay = null;
    this._subs = [];
  }

  _createClass(Highlighter, [{
    key: "startInspecting",
    value: function startInspecting() {
      this._inspecting = true;
      this._subs = [captureSubscription(this._win, 'mouseover', this.onHover.bind(this)), captureSubscription(this._win, 'mousedown', this.onMouseDown.bind(this)), captureSubscription(this._win, 'click', this.onClick.bind(this))];
    }
  }, {
    key: "stopInspecting",
    value: function stopInspecting() {
      this._subs.forEach(function (unsub) {
        return unsub();
      });

      this.hideHighlight();
    }
  }, {
    key: "remove",
    value: function remove() {
      this.stopInspecting();

      if (this._button && this._button.parentNode) {
        this._button.parentNode.removeChild(this._button);
      }
    }
  }, {
    key: "highlight",
    value: function highlight(node, name) {
      this.removeMultiOverlay();

      if (node.nodeType !== Node.COMMENT_NODE) {
        if (!this._overlay) {
          this._overlay = new Overlay(this._win);
        }

        this._overlay.inspect(node, name);
      }
    }
  }, {
    key: "highlightMany",
    value: function highlightMany(nodes) {
      this.removeOverlay();

      if (!this._multiOverlay) {
        this._multiOverlay = new MultiOverlay(this._win);
      }

      this._multiOverlay.highlightMany(nodes);
    }
  }, {
    key: "hideHighlight",
    value: function hideHighlight() {
      this._inspecting = false;
      this.removeOverlay();
      this.removeMultiOverlay();
    }
  }, {
    key: "refreshMultiOverlay",
    value: function refreshMultiOverlay() {
      if (!this._multiOverlay) {
        return;
      }

      this._multiOverlay.refresh();
    }
  }, {
    key: "removeOverlay",
    value: function removeOverlay() {
      if (!this._overlay) {
        return;
      }

      this._overlay.remove();

      this._overlay = null;
    }
  }, {
    key: "removeMultiOverlay",
    value: function removeMultiOverlay() {
      if (!this._multiOverlay) {
        return;
      }

      this._multiOverlay.remove();

      this._multiOverlay = null;
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(evt) {
      if (!this._inspecting) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;

      this._onSelect(evt.target);
    }
  }, {
    key: "onClick",
    value: function onClick(evt) {
      if (!this._inspecting) {
        return;
      }

      this._subs.forEach(function (unsub) {
        return unsub();
      });

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;
      this.hideHighlight();
    }
  }, {
    key: "onHover",
    value: function onHover(evt) {
      if (!this._inspecting) {
        return;
      }

      evt.preventDefault();
      evt.stopPropagation();
      evt.cancelBubble = true;
      this.highlight(evt.target);
    }
  }, {
    key: "injectButton",
    value: function injectButton() {
      this._button = makeMagnifier();
      this._button.onclick = this.startInspecting.bind(this);

      this._win.document.body.appendChild(this._button);
    }
  }]);

  return Highlighter;
}();

function captureSubscription(obj, evt, cb) {
  obj.addEventListener(evt, cb, true);
  return function () {
    return obj.removeEventListener(evt, cb, true);
  };
}

function makeMagnifier() {
  var button = window.document.createElement('button');
  button.innerHTML = '&#128269;';
  button.style.backgroundColor = 'transparent';
  button.style.border = 'none';
  button.style.outline = 'none';
  button.style.cursor = 'pointer';
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.fontSize = '30px';
  button.style.zIndex = 10000000;
  return button;
}

module.exports = Highlighter;

/***/ }),

/***/ "./app/frontend/Highlighter/MultiOverlay.js":
/*!**************************************************!*\
  !*** ./app/frontend/Highlighter/MultiOverlay.js ***!
  \**************************************************/
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var assign = __webpack_require__(/*! object-assign */ "./app/node_modules/object-assign/index.js");

var MultiOverlay =
/*#__PURE__*/
function () {
  function MultiOverlay(window) {
    _classCallCheck(this, MultiOverlay);

    this.win = window;
    var doc = window.document;
    this.container = doc.createElement('div');
    doc.body.appendChild(this.container);
    this._currentNodes = null;
  }

  _createClass(MultiOverlay, [{
    key: "highlightMany",
    value: function highlightMany(nodes) {
      var _this = this;

      this._currentNodes = nodes;
      this.container.innerHTML = '';
      nodes.forEach(function (node) {
        var div = _this.win.document.createElement('div');

        if (typeof node.getBoundingClientRect !== 'function') {
          return;
        }

        var box = node.getBoundingClientRect();

        if (box.bottom < 0 || box.top > window.innerHeight) {
          return;
        }

        assign(div.style, {
          top: box.top + 'px',
          left: box.left + 'px',
          width: box.width + 'px',
          height: box.height + 'px',
          border: '2px dotted rgba(200, 100, 100, .8)',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(200, 100, 100, .2)',
          position: 'fixed',
          zIndex: 10000000,
          pointerEvents: 'none'
        });

        _this.container.appendChild(div);
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this._currentNodes) {
        this.highlightMany(this._currentNodes);
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
        this._currentNodes = null;
      }
    }
  }]);

  return MultiOverlay;
}();

module.exports = MultiOverlay;

/***/ }),

/***/ "./app/frontend/Highlighter/Overlay.js":
/*!*********************************************!*\
  !*** ./app/frontend/Highlighter/Overlay.js ***!
  \*********************************************/
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var assign = __webpack_require__(/*! object-assign */ "./app/node_modules/object-assign/index.js");

var _require = __webpack_require__(/*! ../Themes/Fonts */ "./app/frontend/Themes/Fonts.js"),
    monospace = _require.monospace;

/**
 * Note that this component is not affected by the active Theme,
 * Because it highlights elements in the main Chrome window (outside of devtools).
 * The colors below were chosen to roughly match those used by Chrome devtools.
 */
var Overlay =
/*#__PURE__*/
function () {
  function Overlay(window) {
    _classCallCheck(this, Overlay);

    var doc = window.document;
    this.win = window;
    this.container = doc.createElement('div');
    this.node = doc.createElement('div');
    this.border = doc.createElement('div');
    this.padding = doc.createElement('div');
    this.content = doc.createElement('div');
    this.border.style.borderColor = overlayStyles.border;
    this.padding.style.borderColor = overlayStyles.padding;
    this.content.style.backgroundColor = overlayStyles.background;
    assign(this.node.style, {
      borderColor: overlayStyles.margin,
      pointerEvents: 'none',
      position: 'fixed'
    });
    this.tip = doc.createElement('div');
    assign(this.tip.style, {
      backgroundColor: '#333740',
      borderRadius: '2px',
      fontFamily: monospace.family,
      fontWeight: 'bold',
      padding: '3px 5px',
      position: 'fixed',
      fontSize: monospace.sizes.normal + 'px'
    });
    this.nameSpan = doc.createElement('span');
    this.tip.appendChild(this.nameSpan);
    assign(this.nameSpan.style, {
      color: '#ee78e6',
      borderRight: '1px solid #aaaaaa',
      paddingRight: '0.5rem',
      marginRight: '0.5rem'
    });
    this.dimSpan = doc.createElement('span');
    this.tip.appendChild(this.dimSpan);
    assign(this.dimSpan.style, {
      color: '#d7d7d7'
    });
    this.container.style.zIndex = 10000000;
    this.node.style.zIndex = 10000000;
    this.tip.style.zIndex = 10000000;
    this.container.appendChild(this.node);
    this.container.appendChild(this.tip);
    this.node.appendChild(this.border);
    this.border.appendChild(this.padding);
    this.padding.appendChild(this.content);
    doc.body.appendChild(this.container);
  }

  _createClass(Overlay, [{
    key: "remove",
    value: function remove() {
      if (this.container.parentNode) {
        this.container.parentNode.removeChild(this.container);
      }
    }
  }, {
    key: "inspect",
    value: function inspect(node, name) {
      // We can't get the size of text nodes or comment nodes. React as of v15
      // heavily uses comment nodes to delimit text.
      if (node.nodeType !== Node.ELEMENT_NODE) {
        return;
      }

      var box = getNestedBoundingClientRect(node, this.win);
      var dims = getElementDimensions(node);
      boxWrap(dims, 'margin', this.node);
      boxWrap(dims, 'border', this.border);
      boxWrap(dims, 'padding', this.padding);
      assign(this.content.style, {
        height: box.height - dims.borderTop - dims.borderBottom - dims.paddingTop - dims.paddingBottom + 'px',
        width: box.width - dims.borderLeft - dims.borderRight - dims.paddingLeft - dims.paddingRight + 'px'
      });
      assign(this.node.style, {
        top: box.top - dims.marginTop + 'px',
        left: box.left - dims.marginLeft + 'px'
      });
      this.nameSpan.textContent = name || node.nodeName.toLowerCase();
      this.dimSpan.textContent = box.width + 'px × ' + box.height + 'px';
      var tipPos = findTipPos({
        top: box.top - dims.marginTop,
        left: box.left - dims.marginLeft,
        height: box.height + dims.marginTop + dims.marginBottom,
        width: box.width + dims.marginLeft + dims.marginRight
      }, this.win);
      assign(this.tip.style, tipPos);
    }
  }]);

  return Overlay;
}();

function findTipPos(dims, win) {
  var tipHeight = 20;
  var margin = 5;
  var top;

  if (dims.top + dims.height + tipHeight <= win.innerHeight) {
    if (dims.top + dims.height < 0) {
      top = margin;
    } else {
      top = dims.top + dims.height + margin;
    }
  } else if (dims.top - tipHeight <= win.innerHeight) {
    if (dims.top - tipHeight - margin < margin) {
      top = margin;
    } else {
      top = dims.top - tipHeight - margin;
    }
  } else {
    top = win.innerHeight - tipHeight - margin;
  }

  top += 'px';

  if (dims.left < 0) {
    return {
      top: top,
      left: margin
    };
  }

  if (dims.left + 200 > win.innerWidth) {
    return {
      top: top,
      right: margin
    };
  }

  return {
    top: top,
    left: dims.left + margin + 'px'
  };
}

function getElementDimensions(domElement) {
  var calculatedStyle = window.getComputedStyle(domElement);
  return {
    borderLeft: +calculatedStyle.borderLeftWidth.match(/[0-9]*/)[0],
    borderRight: +calculatedStyle.borderRightWidth.match(/[0-9]*/)[0],
    borderTop: +calculatedStyle.borderTopWidth.match(/[0-9]*/)[0],
    borderBottom: +calculatedStyle.borderBottomWidth.match(/[0-9]*/)[0],
    marginLeft: +calculatedStyle.marginLeft.match(/[0-9]*/)[0],
    marginRight: +calculatedStyle.marginRight.match(/[0-9]*/)[0],
    marginTop: +calculatedStyle.marginTop.match(/[0-9]*/)[0],
    marginBottom: +calculatedStyle.marginBottom.match(/[0-9]*/)[0],
    paddingLeft: +calculatedStyle.paddingLeft.match(/[0-9]*/)[0],
    paddingRight: +calculatedStyle.paddingRight.match(/[0-9]*/)[0],
    paddingTop: +calculatedStyle.paddingTop.match(/[0-9]*/)[0],
    paddingBottom: +calculatedStyle.paddingBottom.match(/[0-9]*/)[0]
  };
} // Get the window object for the document that a node belongs to,
// or return null if it cannot be found (node not attached to DOM,
// etc).


function getOwnerWindow(node) {
  if (!node.ownerDocument) {
    return null;
  }

  return node.ownerDocument.defaultView;
} // Get the iframe containing a node, or return null if it cannot
// be found (node not within iframe, etc).


function getOwnerIframe(node) {
  var nodeWindow = getOwnerWindow(node);

  if (nodeWindow) {
    return nodeWindow.frameElement;
  }

  return null;
} // Get a bounding client rect for a node, with an
// offset added to compensate for its border.


function getBoundingClientRectWithBorderOffset(node) {
  var dimensions = getElementDimensions(node);
  return mergeRectOffsets([node.getBoundingClientRect(), {
    top: dimensions.borderTop,
    left: dimensions.borderLeft,
    bottom: dimensions.borderBottom,
    right: dimensions.borderRight,
    // This width and height won't get used by mergeRectOffsets (since this
    // is not the first rect in the array), but we set them so that this
    // object typechecks as a DOMRect.
    width: 0,
    height: 0
  }]);
} // Add together the top, left, bottom, and right properties of
// each DOMRect, but keep the width and height of the first one.


function mergeRectOffsets(rects) {
  return rects.reduce(function (previousRect, rect) {
    if (previousRect == null) {
      return rect;
    }

    return {
      top: previousRect.top + rect.top,
      left: previousRect.left + rect.left,
      width: previousRect.width,
      height: previousRect.height,
      bottom: previousRect.bottom + rect.bottom,
      right: previousRect.right + rect.right
    };
  });
} // Calculate a boundingClientRect for a node relative to boundaryWindow,
// taking into account any offsets caused by intermediate iframes.


function getNestedBoundingClientRect(node, boundaryWindow) {
  var ownerIframe = getOwnerIframe(node);

  if (ownerIframe && ownerIframe !== boundaryWindow) {
    var rects = [node.getBoundingClientRect()];
    var currentIframe = ownerIframe;
    var onlyOneMore = false;

    while (currentIframe) {
      var rect = getBoundingClientRectWithBorderOffset(currentIframe);
      rects.push(rect);
      currentIframe = getOwnerIframe(currentIframe);

      if (onlyOneMore) {
        break;
      } // We don't want to calculate iframe offsets upwards beyond
      // the iframe containing the boundaryWindow, but we
      // need to calculate the offset relative to the boundaryWindow.


      if (currentIframe && getOwnerWindow(currentIframe) === boundaryWindow) {
        onlyOneMore = true;
      }
    }

    return mergeRectOffsets(rects);
  } else {
    return node.getBoundingClientRect();
  }
}

function boxWrap(dims, what, node) {
  assign(node.style, {
    borderTopWidth: dims[what + 'Top'] + 'px',
    borderLeftWidth: dims[what + 'Left'] + 'px',
    borderRightWidth: dims[what + 'Right'] + 'px',
    borderBottomWidth: dims[what + 'Bottom'] + 'px',
    borderStyle: 'solid'
  });
}

var overlayStyles = {
  background: 'rgba(120, 170, 210, 0.7)',
  padding: 'rgba(77, 200, 0, 0.3)',
  margin: 'rgba(255, 155, 0, 0.3)',
  border: 'rgba(255, 200, 50, 0.3)'
};
module.exports = Overlay;

/***/ }),

/***/ "./app/frontend/Highlighter/setup.js":
/*!*******************************************!*\
  !*** ./app/frontend/Highlighter/setup.js ***!
  \*******************************************/
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


var Highlighter = __webpack_require__(/*! ./Highlighter */ "./app/frontend/Highlighter/Highlighter.js");

module.exports = function setup(agent) {
  var hl = new Highlighter(window, function (node) {
    agent.selectFromDOMNode(node);
  });
  agent.on('highlight', function (data) {
    return hl.highlight(data.node, data.name);
  });
  agent.on('highlightMany', function (nodes) {
    return hl.highlightMany(nodes);
  });
  agent.on('hideHighlight', function () {
    return hl.hideHighlight();
  });
  agent.on('refreshMultiOverlay', function () {
    return hl.refreshMultiOverlay();
  });
  agent.on('startInspecting', function () {
    return hl.startInspecting();
  });
  agent.on('stopInspecting', function () {
    return hl.stopInspecting();
  });
  agent.on('shutdown', function () {
    hl.remove();
  });
};

/***/ }),

/***/ "./app/frontend/Themes/Fonts.js":
/*!**************************************!*\
  !*** ./app/frontend/Themes/Fonts.js ***!
  \**************************************/
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


module.exports = {
  monospace: {
    family: 'Menlo, Consolas, monospace',
    sizes: {
      normal: 11,
      large: 14
    }
  },
  sansSerif: {
    family: '"Helvetica Neue", "Lucida Grande", -apple-system, BlinkMacSystemFont, "Segoe UI", Ubuntu, sans-serif',
    sizes: {
      small: 10,
      normal: 12,
      large: 14
    }
  }
};

/***/ }),

/***/ "./app/node_modules/error-stack-parser/error-stack-parser.js":
/*!*******************************************************************!*\
  !*** ./app/node_modules/error-stack-parser/error-stack-parser.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./app/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function ErrorStackParser(StackFrame) {
    'use strict';

    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

    return {
        /**
         * Given an Error object, extract the most information from it.
         *
         * @param {Error} error object
         * @return {Array} of StackFrames
         */
        parse: function ErrorStackParser$$parse(error) {
            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
                return this.parseOpera(error);
            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
                return this.parseV8OrIE(error);
            } else if (error.stack) {
                return this.parseFFOrSafari(error);
            } else {
                throw new Error('Cannot parse given Error object');
            }
        },

        // Separate line and column numbers from a string of the form: (URI:Line:Column)
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
            // Fail-fast but return locations like "(native)"
            if (urlLike.indexOf(':') === -1) {
                return [urlLike];
            }

            var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
            var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
            return [parts[1], parts[2] || undefined, parts[3] || undefined];
        },

        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(CHROME_IE_STACK_REGEXP);
            }, this);

            return filtered.map(function(line) {
                if (line.indexOf('(eval ') > -1) {
                    // Throw away eval information until we implement stacktrace.js/stackframe#8
                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
                }
                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
                var locationParts = this.extractLocation(tokens.pop());
                var functionName = tokens.join(' ') || undefined;
                var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

                return new StackFrame({
                    functionName: functionName,
                    fileName: fileName,
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        },

        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
            }, this);

            return filtered.map(function(line) {
                // Throw away eval information until we implement stacktrace.js/stackframe#8
                if (line.indexOf(' > eval') > -1) {
                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
                }

                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
                    // Safari eval frames only have function names and nothing else
                    return new StackFrame({
                        functionName: line
                    });
                } else {
                    var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
                    var matches = line.match(functionNameRegex);
                    var functionName = matches && matches[1] ? matches[1] : undefined;
                    var locationParts = this.extractLocation(line.replace(functionNameRegex, ''));

                    return new StackFrame({
                        functionName: functionName,
                        fileName: locationParts[0],
                        lineNumber: locationParts[1],
                        columnNumber: locationParts[2],
                        source: line
                    });
                }
            }, this);
        },

        parseOpera: function ErrorStackParser$$parseOpera(e) {
            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
                return this.parseOpera9(e);
            } else if (!e.stack) {
                return this.parseOpera10(e);
            } else {
                return this.parseOpera11(e);
            }
        },

        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
            var lines = e.message.split('\n');
            var result = [];

            for (var i = 2, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(new StackFrame({
                        fileName: match[2],
                        lineNumber: match[1],
                        source: lines[i]
                    }));
                }
            }

            return result;
        },

        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
            var lines = e.stacktrace.split('\n');
            var result = [];

            for (var i = 0, len = lines.length; i < len; i += 2) {
                var match = lineRE.exec(lines[i]);
                if (match) {
                    result.push(
                        new StackFrame({
                            functionName: match[3] || undefined,
                            fileName: match[2],
                            lineNumber: match[1],
                            source: lines[i]
                        })
                    );
                }
            }

            return result;
        },

        // Opera 10.65+ Error.stack very similar to FF/Safari
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
            var filtered = error.stack.split('\n').filter(function(line) {
                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
            }, this);

            return filtered.map(function(line) {
                var tokens = line.split('@');
                var locationParts = this.extractLocation(tokens.pop());
                var functionCall = (tokens.shift() || '');
                var functionName = functionCall
                        .replace(/<anonymous function(: (\w+))?>/, '$2')
                        .replace(/\([^\)]*\)/g, '') || undefined;
                var argsRaw;
                if (functionCall.match(/\(([^\)]*)\)/)) {
                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
                }
                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ?
                    undefined : argsRaw.split(',');

                return new StackFrame({
                    functionName: functionName,
                    args: args,
                    fileName: locationParts[0],
                    lineNumber: locationParts[1],
                    columnNumber: locationParts[2],
                    source: line
                });
            }, this);
        }
    };
}));


/***/ }),

/***/ "./app/node_modules/immutable/dist/immutable.es.js":
/*!*********************************************************!*\
  !*** ./app/node_modules/immutable/dist/immutable.es.js ***!
  \*********************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
      ? size === Infinity
        ? size
        : Math.max(0, size + index) | 0
      : size === undefined || size === index
        ? index
        : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = /*@__PURE__*/(function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = /*@__PURE__*/(function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = /*@__PURE__*/(function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = /*@__PURE__*/(function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value)
        ? value.toSeq()
        : seqFromValue(value);
  }

  if ( Collection$$1 ) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create( Collection$$1 && Collection$$1.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = /*@__PURE__*/(function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
        ? isKeyed(value)
          ? value.toSeq()
          : value.fromEntrySeq()
        : isRecord(value)
          ? value.toSeq()
          : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = /*@__PURE__*/(function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
        ? isKeyed(value)
          ? value.entrySeq()
          : value.toIndexedSeq()
        : isRecord(value)
          ? value.toSeq().entrySeq()
          : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = /*@__PURE__*/(function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value)
      ? value
      : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = /*@__PURE__*/(function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = /*@__PURE__*/(function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = /*@__PURE__*/(function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(o);
    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(o)
        : hashString(o);
    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }
      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }
      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }
      return hashJSObj(o);
    case 'undefined':
      return 0x42108423;
    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }
      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;
  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function() {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq$$1 ) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = /*@__PURE__*/(function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq$$1 ) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = /*@__PURE__*/(function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq$$1 ) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create( SetSeq$$1 && SetSeq$$1.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq$$1 ) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function(type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function(type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1) !== false) &&
        fn(v, iterations++, this$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection)
      ? IndexedSeq(entries)
      : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function(fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(null, steps.map(function (s) { return s.value; }))
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection)
      ? IndexedCollection
      : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection)
        ? IndexedSeq
        : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

function isPlainObj(value) {
  return (
    value &&
    (typeof value.constructor !== 'function' ||
      value.constructor.name === 'Object')
  );
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}

/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
      ? notSetValue
      : typeof collection.get === 'function'
        ? collection.get(key)
        : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}

function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$1(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update(
            collection,
            key,
            NOT_SET,
            function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
        ? collection.merge.apply(collection, sources)
        : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger
        ? merger(oldValue, newValue, key)
        : newValue;
  }
  return deepMerger;
}

function mergeDeep$1() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = /*@__PURE__*/(function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value)
        ? value
        : emptyMap().withMutations(function (map) {
            var iter = KeyedCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( KeyedCollection$$1 ) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create( KeyedCollection$$1 && KeyedCollection$$1.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
  fn,
  reverse
) {
  var entries = this.entries;
  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
  fn,
  reverse
) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
};

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
  return fn(this.entry);
};

var MapIterator = /*@__PURE__*/(function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator$$1 ) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map;
    }
    newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = /*@__PURE__*/(function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection$$1(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection$$1 ) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
        ? this.shift()
        : index === this.size - 1
          ? this.pop()
          : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0
        ? oldCapacity + end
        : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset
        ? new VNode([], owner)
        : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = /*@__PURE__*/(function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
        ? value
        : emptyOrderedMap().withMutations(function (map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( Map$$1 ) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = /*@__PURE__*/(function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value)
        ? value
        : emptyStack().pushAll(value);
  }

  if ( IndexedCollection$$1 ) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection$$1(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped
          ? !is(v, a.get(k, NOT_SET))
          : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

var Set = /*@__PURE__*/(function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value)
        ? value
        : emptySet().withMutations(function (set) {
            var iter = SetCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( SetCollection$$1 ) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create( SetCollection$$1 && SetCollection$$1.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);
      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) { return set.remove(value); });
      adds.forEach(function (value) { return set.add(value); });
    });
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0
      ? set.__empty()
      : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq$$1 ) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn$1(searchKeyPath, notSetValue) {
  return getIn(this, searchKeyPath, notSetValue);
}

function hasIn(collection, keyPath) {
  return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$1(searchKeyPath) {
  return hasIn(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this)
        ? this.toKeyedSeq()
        : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq()
        .map(this.__toStringMapper)
        .join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection
      .toSeq()
      .map(entryMapper)
      .toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq()
      .reverse()
      .findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn$1,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn$1,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq()
      .map(keyMapper)
      .toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq()
      .reverse()
      .first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq()
      .reverse()
      .keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      (this.size === Infinity || (this.size !== undefined && index > this.size))
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
        ? function (v) {
            h = (31 * h + hash(v)) | 0;
          }
        : function (v) {
            h = (h + hash(v)) | 0;
          }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = /*@__PURE__*/(function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
        ? value
        : emptyOrderedSet().withMutations(function (set) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( Set$$1 ) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = (RecordType.prototype = Object.create(
    RecordPrototype
  ));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other ||
    (other &&
      this._keys === other._keys &&
      recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq$$1 ) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(
      function () { return i === size
          ? iteratorDone()
          : iteratorValue(type, reverse ? size - ++i : i++, this$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value)
    ? IndexedSeq
    : isPlainObj(value)
      ? KeyedSeq
      : null;
  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "4.0.0-rc.11";

var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn,
  has: has,
  hasIn: hasIn,
  merge: merge$1,
  mergeDeep: mergeDeep,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn,
  update: update,
  updateIn: updateIn,
};

// Note: Iterable is deprecated
var Iterable = Collection;

/* harmony default export */ __webpack_exports__["default"] = (Immutable);



/***/ }),

/***/ "./app/node_modules/nullthrows/nullthrows.js":
/*!***************************************************!*\
  !*** ./app/node_modules/nullthrows/nullthrows.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function nullthrows(x, message) {
  if (x != null) {
    return x;
  }
  var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);
  error.framesToPop = 1; // Skip nullthrows's own stack frame.
  throw error;
}

module.exports = nullthrows;
module.exports.default = nullthrows;

Object.defineProperty(module.exports, '__esModule', {value: true});


/***/ }),

/***/ "./app/node_modules/object-assign/index.js":
/*!*************************************************!*\
  !*** ./app/node_modules/object-assign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./app/node_modules/stackframe/stackframe.js":
/*!***************************************************!*\
  !*** ./app/node_modules/stackframe/stackframe.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
    'use strict';
    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

    /* istanbul ignore next */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function() {
    'use strict';
    function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    function _getter(p) {
        return function() {
            return this[p];
        };
    }

    var booleanProps = ['isConstructor', 'isEval', 'isNative', 'isToplevel'];
    var numericProps = ['columnNumber', 'lineNumber'];
    var stringProps = ['fileName', 'functionName', 'source'];
    var arrayProps = ['args'];

    var props = booleanProps.concat(numericProps, stringProps, arrayProps);

    function StackFrame(obj) {
        if (obj instanceof Object) {
            for (var i = 0; i < props.length; i++) {
                if (obj.hasOwnProperty(props[i]) && obj[props[i]] !== undefined) {
                    this['set' + _capitalize(props[i])](obj[props[i]]);
                }
            }
        }
    }

    StackFrame.prototype = {
        getArgs: function() {
            return this.args;
        },
        setArgs: function(v) {
            if (Object.prototype.toString.call(v) !== '[object Array]') {
                throw new TypeError('Args must be an Array');
            }
            this.args = v;
        },

        getEvalOrigin: function() {
            return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
            if (v instanceof StackFrame) {
                this.evalOrigin = v;
            } else if (v instanceof Object) {
                this.evalOrigin = new StackFrame(v);
            } else {
                throw new TypeError('Eval Origin must be an Object or StackFrame');
            }
        },

        toString: function() {
            var functionName = this.getFunctionName() || '{anonymous}';
            var args = '(' + (this.getArgs() || []).join(',') + ')';
            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
            return functionName + args + fileName + lineNumber + columnNumber;
        }
    };

    for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype['get' + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype['set' + _capitalize(booleanProps[i])] = (function(p) {
            return function(v) {
                this[p] = Boolean(v);
            };
        })(booleanProps[i]);
    }

    for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype['get' + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype['set' + _capitalize(numericProps[j])] = (function(p) {
            return function(v) {
                if (!_isNumber(v)) {
                    throw new TypeError(p + ' must be a Number');
                }
                this[p] = Number(v);
            };
        })(numericProps[j]);
    }

    for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype['get' + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype['set' + _capitalize(stringProps[k])] = (function(p) {
            return function(v) {
                this[p] = String(v);
            };
        })(stringProps[k]);
    }

    return StackFrame;
}));


/***/ }),

/***/ "./app/plugins/HooksInspector/backend.js":
/*!***********************************************!*\
  !*** ./app/plugins/HooksInspector/backend.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setupHooksInspector; });
/* harmony import */ var _backend_ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../backend/ReactDebugHooks */ "./app/backend/ReactDebugHooks.js");
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



function setupHooksInspector(bridge, agent) {
  var prevHooksTree = null;
  var selectedID = null;
  agent.on('selected', function (id) {
    selectedID = id;
    var data = agent.elementData.get(id);
    var hooksTree = null;

    if (data && data.containsHooks) {
      hooksTree = inspectHooksTree(id);
    }

    if (prevHooksTree !== hooksTree) {
      prevHooksTree = hooksTree;
      bridge.send('inspectedHooks', hooksTree);
    }
  });
  agent.on('update', function (data) {
    // If the element that was just updated is also being inspected, update the hooks values.
    if (selectedID !== null && prevHooksTree !== null && prevHooksTree.elementID === data.id) {
      var hooksTree = inspectHooksTree(data.id);

      if (prevHooksTree !== hooksTree) {
        prevHooksTree = hooksTree;
        bridge.send('inspectedHooks', hooksTree);
      }
    }
  });

  function inspectHooksTree(id) {
    var data = agent.elementData.get(id);
    var internalInstance = agent.internalInstancesById.get(id);

    if (internalInstance) {
      var rendererID = agent.renderers.get(id);

      if (rendererID) {
        var internals = agent.reactInternals[rendererID].renderer;

        if (internals && internals.currentDispatcherRef) {
          // HACK: This leaks Fiber-specific logic into the Agent which is not ideal.
          // $FlowFixMe
          var currentFiber = data.state === internalInstance.memoizedState ? internalInstance : internalInstance.alternate;
          var hooksTree = Object(_backend_ReactDebugHooks__WEBPACK_IMPORTED_MODULE_0__["inspectHooksOfFiber"])(currentFiber, internals.currentDispatcherRef); // It's also important to store the element ID,
          // so the frontend can avoid potentially showing the wrong hooks data for an element,
          // (since hooks inspection is done as part of a separate Bridge message).
          // But we can't store it as "id"– because the Bridge stores a map of "inspectable" data keyed by this field.
          // Use an id that won't conflict with the element itself (because we don't want to override data).
          // This is important if components have both inspectable props and inspectable hooks.

          return {
            elementID: id,
            id: 'hooksTree',
            hooksTree: hooksTree
          };
        }
      }
    }

    return null;
  }
}

/***/ }),

/***/ "./app/plugins/Profiler/ProfileCollector.js":
/*!**************************************************!*\
  !*** ./app/plugins/Profiler/ProfileCollector.js ***!
  \**************************************************/
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var hasNativePerformanceNow = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
/**
 * The Profiler UI displays the entire React tree, with timing info, for each commit.
 * The frontend store only has the latest tree at any given time though,
 * So the ProfileCollector stores snapshots of the immutable tree for each commit,
 * Along with timing information for nodes that were updated in that commit.
 * This information is saved in the ProfilerStore.
 */

var ProfileCollector =
/*#__PURE__*/
function () {
  function ProfileCollector(agent) {
    var _this = this;

    _classCallCheck(this, ProfileCollector);

    _defineProperty(this, "_committedNodes", new Set());

    _defineProperty(this, "_isRecording", false);

    _defineProperty(this, "_maxActualDuration", 0);

    _defineProperty(this, "_recordingStartTime", 0);

    _defineProperty(this, "_onIsRecording", function (isRecording) {
      _this._committedNodes = new Set();
      _this._isRecording = isRecording;
      _this._recordingStartTime = isRecording ? now() : 0;

      if (isRecording) {
        // Maybe in the future, we'll allow collecting multiple profiles and stepping through them.
        // For now, clear old snapshots when we start recording new data though.
        _this._agent.emit('clearSnapshots'); // Note that the Profiler doesn't need to do anything to turn profiling on in React.
        // Profiling-capable builds automatically profile all roots when DevTools is detected.

      }
    });

    _defineProperty(this, "_onMountOrUpdate", function (data) {
      if (!_this._isRecording || data.actualDuration === undefined) {
        return;
      }

      _this._committedNodes.add(data.id);

      _this._maxActualDuration = Math.max(_this._maxActualDuration, data.actualDuration);
    });

    _defineProperty(this, "_onRootCommitted", function (id, internalInstance, data) {
      if (!_this._isRecording) {
        return;
      } // Once all roots have been committed,
      // Take a snapshot of the current tree.


      _this._takeCommitSnapshotForRoot(id, data); // Then reset data for the next snapshot.


      _this._committedNodes = new Set();
      _this._maxActualDuration = 0;
    });

    _defineProperty(this, "_onUnmount", function (id) {
      _this._committedNodes.delete(id);
    });

    this._agent = agent;
    agent.on('isRecording', this._onIsRecording);
    agent.on('mount', this._onMountOrUpdate);
    agent.on('rootCommitted', this._onRootCommitted);
    agent.on('unmount', this._onUnmount);
    agent.on('update', this._onMountOrUpdate);
  }

  _createClass(ProfileCollector, [{
    key: "_takeCommitSnapshotForRoot",
    value: function _takeCommitSnapshotForRoot(id, data) {
      var _this2 = this;

      var interactionsArray = data.memoizedInteractions != null ? Array.from(data.memoizedInteractions) : []; // Map interaction start times to when we started profiling.
      // We clone (rather than mutate) the interactions in stateNode.memoizedInteractions,
      // Because we don't want to affect user code that might be consuming these Interactions via Profiler.

      var memoizedInteractions = interactionsArray.map(function (_ref) {
        var name = _ref.name,
            timestamp = _ref.timestamp;
        return {
          name: name,
          timestamp: timestamp - _this2._recordingStartTime
        };
      });
      var storeSnapshot = {
        memoizedInteractions: memoizedInteractions,
        committedNodes: Array.from(this._committedNodes),
        commitTime: now() - this._recordingStartTime,
        duration: this._maxActualDuration,
        root: id
      };

      this._agent.emit('storeSnapshot', storeSnapshot);
    }
  }]);

  return ProfileCollector;
}();

function init(agent) {
  return new ProfileCollector(agent);
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./app/plugins/Profiler/backend.js":
/*!*****************************************!*\
  !*** ./app/plugins/Profiler/backend.js ***!
  \*****************************************/
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


var emptyFunction = function emptyFunction() {};

module.exports = function (bridge, agent, hook) {
  var checkIfProfilingIsSupported = function checkIfProfilingIsSupported() {
    var profilingIsSupported = false; // Feature detection for profiling mode.
    // The presence of an "treeBaseDuration" field signifies:
    // 1) This is a new enough version of React (e.g. > 16.4 which was the initial profiling release)
    // 2) This is a profiling capable bundle (e.g. DEV or PROFILING)

    agent.roots.forEach(function (rootId) {
      var root = agent.internalInstancesById.get(rootId);

      if (root.hasOwnProperty('treeBaseDuration')) {
        profilingIsSupported = true;
      }
    });
    bridge.call('profiler:update', [profilingIsSupported], emptyFunction);
  }; // Wait for roots to be registered.
  // They might not yet exist at the time the plugin is initialized.
  // Also while the first root(s) may not be capable of profiling, later ones might.


  agent.on('root', checkIfProfilingIsSupported);
  agent.on('rootUnmounted', checkIfProfilingIsSupported); // Check once in case some roots have already been registered:

  checkIfProfilingIsSupported();
};

/***/ }),

/***/ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodeMeasurer.js":
/*!**********************************************************************!*\
  !*** ./app/plugins/TraceUpdates/TraceUpdatesAbstractNodeMeasurer.js ***!
  \**********************************************************************/
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


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var requestAnimationFrame = __webpack_require__(/*! fbjs/lib/requestAnimationFrame */ "./node_modules/fbjs/lib/requestAnimationFrame.js");

var immutable = __webpack_require__(/*! immutable */ "./app/node_modules/immutable/dist/immutable.es.js");

// How long the measurement can be cached in ms.
var DURATION = 800;
var Record = immutable.Record,
    Map = immutable.Map,
    Set = immutable.Set;
var MeasurementRecord = Record({
  bottom: 0,
  expiration: 0,
  height: 0,
  id: '',
  left: 0,
  right: 0,
  scrollX: 0,
  scrollY: 0,
  top: 0,
  width: 0
});
var _id = 100;

var TraceUpdatesAbstractNodeMeasurer =
/*#__PURE__*/
function () {
  function TraceUpdatesAbstractNodeMeasurer() {
    _classCallCheck(this, TraceUpdatesAbstractNodeMeasurer);

    // pending nodes to measure.
    this._nodes = new Map(); // ids of pending nodes.

    this._ids = new Map(); // cached measurements.

    this._measurements = new Map(); // callbacks for pending nodes.

    this._callbacks = new Map();
    this._isRequesting = false; // non-auto-binds.

    this._measureNodes = this._measureNodes.bind(this);
  }

  _createClass(TraceUpdatesAbstractNodeMeasurer, [{
    key: "request",
    value: function request(node, callback) {
      var requestID = this._nodes.has(node) ? this._nodes.get(node) : String(_id++);
      this._nodes = this._nodes.set(node, requestID);
      this._ids = this._ids.set(requestID, node);
      var callbacks = this._callbacks.has(node) ? this._callbacks.get(node) : new Set();
      callbacks = callbacks.add(callback);
      this._callbacks = this._callbacks.set(node, callbacks);

      if (this._isRequesting) {
        return requestID;
      }

      this._isRequesting = true;
      requestAnimationFrame(this._measureNodes);
      return requestID;
    }
  }, {
    key: "cancel",
    value: function cancel(requestID) {
      if (this._ids.has(requestID)) {
        var node = this._ids.get(requestID);

        this._ids = this._ids.delete(requestID);
        this._nodes = this._nodes.delete(node);
        this._callbacks = this._callbacks.delete(node);
      }
    }
  }, {
    key: "measureImpl",
    value: function measureImpl(node) {
      // sub-class must overwrite this.
      return new MeasurementRecord();
    }
  }, {
    key: "_measureNodes",
    value: function _measureNodes() {
      var _this = this;

      var now = Date.now();
      this._measurements = this._measurements.withMutations(function (_measurements) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this._nodes.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var node = _step.value;

            var measurement = _this._measureNode(now, node); // cache measurement.


            _measurements.set(node, measurement);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }); // execute callbacks.

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        var _loop = function _loop() {
          var node = _step2.value;

          var measurement = _this._measurements.get(node);

          _this._callbacks.get(node).forEach(function (callback) {
            return callback(measurement);
          });
        };

        for (var _iterator2 = this._nodes.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          _loop();
        } // clear stale measurement.

      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this._measurements = this._measurements.withMutations(function (_measurements) {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _measurements.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                node = _step3$value[0],
                measurement = _step3$value[1];

            if (measurement.expiration < now) {
              _measurements.delete(node);
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });
      this._ids = this._ids.clear();
      this._nodes = this._nodes.clear();
      this._callbacks = this._callbacks.clear();
      this._isRequesting = false;
    }
  }, {
    key: "_measureNode",
    value: function _measureNode(timestamp, node) {
      var measurement;
      var data;

      if (this._measurements.has(node)) {
        measurement = this._measurements.get(node);

        if (measurement.expiration < timestamp) {
          // measurement expires. measure again.
          data = this.measureImpl(node);
          measurement = measurement.merge(_objectSpread({}, data, {
            expiration: timestamp + DURATION
          }));
        }
      } else {
        data = this.measureImpl(node);
        measurement = new MeasurementRecord(_objectSpread({}, data, {
          expiration: timestamp + DURATION,
          id: 'm_' + String(_id++)
        }));
      }

      return measurement;
    }
  }]);

  return TraceUpdatesAbstractNodeMeasurer;
}();

module.exports = TraceUpdatesAbstractNodeMeasurer;

/***/ }),

/***/ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodePresenter.js":
/*!***********************************************************************!*\
  !*** ./app/plugins/TraceUpdates/TraceUpdatesAbstractNodePresenter.js ***!
  \***********************************************************************/
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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var immutable = __webpack_require__(/*! immutable */ "./app/node_modules/immutable/dist/immutable.es.js");

var requestAnimationFrame = __webpack_require__(/*! fbjs/lib/requestAnimationFrame */ "./node_modules/fbjs/lib/requestAnimationFrame.js");

// How long the measurement should be presented for.
var DURATION = 250;
var Record = immutable.Record,
    Map = immutable.Map;
var MetaData = Record({
  expiration: 0,
  hit: 0
});

var TraceUpdatesAbstractNodePresenter =
/*#__PURE__*/
function () {
  // eslint shouldn't error on type positions. TODO: update eslint
  // eslint-disable-next-line no-undef
  function TraceUpdatesAbstractNodePresenter() {
    _classCallCheck(this, TraceUpdatesAbstractNodePresenter);

    this._pool = new Map();
    this._drawing = false;
    this._enabled = false;
    this._clearTimer = null;
    this._draw = this._draw.bind(this);
    this._redraw = this._redraw.bind(this);
  }

  _createClass(TraceUpdatesAbstractNodePresenter, [{
    key: "present",
    value: function present(measurement) {
      if (!this._enabled) {
        return;
      }

      var data;

      if (this._pool.has(measurement)) {
        data = this._pool.get(measurement);
      } else {
        // $FlowIssue
        data = new MetaData();
      }

      data = data.merge({
        expiration: Date.now() + DURATION,
        hit: data.hit + 1
      });
      this._pool = this._pool.set(measurement, data);

      if (this._drawing) {
        return;
      }

      this._drawing = true;
      requestAnimationFrame(this._draw);
    }
  }, {
    key: "setEnabled",
    value: function setEnabled(enabled) {
      // console.log('setEnabled', enabled);
      if (this._enabled === enabled) {
        return;
      }

      this._enabled = enabled;

      if (enabled) {
        return;
      }

      if (this._clearTimer) {
        clearTimeout(this._clearTimer);
        this._clearTimer = null;
      }

      this._pool = this._pool.clear();
      this._drawing = false;
      this.clearImpl();
    }
  }, {
    key: "drawImpl",
    value: function drawImpl(measurements) {// sub-class should implement this.
    }
  }, {
    key: "clearImpl",
    value: function clearImpl() {// sub-class should implement this.
    }
  }, {
    key: "_redraw",
    value: function _redraw() {
      this._clearTimer = null;

      if (!this._drawing && this._pool.size > 0) {
        this._drawing = true;

        this._draw();
      }
    }
  }, {
    key: "_draw",
    value: function _draw() {
      if (!this._enabled) {
        this._drawing = false;
        return;
      }

      var now = Date.now();
      var minExpiration = Number.MAX_VALUE;
      this._pool = this._pool.withMutations(function (_pool) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _pool.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _step$value = _slicedToArray(_step.value, 2),
                measurement = _step$value[0],
                data = _step$value[1];

            if (data.expiration < now) {
              // already passed the expiration time.
              _pool.delete(measurement);
            } else {
              minExpiration = Math.min(data.expiration, minExpiration);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      });
      this.drawImpl(this._pool);

      if (this._pool.size > 0) {
        if (this._clearTimer != null) {
          clearTimeout(this._clearTimer);
        }

        this._clearTimer = setTimeout(this._redraw, minExpiration - now);
      }

      this._drawing = false;
    }
  }]);

  return TraceUpdatesAbstractNodePresenter;
}();

module.exports = TraceUpdatesAbstractNodePresenter;

/***/ }),

/***/ "./app/plugins/TraceUpdates/TraceUpdatesBackendManager.js":
/*!****************************************************************!*\
  !*** ./app/plugins/TraceUpdates/TraceUpdatesBackendManager.js ***!
  \****************************************************************/
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TraceUpdatesAbstractNodeMeasurer = __webpack_require__(/*! ./TraceUpdatesAbstractNodeMeasurer */ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodeMeasurer.js");

var TraceUpdatesAbstractNodePresenter = __webpack_require__(/*! ./TraceUpdatesAbstractNodePresenter */ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodePresenter.js");

var TraceUpdatesWebNodeMeasurer = __webpack_require__(/*! ./TraceUpdatesWebNodeMeasurer */ "./app/plugins/TraceUpdates/TraceUpdatesWebNodeMeasurer.js");

var TraceUpdatesWebNodePresenter = __webpack_require__(/*! ./TraceUpdatesWebNodePresenter */ "./app/plugins/TraceUpdates/TraceUpdatesWebNodePresenter.js");

var NODE_TYPE_COMPOSITE = 'Composite';
var NODE_TYPE_SPECIAL = 'Special';

var TraceUpdatesBackendManager =
/*#__PURE__*/
function () {
  function TraceUpdatesBackendManager(agent) {
    _classCallCheck(this, TraceUpdatesBackendManager);

    this._onMeasureNode = this._onMeasureNode.bind(this);
    var useDOM = agent.capabilities.dom;
    this._measurer = useDOM ? new TraceUpdatesWebNodeMeasurer() : new TraceUpdatesAbstractNodeMeasurer();
    this._presenter = useDOM ? new TraceUpdatesWebNodePresenter() : new TraceUpdatesAbstractNodePresenter();
    this._isActive = false;
    agent.on('traceupdatesstatechange', this._onTraceUpdatesStateChange.bind(this));
    agent.on('update', this._onUpdate.bind(this, agent));
    agent.on('shutdown', this._shutdown.bind(this));
  }

  _createClass(TraceUpdatesBackendManager, [{
    key: "_onUpdate",
    value: function _onUpdate(agent, obj) {
      if (!this._isActive || !obj.id) {
        return;
      } // Highlighting every host node would be too noisy.
      // We highlight user components and context consumers
      // (without consumers, a context update that renders
      // only host nodes directly wouldn't highlight at all).


      var shouldHighlight = obj.nodeType === NODE_TYPE_COMPOSITE || obj.nodeType === NODE_TYPE_SPECIAL && obj.name.endsWith('.Consumer');

      if (!shouldHighlight) {
        return;
      }

      var node = agent.getNodeForID(obj.id);

      if (!node) {
        return;
      }

      this._measurer.request(node, this._onMeasureNode);
    }
  }, {
    key: "_onMeasureNode",
    value: function _onMeasureNode(measurement) {
      this._presenter.present(measurement);
    }
  }, {
    key: "_onTraceUpdatesStateChange",
    value: function _onTraceUpdatesStateChange(enabled) {
      this._isActive = enabled;

      this._presenter.setEnabled(enabled);
    }
  }, {
    key: "_shutdown",
    value: function _shutdown() {
      this._isActive = false;

      this._presenter.setEnabled(false);
    }
  }]);

  return TraceUpdatesBackendManager;
}();

function init(agent) {
  return new TraceUpdatesBackendManager(agent);
}

module.exports = {
  init: init
};

/***/ }),

/***/ "./app/plugins/TraceUpdates/TraceUpdatesWebNodeMeasurer.js":
/*!*****************************************************************!*\
  !*** ./app/plugins/TraceUpdates/TraceUpdatesWebNodeMeasurer.js ***!
  \*****************************************************************/
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TraceUpdatesAbstractNodeMeasurer = __webpack_require__(/*! ./TraceUpdatesAbstractNodeMeasurer */ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodeMeasurer.js");

var DUMMY = {
  bottom: 0,
  expiration: 0,
  height: 0,
  id: '',
  left: 0,
  right: 0,
  scrollX: 0,
  scrollY: 0,
  top: 0,
  width: 0
};

var TraceUpdatesWebNodeMeasurer =
/*#__PURE__*/
function (_TraceUpdatesAbstract) {
  _inherits(TraceUpdatesWebNodeMeasurer, _TraceUpdatesAbstract);

  function TraceUpdatesWebNodeMeasurer() {
    _classCallCheck(this, TraceUpdatesWebNodeMeasurer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TraceUpdatesWebNodeMeasurer).apply(this, arguments));
  }

  _createClass(TraceUpdatesWebNodeMeasurer, [{
    key: "measureImpl",
    value: function measureImpl(node) {
      if (!node || typeof node.getBoundingClientRect !== 'function') {
        return DUMMY;
      }

      var rect = node.getBoundingClientRect();
      var scrollX = Math.max(document.body ? document.body.scrollLeft : 0, document.documentElement ? document.documentElement.scrollLeft : 0, window.pageXOffset || 0, window.scrollX || 0);
      var scrollY = Math.max(document.body ? document.body.scrollTop : 0, document.documentElement ? document.documentElement.scrollTop : 0, window.pageYOffset || 0, window.scrollY || 0);
      return {
        bottom: rect.bottom,
        expiration: 0,
        height: rect.height,
        id: '',
        left: rect.left,
        right: rect.right,
        scrollX: scrollX,
        scrollY: scrollY,
        top: rect.top,
        width: rect.width
      };
    }
  }]);

  return TraceUpdatesWebNodeMeasurer;
}(TraceUpdatesAbstractNodeMeasurer);

module.exports = TraceUpdatesWebNodeMeasurer;

/***/ }),

/***/ "./app/plugins/TraceUpdates/TraceUpdatesWebNodePresenter.js":
/*!******************************************************************!*\
  !*** ./app/plugins/TraceUpdates/TraceUpdatesWebNodePresenter.js ***!
  \******************************************************************/
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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TraceUpdatesAbstractNodePresenter = __webpack_require__(/*! ./TraceUpdatesAbstractNodePresenter */ "./app/plugins/TraceUpdates/TraceUpdatesAbstractNodePresenter.js");

var OUTLINE_COLOR = '#f0f0f0';
var COLORS = [// coolest
'#55cef6', '#55f67b', '#a5f655', '#f4f655', '#f6a555', '#f66855', // hottest
'#ff0000'];
var HOTTEST_COLOR = COLORS[COLORS.length - 1];

function drawBorder(ctx, measurement, borderWidth, borderColor) {
  // outline
  ctx.lineWidth = 1;
  ctx.strokeStyle = OUTLINE_COLOR;
  ctx.strokeRect(measurement.left - 1, measurement.top - 1, measurement.width + 2, measurement.height + 2); // inset

  ctx.lineWidth = 1;
  ctx.strokeStyle = OUTLINE_COLOR;
  ctx.strokeRect(measurement.left + borderWidth, measurement.top + borderWidth, measurement.width - borderWidth, measurement.height - borderWidth);
  ctx.strokeStyle = borderColor;

  if (measurement.should_update) {
    ctx.setLineDash([2]);
  } else {
    ctx.setLineDash([0]);
  } // border


  ctx.lineWidth = '' + borderWidth;
  ctx.strokeRect(measurement.left + Math.floor(borderWidth / 2), measurement.top + Math.floor(borderWidth / 2), measurement.width - borderWidth, measurement.height - borderWidth);
  ctx.setLineDash([0]);
}

var CANVAS_NODE_ID = 'TraceUpdatesWebNodePresenter';

var TraceUpdatesWebNodePresenter =
/*#__PURE__*/
function (_TraceUpdatesAbstract) {
  _inherits(TraceUpdatesWebNodePresenter, _TraceUpdatesAbstract);

  function TraceUpdatesWebNodePresenter() {
    var _this;

    _classCallCheck(this, TraceUpdatesWebNodePresenter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TraceUpdatesWebNodePresenter).call(this));
    _this._canvas = null;
    return _this;
  }

  _createClass(TraceUpdatesWebNodePresenter, [{
    key: "drawImpl",
    value: function drawImpl(pool) {
      this._ensureCanvas();

      var canvas = this._canvas;
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = pool.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              measurement = _step$value[0],
              data = _step$value[1];

          var color = COLORS[data.hit - 1] || HOTTEST_COLOR;
          drawBorder(ctx, measurement, 1, color);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "clearImpl",
    value: function clearImpl() {
      var canvas = this._canvas;

      if (canvas === null) {
        return;
      }

      if (!canvas.parentNode) {
        return;
      }

      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.parentNode.removeChild(canvas);
      this._canvas = null;
    }
  }, {
    key: "_ensureCanvas",
    value: function _ensureCanvas() {
      var canvas = this._canvas;

      if (canvas === null) {
        canvas = window.document.getElementById(CANVAS_NODE_ID) || window.document.createElement('canvas');
        canvas.id = CANVAS_NODE_ID;
        canvas.width = window.screen.availWidth;
        canvas.height = window.screen.availHeight;
        canvas.style.cssText = "\n        xx-background-color: red;\n        xx-opacity: 0.5;\n        bottom: 0;\n        left: 0;\n        pointer-events: none;\n        position: fixed;\n        right: 0;\n        top: 0;\n        z-index: 1000000000;\n      ";
      }

      if (!canvas.parentNode) {
        var root = window.document.documentElement;
        root.insertBefore(canvas, root.firstChild);
      }

      this._canvas = canvas;
    }
  }]);

  return TraceUpdatesWebNodePresenter;
}(TraceUpdatesAbstractNodePresenter);

module.exports = TraceUpdatesWebNodePresenter;

/***/ }),

/***/ "./app/utils/guid.js":
/*!***************************!*\
  !*** ./app/utils/guid.js ***!
  \***************************/
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


function guid() {
  return 'g' + Math.random().toString(16).substr(2);
}

module.exports = guid;

/***/ }),

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


var Agent = __webpack_require__(/*! ./app/agent/Agent */ "./app/agent/Agent.js");

var ProfileCollector = __webpack_require__(/*! ./app/plugins/Profiler/ProfileCollector */ "./app/plugins/Profiler/ProfileCollector.js");

var TraceUpdatesBackendManager = __webpack_require__(/*! ./app/plugins/TraceUpdates/TraceUpdatesBackendManager */ "./app/plugins/TraceUpdates/TraceUpdatesBackendManager.js");

var Bridge = __webpack_require__(/*! ./app/agent/Bridge */ "./app/agent/Bridge.js");

var setupHighlighter = __webpack_require__(/*! ./app/frontend/Highlighter/setup */ "./app/frontend/Highlighter/setup.js");

var setupHooksInspector = __webpack_require__(/*! ./app/plugins/HooksInspector/backend */ "./app/plugins/HooksInspector/backend.js").default;

var setupProfiler = __webpack_require__(/*! ./app/plugins/Profiler/backend */ "./app/plugins/Profiler/backend.js");

var inject = __webpack_require__(/*! ./app/agent/inject */ "./app/agent/inject.js");

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

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/nativeRequestAnimationFrame.js":
/*!**************************************************************!*\
  !*** ./node_modules/fbjs/lib/nativeRequestAnimationFrame.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

module.exports = nativeRequestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fbjs/lib/performance.js":
/*!**********************************************!*\
  !*** ./node_modules/fbjs/lib/performance.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */



var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),

/***/ "./node_modules/fbjs/lib/performanceNow.js":
/*!*************************************************!*\
  !*** ./node_modules/fbjs/lib/performanceNow.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var performance = __webpack_require__(/*! ./performance */ "./node_modules/fbjs/lib/performance.js");

var performanceNow;

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ }),

/***/ "./node_modules/fbjs/lib/requestAnimationFrame.js":
/*!********************************************************!*\
  !*** ./node_modules/fbjs/lib/requestAnimationFrame.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
var nativeRequestAnimationFrame = __webpack_require__(/*! ./nativeRequestAnimationFrame */ "./node_modules/fbjs/lib/nativeRequestAnimationFrame.js");

var lastTime = 0;

var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
  var currTime = Date.now();
  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
  lastTime = currTime + timeDelay;
  return global.setTimeout(function () {
    callback(Date.now());
  }, timeDelay);
};

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(emptyFunction);

module.exports = requestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/semver/semver.js":
/*!***************************************!*\
  !*** ./node_modules/semver/semver.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports = module.exports = SemVer

var debug
/* istanbul ignore next */
if (typeof process === 'object' &&
    process.env &&
    process.env.NODE_DEBUG &&
    /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
  debug = function () {
    var args = Array.prototype.slice.call(arguments, 0)
    args.unshift('SEMVER')
    console.log.apply(console, args)
  }
} else {
  debug = function () {}
}

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
exports.SEMVER_SPEC_VERSION = '2.0.0'

var MAX_LENGTH = 256
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
var MAX_SAFE_COMPONENT_LENGTH = 16

// The actual regexps go on exports.re
var re = exports.re = []
var src = exports.src = []
var R = 0

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

var NUMERICIDENTIFIER = R++
src[NUMERICIDENTIFIER] = '0|[1-9]\\d*'
var NUMERICIDENTIFIERLOOSE = R++
src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

var NONNUMERICIDENTIFIER = R++
src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'

// ## Main Version
// Three dot-separated numeric identifiers.

var MAINVERSION = R++
src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')\\.' +
                   '(' + src[NUMERICIDENTIFIER] + ')'

var MAINVERSIONLOOSE = R++
src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' +
                        '(' + src[NUMERICIDENTIFIERLOOSE] + ')'

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

var PRERELEASEIDENTIFIER = R++
src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] +
                            '|' + src[NONNUMERICIDENTIFIER] + ')'

var PRERELEASEIDENTIFIERLOOSE = R++
src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] +
                                 '|' + src[NONNUMERICIDENTIFIER] + ')'

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

var PRERELEASE = R++
src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] +
                  '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))'

var PRERELEASELOOSE = R++
src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] +
                       '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

var BUILDIDENTIFIER = R++
src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

var BUILD = R++
src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] +
             '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

var FULL = R++
var FULLPLAIN = 'v?' + src[MAINVERSION] +
                src[PRERELEASE] + '?' +
                src[BUILD] + '?'

src[FULL] = '^' + FULLPLAIN + '$'

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] +
                 src[PRERELEASELOOSE] + '?' +
                 src[BUILD] + '?'

var LOOSE = R++
src[LOOSE] = '^' + LOOSEPLAIN + '$'

var GTLT = R++
src[GTLT] = '((?:<|>)?=?)'

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
var XRANGEIDENTIFIERLOOSE = R++
src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*'
var XRANGEIDENTIFIER = R++
src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*'

var XRANGEPLAIN = R++
src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' +
                   '(?:' + src[PRERELEASE] + ')?' +
                   src[BUILD] + '?' +
                   ')?)?'

var XRANGEPLAINLOOSE = R++
src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' +
                        '(?:' + src[PRERELEASELOOSE] + ')?' +
                        src[BUILD] + '?' +
                        ')?)?'

var XRANGE = R++
src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$'
var XRANGELOOSE = R++
src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
var COERCE = R++
src[COERCE] = '(?:^|[^\\d])' +
              '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' +
              '(?:$|[^\\d])'

// Tilde ranges.
// Meaning is "reasonably at or greater than"
var LONETILDE = R++
src[LONETILDE] = '(?:~>?)'

var TILDETRIM = R++
src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+'
re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g')
var tildeTrimReplace = '$1~'

var TILDE = R++
src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$'
var TILDELOOSE = R++
src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'

// Caret ranges.
// Meaning is "at least and backwards compatible with"
var LONECARET = R++
src[LONECARET] = '(?:\\^)'

var CARETTRIM = R++
src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+'
re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g')
var caretTrimReplace = '$1^'

var CARET = R++
src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$'
var CARETLOOSE = R++
src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'

// A simple gt/lt/eq thing, or just "" to indicate "any version"
var COMPARATORLOOSE = R++
src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$'
var COMPARATOR = R++
src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
var COMPARATORTRIM = R++
src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] +
                      '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'

// this one has to use the /g flag
re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g')
var comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
var HYPHENRANGE = R++
src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' +
                   '\\s+-\\s+' +
                   '(' + src[XRANGEPLAIN] + ')' +
                   '\\s*$'

var HYPHENRANGELOOSE = R++
src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s+-\\s+' +
                        '(' + src[XRANGEPLAINLOOSE] + ')' +
                        '\\s*$'

// Star ranges basically just allow anything at all.
var STAR = R++
src[STAR] = '(<|>)?=?\\s*\\*'

// Compile to actual regexp objects.
// All are flag-free, unless they were created above with a flag.
for (var i = 0; i < R; i++) {
  debug(i, src[i])
  if (!re[i]) {
    re[i] = new RegExp(src[i])
  }
}

exports.parse = parse
function parse (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  if (version.length > MAX_LENGTH) {
    return null
  }

  var r = options.loose ? re[LOOSE] : re[FULL]
  if (!r.test(version)) {
    return null
  }

  try {
    return new SemVer(version, options)
  } catch (er) {
    return null
  }
}

exports.valid = valid
function valid (version, options) {
  var v = parse(version, options)
  return v ? v.version : null
}

exports.clean = clean
function clean (version, options) {
  var s = parse(version.trim().replace(/^[=v]+/, ''), options)
  return s ? s.version : null
}

exports.SemVer = SemVer

function SemVer (version, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }
  if (version instanceof SemVer) {
    if (version.loose === options.loose) {
      return version
    } else {
      version = version.version
    }
  } else if (typeof version !== 'string') {
    throw new TypeError('Invalid Version: ' + version)
  }

  if (version.length > MAX_LENGTH) {
    throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters')
  }

  if (!(this instanceof SemVer)) {
    return new SemVer(version, options)
  }

  debug('SemVer', version, options)
  this.options = options
  this.loose = !!options.loose

  var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL])

  if (!m) {
    throw new TypeError('Invalid Version: ' + version)
  }

  this.raw = version

  // these are actually numbers
  this.major = +m[1]
  this.minor = +m[2]
  this.patch = +m[3]

  if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
    throw new TypeError('Invalid major version')
  }

  if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
    throw new TypeError('Invalid minor version')
  }

  if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
    throw new TypeError('Invalid patch version')
  }

  // numberify any prerelease numeric ids
  if (!m[4]) {
    this.prerelease = []
  } else {
    this.prerelease = m[4].split('.').map(function (id) {
      if (/^[0-9]+$/.test(id)) {
        var num = +id
        if (num >= 0 && num < MAX_SAFE_INTEGER) {
          return num
        }
      }
      return id
    })
  }

  this.build = m[5] ? m[5].split('.') : []
  this.format()
}

SemVer.prototype.format = function () {
  this.version = this.major + '.' + this.minor + '.' + this.patch
  if (this.prerelease.length) {
    this.version += '-' + this.prerelease.join('.')
  }
  return this.version
}

SemVer.prototype.toString = function () {
  return this.version
}

SemVer.prototype.compare = function (other) {
  debug('SemVer.compare', this.version, this.options, other)
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return this.compareMain(other) || this.comparePre(other)
}

SemVer.prototype.compareMain = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  return compareIdentifiers(this.major, other.major) ||
         compareIdentifiers(this.minor, other.minor) ||
         compareIdentifiers(this.patch, other.patch)
}

SemVer.prototype.comparePre = function (other) {
  if (!(other instanceof SemVer)) {
    other = new SemVer(other, this.options)
  }

  // NOT having a prerelease is > having one
  if (this.prerelease.length && !other.prerelease.length) {
    return -1
  } else if (!this.prerelease.length && other.prerelease.length) {
    return 1
  } else if (!this.prerelease.length && !other.prerelease.length) {
    return 0
  }

  var i = 0
  do {
    var a = this.prerelease[i]
    var b = other.prerelease[i]
    debug('prerelease compare', i, a, b)
    if (a === undefined && b === undefined) {
      return 0
    } else if (b === undefined) {
      return 1
    } else if (a === undefined) {
      return -1
    } else if (a === b) {
      continue
    } else {
      return compareIdentifiers(a, b)
    }
  } while (++i)
}

// preminor will bump the version up to the next minor release, and immediately
// down to pre-release. premajor and prepatch work the same way.
SemVer.prototype.inc = function (release, identifier) {
  switch (release) {
    case 'premajor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor = 0
      this.major++
      this.inc('pre', identifier)
      break
    case 'preminor':
      this.prerelease.length = 0
      this.patch = 0
      this.minor++
      this.inc('pre', identifier)
      break
    case 'prepatch':
      // If this is already a prerelease, it will bump to the next version
      // drop any prereleases that might already exist, since they are not
      // relevant at this point.
      this.prerelease.length = 0
      this.inc('patch', identifier)
      this.inc('pre', identifier)
      break
    // If the input is a non-prerelease version, this acts the same as
    // prepatch.
    case 'prerelease':
      if (this.prerelease.length === 0) {
        this.inc('patch', identifier)
      }
      this.inc('pre', identifier)
      break

    case 'major':
      // If this is a pre-major version, bump up to the same major version.
      // Otherwise increment major.
      // 1.0.0-5 bumps to 1.0.0
      // 1.1.0 bumps to 2.0.0
      if (this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0) {
        this.major++
      }
      this.minor = 0
      this.patch = 0
      this.prerelease = []
      break
    case 'minor':
      // If this is a pre-minor version, bump up to the same minor version.
      // Otherwise increment minor.
      // 1.2.0-5 bumps to 1.2.0
      // 1.2.1 bumps to 1.3.0
      if (this.patch !== 0 || this.prerelease.length === 0) {
        this.minor++
      }
      this.patch = 0
      this.prerelease = []
      break
    case 'patch':
      // If this is not a pre-release version, it will increment the patch.
      // If it is a pre-release it will bump up to the same patch version.
      // 1.2.0-5 patches to 1.2.0
      // 1.2.0 patches to 1.2.1
      if (this.prerelease.length === 0) {
        this.patch++
      }
      this.prerelease = []
      break
    // This probably shouldn't be used publicly.
    // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.
    case 'pre':
      if (this.prerelease.length === 0) {
        this.prerelease = [0]
      } else {
        var i = this.prerelease.length
        while (--i >= 0) {
          if (typeof this.prerelease[i] === 'number') {
            this.prerelease[i]++
            i = -2
          }
        }
        if (i === -1) {
          // didn't increment anything
          this.prerelease.push(0)
        }
      }
      if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
        if (this.prerelease[0] === identifier) {
          if (isNaN(this.prerelease[1])) {
            this.prerelease = [identifier, 0]
          }
        } else {
          this.prerelease = [identifier, 0]
        }
      }
      break

    default:
      throw new Error('invalid increment argument: ' + release)
  }
  this.format()
  this.raw = this.version
  return this
}

exports.inc = inc
function inc (version, release, loose, identifier) {
  if (typeof (loose) === 'string') {
    identifier = loose
    loose = undefined
  }

  try {
    return new SemVer(version, loose).inc(release, identifier).version
  } catch (er) {
    return null
  }
}

exports.diff = diff
function diff (version1, version2) {
  if (eq(version1, version2)) {
    return null
  } else {
    var v1 = parse(version1)
    var v2 = parse(version2)
    var prefix = ''
    if (v1.prerelease.length || v2.prerelease.length) {
      prefix = 'pre'
      var defaultResult = 'prerelease'
    }
    for (var key in v1) {
      if (key === 'major' || key === 'minor' || key === 'patch') {
        if (v1[key] !== v2[key]) {
          return prefix + key
        }
      }
    }
    return defaultResult // may be undefined
  }
}

exports.compareIdentifiers = compareIdentifiers

var numeric = /^[0-9]+$/
function compareIdentifiers (a, b) {
  var anum = numeric.test(a)
  var bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

exports.rcompareIdentifiers = rcompareIdentifiers
function rcompareIdentifiers (a, b) {
  return compareIdentifiers(b, a)
}

exports.major = major
function major (a, loose) {
  return new SemVer(a, loose).major
}

exports.minor = minor
function minor (a, loose) {
  return new SemVer(a, loose).minor
}

exports.patch = patch
function patch (a, loose) {
  return new SemVer(a, loose).patch
}

exports.compare = compare
function compare (a, b, loose) {
  return new SemVer(a, loose).compare(new SemVer(b, loose))
}

exports.compareLoose = compareLoose
function compareLoose (a, b) {
  return compare(a, b, true)
}

exports.rcompare = rcompare
function rcompare (a, b, loose) {
  return compare(b, a, loose)
}

exports.sort = sort
function sort (list, loose) {
  return list.sort(function (a, b) {
    return exports.compare(a, b, loose)
  })
}

exports.rsort = rsort
function rsort (list, loose) {
  return list.sort(function (a, b) {
    return exports.rcompare(a, b, loose)
  })
}

exports.gt = gt
function gt (a, b, loose) {
  return compare(a, b, loose) > 0
}

exports.lt = lt
function lt (a, b, loose) {
  return compare(a, b, loose) < 0
}

exports.eq = eq
function eq (a, b, loose) {
  return compare(a, b, loose) === 0
}

exports.neq = neq
function neq (a, b, loose) {
  return compare(a, b, loose) !== 0
}

exports.gte = gte
function gte (a, b, loose) {
  return compare(a, b, loose) >= 0
}

exports.lte = lte
function lte (a, b, loose) {
  return compare(a, b, loose) <= 0
}

exports.cmp = cmp
function cmp (a, op, b, loose) {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError('Invalid operator: ' + op)
  }
}

exports.Comparator = Comparator
function Comparator (comp, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (comp instanceof Comparator) {
    if (comp.loose === !!options.loose) {
      return comp
    } else {
      comp = comp.value
    }
  }

  if (!(this instanceof Comparator)) {
    return new Comparator(comp, options)
  }

  debug('comparator', comp, options)
  this.options = options
  this.loose = !!options.loose
  this.parse(comp)

  if (this.semver === ANY) {
    this.value = ''
  } else {
    this.value = this.operator + this.semver.version
  }

  debug('comp', this)
}

var ANY = {}
Comparator.prototype.parse = function (comp) {
  var r = this.options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var m = comp.match(r)

  if (!m) {
    throw new TypeError('Invalid comparator: ' + comp)
  }

  this.operator = m[1]
  if (this.operator === '=') {
    this.operator = ''
  }

  // if it literally is just '>' or '' then allow anything.
  if (!m[2]) {
    this.semver = ANY
  } else {
    this.semver = new SemVer(m[2], this.options.loose)
  }
}

Comparator.prototype.toString = function () {
  return this.value
}

Comparator.prototype.test = function (version) {
  debug('Comparator.test', version, this.options.loose)

  if (this.semver === ANY) {
    return true
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  return cmp(version, this.operator, this.semver, this.options)
}

Comparator.prototype.intersects = function (comp, options) {
  if (!(comp instanceof Comparator)) {
    throw new TypeError('a Comparator is required')
  }

  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  var rangeTmp

  if (this.operator === '') {
    rangeTmp = new Range(comp.value, options)
    return satisfies(this.value, rangeTmp, options)
  } else if (comp.operator === '') {
    rangeTmp = new Range(this.value, options)
    return satisfies(comp.semver, rangeTmp, options)
  }

  var sameDirectionIncreasing =
    (this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '>=' || comp.operator === '>')
  var sameDirectionDecreasing =
    (this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '<=' || comp.operator === '<')
  var sameSemVer = this.semver.version === comp.semver.version
  var differentDirectionsInclusive =
    (this.operator === '>=' || this.operator === '<=') &&
    (comp.operator === '>=' || comp.operator === '<=')
  var oppositeDirectionsLessThan =
    cmp(this.semver, '<', comp.semver, options) &&
    ((this.operator === '>=' || this.operator === '>') &&
    (comp.operator === '<=' || comp.operator === '<'))
  var oppositeDirectionsGreaterThan =
    cmp(this.semver, '>', comp.semver, options) &&
    ((this.operator === '<=' || this.operator === '<') &&
    (comp.operator === '>=' || comp.operator === '>'))

  return sameDirectionIncreasing || sameDirectionDecreasing ||
    (sameSemVer && differentDirectionsInclusive) ||
    oppositeDirectionsLessThan || oppositeDirectionsGreaterThan
}

exports.Range = Range
function Range (range, options) {
  if (!options || typeof options !== 'object') {
    options = {
      loose: !!options,
      includePrerelease: false
    }
  }

  if (range instanceof Range) {
    if (range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease) {
      return range
    } else {
      return new Range(range.raw, options)
    }
  }

  if (range instanceof Comparator) {
    return new Range(range.value, options)
  }

  if (!(this instanceof Range)) {
    return new Range(range, options)
  }

  this.options = options
  this.loose = !!options.loose
  this.includePrerelease = !!options.includePrerelease

  // First, split based on boolean or ||
  this.raw = range
  this.set = range.split(/\s*\|\|\s*/).map(function (range) {
    return this.parseRange(range.trim())
  }, this).filter(function (c) {
    // throw out any that are not relevant for whatever reason
    return c.length
  })

  if (!this.set.length) {
    throw new TypeError('Invalid SemVer Range: ' + range)
  }

  this.format()
}

Range.prototype.format = function () {
  this.range = this.set.map(function (comps) {
    return comps.join(' ').trim()
  }).join('||').trim()
  return this.range
}

Range.prototype.toString = function () {
  return this.range
}

Range.prototype.parseRange = function (range) {
  var loose = this.options.loose
  range = range.trim()
  // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
  var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE]
  range = range.replace(hr, hyphenReplace)
  debug('hyphen replace', range)
  // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
  range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace)
  debug('comparator trim', range, re[COMPARATORTRIM])

  // `~ 1.2.3` => `~1.2.3`
  range = range.replace(re[TILDETRIM], tildeTrimReplace)

  // `^ 1.2.3` => `^1.2.3`
  range = range.replace(re[CARETTRIM], caretTrimReplace)

  // normalize spaces
  range = range.split(/\s+/).join(' ')

  // At this point, the range is completely trimmed and
  // ready to be split into comparators.

  var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR]
  var set = range.split(' ').map(function (comp) {
    return parseComparator(comp, this.options)
  }, this).join(' ').split(/\s+/)
  if (this.options.loose) {
    // in loose mode, throw out any that are not valid comparators
    set = set.filter(function (comp) {
      return !!comp.match(compRe)
    })
  }
  set = set.map(function (comp) {
    return new Comparator(comp, this.options)
  }, this)

  return set
}

Range.prototype.intersects = function (range, options) {
  if (!(range instanceof Range)) {
    throw new TypeError('a Range is required')
  }

  return this.set.some(function (thisComparators) {
    return thisComparators.every(function (thisComparator) {
      return range.set.some(function (rangeComparators) {
        return rangeComparators.every(function (rangeComparator) {
          return thisComparator.intersects(rangeComparator, options)
        })
      })
    })
  })
}

// Mostly just for testing and legacy API reasons
exports.toComparators = toComparators
function toComparators (range, options) {
  return new Range(range, options).set.map(function (comp) {
    return comp.map(function (c) {
      return c.value
    }).join(' ').trim().split(' ')
  })
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
function parseComparator (comp, options) {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

function isX (id) {
  return !id || id.toLowerCase() === 'x' || id === '*'
}

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0
function replaceTildes (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceTilde(comp, options)
  }).join(' ')
}

function replaceTilde (comp, options) {
  var r = options.loose ? re[TILDELOOSE] : re[TILDE]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('tilde', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
            ' <' + M + '.' + (+m + 1) + '.0'
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0
      ret = '>=' + M + '.' + m + '.' + p +
            ' <' + M + '.' + (+m + 1) + '.0'
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
// ^1.2.3 --> >=1.2.3 <2.0.0
// ^1.2.0 --> >=1.2.0 <2.0.0
function replaceCarets (comp, options) {
  return comp.trim().split(/\s+/).map(function (comp) {
    return replaceCaret(comp, options)
  }).join(' ')
}

function replaceCaret (comp, options) {
  debug('caret', comp, options)
  var r = options.loose ? re[CARETLOOSE] : re[CARET]
  return comp.replace(r, function (_, M, m, p, pr) {
    debug('caret', comp, _, M, m, p, pr)
    var ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (isX(p)) {
      if (M === '0') {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
      } else {
        ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0'
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr +
              ' <' + (+M + 1) + '.0.0'
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + m + '.' + (+p + 1)
        } else {
          ret = '>=' + M + '.' + m + '.' + p +
                ' <' + M + '.' + (+m + 1) + '.0'
        }
      } else {
        ret = '>=' + M + '.' + m + '.' + p +
              ' <' + (+M + 1) + '.0.0'
      }
    }

    debug('caret return', ret)
    return ret
  })
}

function replaceXRanges (comp, options) {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map(function (comp) {
    return replaceXRange(comp, options)
  }).join(' ')
}

function replaceXRange (comp, options) {
  comp = comp.trim()
  var r = options.loose ? re[XRANGELOOSE] : re[XRANGE]
  return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    var xM = isX(M)
    var xm = xM || isX(m)
    var xp = xm || isX(p)
    var anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        // >1.2.3 => >= 1.2.4
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      ret = gtlt + M + '.' + m + '.' + p
    } else if (xm) {
      ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0'
    } else if (xp) {
      ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0'
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
function replaceStars (comp, options) {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[STAR], '')
}

// This function is passed to string.replace(re[HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0
function hyphenReplace ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = '>=' + fM + '.0.0'
  } else if (isX(fp)) {
    from = '>=' + fM + '.' + fm + '.0'
  } else {
    from = '>=' + from
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = '<' + (+tM + 1) + '.0.0'
  } else if (isX(tp)) {
    to = '<' + tM + '.' + (+tm + 1) + '.0'
  } else if (tpr) {
    to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr
  } else {
    to = '<=' + to
  }

  return (from + ' ' + to).trim()
}

// if ANY of the sets match ALL of its comparators, then pass
Range.prototype.test = function (version) {
  if (!version) {
    return false
  }

  if (typeof version === 'string') {
    version = new SemVer(version, this.options)
  }

  for (var i = 0; i < this.set.length; i++) {
    if (testSet(this.set[i], version, this.options)) {
      return true
    }
  }
  return false
}

function testSet (set, version, options) {
  for (var i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        var allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}

exports.satisfies = satisfies
function satisfies (version, range, options) {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}

exports.maxSatisfying = maxSatisfying
function maxSatisfying (versions, range, options) {
  var max = null
  var maxSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!max || maxSV.compare(v) === -1) {
        // compare(max, v, true)
        max = v
        maxSV = new SemVer(max, options)
      }
    }
  })
  return max
}

exports.minSatisfying = minSatisfying
function minSatisfying (versions, range, options) {
  var min = null
  var minSV = null
  try {
    var rangeObj = new Range(range, options)
  } catch (er) {
    return null
  }
  versions.forEach(function (v) {
    if (rangeObj.test(v)) {
      // satisfies(v, range, options)
      if (!min || minSV.compare(v) === 1) {
        // compare(min, v, true)
        min = v
        minSV = new SemVer(min, options)
      }
    }
  })
  return min
}

exports.minVersion = minVersion
function minVersion (range, loose) {
  range = new Range(range, loose)

  var minver = new SemVer('0.0.0')
  if (range.test(minver)) {
    return minver
  }

  minver = new SemVer('0.0.0-0')
  if (range.test(minver)) {
    return minver
  }

  minver = null
  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    comparators.forEach(function (comparator) {
      // Clone to avoid manipulating the comparator's semver object.
      var compver = new SemVer(comparator.semver.version)
      switch (comparator.operator) {
        case '>':
          if (compver.prerelease.length === 0) {
            compver.patch++
          } else {
            compver.prerelease.push(0)
          }
          compver.raw = compver.format()
          /* fallthrough */
        case '':
        case '>=':
          if (!minver || gt(minver, compver)) {
            minver = compver
          }
          break
        case '<':
        case '<=':
          /* Ignore maximum versions */
          break
        /* istanbul ignore next */
        default:
          throw new Error('Unexpected operation: ' + comparator.operator)
      }
    })
  }

  if (minver && range.test(minver)) {
    return minver
  }

  return null
}

exports.validRange = validRange
function validRange (range, options) {
  try {
    // Return '*' instead of '' so that truthiness works.
    // This will throw if it's invalid anyway
    return new Range(range, options).range || '*'
  } catch (er) {
    return null
  }
}

// Determine if version is less than all the versions possible in the range
exports.ltr = ltr
function ltr (version, range, options) {
  return outside(version, range, '<', options)
}

// Determine if version is greater than all the versions possible in the range.
exports.gtr = gtr
function gtr (version, range, options) {
  return outside(version, range, '>', options)
}

exports.outside = outside
function outside (version, range, hilo, options) {
  version = new SemVer(version, options)
  range = new Range(range, options)

  var gtfn, ltefn, ltfn, comp, ecomp
  switch (hilo) {
    case '>':
      gtfn = gt
      ltefn = lte
      ltfn = lt
      comp = '>'
      ecomp = '>='
      break
    case '<':
      gtfn = lt
      ltefn = gte
      ltfn = gt
      comp = '<'
      ecomp = '<='
      break
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"')
  }

  // If it satisifes the range it is not outside
  if (satisfies(version, range, options)) {
    return false
  }

  // From now on, variable terms are as if we're in "gtr" mode.
  // but note that everything is flipped for the "ltr" function.

  for (var i = 0; i < range.set.length; ++i) {
    var comparators = range.set[i]

    var high = null
    var low = null

    comparators.forEach(function (comparator) {
      if (comparator.semver === ANY) {
        comparator = new Comparator('>=0.0.0')
      }
      high = high || comparator
      low = low || comparator
      if (gtfn(comparator.semver, high.semver, options)) {
        high = comparator
      } else if (ltfn(comparator.semver, low.semver, options)) {
        low = comparator
      }
    })

    // If the edge version comparator has a operator then our version
    // isn't outside it
    if (high.operator === comp || high.operator === ecomp) {
      return false
    }

    // If the lowest version comparator has an operator and our version
    // is less than it then it isn't higher than the range
    if ((!low.operator || low.operator === comp) &&
        ltefn(version, low.semver)) {
      return false
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false
    }
  }
  return true
}

exports.prerelease = prerelease
function prerelease (version, options) {
  var parsed = parse(version, options)
  return (parsed && parsed.prerelease.length) ? parsed.prerelease : null
}

exports.intersects = intersects
function intersects (r1, r2, options) {
  r1 = new Range(r1, options)
  r2 = new Range(r2, options)
  return r1.intersects(r2)
}

exports.coerce = coerce
function coerce (version) {
  if (version instanceof SemVer) {
    return version
  }

  if (typeof version !== 'string') {
    return null
  }

  var match = version.match(re[COERCE])

  if (match == null) {
    return null
  }

  return parse(match[1] +
    '.' + (match[2] || '0') +
    '.' + (match[3] || '0'))
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=backend.js.map