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
/* harmony import */ var _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Hero/Hero */ "./preprocess/scripts/blocks/Hero/Hero.js");
/* harmony import */ var _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__);

 // import Testimonials from './blocks/Testimonials'


var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/restaurantmenu', _blocks_RestaurantMenu_RestaurantMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerBlockType('builder-blocks/menuitem', _blocks_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_1__["default"]); // registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_2___default.a);

/***/ }),

/***/ "./preprocess/scripts/blocks/Hero/Hero.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Hero/Hero.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
      className: "wpbc-testimonials-item"
    }, wp.element.createElement("header", {
      className: "wpbc-testimonials-header"
    }, wp.element.createElement(TextControl, {
      placeholder: __('Write a title for the testimonial here...'),
      onChange: function onChange(name) {
        return block.setAttributes({
          name: name
        });
      },
      value: block.attributes.title
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTWVudUl0ZW0vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc3R5bGVzL2Jsb2Nrcy5zY3NzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJSZXN0YXVyYW50TWVudSIsIk1lbnVJdGVtIiwiSGVybyIsIl9fIiwiaTE4biIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImljb24iLCJhdHRyaWJ1dGVzIiwibmFtZSIsInR5cGUiLCJkZWZhdWx0IiwicHJpY2UiLCJlZGl0Iiwic2F2ZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiZWRpdG9yIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiVGV4dGFyZWFDb250cm9sIiwiYmxvY2siLCJjb250cm9scyIsInJlbmRlcmVkIiwic2V0QXR0cmlidXRlcyIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNB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bkNhO0FBb0NiQyxNQUFJLEVBQUpBLDZDQUFJQTtBQXBDUyxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7SUNMUVcsVyxHQUFnQjVCLEVBQUUsQ0FBQ21CLE0sQ0FBbkJTLFc7QUFDUixJQUFNQyxjQUFjLEdBQUcsQ0FBRSx5QkFBRixFQUE2QixjQUE3QixFQUE2QyxnQkFBN0MsRUFBK0QsWUFBL0QsRUFBNkUsY0FBN0UsRUFBNkYsY0FBN0YsQ0FBdkI7QUFFZSwyRUFBWTtBQUN6QixNQUFNSixRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFdBQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFLHlCQUFDLFdBQUQ7QUFBYSxtQkFBYSxFQUFHSTtBQUE3QixNQURGLENBREY7QUFLRCxHQU5EO0FBUUE7Ozs7O0FBR0EsU0FBTyxDQUNMSixRQUFRLEVBREgsQ0FBUDtBQUdELEM7Ozs7Ozs7Ozs7Ozs7SUNsQk9HLFcsR0FBZ0I1QixFQUFFLENBQUNtQixNLENBQW5CUyxXO0FBRU8sMkVBQVk7QUFDekIsU0FDRSxzQ0FDRSx5QkFBQyxXQUFELENBQWEsT0FBYixPQURGLENBREY7QUFLRCxDOzs7Ozs7Ozs7OztBQ1JELHlDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZXN0YXVyYW50TWVudSBmcm9tICcuL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL2Jsb2Nrcy9NZW51SXRlbS9NZW51SXRlbSdcbi8vIGltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi9ibG9ja3MvVGVzdGltb25pYWxzJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9ibG9ja3MvSGVyby9IZXJvJ1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3NcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3Jlc3RhdXJhbnRtZW51JywgUmVzdGF1cmFudE1lbnUpXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbWVudWl0ZW0nLCBNZW51SXRlbSlcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy90ZXN0aW1vbmlhbHMnLCBUZXN0aW1vbmlhbHMpXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvaGVybycsIEhlcm8pXG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ01lbnUgSXRlbScpLFxuICBkZXNjcmlwdGlvbjogX18oJ0FkZCBhIG1lbnUgaXRlbScpLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGljb246IChcbiAgICA8c3ZnIHdpZHRoPVwiMThweFwiIGhlaWdodD1cIjE5cHhcIiB2aWV3Qm94PVwiMCAwIDE4IDE5XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LU1lbnVcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBmb250RmFtaWx5PVwiRGFzaGljb25zLVJlZ3VsYXIsIERhc2hpY29uc1wiIGZvbnRTaXplPVwiMjBcIiBmb250V2VpZ2h0PVwibm9ybWFsXCI+XG4gICAgICAgIDxnIGlkPVwiUmVzdGF1cmFudC1CbG9jazotTWVudS1JdGVtOi1BZGQtQW5vdGhlclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNTMzLjAwMDAwMCwgLTY0OS4wMDAwMDApXCIgZmlsbD1cIiM1NTVENjZcIj5cbiAgICAgICAgICA8ZyBpZD1cIkJvZHlcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjM1LjAwMDAwMCwgMTUyLjAwMDAwMClcIj5cbiAgICAgICAgICAgIDxnIGlkPVwiQWN0aWNlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2LjAwMDAwMCwgODAuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cIkluc2VydGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE4OC4wMDAwMDAsIDE5Ni4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJHcm91cC0zLUNvcHktNFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyOC4wMDAwMDAsIDE3MS4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIlBhcmFncmFwaC1CbG9ja1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0LjAwMDAwMCwgMzYuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD1cIu+UkVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PVwiNDFcIiB5PVwiMzRcIj7vlJE8L3RzcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICksXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAgcHJpY2U6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zdCBjb250cm9scyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEluc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ01lbnUgSXRlbSBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICApXG4gIH1cblxuICBjb25zdCByZW5kZXJlZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cGJjLXRlc3RpbW9uaWFscy1pdGVtXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwid3BiYy10ZXN0aW1vbmlhbHMtaGVhZGVyXCI+XG4gICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17IF9fKCdXcml0ZSBhIHRpdGxlIGZvciB0aGUgdGVzdGltb25pYWwgaGVyZS4uLicpIH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsgbmFtZSA9PiBibG9jay5zZXRBdHRyaWJ1dGVzKHsgbmFtZSB9KSB9XG4gICAgICAgICAgICB2YWx1ZT17IGJsb2NrLmF0dHJpYnV0ZXMudGl0bGUgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcbiAgICAgICAgICByb3dzPVwiMlwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9eyBfXygnV3JpdGUgYSBkZXNjcmlwdGlvbiBvZiB0aGUgbWVudSBpdGVtIGhlcmUuLi4nKSB9XG4gICAgICAgICAgb25DaGFuZ2U9eyBkZXNjcmlwdGlvbiA9PiBibG9jay5zZXRBdHRyaWJ1dGVzKHsgZGVzY3JpcHRpb24gfSkgfVxuICAgICAgICAgIHZhbHVlPXsgYmxvY2suYXR0cmlidXRlcy5kZXNjcmlwdGlvbiB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb250cm9scywgYW5kIHJlbmRlcmVkIFVJcyB0b2dldGhlciBhcyBhbiBhcnJheVxuICAgKi9cbiAgcmV0dXJuIFtcbiAgICBjb250cm9scygpLFxuICAgIHJlbmRlcmVkKClcbiAgXVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cGJjLXJlc3RhdXJhbnQtbWVudS1pdGVtXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIndwYmMtcmVzdGF1cmFudC1tZW51LWl0ZW0taGVhZGVyXCI+XG4gICAgICAgIDxzcGFuPnsgYmxvY2suYXR0cmlidXRlcy5uYW1lIH08L3NwYW4+XG4gICAgICAgIDxzcGFuPiR7IGJsb2NrLmF0dHJpYnV0ZXMucHJpY2UgfTwvc3Bhbj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgeyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdSZXN0YXVyYW50IE1lbnUnKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBZGQgYSBtZW51JyksXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogKFxuICAgIDxzdmcgd2lkdGg9XCIxN3B4XCIgaGVpZ2h0PVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgMTcgMjBcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPHBhdGggZD1cIk0xNi42NjY2NjY3LDE4IEw4LjMzMzMzMzMzLDE4IEw4LjMzMzMzMzMzLDE2IEwxNi42NjY2NjY3LDE2IEwxNi42NjY2NjY3LDE4IFogTTE2LjY2NjY2NjcsMTIgTDguMzMzMzMzMzMsMTIgTDguMzMzMzMzMzMsMTQgTDE2LjY2NjY2NjcsMTQgTDE2LjY2NjY2NjcsMTIgWiBNMTguNzUsMyBMMTYuNjY2NjY2NywzIEwxNi42NjY2NjY3LDUgTDE4Ljc1LDUgTDE4Ljc1LDIwIEw2LjI1LDIwIEw2LjI1LDUgTDguMzMzMzMzMzMsNSBMOC4zMzMzMzMzMywzIEw2LjI1LDMgQzUuMDk4OTU4MzMsMyA0LjE2NjY2NjY3LDMuODk1IDQuMTY2NjY2NjcsNSBMNC4xNjY2NjY2NywyMCBDNC4xNjY2NjY2NywyMS4xMDUgNS4wOTg5NTgzMywyMiA2LjI1LDIyIEwxOC43NSwyMiBDMTkuOTAxMDQxNywyMiAyMC44MzMzMzMzLDIxLjEwNSAyMC44MzMzMzMzLDIwIEwyMC44MzMzMzMzLDUgQzIwLjgzMzMzMzMsMy44OTUgMTkuOTAxMDQxNywzIDE4Ljc1LDMgWiBNMTQuNTgzMzMzMyw1IEwxNC41ODMzMzMzLDQgQzE0LjU4MzMzMzMsMi44OTUgMTMuNjUxMDQxNywyIDEyLjUsMiBDMTEuMzQ4OTU4MywyIDEwLjQxNjY2NjcsMi44OTUgMTAuNDE2NjY2Nyw0IEwxMC40MTY2NjY3LDUgQzkuMjY1NjI1LDUgOC4zMzMzMzMzMyw1Ljg5NSA4LjMzMzMzMzMzLDcgTDguMzMzMzMzMzMsOCBMMTYuNjY2NjY2Nyw4IEwxNi42NjY2NjY3LDcgQzE2LjY2NjY2NjcsNS44OTUgMTUuNzM0Mzc1LDUgMTQuNTgzMzMzMyw1IFpcIiBpZD1cInBhdGgtMVwiPjwvcGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICAgIDxnIGlkPVwiUmVzdGF1cmFudC1NZW51XCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIGlkPVwiSW5zZXJ0LUJsb2NrOi1SZXN0YXVyYW50LUJsb2Nrc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzA5LjAwMDAwMCwgLTQ3Ny4wMDAwMDApXCI+XG4gICAgICAgICAgPGcgaWQ9XCJCb2R5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIzNS4wMDAwMDAsIDE1Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIkluc2VydGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAxMDQuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtQmxvY2tzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyLjAwMDAwMCwgMTc0LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIk1lbnVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMzLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JpZGljb24tLy1jbGlwYm9hcmRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguMDAwMDAwLCAxMi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiZ3JpZGljb25zLWNsaXBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlLXBhdGhcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI0XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzay0yXCIgZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD1cIlNoYXBlXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsUnVsZT1cIm5vbnplcm9cIiB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJDb2xvci0vLURhcmstR3JheS01MDBcIiBtYXNrPVwidXJsKCNtYXNrLTIpXCIgZmlsbD1cIiM1NTVENjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiZGFyay1ncmF5LTUwMFwiIHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjI1XCIgaGVpZ2h0PVwiMjRcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gICksXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbICdidWlsZGVyLWJsb2Nrcy9tZW51aXRlbScsICdjb3JlL2hlYWRpbmcnLCAnY29yZS9wYXJhZ3JhcGgnLCAnY29yZS9pbWFnZScsICdjb3JlL2dhbGxlcnknLCAnY29yZS9jb2x1bW5zJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3BiYy1yZXN0YXVyYW50LW1lbnVcIj5cbiAgICAgICAgPElubmVyQmxvY2tzIGFsbG93ZWRCbG9ja3M9eyBBTExPV0VEX0JMT0NLUyB9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjb250cm9scywgYW5kIHJlbmRlcmVkIFVJcyB0b2dldGhlciBhcyBhbiBhcnJheVxuICAgKi9cbiAgcmV0dXJuIFtcbiAgICBjb250cm9scygpXG4gIF1cbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==