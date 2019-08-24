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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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
/* harmony import */ var _blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Logo/Logo */ "./preprocess/scripts/blocks/Logo/Logo.js");
/* harmony import */ var _blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__);
 // import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'



var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/section', _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__["default"]); // registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default.a);
registerBlockType('builder-blocks/logo', _blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2___default.a);

/***/ }),

/***/ "./preprocess/scripts/blocks/Hero/Hero.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Hero/Hero.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./preprocess/scripts/blocks/Logo/Logo.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Logo/Logo.js ***!
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
    borderWidth: {
      type: 'number',
      "default": 0
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) {
  if (typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
        backgroundImage: backgroundImage.url ? 'url(' + backgroundImage.url + ')' : 'inherit',
        backgroundPosition: backgroundPosition ? backgroundPosition : 'inherit',
        backgroundRepeat: backgroundRepeat ? backgroundRepeat : 'inherit',
        backgroundSize: backgroundSize ? backgroundSize : 'inherit',
        borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
        borderWidth: borderWidth + 'px',
        borderStyle: borderStyle,
        margin: margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px',
        padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
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
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


function _typeof(obj) {
  if (typeof Symbol === "function" && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(obj);
    };
  }

  return _typeof(obj);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
      }), createElement(TextControl, {
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
    margin: margin.top + 'px ' + margin.right + 'px ' + margin.bottom + 'px ' + margin.left + 'px',
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc3R5bGVzL2Jsb2Nrcy5zY3NzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJfXyIsImkxOG4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpY29uIiwiYXR0cmlidXRlcyIsInBhZGRpbmciLCJ0eXBlIiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luIiwiYmFja2dyb3VuZEltYWdlIiwiYWx0IiwidXJsIiwiaWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiY29udGFpbmVyV2lkdGgiLCJjb250ZW50V2lkdGgiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiYmxvY2siLCJDb21wb25lbnQiLCJJbm5lckJsb2NrcyIsImVkaXRvciIsIkVkaXRvciIsInN0eWxlIiwid2lkdGgiLCJjb250YWluZXJTdHlsZSIsIm1heFdpZHRoIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJjb21wb25lbnRzIiwiUGFuZWxCb2R5IiwiVGV4dENvbnRyb2wiLCJDb2xvclBpY2tlciIsIlNlbGVjdENvbnRyb2wiLCJCdXR0b24iLCJBTExPV0VEX01FRElBX1RZUEVTIiwiSW5zcGVjdG9yIiwidmFsdWUiLCJyZ2IiLCJtZWRpYSIsIm9wZW4iLCJsYWJlbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFD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LEVBQUdFO0FBQTlELEtBQ0UsY0FBQyxXQUFELFVBSE4sSUFHTSxDQURGLENBREYsQ0FERjtBQU9ELEM7Ozs7Ozs7Ozs7O0FDakNELHlDIiwiZmlsZSI6ImVkaXRvci5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vYmxvY2tzL1NlY3Rpb24vU2VjdGlvbidcbi8vIGltcG9ydCBSZXN0YXVyYW50TWVudSBmcm9tICcuL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudSdcbi8vIGltcG9ydCBNZW51SXRlbSBmcm9tICcuL2Jsb2Nrcy9NZW51SXRlbS9NZW51SXRlbSdcbi8vIGltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi9ibG9ja3MvVGVzdGltb25pYWxzJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9ibG9ja3MvSGVyby9IZXJvJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9ibG9ja3MvTG9nby9Mb2dvJ1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3NcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3NlY3Rpb24nLCBTZWN0aW9uKVxuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3Jlc3RhdXJhbnRtZW51JywgUmVzdGF1cmFudE1lbnUpXG4vLyByZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbWVudWl0ZW0nLCBNZW51SXRlbSlcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy90ZXN0aW1vbmlhbHMnLCBUZXN0aW1vbmlhbHMpXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvaGVybycsIEhlcm8pXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbG9nbycsIExvZ28pIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdTZWN0aW9uJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQSB3cmFwcGVyIGJsb2NrIGZvciByb3dzLicpLFxuICBjYXRlZ29yeTogJ2J1aWxkZXItYmxvY2tzJyxcbiAgaWNvbjogJ2V4Y2VycHQtdmlldycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAvLyBVbml2ZXJzYWwgQXR0cmlidXRlc1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICB0b3A6ICcyMCcsXG4gICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICBib3R0b206ICcyMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWFyZ2luOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgaWQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcjogMjU1LFxuICAgICAgICBnOiAyNTUsXG4gICAgICAgIGI6IDI1NSxcbiAgICAgICAgYTogMS4wLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRTaXplOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICB9LFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndG9wIGxlZnQnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFJlcGVhdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnbm8tcmVwZWF0JyxcbiAgICB9LFxuICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBib3JkZXJTdHlsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnc29saWQnLFxuICAgIH0sXG4gICAgYm9yZGVyQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29udGFpbmVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2Z1bGwnLFxuICAgIH0sXG4gICAgY29udGVudFdpZHRoOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdjb250YWluZXInLFxuICAgIH0sXG4gIH0sXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnNwZWN0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICAgIDxFZGl0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0LCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBjb250ZW50V2lkdGgsIGNvbnRhaW5lcldpZHRoIH0gPSB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmRJbWFnZS51cmwgPyAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknIDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24gPyBiYWNrZ3JvdW5kUG9zaXRpb24gOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0ID8gYmFja2dyb3VuZFJlcGVhdCA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSA/IGJhY2tncm91bmRTaXplIDogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4ICcgKyBtYXJnaW4ubGVmdCArICdweCcsXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLnRvcCArICdweCAnICsgcGFkZGluZy5yaWdodCArICdweCAnICsgcGFkZGluZy5ib3R0b20gKyAncHggJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgICB3aWR0aDogY29udGFpbmVyV2lkdGggPT09ICdmdWxsJyA/ICcxMDAlJyA6ICcxMjAwcHgnLFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIG1heFdpZHRoOiBjb250ZW50V2lkdGggPT09ICdjb250YWluZXInID8gJzEyMDBweCcgOiAnMTAwJScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2VjdGlvbi1ibG9jay1jb250ZW50XCIgc3R5bGU9eyBjb250YWluZXJTdHlsZSB9PlxuICAgICAgICAgIDxJbm5lckJsb2NrcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMsIE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgQ29sb3JQaWNrZXIsIFNlbGVjdENvbnRyb2wsIEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IgfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3R5bGUgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5CYWNrZ3JvdW5kPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYmFja2dyb3VuZENvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsgYmFja2dyb3VuZEltYWdlLnVybCB9IGFsdD17IGJhY2tncm91bmRJbWFnZS5hbHQgfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1lZGlhLmlkLFxuICAgICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYmFja2dyb3VuZEltYWdlLmlkIH1cbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuIH0+XG4gICAgICAgICAgICAgICAgICAgICAgT3BlbiBNZWRpYSBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+Qm9yZGVyPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU2l6ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJXaWR0aCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlcldpZHRoOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU3R5bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyU3R5bGUgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU29saWQnLCB2YWx1ZTogJ3NvbGlkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0hpZGRlbicsIHZhbHVlOiAnaGlkZGVuJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Rhc2hlZCcsIHZhbHVlOiAnZGFzaGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdHRlZCcsIHZhbHVlOiAnZG90dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdWJsZScsIHZhbHVlOiAnZG91YmxlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0dyb292ZScsIHZhbHVlOiAnZ3Jvb3ZlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1JpZGdlJywgdmFsdWU6ICdyaWRnZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdJbnNldCcsIHZhbHVlOiAnaW5zZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT3V0c2V0JywgdmFsdWU6ICdvdXRzZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyU3R5bGU6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBib3JkZXJDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3BhY2luZyBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+TWFyZ2luPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4udG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICByaWdodDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3R0b21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PlBhZGRpbmc8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcuYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICApXG4gIH1cbn1cbiIsImNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGNvbnRhaW5lcldpZHRoLCBjb250ZW50V2lkdGggfSA9IGJsb2NrLmF0dHJpYnV0ZXNcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKCcgKyBiYWNrZ3JvdW5kQ29sb3IuciArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuZyArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYiArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYSArICcpJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJhY2tncm91bmRJbWFnZS51cmwgKyAnKScsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYmFja2dyb3VuZFJlcGVhdCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgIGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aCArICdweCcsXG4gICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4ICcgKyBtYXJnaW4ubGVmdCArICdweCcsXG4gICAgcGFkZGluZzogcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4ICcgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgIHdpZHRoOiBjb250YWluZXJXaWR0aCA9PT0gJ2Z1bGwnID8gJzEwMCUnIDogJzEyMDBweCcsXG4gIH1cblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIG1heFdpZHRoOiBjb250ZW50V2lkdGggPT09ICdjb250YWluZXInID8gJzEyMDBweCcgOiAnMTAwJScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG4gICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9