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
/* harmony import */ var _blocks_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/Menu/Menu */ "./preprocess/scripts/blocks/Menu/Menu.js");
 // import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'



var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/section', _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__["default"]); // registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default.a);
registerBlockType('builder-blocks/menu', _blocks_Menu_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./preprocess/scripts/blocks/Hero/Hero.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Hero/Hero.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./preprocess/scripts/blocks/Menu/Menu.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Menu/Menu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/Menu/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./preprocess/scripts/blocks/Menu/save.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_save__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Section'),
  description: __('A wrapper block for rows.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    menu: {
      type: 'string',
      "default": ''
    },
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
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1___default.a
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Menu/edit.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Menu/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./preprocess/scripts/blocks/Menu/inspector.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./preprocess/scripts/blocks/Menu/editor.js");


var createElement = wp.element.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return React.createElement(React.Fragment, null, createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    block: block
  }), createElement(_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block
  }));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Menu/editor.js":
/*!**************************************************!*\
  !*** ./preprocess/scripts/blocks/Menu/editor.js ***!
  \**************************************************/
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
        padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px'
      };
      return createElement("div", {
        className: "builder-blocks-menu-block",
        style: style
      });
    });

    return _this;
  }

  return Editor;
}(Component);



/***/ }),

/***/ "./preprocess/scripts/blocks/Menu/inspector.js":
/*!*****************************************************!*\
  !*** ./preprocess/scripts/blocks/Menu/inspector.js ***!
  \*****************************************************/
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
        title: __('Menu Settings')
      }, createElement("div", {
        className: "builder-blocks-settings-background-container"
      }, createElement("h4", null, "Select Menu"), createElement("div", {
        className: "builder-blocks-settings-background-wrap"
      }))), createElement(PanelBody, {
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

/***/ "./preprocess/scripts/blocks/Menu/save.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Menu/save.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9NZW51L2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9NZW51L2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL01lbnUvaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9lZGl0LmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3N0eWxlcy9ibG9ja3Muc2NzcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJtZW51IiwidHlwZSIsInBhZGRpbmciLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJhbHQiLCJ1cmwiLCJpZCIsImJhY2tncm91bmRDb2xvciIsInIiLCJnIiwiYiIsImEiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiYmxvY2siLCJDb21wb25lbnQiLCJJbm5lckJsb2NrcyIsImVkaXRvciIsIkVkaXRvciIsImNvbnRlbnRXaWR0aCIsImNvbnRhaW5lcldpZHRoIiwic3R5bGUiLCJJbnNwZWN0b3JDb250cm9scyIsIk1lZGlhVXBsb2FkIiwiTWVkaWFVcGxvYWRDaGVjayIsImNvbXBvbmVudHMiLCJQYW5lbEJvZHkiLCJUZXh0Q29udHJvbCIsIkNvbG9yUGlja2VyIiwiU2VsZWN0Q29udHJvbCIsIkJ1dHRvbiIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJJbnNwZWN0b3IiLCJ2YWx1ZSIsInJnYiIsIm1lZGlhIiwib3BlbiIsImxhYmVsIiwid2lkdGgiLCJjb250YWluZXJTdHlsZSIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNB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QTFGLElBTkQ7QUFPWkYsZUFBVyxFQUFFQSxXQUFXLEdBUFo7QUFRWkMsZUFBVyxFQVJDO0FBU1pkLFVBQU0sRUFBRUEsTUFBTSxDQUFOQSxjQUFxQkEsTUFBTSxDQUEzQkEsZ0JBQTRDQSxNQUFNLENBQWxEQSxpQkFBb0VBLE1BQU0sQ0FBMUVBLE9BVEk7QUFVWkwsV0FBTyxFQUFFQSxPQUFPLENBQVBBLGNBQXNCQSxPQUFPLENBQTdCQSxnQkFBOENBLE9BQU8sQ0FBckRBLGlCQUF1RUEsT0FBTyxDQUE5RUEsT0FWRztBQVdaaUQsU0FBSyxFQUFFbEIsY0FBYyxLQUFkQSxrQkFBcUM7QUFYaEMsR0FBZDtBQWNBLE1BQU1tQixjQUFjLEdBQUc7QUFDckI3QyxVQUFNLEVBRGU7QUFFckI4QyxZQUFRLEVBQUVyQixZQUFZLEtBQVpBLHlCQUZXO0FBR3JCbUIsU0FBSyxFQUFFO0FBSGMsR0FBdkI7QUFNQSxTQUNFO0FBQUssYUFBUyxFQUFkO0FBQThDLFNBQUssRUFBR2pCO0FBQXRELEtBQ0U7QUFBSyxhQUFTLEVBQWQ7QUFBc0QsU0FBSyxFQUFHa0I7QUFBOUQsS0FDRSxjQUFDLFdBQUQsVUFITixJQUdNLENBREYsQ0FERixDQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7QUNqQ0QseUMiLCJmaWxlIjoiZWRpdG9yLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9ibG9ja3MvU2VjdGlvbi9TZWN0aW9uJ1xuLy8gaW1wb3J0IFJlc3RhdXJhbnRNZW51IGZyb20gJy4vYmxvY2tzL1Jlc3RhdXJhbnRNZW51L1Jlc3RhdXJhbnRNZW51J1xuLy8gaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtJ1xuLy8gaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL2Jsb2Nrcy9UZXN0aW1vbmlhbHMnXG5pbXBvcnQgSGVybyBmcm9tICcuL2Jsb2Nrcy9IZXJvL0hlcm8nXG5pbXBvcnQgTWVudSBmcm9tICcuL2Jsb2Nrcy9NZW51L01lbnUnXG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3Mvc2VjdGlvbicsIFNlY3Rpb24pXG4vLyByZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvcmVzdGF1cmFudG1lbnUnLCBSZXN0YXVyYW50TWVudSlcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9tZW51aXRlbScsIE1lbnVJdGVtKVxuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3Rlc3RpbW9uaWFscycsIFRlc3RpbW9uaWFscylcbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9oZXJvJywgSGVybylcbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9tZW51JywgTWVudSkiLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ1NlY3Rpb24nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBIHdyYXBwZXIgYmxvY2sgZm9yIHJvd3MuJyksXG4gIGNhdGVnb3J5OiAnYnVpbGRlci1ibG9ja3MnLFxuICBpY29uOiAnZXhjZXJwdC12aWV3JyxcbiAgYXR0cmlidXRlczoge1xuICAgIG1lbnU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgfSxcbiAgICAvLyBVbml2ZXJzYWwgQXR0cmlidXRlc1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICB0b3A6ICcyMCcsXG4gICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICBib3R0b206ICcyMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbWFyZ2luOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbGVmdDogJzAnLFxuICAgICAgICB0b3A6ICcwJyxcbiAgICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgICAgYm90dG9tOiAnMCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgYWx0OiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgaWQ6IDAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcjogMjU1LFxuICAgICAgICBnOiAyNTUsXG4gICAgICAgIGI6IDI1NSxcbiAgICAgICAgYTogMS4wLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRTaXplOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdhdXRvJyxcbiAgICB9LFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndG9wIGxlZnQnLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFJlcGVhdDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnbm8tcmVwZWF0JyxcbiAgICB9LFxuICAgIGJvcmRlcldpZHRoOiB7XG4gICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBib3JkZXJTdHlsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnc29saWQnLFxuICAgIH0sXG4gICAgYm9yZGVyQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGVkaXQsXG4gIHNhdmVcbn1cbiIsImltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnNwZWN0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICAgIDxFZGl0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0LCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBjb250ZW50V2lkdGgsIGNvbnRhaW5lcldpZHRoIH0gPSB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmRJbWFnZS51cmwgPyAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknIDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24gPyBiYWNrZ3JvdW5kUG9zaXRpb24gOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0ID8gYmFja2dyb3VuZFJlcGVhdCA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSA/IGJhY2tncm91bmRTaXplIDogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4ICcgKyBtYXJnaW4ubGVmdCArICdweCcsXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLnRvcCArICdweCAnICsgcGFkZGluZy5yaWdodCArICdweCAnICsgcGFkZGluZy5ib3R0b20gKyAncHggJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3MtbWVudS1ibG9ja1wiIHN0eWxlPXsgc3R5bGUgfT5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdNZW51IFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+U2VsZWN0IE1lbnU8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLXdyYXBcIj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1N0eWxlIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+QmFja2dyb3VuZDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtd3JhcFwiPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJhY2tncm91bmRDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZENvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17IGJhY2tncm91bmRJbWFnZS51cmwgfSBhbHQ9eyBiYWNrZ3JvdW5kSW1hZ2UuYWx0IH0gaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiAvPlxuICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgKG1lZGlhKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYmFja2dyb3VuZEltYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IG1lZGlhLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBtZWRpYS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtZWRpYS5pZCxcbiAgICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IGJhY2tncm91bmRJbWFnZS5pZCB9XG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgb3BlbiB9PlxuICAgICAgICAgICAgICAgICAgICAgIE9wZW4gTWVkaWEgTGlicmFyeVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJvcmRlcjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFNpemVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyV2lkdGggfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJXaWR0aDogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFN0eWxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlclN0eWxlIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NvbGlkJywgdmFsdWU6ICdzb2xpZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEYXNoZWQnLCB2YWx1ZTogJ2Rhc2hlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3R0ZWQnLCB2YWx1ZTogJ2RvdHRlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3VibGUnLCB2YWx1ZTogJ2RvdWJsZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdHcm9vdmUnLCB2YWx1ZTogJ2dyb292ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdSaWRnZScsIHZhbHVlOiAncmlkZ2UnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSW5zZXQnLCB2YWx1ZTogJ2luc2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ091dHNldCcsIHZhbHVlOiAnb3V0c2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXG4gICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlclN0eWxlOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYm9yZGVyQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlckNvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1NwYWNpbmcgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0Pk1hcmdpbjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnRvcCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5yaWdodCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5ib3R0b20gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5QYWRkaW5nPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcudG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ1NlY3Rpb24nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBIHdyYXBwZXIgYmxvY2sgZm9yIHJvd3MuJyksXG4gIGNhdGVnb3J5OiAnYnVpbGRlci1ibG9ja3MnLFxuICBpY29uOiAnZXhjZXJwdC12aWV3JyxcbiAgYXR0cmlidXRlczoge1xuICAgIC8vIFVuaXZlcnNhbCBBdHRyaWJ1dGVzXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgIHRvcDogJzIwJyxcbiAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgIGJvdHRvbTogJzIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJnaW46IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICduby1yZXBlYXQnLFxuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGJvcmRlclN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdzb2xpZCcsXG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWluZXJXaWR0aDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZnVsbCcsXG4gICAgfSxcbiAgICBjb250ZW50V2lkdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2NvbnRhaW5lcicsXG4gICAgfSxcbiAgfSxcbiAgZWRpdCxcbiAgc2F2ZVxufVxuIiwiaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL2luc3BlY3RvcidcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5cbmNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluc3BlY3RvciBibG9jaz17IGJsb2NrIH0vPlxuICAgICAgPEVkaXRvciBibG9jaz17IGJsb2NrIH0vPlxuICAgIDwvPlxuICApXG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGNvbnRlbnRXaWR0aCwgY29udGFpbmVyV2lkdGggfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKCcgKyBiYWNrZ3JvdW5kQ29sb3IuciArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuZyArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYiArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYSArICcpJyxcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYmFja2dyb3VuZEltYWdlLnVybCA/ICd1cmwoJyArIGJhY2tncm91bmRJbWFnZS51cmwgKyAnKScgOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbiA/IGJhY2tncm91bmRQb3NpdGlvbiA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQgPyBiYWNrZ3JvdW5kUmVwZWF0IDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplID8gYmFja2dyb3VuZFNpemUgOiAnaW5oZXJpdCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoJyArIGJvcmRlckNvbG9yLnIgKyAnLCAnICsgYm9yZGVyQ29sb3IuZyArICcsICcgKyBib3JkZXJDb2xvci5iICsgJywgJyArIGJvcmRlckNvbG9yLmEgKyAnKScsXG4gICAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgbWFyZ2luOiBtYXJnaW4udG9wICsgJ3B4ICcgKyBtYXJnaW4ucmlnaHQgKyAncHggJyArIG1hcmdpbi5ib3R0b20gKyAncHggJyArIG1hcmdpbi5sZWZ0ICsgJ3B4JyxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcudG9wICsgJ3B4ICcgKyBwYWRkaW5nLnJpZ2h0ICsgJ3B4ICcgKyBwYWRkaW5nLmJvdHRvbSArICdweCAnICsgcGFkZGluZy5sZWZ0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiBjb250YWluZXJXaWR0aCA9PT0gJ2Z1bGwnID8gJzEwMCUnIDogJzEyMDBweCcsXG4gICAgfVxuXG4gICAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2VjdGlvbi1ibG9ja1wiIHN0eWxlPXsgc3R5bGUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG4gICAgICAgICAgPElubmVyQmxvY2tzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTdHlsZSBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJhY2tncm91bmQ8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBiYWNrZ3JvdW5kQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9eyBiYWNrZ3JvdW5kSW1hZ2UudXJsIH0gYWx0PXsgYmFja2dyb3VuZEltYWdlLmFsdCB9IGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgLz5cbiAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17IChtZWRpYSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmJhY2tncm91bmRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBtZWRpYS5hbHQsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbWVkaWEudXJsLFxuICAgICAgICAgICAgICAgICAgICBpZDogbWVkaWEuaWQsXG4gICAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyBiYWNrZ3JvdW5kSW1hZ2UuaWQgfVxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IG9wZW4gfT5cbiAgICAgICAgICAgICAgICAgICAgICBPcGVuIE1lZGlhIExpYnJhcnlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5Cb3JkZXI8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTaXplXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlcldpZHRoIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyV2lkdGg6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTdHlsZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJTdHlsZSB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTb2xpZCcsIHZhbHVlOiAnc29saWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSGlkZGVuJywgdmFsdWU6ICdoaWRkZW4nIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRGFzaGVkJywgdmFsdWU6ICdkYXNoZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG90dGVkJywgdmFsdWU6ICdkb3R0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG91YmxlJywgdmFsdWU6ICdkb3VibGUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnR3Jvb3ZlJywgdmFsdWU6ICdncm9vdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUmlkZ2UnLCB2YWx1ZTogJ3JpZGdlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0luc2V0JywgdmFsdWU6ICdpbnNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdPdXRzZXQnLCB2YWx1ZTogJ291dHNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxuICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJTdHlsZTogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJvcmRlckNvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTcGFjaW5nIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5NYXJnaW48L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4uYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+UGFkZGluZzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnRvcCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5yaWdodCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICByaWdodDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3R0b21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5ib3R0b20gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5lZGl0b3JcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgY29udGFpbmVyV2lkdGgsIGNvbnRlbnRXaWR0aCB9ID0gYmxvY2suYXR0cmlidXRlc1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoJyArIGJhY2tncm91bmRDb2xvci5yICsgJywgJyArIGJhY2tncm91bmRDb2xvci5nICsgJywgJyArIGJhY2tncm91bmRDb2xvci5iICsgJywgJyArIGJhY2tncm91bmRDb2xvci5hICsgJyknLFxuICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgYmFja2dyb3VuZEltYWdlLnVybCArICcpJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0LFxuICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSxcbiAgICBib3JkZXJDb2xvcjogJ3JnYmEoJyArIGJvcmRlckNvbG9yLnIgKyAnLCAnICsgYm9yZGVyQ29sb3IuZyArICcsICcgKyBib3JkZXJDb2xvci5iICsgJywgJyArIGJvcmRlckNvbG9yLmEgKyAnKScsXG4gICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgbWFyZ2luOiBtYXJnaW4udG9wICsgJ3B4ICcgKyBtYXJnaW4ucmlnaHQgKyAncHggJyArIG1hcmdpbi5ib3R0b20gKyAncHggJyArIG1hcmdpbi5sZWZ0ICsgJ3B4JyxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLnRvcCArICdweCAnICsgcGFkZGluZy5yaWdodCArICdweCAnICsgcGFkZGluZy5ib3R0b20gKyAncHggJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgd2lkdGg6IGNvbnRhaW5lcldpZHRoID09PSAnZnVsbCcgPyAnMTAwJScgOiAnMTIwMHB4JyxcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2stY29udGVudFwiIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cbiAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=