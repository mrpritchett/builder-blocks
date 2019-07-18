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
/* harmony import */ var _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/Section/Section */ "./preprocess/scripts/blocks/Section/Section.js");
/* harmony import */ var _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/Hero/Hero */ "./preprocess/scripts/blocks/Hero/Hero.js");
/* harmony import */ var _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1__);
 // import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'


var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/section', _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__["default"]); // registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./preprocess/scripts/blocks/Hero/Hero.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Hero/Hero.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./preprocess/scripts/blocks/Section/Section.js":
/*!******************************************************!*\
  !*** ./preprocess/scripts/blocks/Section/Section.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/Section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./preprocess/scripts/blocks/Section/save.js");


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Section'),
  description: __('A wrapper block for rows.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    // Universal Attributes
    padding: {
      type: 'object',
      "default": {
        left: '20',
        top: '20',
        right: '20',
        bottom: '20'
      }
    },
    margin: {
      type: 'object',
      "default": {
        left: '0',
        top: '0',
        right: '0',
        bottom: '0'
      }
    },
    backgroundImage: {
      type: 'object',
      "default": {
        alt: '',
        url: '',
        id: 0
      }
    },
    backgroundColor: {
      type: 'object',
      "default": {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0
      }
    },
    backgroundSize: {
      type: 'string',
      "default": 'auto'
    },
    backgroundPosition: {
      type: 'string',
      "default": 'top left'
    },
    backgroundRepeat: {
      type: 'string',
      "default": 'no-repeat'
    },
    borderSize: {
      type: 'string',
      "default": '0'
    },
    borderStyle: {
      type: 'string',
      "default": 'solid'
    },
    borderColor: {
      type: 'object',
      "default": {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0
      }
    },
    containerWidth: {
      type: 'string',
      "default": 'full'
    },
    contentWidth: {
      type: 'string',
      "default": 'container'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Section/edit.js":
/*!***************************************************!*\
  !*** ./preprocess/scripts/blocks/Section/edit.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./preprocess/scripts/blocks/Section/inspector.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./preprocess/scripts/blocks/Section/editor.js");


var createElement = wp.element.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return React.createElement(React.Fragment, null, createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    block: block
  }), createElement(_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block
  }));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Section/editor.js":
/*!*****************************************************!*\
  !*** ./preprocess/scripts/blocks/Section/editor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$element = wp.element,
    Component = _wp$element.Component,
    createElement = _wp$element.createElement;
var InnerBlocks = wp.editor.InnerBlocks;

var Editor =
/*#__PURE__*/
function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Editor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props$block$att = _this.props.block.attributes,
          padding = _this$props$block$att.padding,
          margin = _this$props$block$att.margin,
          backgroundImage = _this$props$block$att.backgroundImage,
          backgroundColor = _this$props$block$att.backgroundColor,
          backgroundSize = _this$props$block$att.backgroundSize,
          backgroundPosition = _this$props$block$att.backgroundPosition,
          backgroundRepeat = _this$props$block$att.backgroundRepeat,
          borderWidth = _this$props$block$att.borderWidth,
          borderStyle = _this$props$block$att.borderStyle,
          borderColor = _this$props$block$att.borderColor,
          contentWidth = _this$props$block$att.contentWidth,
          containerWidth = _this$props$block$att.containerWidth;
      var style = {
        backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
        backgroundImage: 'url(' + backgroundImage.url + ')',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
        borderWidth: borderWidth + 'px',
        borderStyle: borderStyle,
        margin: margin.left + 'px ' + margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px',
        padding: padding.left + 'px ' + padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px',
        width: containerWidth === 'full' ? '100%' : '1200px'
      };
      var containerStyle = {
        margin: '0 auto',
        maxWidth: contentWidth === 'container' ? '1200px' : '100%',
        width: '100%'
      };
      return createElement("div", {
        className: "builder-blocks-section-block",
        style: style
      }, createElement("div", {
        className: "builder-blocks-section-block-content",
        style: containerStyle
      }, createElement(InnerBlocks, null)));
    });

    return _this;
  }

  return Editor;
}(Component);



/***/ }),

/***/ "./preprocess/scripts/blocks/Section/inspector.js":
/*!********************************************************!*\
  !*** ./preprocess/scripts/blocks/Section/inspector.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$element = wp.element,
    Component = _wp$element.Component,
    createElement = _wp$element.createElement;
var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ColorPicker = _wp$components.ColorPicker,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button;
var ALLOWED_MEDIA_TYPES = ['image'];

var Inspector =
/*#__PURE__*/
function (_Component) {
  _inherits(Inspector, _Component);

  function Inspector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Inspector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Inspector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props$block$att = _this.props.block.attributes,
          padding = _this$props$block$att.padding,
          margin = _this$props$block$att.margin,
          backgroundImage = _this$props$block$att.backgroundImage,
          backgroundColor = _this$props$block$att.backgroundColor,
          borderWidth = _this$props$block$att.borderWidth,
          borderStyle = _this$props$block$att.borderStyle,
          borderColor = _this$props$block$att.borderColor;
      return createElement(InspectorControls, null, createElement(PanelBody, {
        title: __('Style Settings')
      }, createElement("div", {
        className: "builder-blocks-settings-background-container"
      }, createElement("h4", null, "Background"), createElement("div", {
        className: "builder-blocks-settings-background-wrap"
      }, createElement(ColorPicker, {
        color: backgroundColor,
        onChangeComplete: function onChangeComplete(value) {
          return _this.props.block.setAttributes({
            backgroundColor: value.rgb
          });
        }
      }), createElement("img", {
        src: backgroundImage.url,
        alt: backgroundImage.alt,
        height: "100",
        width: "100"
      }), createElement(MediaUploadCheck, null, createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          return _this.props.block.setAttributes({
            backgroundImage: _objectSpread({}, backgroundImage, {
              alt: media.alt,
              url: media.url,
              id: media.id
            })
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: backgroundImage.id,
        render: function render(_ref) {
          var open = _ref.open;
          return createElement(Button, {
            onClick: open
          }, "Open Media Library");
        }
      })))), createElement("div", {
        className: "builder-blocks-settings-border-container"
      }, createElement("h4", null, "Border"), createElement("div", {
        className: "builder-blocks-settings-border-wrap"
      }, createElement(TextControl, {
        label: "Border Size",
        type: "number",
        value: borderWidth,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            borderWidth: value
          });
        }
      }), createElement(SelectControl, {
        label: "Border Style",
        value: borderStyle,
        options: [{
          label: 'Solid',
          value: 'solid'
        }, {
          label: 'Hidden',
          value: 'hidden'
        }, {
          label: 'Dashed',
          value: 'dashed'
        }, {
          label: 'Dotted',
          value: 'dotted'
        }, {
          label: 'Double',
          value: 'double'
        }, {
          label: 'Groove',
          value: 'groove'
        }, {
          label: 'Ridge',
          value: 'ridge'
        }, {
          label: 'Inset',
          value: 'inset'
        }, {
          label: 'Outset',
          value: 'outset'
        }, {
          label: 'None',
          value: 'none'
        }],
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            borderStyle: value
          });
        }
      }), createElement(ColorPicker, {
        color: borderColor,
        onChangeComplete: function onChangeComplete(value) {
          return _this.props.block.setAttributes({
            borderColor: value.rgb
          });
        }
      })))), createElement(PanelBody, {
        title: __('Spacing Settings')
      }, createElement("div", {
        className: "builder-blocks-settings-margin-container"
      }, createElement("h4", null, "Margin"), createElement("div", {
        className: "builder-blocks-settings-margin-wrap"
      }, createElement(TextControl, {
        label: "Left",
        type: "number",
        value: margin.left,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            margin: _objectSpread({}, margin, {
              left: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Top",
        type: "number",
        value: margin.top,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            margin: _objectSpread({}, margin, {
              top: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Right",
        type: "number",
        value: margin.right,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            margin: _objectSpread({}, margin, {
              right: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Bottom",
        type: "number",
        value: margin.bottom,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            margin: _objectSpread({}, margin, {
              bottom: value
            })
          });
        }
      }))), createElement("div", {
        className: "builder-blocks-settings-padding-container"
      }, createElement("h4", null, "Padding"), createElement("div", {
        className: "builder-blocks-settings-padding-wrap"
      }, createElement(TextControl, {
        label: "Left",
        type: "number",
        value: padding.left,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            padding: _objectSpread({}, padding, {
              left: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Top",
        type: "number",
        value: padding.top,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            padding: _objectSpread({}, padding, {
              top: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Right",
        type: "number",
        value: padding.right,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            padding: _objectSpread({}, padding, {
              right: value
            })
          });
        }
      }), createElement(TextControl, {
        label: "Bottom",
        type: "number",
        value: padding.bottom,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            padding: _objectSpread({}, padding, {
              bottom: value
            })
          });
        }
      })))));
    });

    return _this;
  }

  return Inspector;
}(Component);



/***/ }),

/***/ "./preprocess/scripts/blocks/Section/save.js":
/*!***************************************************!*\
  !*** ./preprocess/scripts/blocks/Section/save.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createElement = wp.element.createElement;
var InnerBlocks = wp.editor.InnerBlocks;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  var _block$attributes = block.attributes,
      padding = _block$attributes.padding,
      margin = _block$attributes.margin,
      backgroundImage = _block$attributes.backgroundImage,
      backgroundColor = _block$attributes.backgroundColor,
      backgroundSize = _block$attributes.backgroundSize,
      backgroundPosition = _block$attributes.backgroundPosition,
      backgroundRepeat = _block$attributes.backgroundRepeat,
      borderWidth = _block$attributes.borderWidth,
      borderStyle = _block$attributes.borderStyle,
      borderColor = _block$attributes.borderColor,
      containerWidth = _block$attributes.containerWidth,
      contentWidth = _block$attributes.contentWidth;
  var style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: 'url(' + backgroundImage.url + ')',
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    margin: margin.left + 'px ' + margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px',
    padding: padding.left + 'px ' + padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px',
    width: containerWidth === 'full' ? '100%' : '1200px'
  };
  var containerStyle = {
    margin: '0 auto',
    maxWidth: contentWidth === 'container' ? '1200px' : '100%',
    width: '100%'
  };
  return createElement("div", {
    className: "builder-blocks-section-block",
    style: style
  }, createElement("div", {
    className: "builder-blocks-section-block-content",
    style: containerStyle
  }, createElement(InnerBlocks.Content, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vZWRpdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9pbnNwZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL3NhdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zdHlsZXMvYmxvY2tzLnNjc3MiXSwibmFtZXMiOlsicmVnaXN0ZXJCbG9ja1R5cGUiLCJ3cCIsImJsb2NrcyIsIlNlY3Rpb24iLCJIZXJvIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJwYWRkaW5nIiwidHlwZSIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpbiIsImJhY2tncm91bmRJbWFnZSIsImFsdCIsInVybCIsImlkIiwiYmFja2dyb3VuZENvbG9yIiwiciIsImciLCJiIiwiYSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFJlcGVhdCIsImJvcmRlclNpemUiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiY29udGFpbmVyV2lkdGgiLCJjb250ZW50V2lkdGgiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiYmxvY2siLCJDb21wb25lbnQiLCJJbm5lckJsb2NrcyIsImVkaXRvciIsIkVkaXRvciIsInByb3BzIiwiYm9yZGVyV2lkdGgiLCJzdHlsZSIsIndpZHRoIiwiY29udGFpbmVyU3R5bGUiLCJtYXhXaWR0aCIsIkluc3BlY3RvckNvbnRyb2xzIiwiTWVkaWFVcGxvYWQiLCJNZWRpYVVwbG9hZENoZWNrIiwiY29tcG9uZW50cyIsIlBhbmVsQm9keSIsIlRleHRDb250cm9sIiwiQ29sb3JQaWNrZXIiLCJTZWxlY3RDb250cm9sIiwiQnV0dG9uIiwiQUxMT1dFRF9NRURJQV9UWVBFUyIsIkluc3BlY3RvciIsInZhbHVlIiwic2V0QXR0cmlidXRlcyIsInJnYiIsIm1lZGlhIiwib3BlbiIsImxhYmVsIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTtBQUNBOztBQUNBO0lBR1FBLGlCLEdBQXNCQyxFQUFFLENBQUNDLE0sQ0FBekJGLGlCO0FBRVJBLGlCQUFpQixDQUFDLHdC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Q0FBQ0ssTUFBN0UsR0FBc0YsSUFWbkY7QUFXWitCLFNBQUssRUFBRWQsY0FBYyxLQUFLLE1BQW5CLEdBQTRCLE1BQTVCLEdBQXFDO0FBWGhDLEdBQWQ7QUFjQSxNQUFNZSxjQUFjLEdBQUc7QUFDckIvQixVQUFNLEVBQUUsUUFEYTtBQUVyQmdDLFlBQVEsRUFBRWYsWUFBWSxLQUFLLFdBQWpCLEdBQStCLFFBQS9CLEdBQTBDLE1BRi9CO0FBR3JCYSxTQUFLLEVBQUU7QUFIYyxHQUF2QjtBQU1BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsOEJBQWY7QUFBOEMsU0FBSyxFQUFHRDtBQUF0RCxLQUNFO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQXNELFNBQUssRUFBR0U7QUFBOUQsS0FDRSxjQUFDLFdBQUQsQ0FBYSxPQUFiLE9BREYsQ0FERixDQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7QUNqQ0QseUMiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9ibG9ja3MvU2VjdGlvbi9TZWN0aW9uJ1xuLy8gaW1wb3J0IFJlc3RhdXJhbnRNZW51IGZyb20gJy4vYmxvY2tzL1Jlc3RhdXJhbnRNZW51L1Jlc3RhdXJhbnRNZW51J1xuLy8gaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtJ1xuLy8gaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL2Jsb2Nrcy9UZXN0aW1vbmlhbHMnXG5pbXBvcnQgSGVybyBmcm9tICcuL2Jsb2Nrcy9IZXJvL0hlcm8nXG5cblxuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9zZWN0aW9uJywgU2VjdGlvbilcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9yZXN0YXVyYW50bWVudScsIFJlc3RhdXJhbnRNZW51KVxuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL21lbnVpdGVtJywgTWVudUl0ZW0pXG4vLyByZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvdGVzdGltb25pYWxzJywgVGVzdGltb25pYWxzKVxucmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL2hlcm8nLCBIZXJvKVxuXG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ1NlY3Rpb24nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBIHdyYXBwZXIgYmxvY2sgZm9yIHJvd3MuJyksXG4gIGNhdGVnb3J5OiAnYnVpbGRlci1ibG9ja3MnLFxuICBpY29uOiAnZXhjZXJwdC12aWV3JyxcbiAgYXR0cmlidXRlczoge1xuICAgIC8vIFVuaXZlcnNhbCBBdHRyaWJ1dGVzXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgIHRvcDogJzIwJyxcbiAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgIGJvdHRvbTogJzIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJnaW46IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICduby1yZXBlYXQnLFxuICAgIH0sXG4gICAgYm9yZGVyU2l6ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnMCcsXG4gICAgfSxcbiAgICBib3JkZXJTdHlsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnc29saWQnLFxuICAgIH0sXG4gICAgYm9yZGVyQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29udGFpbmVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Z1bGwnLFxuICAgIH0sXG4gICAgY29udGVudFdpZHRoOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdjb250YWluZXInLFxuICAgIH0sXG4gIH0sXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnNwZWN0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICAgIDxFZGl0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0LCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBjb250ZW50V2lkdGgsIGNvbnRhaW5lcldpZHRoIH0gPSB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJhY2tncm91bmRJbWFnZS51cmwgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoJyArIGJvcmRlckNvbG9yLnIgKyAnLCAnICsgYm9yZGVyQ29sb3IuZyArICcsICcgKyBib3JkZXJDb2xvci5iICsgJywgJyArIGJvcmRlckNvbG9yLmEgKyAnKScsXG4gICAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgbWFyZ2luOiBtYXJnaW4ubGVmdCArICdweCAnICsgbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4JyxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcubGVmdCArICdweCAnICsgcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4JyxcbiAgICAgIHdpZHRoOiBjb250YWluZXJXaWR0aCA9PT0gJ2Z1bGwnID8gJzEwMCUnIDogJzEyMDBweCcsXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2VjdGlvbi1ibG9ja1wiIHN0eWxlPXsgc3R5bGUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG4gICAgICAgICAgPElubmVyQmxvY2tzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTdHlsZSBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJhY2tncm91bmQ8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBiYWNrZ3JvdW5kQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9eyBiYWNrZ3JvdW5kSW1hZ2UudXJsIH0gYWx0PXsgYmFja2dyb3VuZEltYWdlLmFsdCB9IGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgLz5cbiAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17IChtZWRpYSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmJhY2tncm91bmRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBtZWRpYS5hbHQsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbWVkaWEudXJsLFxuICAgICAgICAgICAgICAgICAgICBpZDogbWVkaWEuaWQsXG4gICAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyBiYWNrZ3JvdW5kSW1hZ2UuaWQgfVxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IG9wZW4gfT5cbiAgICAgICAgICAgICAgICAgICAgICBPcGVuIE1lZGlhIExpYnJhcnlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5Cb3JkZXI8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTaXplXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlcldpZHRoIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyV2lkdGg6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTdHlsZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJTdHlsZSB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTb2xpZCcsIHZhbHVlOiAnc29saWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSGlkZGVuJywgdmFsdWU6ICdoaWRkZW4nIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRGFzaGVkJywgdmFsdWU6ICdkYXNoZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG90dGVkJywgdmFsdWU6ICdkb3R0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG91YmxlJywgdmFsdWU6ICdkb3VibGUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnR3Jvb3ZlJywgdmFsdWU6ICdncm9vdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUmlkZ2UnLCB2YWx1ZTogJ3JpZGdlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0luc2V0JywgdmFsdWU6ICdpbnNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdPdXRzZXQnLCB2YWx1ZTogJ291dHNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxuICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJTdHlsZTogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJvcmRlckNvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTcGFjaW5nIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5NYXJnaW48L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4uYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+UGFkZGluZzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcudG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5lZGl0b3JcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgY29udGFpbmVyV2lkdGgsIGNvbnRlbnRXaWR0aCB9ID0gYmxvY2suYXR0cmlidXRlc1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoJyArIGJhY2tncm91bmRDb2xvci5yICsgJywgJyArIGJhY2tncm91bmRDb2xvci5nICsgJywgJyArIGJhY2tncm91bmRDb2xvci5iICsgJywgJyArIGJhY2tncm91bmRDb2xvci5hICsgJyknLFxuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYmFja2dyb3VuZEltYWdlLnVybCArICcpJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0LFxuICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSxcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoJyArIGJvcmRlckNvbG9yLnIgKyAnLCAnICsgYm9yZGVyQ29sb3IuZyArICcsICcgKyBib3JkZXJDb2xvci5iICsgJywgJyArIGJvcmRlckNvbG9yLmEgKyAnKScsXG4gICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgbWFyZ2luOiBtYXJnaW4ubGVmdCArICdweCAnICsgbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4JyxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLmxlZnQgKyAncHggJyArIHBhZGRpbmcudG9wICsgJ3B4ICcgKyBwYWRkaW5nLnJpZ2h0ICsgJ3B4ICcgKyBwYWRkaW5nLmJvdHRvbSArICdweCcsXG4gICAgd2lkdGg6IGNvbnRhaW5lcldpZHRoID09PSAnZnVsbCcgPyAnMTAwJScgOiAnMTIwMHB4JyxcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2stY29udGVudFwiIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cbiAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=