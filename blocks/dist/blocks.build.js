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
/******/ 	return __webpack_require__(__webpack_require__.s = "./preprocess/scripts/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./preprocess/scripts/blocks.js":
/*!**************************************!*\
  !*** ./preprocess/scripts/blocks.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_RestaurantMenu_RestaurantMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/RestaurantMenu/RestaurantMenu */ "./preprocess/scripts/blocks/RestaurantMenu/RestaurantMenu.js");
/* harmony import */ var _blocks_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/MenuItem/MenuItem */ "./preprocess/scripts/blocks/MenuItem/MenuItem.js");


var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('wp-blocks-cloud/restaurantmenu', _blocks_RestaurantMenu_RestaurantMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerBlockType('wp-blocks-cloud/menuitem', _blocks_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./preprocess/scripts/blocks/MenuItem/MenuItem.js":
/*!********************************************************!*\
  !*** ./preprocess/scripts/blocks/MenuItem/MenuItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/MenuItem/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./preprocess/scripts/blocks/MenuItem/save.js");


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Menu Item'),
  description: __('Add a menu item'),
  category: 'common',
  icon: wp.element.createElement("svg", {
    width: "18px",
    height: "19px",
    viewBox: "0 0 18 19",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, wp.element.createElement("g", {
    id: "Restaurant-Menu",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    fontFamily: "Dashicons-Regular, Dashicons",
    fontSize: "20",
    fontWeight: "normal"
  }, wp.element.createElement("g", {
    id: "Restaurant-Block:-Menu-Item:-Add-Another",
    transform: "translate(-533.000000, -649.000000)",
    fill: "#555D66"
  }, wp.element.createElement("g", {
    id: "Body",
    transform: "translate(235.000000, 152.000000)"
  }, wp.element.createElement("g", {
    id: "Actice",
    transform: "translate(36.000000, 80.000000)"
  }, wp.element.createElement("g", {
    id: "Inserter",
    transform: "translate(188.000000, 196.000000)"
  }, wp.element.createElement("g", {
    id: "Group-3-Copy-4",
    transform: "translate(28.000000, 171.000000)"
  }, wp.element.createElement("g", {
    id: "Paragraph-Block",
    transform: "translate(4.000000, 36.000000)"
  }, wp.element.createElement("text", {
    id: ""
  }, wp.element.createElement("tspan", {
    x: "41",
    y: "34"
  }, "\uF511")))))))))),
  attributes: {
    name: {
      type: 'string',
      default: ''
    },
    description: {
      type: 'string',
      default: ''
    },
    price: {
      type: 'string',
      default: ''
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./preprocess/scripts/blocks/MenuItem/edit.js":
/*!****************************************************!*\
  !*** ./preprocess/scripts/blocks/MenuItem/edit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __ = wp.i18n.__;
var InspectorControls = wp.editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  console.log('blocks: ', block.attributes.name);

  var controls = function controls() {
    return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
      title: __('Menu Item Settings')
    }, wp.element.createElement("div", {
      className: "components-base-control"
    }, wp.element.createElement(TextControl, {
      label: __('Menu Item Name'),
      placeholder: __('Menu Item Name'),
      onChange: function onChange(name) {
        return block.setAttributes({
          name: name
        });
      },
      value: block.attributes.name
    })), wp.element.createElement("div", {
      className: "components-base-control"
    }, wp.element.createElement(TextareaControl, {
      label: __('Description'),
      placeholder: __('Description'),
      onChange: function onChange(description) {
        return block.setAttributes({
          description: description
        });
      },
      value: block.attributes.description
    })), wp.element.createElement("div", {
      className: "components-base-control"
    }, wp.element.createElement(TextControl, {
      label: __('Menu Item Price'),
      type: "number",
      placeholder: __('Menu Item Price'),
      onChange: function onChange(price) {
        return block.setAttributes({
          price: price
        });
      },
      value: block.attributes.price
    }))));
  };

  var rendered = function rendered() {
    return wp.element.createElement("div", {
      className: ""
    }, wp.element.createElement("h5", null, block.attributes.name), wp.element.createElement("h6", null, "$", block.attributes.price), wp.element.createElement("p", null, block.attributes.description));
  };
  /**
   * Return the controls, and rendered UIs together as an array
   */


  return [controls(), rendered()];
});

/***/ }),

/***/ "./preprocess/scripts/blocks/MenuItem/save.js":
/*!****************************************************!*\
  !*** ./preprocess/scripts/blocks/MenuItem/save.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return wp.element.createElement("div", {
    className: ""
  }, wp.element.createElement("h5", null, block.attributes.name), wp.element.createElement("h6", null, "$", block.attributes.price), wp.element.createElement("p", null, block.attributes.description));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/RestaurantMenu/RestaurantMenu.js":
/*!********************************************************************!*\
  !*** ./preprocess/scripts/blocks/RestaurantMenu/RestaurantMenu.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/RestaurantMenu/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./preprocess/scripts/blocks/RestaurantMenu/save.js");


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Restaurant Menu'),
  description: __('Add a menu'),
  category: 'common',
  icon: wp.element.createElement("svg", {
    width: "17px",
    height: "20px",
    viewBox: "0 0 17 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, wp.element.createElement("defs", null, wp.element.createElement("path", {
    d: "M16.6666667,18 L8.33333333,18 L8.33333333,16 L16.6666667,16 L16.6666667,18 Z M16.6666667,12 L8.33333333,12 L8.33333333,14 L16.6666667,14 L16.6666667,12 Z M18.75,3 L16.6666667,3 L16.6666667,5 L18.75,5 L18.75,20 L6.25,20 L6.25,5 L8.33333333,5 L8.33333333,3 L6.25,3 C5.09895833,3 4.16666667,3.895 4.16666667,5 L4.16666667,20 C4.16666667,21.105 5.09895833,22 6.25,22 L18.75,22 C19.9010417,22 20.8333333,21.105 20.8333333,20 L20.8333333,5 C20.8333333,3.895 19.9010417,3 18.75,3 Z M14.5833333,5 L14.5833333,4 C14.5833333,2.895 13.6510417,2 12.5,2 C11.3489583,2 10.4166667,2.895 10.4166667,4 L10.4166667,5 C9.265625,5 8.33333333,5.895 8.33333333,7 L8.33333333,8 L16.6666667,8 L16.6666667,7 C16.6666667,5.895 15.734375,5 14.5833333,5 Z",
    id: "path-1"
  })), wp.element.createElement("g", {
    id: "Restaurant-Menu",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, wp.element.createElement("g", {
    id: "Insert-Block:-Restaurant-Blocks",
    transform: "translate(-309.000000, -477.000000)"
  }, wp.element.createElement("g", {
    id: "Body",
    transform: "translate(235.000000, 152.000000)"
  }, wp.element.createElement("g", {
    id: "Inserter",
    transform: "translate(0.000000, 104.000000)"
  }, wp.element.createElement("g", {
    id: "Restaurant-Blocks",
    transform: "translate(32.000000, 174.000000)"
  }, wp.element.createElement("g", {
    id: "Menu",
    transform: "translate(0.000000, 33.000000)"
  }, wp.element.createElement("g", {
    id: "Gridicon-/-clipboard",
    transform: "translate(38.000000, 12.000000)"
  }, wp.element.createElement("g", {
    id: "gridicons-clipboard"
  }, wp.element.createElement("rect", {
    id: "Rectangle-path",
    x: "0",
    y: "0",
    width: "25",
    height: "24"
  }), wp.element.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, wp.element.createElement("use", {
    xlinkHref: "#path-1"
  })), wp.element.createElement("use", {
    id: "Shape",
    fill: "#000000",
    fillRule: "nonzero",
    xlinkHref: "#path-1"
  }), wp.element.createElement("g", {
    id: "Color-/-Dark-Gray-500",
    mask: "url(#mask-2)",
    fill: "#555D66"
  }, wp.element.createElement("rect", {
    id: "dark-gray-500",
    x: "0",
    y: "0",
    width: "25",
    height: "24"
  }))))))))))),
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./preprocess/scripts/blocks/RestaurantMenu/edit.js":
/*!**********************************************************!*\
  !*** ./preprocess/scripts/blocks/RestaurantMenu/edit.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var InnerBlocks = wp.editor.InnerBlocks;
var ALLOWED_BLOCKS = ['wp-blocks-cloud/menuitem', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery'];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var controls = function controls() {
    return wp.element.createElement("div", null, wp.element.createElement(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }));
  };

  var rendered = function rendered() {
    return wp.element.createElement("div", null, wp.element.createElement(InnerBlocks.Content, null));
  };
  /**
   * Return the controls, and rendered UIs together as an array
   */


  return [controls(), rendered()];
});

/***/ }),

/***/ "./preprocess/scripts/blocks/RestaurantMenu/save.js":
/*!**********************************************************!*\
  !*** ./preprocess/scripts/blocks/RestaurantMenu/save.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var InnerBlocks = wp.editor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return wp.element.createElement("div", null, wp.element.createElement(InnerBlocks.Content, null));
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTWVudUl0ZW0vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9zYXZlLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJSZXN0YXVyYW50TWVudSIsIk1lbnVJdGVtIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJuYW1lIiwidHlwZSIsImRlZmF1bHQiLCJwcmljZSIsImVkaXQiLCJzYXZlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJlZGl0b3IiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiVGV4dENvbnRyb2wiLCJUZXh0YXJlYUNvbnRyb2wiLCJibG9jayIsImNvbnNvbGUiLCJsb2ciLCJjb250cm9scyIsInNldEF0dHJpYnV0ZXMiLCJyZW5kZXJlZCIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QWdCN0IsRUFBRSxDQUFDa0IsTSxDQUFuQlcsVztBQUVPLDJFQUFZO0FBQ3pCLFNBQ0Usc0NBQ0UseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERixDQURGO0FBS0QsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgUmVzdGF1cmFudE1lbnUgZnJvbSAnLi9ibG9ja3MvUmVzdGF1cmFudE1lbnUvUmVzdGF1cmFudE1lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9ibG9ja3MvTWVudUl0ZW0vTWVudUl0ZW0nXG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnd3AtYmxvY2tzLWNsb3VkL3Jlc3RhdXJhbnRtZW51JywgUmVzdGF1cmFudE1lbnUpXG5yZWdpc3RlckJsb2NrVHlwZSgnd3AtYmxvY2tzLWNsb3VkL21lbnVpdGVtJywgTWVudUl0ZW0pXG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ01lbnUgSXRlbScpLFxuICBkZXNjcmlwdGlvbjogX18oJ0FkZCBhIG1lbnUgaXRlbScpLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGljb246IChcbiAgICA8c3ZnIHdpZHRoPVwiMThweFwiIGhlaWdodD1cIjE5cHhcIiB2aWV3Qm94PVwiMCAwIDE4IDE5XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LU1lbnVcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBmb250RmFtaWx5PVwiRGFzaGljb25zLVJlZ3VsYXIsIERhc2hpY29uc1wiIGZvbnRTaXplPVwiMjBcIiBmb250V2VpZ2h0PVwibm9ybWFsXCI+XG4gICAgICAgIDxnIGlkPVwiUmVzdGF1cmFudC1CbG9jazotTWVudS1JdGVtOi1BZGQtQW5vdGhlclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTMzLjAwMDAwMCwgLTY0OS4wMDAwMDApXCIgZmlsbD1cIiM1NTVENjZcIj5cbiAgICAgICAgICA8ZyBpZD1cIkJvZHlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjM1LjAwMDAwMCwgMTUyLjAwMDAwMClcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiQWN0aWNlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2LjAwMDAwMCwgODAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cIkluc2VydGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE4OC4wMDAwMDAsIDE5Ni4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cC0zLUNvcHktNFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyOC4wMDAwMDAsIDE3MS4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIlBhcmFncmFwaC1CbG9ja1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjAwMDAwMCwgMzYuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD1cIu+UkVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PVwiNDFcIiB5PVwiMzRcIj7vlJE8L3RzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zb2xlLmxvZygnYmxvY2tzOiAnLCBibG9jay5hdHRyaWJ1dGVzLm5hbWUpXG4gIGNvbnN0IGNvbnRyb2xzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnTWVudSBJdGVtIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XG4gICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgbGFiZWw9eyBfXygnTWVudSBJdGVtIE5hbWUnKSB9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgX18oJ01lbnUgSXRlbSBOYW1lJykgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IG5hbWUgPT4gYmxvY2suc2V0QXR0cmlidXRlcyh7IG5hbWUgfSkgfVxuICAgICAgICAgICAgICB2YWx1ZT17IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxuICAgICAgICAgICAgPFRleHRhcmVhQ29udHJvbFxuICAgICAgICAgICAgICBsYWJlbD17IF9fKCdEZXNjcmlwdGlvbicpIH1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBfXygnRGVzY3JpcHRpb24nKSB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZGVzY3JpcHRpb24gPT4gYmxvY2suc2V0QXR0cmlidXRlcyh7IGRlc2NyaXB0aW9uIH0pIH1cbiAgICAgICAgICAgICAgdmFsdWU9eyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sXCI+XG4gICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgbGFiZWw9eyBfXygnTWVudSBJdGVtIFByaWNlJykgfVxuICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBfXygnTWVudSBJdGVtIFByaWNlJykgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IHByaWNlID0+IGJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwcmljZSB9KSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgYmxvY2suYXR0cmlidXRlcy5wcmljZSB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGg1PnsgYmxvY2suYXR0cmlidXRlcy5uYW1lIH08L2g1PlxuICAgICAgICA8aDY+JHsgYmxvY2suYXR0cmlidXRlcy5wcmljZSB9PC9oNj5cbiAgICAgICAgPHA+eyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb250cm9scywgYW5kIHJlbmRlcmVkIFVJcyB0b2dldGhlciBhcyBhbiBhcnJheVxuICAgKi9cbiAgcmV0dXJuIFtcbiAgICBjb250cm9scygpLFxuICAgIHJlbmRlcmVkKClcbiAgXVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxoNT57IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSB9PC9oNT5cbiAgICAgIDxoNj4keyBibG9jay5hdHRyaWJ1dGVzLnByaWNlIH08L2g2PlxuICAgICAgPHA+eyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSdcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiBfXygnUmVzdGF1cmFudCBNZW51JyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQWRkIGEgbWVudScpLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGljb246IChcbiAgICA8c3ZnIHdpZHRoPVwiMTdweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDE3IDIwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuNjY2NjY2NywxOCBMOC4zMzMzMzMzMywxOCBMOC4zMzMzMzMzMywxNiBMMTYuNjY2NjY2NywxNiBMMTYuNjY2NjY2NywxOCBaIE0xNi42NjY2NjY3LDEyIEw4LjMzMzMzMzMzLDEyIEw4LjMzMzMzMzMzLDE0IEwxNi42NjY2NjY3LDE0IEwxNi42NjY2NjY3LDEyIFogTTE4Ljc1LDMgTDE2LjY2NjY2NjcsMyBMMTYuNjY2NjY2Nyw1IEwxOC43NSw1IEwxOC43NSwyMCBMNi4yNSwyMCBMNi4yNSw1IEw4LjMzMzMzMzMzLDUgTDguMzMzMzMzMzMsMyBMNi4yNSwzIEM1LjA5ODk1ODMzLDMgNC4xNjY2NjY2NywzLjg5NSA0LjE2NjY2NjY3LDUgTDQuMTY2NjY2NjcsMjAgQzQuMTY2NjY2NjcsMjEuMTA1IDUuMDk4OTU4MzMsMjIgNi4yNSwyMiBMMTguNzUsMjIgQzE5LjkwMTA0MTcsMjIgMjAuODMzMzMzMywyMS4xMDUgMjAuODMzMzMzMywyMCBMMjAuODMzMzMzMyw1IEMyMC44MzMzMzMzLDMuODk1IDE5LjkwMTA0MTcsMyAxOC43NSwzIFogTTE0LjU4MzMzMzMsNSBMMTQuNTgzMzMzMyw0IEMxNC41ODMzMzMzLDIuODk1IDEzLjY1MTA0MTcsMiAxMi41LDIgQzExLjM0ODk1ODMsMiAxMC40MTY2NjY3LDIuODk1IDEwLjQxNjY2NjcsNCBMMTAuNDE2NjY2Nyw1IEM5LjI2NTYyNSw1IDguMzMzMzMzMzMsNS44OTUgOC4zMzMzMzMzMyw3IEw4LjMzMzMzMzMzLDggTDE2LjY2NjY2NjcsOCBMMTYuNjY2NjY2Nyw3IEMxNi42NjY2NjY3LDUuODk1IDE1LjczNDM3NSw1IDE0LjU4MzMzMzMsNSBaXCIgaWQ9XCJwYXRoLTFcIj48L3BhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtTWVudVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8ZyBpZD1cIkluc2VydC1CbG9jazotUmVzdGF1cmFudC1CbG9ja3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMwOS4wMDAwMDAsIC00NzcuMDAwMDAwKVwiPlxuICAgICAgICAgIDxnIGlkPVwiQm9keVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMzUuMDAwMDAwLCAxNTIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJJbnNlcnRlclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA0LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LUJsb2Nrc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMi4wMDAwMDAsIDE3NC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJNZW51XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAzMy4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyaWRpY29uLS8tY2xpcGJvYXJkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4LjAwMDAwMCwgMTIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdyaWRpY29ucy1jbGlwYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZS1wYXRoXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNFwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2stMlwiIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbFJ1bGU9XCJub256ZXJvXCIgeGxpbmtIcmVmPVwiI3BhdGgtMVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiQ29sb3ItLy1EYXJrLUdyYXktNTAwXCIgbWFzaz1cInVybCgjbWFzay0yKVwiIGZpbGw9XCIjNTU1RDY2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cImRhcmstZ3JheS01MDBcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI0XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApLFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJjb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5lZGl0b3JcbmNvbnN0IEFMTE9XRURfQkxPQ0tTID0gWyAnd3AtYmxvY2tzLWNsb3VkL21lbnVpdGVtJywgJ2NvcmUvaGVhZGluZycsICdjb3JlL3BhcmFncmFwaCcsICdjb3JlL2ltYWdlJywgJ2NvcmUvZ2FsbGVyeScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRyb2xzID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5uZXJCbG9ja3MgYWxsb3dlZEJsb2Nrcz17IEFMTE9XRURfQkxPQ0tTIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlcmVkID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SW5uZXJCbG9ja3MuQ29udGVudCAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29udHJvbHMsIGFuZCByZW5kZXJlZCBVSXMgdG9nZXRoZXIgYXMgYW4gYXJyYXlcbiAgICovXG4gIHJldHVybiBbXG4gICAgY29udHJvbHMoKSxcbiAgICByZW5kZXJlZCgpXG4gIF1cbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=