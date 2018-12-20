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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
registerBlockType('builder-blocks/restaurantmenu', _blocks_RestaurantMenu_RestaurantMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerBlockType('builder-blocks/menuitem', _blocks_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
  var controls = function controls() {
    return wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
      title: __('Menu Item Settings')
    }, wp.element.createElement("div", {
      className: "components-base-control"
    })));
  };

  var rendered = function rendered() {
    return wp.element.createElement("div", {
      className: "wpbc-restaurant-menu-item"
    }, wp.element.createElement("header", {
      className: "wpbc-restaurant-menu-item-header"
    }, wp.element.createElement(TextControl, {
      placeholder: __('Write the name of the menu item here...'),
      onChange: function onChange(name) {
        return block.setAttributes({
          name: name
        });
      },
      value: block.attributes.name
    }), wp.element.createElement(TextControl, {
      type: "currency",
      placeholder: __('0.00'),
      onChange: function onChange(price) {
        return block.setAttributes({
          price: price
        });
      },
      value: block.attributes.price
    })), wp.element.createElement(TextareaControl, {
      rows: "2",
      placeholder: __('Write a description of the menu item here...'),
      onChange: function onChange(description) {
        return block.setAttributes({
          description: description
        });
      },
      value: block.attributes.description
    }));
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
    className: "wpbc-restaurant-menu-item"
  }, wp.element.createElement("header", {
    className: "wpbc-restaurant-menu-item-header"
  }, wp.element.createElement("span", null, block.attributes.name), wp.element.createElement("span", null, "$", block.attributes.price)), block.attributes.description);
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
var ALLOWED_BLOCKS = ['builder-blocks/menuitem', 'core/heading', 'core/paragraph', 'core/image', 'core/gallery', 'core/columns'];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var controls = function controls() {
    return wp.element.createElement("div", {
      className: "wpbc-restaurant-menu"
    }, wp.element.createElement(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    }));
  };
  /**
   * Return the controls, and rendered UIs together as an array
   */


  return [controls()];
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

/***/ }),

/***/ "./preprocess/styles/blocks.scss":
/*!***************************************!*\
  !*** ./preprocess/styles/blocks.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************!*\
  !*** multi ./preprocess/scripts/blocks.js ./preprocess/styles/blocks.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./preprocess/scripts/blocks.js */"./preprocess/scripts/blocks.js");
module.exports = __webpack_require__(/*! ./preprocess/styles/blocks.scss */"./preprocess/styles/blocks.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTWVudUl0ZW0vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc3R5bGVzL2Jsb2Nrcy5zY3NzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJSZXN0YXVyYW50TWVudSIsIk1lbnVJdGVtIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJuYW1lIiwidHlwZSIsImRlZmF1bHQiLCJwcmljZSIsImVkaXQiLCJzYXZlIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJlZGl0b3IiLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiVGV4dENvbnRyb2wiLCJUZXh0YXJlYUNvbnRyb2wiLCJibG9jayIsImNvbnRyb2xzIiwicmVuZGVyZWQiLCJzZXRBdHRyaWJ1dGVzIiwiSW5uZXJCbG9ja3MiLCJBTExPV0VEX0JMT0NLUyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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QUFBK0IsS0FBQyxFQUFDLEdBQWpDO0FBQXFDLFNBQUssRUFBQyxJQUEzQztBQUFnRCxVQUFNLEVBQUM7QUFBdkQsSUFERixDQU5GLENBREYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBREYsQ0FKRixDQUxXO0FBbUNiTSxNQUFJLEVBQUpBLDZDQW5DYTtBQW9DYkMsTUFBSSxFQUFKQSw2Q0FBSUE7QUFwQ1MsQ0FBZixFOzs7Ozs7Ozs7Ozs7O0lDTFFXLFcsR0FBZ0IzQixFQUFFLENBQUNrQixNLENBQW5CUyxXO0FBQ1IsSUFBTUMsY0FBYyxHQUFHLENBQUUseUJBQUYsRUFBNkIsY0FBN0IsRUFBNkMsZ0JBQTdDLEVBQStELFlBQS9ELEVBQTZFLGNBQTdFLEVBQTZGLGNBQTdGLENBQXZCO0FBRWUsMkVBQVk7QUFDekIsTUFBTUosUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRSx5QkFBQyxXQUFEO0FBQWEsbUJBQWEsRUFBR0k7QUFBN0IsTUFERixDQURGO0FBS0QsR0FORDtBQVFBOzs7OztBQUdBLFNBQU8sQ0FDTEosUUFBUSxFQURILENBQVA7QUFHRCxDOzs7Ozs7Ozs7Ozs7O0lDbEJPRyxXLEdBQWdCM0IsRUFBRSxDQUFDa0IsTSxDQUFuQlMsVztBQUVPLDJFQUFZO0FBQ3pCLFNBQ0Usc0NBQ0UseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERixDQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNSRCx5QyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVzdGF1cmFudE1lbnUgZnJvbSAnLi9ibG9ja3MvUmVzdGF1cmFudE1lbnUvUmVzdGF1cmFudE1lbnUnXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9ibG9ja3MvTWVudUl0ZW0vTWVudUl0ZW0nXG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvcmVzdGF1cmFudG1lbnUnLCBSZXN0YXVyYW50TWVudSlcbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9tZW51aXRlbScsIE1lbnVJdGVtKVxuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdNZW51IEl0ZW0nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBZGQgYSBtZW51IGl0ZW0nKSxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBpY29uOiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE4cHhcIiBoZWlnaHQ9XCIxOXB4XCIgdmlld0JveD1cIjAgMCAxOCAxOVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxnIGlkPVwiUmVzdGF1cmFudC1NZW51XCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgZm9udEZhbWlseT1cIkRhc2hpY29ucy1SZWd1bGFyLCBEYXNoaWNvbnNcIiBmb250U2l6ZT1cIjIwXCIgZm9udFdlaWdodD1cIm5vcm1hbFwiPlxuICAgICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtQmxvY2s6LU1lbnUtSXRlbTotQWRkLUFub3RoZXJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTUzMy4wMDAwMDAsIC02NDkuMDAwMDAwKVwiIGZpbGw9XCIjNTU1RDY2XCI+XG4gICAgICAgICAgPGcgaWQ9XCJCb2R5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIzNS4wMDAwMDAsIDE1Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIkFjdGljZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNi4wMDAwMDAsIDgwLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJJbnNlcnRlclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxODguMDAwMDAwLCAxOTYuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JvdXAtMy1Db3B5LTRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjguMDAwMDAwLCAxNzEuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJQYXJhZ3JhcGgtQmxvY2tcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNC4wMDAwMDAsIDM2LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9XCLvlJFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIjQxXCIgeT1cIjM0XCI+75SRPC90c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHByaWNlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgfSxcbiAgZWRpdCxcbiAgc2F2ZVxufVxuIiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuZWRpdG9yXG5jb25zdCB7IFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIFRleHRhcmVhQ29udHJvbCB9ID0gd3AuY29tcG9uZW50c1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdNZW51IEl0ZW0gU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BiYy1yZXN0YXVyYW50LW1lbnUtaXRlbVwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIndwYmMtcmVzdGF1cmFudC1tZW51LWl0ZW0taGVhZGVyXCI+XG4gICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17IF9fKCdXcml0ZSB0aGUgbmFtZSBvZiB0aGUgbWVudSBpdGVtIGhlcmUuLi4nKSB9XG4gICAgICAgICAgICBvbkNoYW5nZT17IG5hbWUgPT4gYmxvY2suc2V0QXR0cmlidXRlcyh7IG5hbWUgfSkgfVxuICAgICAgICAgICAgdmFsdWU9eyBibG9jay5hdHRyaWJ1dGVzLm5hbWUgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICB0eXBlPVwiY3VycmVuY3lcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9eyBfXygnMC4wMCcpIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgcHJpY2UgPT4gYmxvY2suc2V0QXR0cmlidXRlcyh7IHByaWNlIH0pIH1cbiAgICAgICAgICAgIHZhbHVlPXsgYmxvY2suYXR0cmlidXRlcy5wcmljZSB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcbiAgICAgICAgICByb3dzPVwiMlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyBfXygnV3JpdGUgYSBkZXNjcmlwdGlvbiBvZiB0aGUgbWVudSBpdGVtIGhlcmUuLi4nKSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyBkZXNjcmlwdGlvbiA9PiBibG9jay5zZXRBdHRyaWJ1dGVzKHsgZGVzY3JpcHRpb24gfSkgfVxuICAgICAgICAgIHZhbHVlPXsgYmxvY2suYXR0cmlidXRlcy5kZXNjcmlwdGlvbiB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb250cm9scywgYW5kIHJlbmRlcmVkIFVJcyB0b2dldGhlciBhcyBhbiBhcnJheVxuICAgKi9cbiAgcmV0dXJuIFtcbiAgICBjb250cm9scygpLFxuICAgIHJlbmRlcmVkKClcbiAgXVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cGJjLXJlc3RhdXJhbnQtbWVudS1pdGVtXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIndwYmMtcmVzdGF1cmFudC1tZW51LWl0ZW0taGVhZGVyXCI+XG4gICAgICAgIDxzcGFuPnsgYmxvY2suYXR0cmlidXRlcy5uYW1lIH08L3NwYW4+XG4gICAgICAgIDxzcGFuPiR7IGJsb2NrLmF0dHJpYnV0ZXMucHJpY2UgfTwvc3Bhbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgeyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdSZXN0YXVyYW50IE1lbnUnKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBZGQgYSBtZW51JyksXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogKFxuICAgIDxzdmcgd2lkdGg9XCIxN3B4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMTcgMjBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggZD1cIk0xNi42NjY2NjY3LDE4IEw4LjMzMzMzMzMzLDE4IEw4LjMzMzMzMzMzLDE2IEwxNi42NjY2NjY3LDE2IEwxNi42NjY2NjY3LDE4IFogTTE2LjY2NjY2NjcsMTIgTDguMzMzMzMzMzMsMTIgTDguMzMzMzMzMzMsMTQgTDE2LjY2NjY2NjcsMTQgTDE2LjY2NjY2NjcsMTIgWiBNMTguNzUsMyBMMTYuNjY2NjY2NywzIEwxNi42NjY2NjY3LDUgTDE4Ljc1LDUgTDE4Ljc1LDIwIEw2LjI1LDIwIEw2LjI1LDUgTDguMzMzMzMzMzMsNSBMOC4zMzMzMzMzMywzIEw2LjI1LDMgQzUuMDk4OTU4MzMsMyA0LjE2NjY2NjY3LDMuODk1IDQuMTY2NjY2NjcsNSBMNC4xNjY2NjY2NywyMCBDNC4xNjY2NjY2NywyMS4xMDUgNS4wOTg5NTgzMywyMiA2LjI1LDIyIEwxOC43NSwyMiBDMTkuOTAxMDQxNywyMiAyMC44MzMzMzMzLDIxLjEwNSAyMC44MzMzMzMzLDIwIEwyMC44MzMzMzMzLDUgQzIwLjgzMzMzMzMsMy44OTUgMTkuOTAxMDQxNywzIDE4Ljc1LDMgWiBNMTQuNTgzMzMzMyw1IEwxNC41ODMzMzMzLDQgQzE0LjU4MzMzMzMsMi44OTUgMTMuNjUxMDQxNywyIDEyLjUsMiBDMTEuMzQ4OTU4MywyIDEwLjQxNjY2NjcsMi44OTUgMTAuNDE2NjY2Nyw0IEwxMC40MTY2NjY3LDUgQzkuMjY1NjI1LDUgOC4zMzMzMzMzMyw1Ljg5NSA4LjMzMzMzMzMzLDcgTDguMzMzMzMzMzMsOCBMMTYuNjY2NjY2Nyw4IEwxNi42NjY2NjY3LDcgQzE2LjY2NjY2NjcsNS44OTUgMTUuNzM0Mzc1LDUgMTQuNTgzMzMzMyw1IFpcIiBpZD1cInBhdGgtMVwiPjwvcGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGlkPVwiUmVzdGF1cmFudC1NZW51XCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIGlkPVwiSW5zZXJ0LUJsb2NrOi1SZXN0YXVyYW50LUJsb2Nrc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzA5LjAwMDAwMCwgLTQ3Ny4wMDAwMDApXCI+XG4gICAgICAgICAgPGcgaWQ9XCJCb2R5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIzNS4wMDAwMDAsIDE1Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIkluc2VydGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAxMDQuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtQmxvY2tzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyLjAwMDAwMCwgMTc0LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIk1lbnVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMzLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JpZGljb24tLy1jbGlwYm9hcmRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguMDAwMDAwLCAxMi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiZ3JpZGljb25zLWNsaXBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlLXBhdGhcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI0XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzay0yXCIgZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD1cIlNoYXBlXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsUnVsZT1cIm5vbnplcm9cIiB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJDb2xvci0vLURhcmstR3JheS01MDBcIiBtYXNrPVwidXJsKCNtYXNrLTIpXCIgZmlsbD1cIiM1NTVENjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiZGFyay1ncmF5LTUwMFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjRcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICksXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbICdidWlsZGVyLWJsb2Nrcy9tZW51aXRlbScsICdjb3JlL2hlYWRpbmcnLCAnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9pbWFnZScsICdjb3JlL2dhbGxlcnknLCAnY29yZS9jb2x1bW5zJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BiYy1yZXN0YXVyYW50LW1lbnVcIj5cbiAgICAgICAgPElubmVyQmxvY2tzIGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb250cm9scywgYW5kIHJlbmRlcmVkIFVJcyB0b2dldGhlciBhcyBhbiBhcnJheVxuICAgKi9cbiAgcmV0dXJuIFtcbiAgICBjb250cm9scygpXG4gIF1cbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==