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

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('wp-blocks-cloud/restaurantmenu', _blocks_RestaurantMenu_RestaurantMenu__WEBPACK_IMPORTED_MODULE_0__["default"]);

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
  category: 'WP Blocks Cloud',
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
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  var controls = function controls() {
    return console.log('Controls Loaded');
  };

  var rendered = function rendered() {
    return console.log('Editor Loaded');
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
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return wp.element.createElement("div", null, "Hello");
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L1Jlc3RhdXJhbnRNZW51LmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvUmVzdGF1cmFudE1lbnUvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1Jlc3RhdXJhbnRNZW51L3NhdmUuanMiXSwibmFtZXMiOlsicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsIlJlc3RhdXJhbnRNZW51IiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJlZGl0Iiwic2F2ZSIsImJsb2NrIiwiY29udHJvbHMiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyZWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZE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LEdBQVIsQ0FBWSxlQUFaLENBREY7QUFHRCxHQUpEO0FBTUE7Ozs7O0FBR0EsU0FBTyxDQUNMRixRQUFRLEVBREgsRUFFTEcsUUFBUSxFQUZILENBQVA7QUFJRCxDOzs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBZSx5RUFBVUosS0FBVixFQUFpQjtBQUM5QixTQUNFLDhDQURGO0FBR0QsQyIsImZpbGUiOiJibG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanNcIik7XG4iLCJpbXBvcnQgUmVzdGF1cmFudE1lbnUgZnJvbSAnLi9ibG9ja3MvUmVzdGF1cmFudE1lbnUvUmVzdGF1cmFudE1lbnUnXG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnd3AtYmxvY2tzLWNsb3VkL3Jlc3RhdXJhbnRtZW51JywgUmVzdGF1cmFudE1lbnUpXG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ1Jlc3RhdXJhbnQgTWVudScpLFxuICBkZXNjcmlwdGlvbjogX18oJ0FkZCBhIG1lbnUnKSxcbiAgY2F0ZWdvcnk6ICdXUCBCbG9ja3MgQ2xvdWQnLFxuICBpY29uOiAoXG4gICAgPHN2ZyB3aWR0aD1cIjE3cHhcIiBoZWlnaHQ9XCIyMHB4XCIgdmlld0JveD1cIjAgMCAxNyAyMFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8cGF0aCBkPVwiTTE2LjY2NjY2NjcsMTggTDguMzMzMzMzMzMsMTggTDguMzMzMzMzMzMsMTYgTDE2LjY2NjY2NjcsMTYgTDE2LjY2NjY2NjcsMTggWiBNMTYuNjY2NjY2NywxMiBMOC4zMzMzMzMzMywxMiBMOC4zMzMzMzMzMywxNCBMMTYuNjY2NjY2NywxNCBMMTYuNjY2NjY2NywxMiBaIE0xOC43NSwzIEwxNi42NjY2NjY3LDMgTDE2LjY2NjY2NjcsNSBMMTguNzUsNSBMMTguNzUsMjAgTDYuMjUsMjAgTDYuMjUsNSBMOC4zMzMzMzMzMyw1IEw4LjMzMzMzMzMzLDMgTDYuMjUsMyBDNS4wOTg5NTgzMywzIDQuMTY2NjY2NjcsMy44OTUgNC4xNjY2NjY2Nyw1IEw0LjE2NjY2NjY3LDIwIEM0LjE2NjY2NjY3LDIxLjEwNSA1LjA5ODk1ODMzLDIyIDYuMjUsMjIgTDE4Ljc1LDIyIEMxOS45MDEwNDE3LDIyIDIwLjgzMzMzMzMsMjEuMTA1IDIwLjgzMzMzMzMsMjAgTDIwLjgzMzMzMzMsNSBDMjAuODMzMzMzMywzLjg5NSAxOS45MDEwNDE3LDMgMTguNzUsMyBaIE0xNC41ODMzMzMzLDUgTDE0LjU4MzMzMzMsNCBDMTQuNTgzMzMzMywyLjg5NSAxMy42NTEwNDE3LDIgMTIuNSwyIEMxMS4zNDg5NTgzLDIgMTAuNDE2NjY2NywyLjg5NSAxMC40MTY2NjY3LDQgTDEwLjQxNjY2NjcsNSBDOS4yNjU2MjUsNSA4LjMzMzMzMzMzLDUuODk1IDguMzMzMzMzMzMsNyBMOC4zMzMzMzMzMyw4IEwxNi42NjY2NjY3LDggTDE2LjY2NjY2NjcsNyBDMTYuNjY2NjY2Nyw1Ljg5NSAxNS43MzQzNzUsNSAxNC41ODMzMzMzLDUgWlwiIGlkPVwicGF0aC0xXCI+PC9wYXRoPlxuICAgICAgPC9kZWZzPlxuICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LU1lbnVcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiPlxuICAgICAgICA8ZyBpZD1cIkluc2VydC1CbG9jazotUmVzdGF1cmFudC1CbG9ja3NcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMwOS4wMDAwMDAsIC00NzcuMDAwMDAwKVwiPlxuICAgICAgICAgIDxnIGlkPVwiQm9keVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMzUuMDAwMDAwLCAxNTIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgPGcgaWQ9XCJJbnNlcnRlclwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTA0LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgPGcgaWQ9XCJSZXN0YXVyYW50LUJsb2Nrc1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMi4wMDAwMDAsIDE3NC4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJNZW51XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAzMy4wMDAwMDApXCI+XG4gICAgICAgICAgICAgICAgICA8ZyBpZD1cIkdyaWRpY29uLS8tY2xpcGJvYXJkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4LjAwMDAwMCwgMTIuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImdyaWRpY29ucy1jbGlwYm9hcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIlJlY3RhbmdsZS1wYXRoXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNFwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8bWFzayBpZD1cIm1hc2stMlwiIGZpbGw9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPlxuICAgICAgICAgICAgICAgICAgICAgIDx1c2UgaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMDAwMDAwXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cIkNvbG9yLS8tRGFyay1HcmF5LTUwMFwiIG1hc2s9XCJ1cmwoI21hc2stMilcIiBmaWxsPVwiIzU1NUQ2NlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJkYXJrLWdyYXktNTAwXCIgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMjVcIiBoZWlnaHQ9XCIyNFwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKSxcbiAgYXR0cmlidXRlczoge1xuICAgIFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgY29uc3QgY29udHJvbHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGNvbnNvbGUubG9nKCdDb250cm9scyBMb2FkZWQnKVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IHJlbmRlcmVkID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBjb25zb2xlLmxvZygnRWRpdG9yIExvYWRlZCcpXG4gICAgKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY29udHJvbHMsIGFuZCByZW5kZXJlZCBVSXMgdG9nZXRoZXIgYXMgYW4gYXJyYXlcbiAgICovXG4gIHJldHVybiBbXG4gICAgY29udHJvbHMoKSxcbiAgICByZW5kZXJlZCgpXG4gIF1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+SGVsbG88L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==