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
  attributes: {},
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
    return wp.element.createElement(InspectorControls, {
      key: "inspector"
    }, wp.element.createElement(PanelBody, {
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
    }, wp.element.createElement("h5", null, block.attributes.name), wp.element.createElement("h6", null, "$ ", block.attributes.price), wp.element.createElement("p", null, block.attributes.description));
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
  }, wp.element.createElement("h5", null, block.attributes.name), wp.element.createElement("h6", null, "$ ", block.attributes.price), wp.element.createElement("p", null, block.attributes.description));
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
    "stroke-width": "1",
    fill: "none",
    "fill-rule": "evenodd"
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
    "fill-rule": "nonzero",
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
  attributes: {},
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
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  var controls = function controls() {
    return wp.element.createElement(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS
    });
  };
  /**
   * Return the controls, and rendered UIs together as an array
   */


  return controls();
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
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return wp.element.createElement(InnerBlocks.Content, null);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTWVudUl0ZW0vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnVJdGVtL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9zYXZlLmpzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJSZXN0YXVyYW50TWVudSIsIk1lbnVJdGVtIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJlZGl0Iiwic2F2ZSIsIkluc3BlY3RvckNvbnRyb2xzIiwiZWRpdG9yIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiVGV4dGFyZWFDb250cm9sIiwiYmxvY2siLCJjb250cm9scyIsIm5hbWUiLCJzZXRBdHRyaWJ1dGVzIiwicHJpY2UiLCJyZW5kZXJlZCIsIklubmVyQmxvY2tzIiwiQUxMT1dFRF9CTE9DS1MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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RUFBQyxHQUFqQztBQUFxQyxTQUFLLEVBQUMsSUFBM0M7QUFBZ0QsVUFBTSxFQUFDO0FBQXZELElBREYsQ0FORixDQURGLENBREYsQ0FERixDQURGLENBREYsQ0FERixDQURGLENBSkYsQ0FMVztBQW1DYkMsWUFBVSxFQUFFLEVBbkNDO0FBc0NiQyxNQUFJLEVBQUpBLDZDQXRDYTtBQXVDYkMsTUFBSSxFQUFKQSw2Q0FBSUE7QUF2Q1MsQ0FBZixFOzs7Ozs7Ozs7Ozs7O0lDTFFhLFcsR0FBZ0J6QixFQUFFLENBQUNjLE0sQ0FBbkJXLFc7QUFDUixJQUFNQyxjQUFjLEdBQUcsQ0FBRSwwQkFBRixFQUE4QixjQUE5QixFQUE4QyxnQkFBOUMsRUFBZ0UsWUFBaEUsRUFBOEUsY0FBOUUsQ0FBdkI7QUFFZSx5RUFBVVAsS0FBVixFQUFpQjtBQUM5QixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFdBQ0UseUJBQUMsV0FBRDtBQUFhLG1CQUFhLEVBQUdNO0FBQTdCLE1BREY7QUFHRCxHQUpEO0FBTUE7Ozs7O0FBR0EsU0FDRU4sUUFBUSxFQURWO0FBR0QsQzs7Ozs7Ozs7Ozs7OztJQ2hCT0ssVyxHQUFnQnpCLEVBQUUsQ0FBQ2MsTSxDQUFuQlcsVztBQUVPLHlFQUFVTixLQUFWLEVBQWlCO0FBQzlCLFNBQ0UseUJBQUMsV0FBRCxDQUFhLE9BQWIsT0FERjtBQUdELEMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzLmpzXCIpO1xuIiwiaW1wb3J0IFJlc3RhdXJhbnRNZW51IGZyb20gJy4vYmxvY2tzL1Jlc3RhdXJhbnRNZW51L1Jlc3RhdXJhbnRNZW51J1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtJ1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3NcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3dwLWJsb2Nrcy1jbG91ZC9yZXN0YXVyYW50bWVudScsIFJlc3RhdXJhbnRNZW51KVxucmVnaXN0ZXJCbG9ja1R5cGUoJ3dwLWJsb2Nrcy1jbG91ZC9tZW51aXRlbScsIE1lbnVJdGVtKSIsImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSdcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiBfXygnTWVudSBJdGVtJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQWRkIGEgbWVudSBpdGVtJyksXG4gIGNhdGVnb3J5OiAnY29tbW9uJyxcbiAgaWNvbjogKFxuICAgIDxzdmcgd2lkdGg9XCIxOHB4XCIgaGVpZ2h0PVwiMTlweFwiIHZpZXdCb3g9XCIwIDAgMTggMTlcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtTWVudVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGZvbnRGYW1pbHk9XCJEYXNoaWNvbnMtUmVndWxhciwgRGFzaGljb25zXCIgZm9udFNpemU9XCIyMFwiIGZvbnRXZWlnaHQ9XCJub3JtYWxcIj5cbiAgICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LUJsb2NrOi1NZW51LUl0ZW06LUFkZC1Bbm90aGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC01MzMuMDAwMDAwLCAtNjQ5LjAwMDAwMClcIiBmaWxsPVwiIzU1NUQ2NlwiPlxuICAgICAgICAgIDxnIGlkPVwiQm9keVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMzUuMDAwMDAwLCAxNTIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJBY3RpY2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzYuMDAwMDAwLCA4MC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwiSW5zZXJ0ZXJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTg4LjAwMDAwMCwgMTk2LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyb3VwLTMtQ29weS00XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI4LjAwMDAwMCwgMTcxLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiUGFyYWdyYXBoLUJsb2NrXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuMDAwMDAwLCAzNi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPVwi75SRXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9XCI0MVwiIHk9XCIzNFwiPu+UkTwvdHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgYXR0cmlidXRlczoge1xuICAgIFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgVGV4dGFyZWFDb250cm9sIH0gPSB3cC5jb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zdCBjb250cm9scyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPEluc3BlY3RvckNvbnRyb2xzIGtleT1cImluc3BlY3RvclwiPlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ01lbnUgSXRlbSBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxuICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXsgX18oJ01lbnUgSXRlbSBOYW1lJykgfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17IF9fKCdNZW51IEl0ZW0gTmFtZScpIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBuYW1lID0+IGJsb2NrLnNldEF0dHJpYnV0ZXMoeyBuYW1lIH0pIH1cbiAgICAgICAgICAgICAgdmFsdWU9eyBibG9jay5hdHRyaWJ1dGVzLm5hbWUgfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxUZXh0YXJlYUNvbnRyb2xcbiAgICAgICAgICAgICAgbGFiZWw9eyBfXygnRGVzY3JpcHRpb24nKSB9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgX18oJ0Rlc2NyaXB0aW9uJykgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17IGRlc2NyaXB0aW9uID0+IGJsb2NrLnNldEF0dHJpYnV0ZXMoeyBkZXNjcmlwdGlvbiB9KSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgYmxvY2suYXR0cmlidXRlcy5kZXNjcmlwdGlvbiB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbFwiPlxuICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXsgX18oJ01lbnUgSXRlbSBQcmljZScpIH1cbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsgX18oJ01lbnUgSXRlbSBQcmljZScpIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyBwcmljZSA9PiBibG9jay5zZXRBdHRyaWJ1dGVzKHsgcHJpY2UgfSkgfVxuICAgICAgICAgICAgICB2YWx1ZT17IGJsb2NrLmF0dHJpYnV0ZXMucHJpY2UgfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgcmVuZGVyZWQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgIDxoNT57IGJsb2NrLmF0dHJpYnV0ZXMubmFtZSB9PC9oNT5cbiAgICAgICAgPGg2PiQgeyBibG9jay5hdHRyaWJ1dGVzLnByaWNlIH08L2g2PlxuICAgICAgICA8cD57IGJsb2NrLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGNvbnRyb2xzLCBhbmQgcmVuZGVyZWQgVUlzIHRvZ2V0aGVyIGFzIGFuIGFycmF5XG4gICAqL1xuICByZXR1cm4gW1xuICAgIGNvbnRyb2xzKCksXG4gICAgcmVuZGVyZWQoKVxuICBdXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgPGg1PnsgYmxvY2suYXR0cmlidXRlcy5uYW1lIH08L2g1PlxuICAgICAgPGg2PiQgeyBibG9jay5hdHRyaWJ1dGVzLnByaWNlIH08L2g2PlxuICAgICAgPHA+eyBibG9jay5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uIH08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBzYXZlIGZyb20gJy4vc2F2ZSdcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiBfXygnUmVzdGF1cmFudCBNZW51JyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQWRkIGEgbWVudScpLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGljb246IChcbiAgICA8c3ZnIHdpZHRoPVwiMTdweFwiIGhlaWdodD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDE3IDIwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTYuNjY2NjY2NywxOCBMOC4zMzMzMzMzMywxOCBMOC4zMzMzMzMzMywxNiBMMTYuNjY2NjY2NywxNiBMMTYuNjY2NjY2NywxOCBaIE0xNi42NjY2NjY3LDEyIEw4LjMzMzMzMzMzLDEyIEw4LjMzMzMzMzMzLDE0IEwxNi42NjY2NjY3LDE0IEwxNi42NjY2NjY3LDEyIFogTTE4Ljc1LDMgTDE2LjY2NjY2NjcsMyBMMTYuNjY2NjY2Nyw1IEwxOC43NSw1IEwxOC43NSwyMCBMNi4yNSwyMCBMNi4yNSw1IEw4LjMzMzMzMzMzLDUgTDguMzMzMzMzMzMsMyBMNi4yNSwzIEM1LjA5ODk1ODMzLDMgNC4xNjY2NjY2NywzLjg5NSA0LjE2NjY2NjY3LDUgTDQuMTY2NjY2NjcsMjAgQzQuMTY2NjY2NjcsMjEuMTA1IDUuMDk4OTU4MzMsMjIgNi4yNSwyMiBMMTguNzUsMjIgQzE5LjkwMTA0MTcsMjIgMjAuODMzMzMzMywyMS4xMDUgMjAuODMzMzMzMywyMCBMMjAuODMzMzMzMyw1IEMyMC44MzMzMzMzLDMuODk1IDE5LjkwMTA0MTcsMyAxOC43NSwzIFogTTE0LjU4MzMzMzMsNSBMMTQuNTgzMzMzMyw0IEMxNC41ODMzMzMzLDIuODk1IDEzLjY1MTA0MTcsMiAxMi41LDIgQzExLjM0ODk1ODMsMiAxMC40MTY2NjY3LDIuODk1IDEwLjQxNjY2NjcsNCBMMTAuNDE2NjY2Nyw1IEM5LjI2NTYyNSw1IDguMzMzMzMzMzMsNS44OTUgOC4zMzMzMzMzMyw3IEw4LjMzMzMzMzMzLDggTDE2LjY2NjY2NjcsOCBMMTYuNjY2NjY2Nyw3IEMxNi42NjY2NjY3LDUuODk1IDE1LjczNDM3NSw1IDE0LjU4MzMzMzMsNSBaXCIgaWQ9XCJwYXRoLTFcIj48L3BhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtTWVudVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgIDxnIGlkPVwiSW5zZXJ0LUJsb2NrOi1SZXN0YXVyYW50LUJsb2Nrc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzA5LjAwMDAwMCwgLTQ3Ny4wMDAwMDApXCI+XG4gICAgICAgICAgPGcgaWQ9XCJCb2R5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIzNS4wMDAwMDAsIDE1Mi4wMDAwMDApXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIkluc2VydGVyXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAxMDQuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICA8ZyBpZD1cIlJlc3RhdXJhbnQtQmxvY2tzXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyLjAwMDAwMCwgMTc0LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cIk1lbnVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMzLjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgIDxnIGlkPVwiR3JpZGljb24tLy1jbGlwYm9hcmRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguMDAwMDAwLCAxMi4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiZ3JpZGljb25zLWNsaXBib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPVwiUmVjdGFuZ2xlLXBhdGhcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI0XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPVwibWFzay0yXCIgZmlsbD1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+XG4gICAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD1cIlNoYXBlXCIgZmlsbD1cIiMwMDAwMDBcIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgeGxpbmtIcmVmPVwiI3BhdGgtMVwiPjwvdXNlPlxuICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwiQ29sb3ItLy1EYXJrLUdyYXktNTAwXCIgbWFzaz1cInVybCgjbWFzay0yKVwiIGZpbGw9XCIjNTU1RDY2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cImRhcmstZ3JheS01MDBcIiB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIyNVwiIGhlaWdodD1cIjI0XCI+PC9yZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgXG4gIH0sXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuY29uc3QgQUxMT1dFRF9CTE9DS1MgPSBbICd3cC1ibG9ja3MtY2xvdWQvbWVudWl0ZW0nLCAnY29yZS9oZWFkaW5nJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvaW1hZ2UnLCAnY29yZS9nYWxsZXJ5JyBdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbm5lckJsb2NrcyBhbGxvd2VkQmxvY2tzPXsgQUxMT1dFRF9CTE9DS1MgfSAvPlxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGNvbnRyb2xzLCBhbmQgcmVuZGVyZWQgVUlzIHRvZ2V0aGVyIGFzIGFuIGFycmF5XG4gICAqL1xuICByZXR1cm4gKFxuICAgIGNvbnRyb2xzKClcbiAgKVxufVxuIiwiY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICByZXR1cm4gKFxuICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=