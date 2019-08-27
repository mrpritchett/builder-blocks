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
 // import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'



var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/section', _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__["default"]); // registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default.a);
registerBlockType('builder-blocks/logo', _blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/Logo/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./preprocess/scripts/blocks/Logo/save.js");


var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Logo'),
  description: __('A block that displays the site title & description or an image logo.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    logoType: {
      type: 'string',
      "default": 'text'
    },
    logoImage: {
      type: 'object',
      "default": {
        alt: '',
        url: '',
        id: 0
      }
    },
    logoTitle: {
      type: 'string',
      "default": 'Site Title'
    },
    logoDescription: {
      type: 'string',
      "default": 'Site Description'
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
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Logo/edit.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Logo/edit.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./preprocess/scripts/blocks/Logo/inspector.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./preprocess/scripts/blocks/Logo/editor.js");


var createElement = wp.element.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return React.createElement(React.Fragment, null, createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    block: block
  }), createElement(_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block
  }));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Logo/editor.js":
/*!**************************************************!*\
  !*** ./preprocess/scripts/blocks/Logo/editor.js ***!
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
var Disabled = wp.components.Disabled;

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
          logoType = _this$props$block$att.logoType,
          logoImage = _this$props$block$att.logoImage,
          logoTitle = _this$props$block$att.logoTitle,
          logoDescription = _this$props$block$att.logoDescription;
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
      return createElement(Disabled, null, createElement("div", {
        className: "builder-blocks-logo-block",
        style: style
      }, logoType === 'image' ? createElement("a", {
        className: "site-branding",
        href: window.location.host
      }, createElement("img", {
        src: logoImage.media.url,
        alt: logoImage.media.alt
      })) : createElement("div", {
        className: "site-branding"
      }, createElement("h1", {
        className: "site-title"
      }, createElement("a", {
        href: ""
      }, logoTitle)), createElement("h2", {
        className: "site-description"
      }, logoDescription))));
    });

    return _this;
  }

  return Editor;
}(Component);



/***/ }),

/***/ "./preprocess/scripts/blocks/Logo/inspector.js":
/*!*****************************************************!*\
  !*** ./preprocess/scripts/blocks/Logo/inspector.js ***!
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
          borderColor = _this$props$block$att.borderColor,
          logoType = _this$props$block$att.logoType,
          logoTitle = _this$props$block$att.logoTitle,
          logoDescription = _this$props$block$att.logoDescription,
          logoImage = _this$props$block$att.logoImage;
      return createElement(InspectorControls, null, createElement(PanelBody, {
        title: __('Logo Settings')
      }, createElement("div", {
        className: ""
      }, createElement(SelectControl, {
        label: __('Select logo type:'),
        value: logoType,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            logoType: value
          });
        },
        options: [{
          value: 'text',
          label: 'Text'
        }, {
          value: 'image',
          label: 'Image'
        }]
      })), logoType === 'image' ? createElement("div", {
        className: "builder-blocks-settings-background-container"
      }, createElement("h4", null, __('Logo Image')), createElement("div", {
        className: "builder-blocks-settings-logo-image-wrap"
      }, createElement("img", {
        src: logoImage.url,
        alt: logoImage.alt,
        height: "100",
        width: "100"
      }), createElement(MediaUploadCheck, null, createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          return _this.props.block.setAttributes({
            logoImage: _objectSpread({}, logoImage, {
              alt: media.alt,
              url: media.url,
              id: media.id
            })
          });
        },
        allowedTypes: ALLOWED_MEDIA_TYPES,
        value: logoImage.id,
        render: function render(_ref) {
          var open = _ref.open;
          return createElement(Button, {
            onClick: open
          }, __('Open Media Library'));
        }
      })))) : React.createElement(React.Fragment, null, createElement("div", {
        className: "builder-blocks-settings-background-container"
      }, createElement(TextControl, {
        label: "Site Title",
        value: logoTitle,
        onChange: function onChange(logoTitle) {
          return _this.props.block.setAttributes({
            logoTitle: logoTitle
          });
        }
      })), createElement("div", {
        className: "builder-blocks-settings-background-container"
      }, createElement(TextControl, {
        label: "Site Description",
        value: logoDescription,
        onChange: function onChange(logoDescription) {
          return _this.props.block.setAttributes({
            logoDescription: logoDescription
          });
        }
      })))), createElement(PanelBody, {
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
        render: function render(_ref2) {
          var open = _ref2.open;
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

/***/ "./preprocess/scripts/blocks/Logo/save.js":
/*!************************************************!*\
  !*** ./preprocess/scripts/blocks/Logo/save.js ***!
  \************************************************/
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
      logoType = _block$attributes.logoType,
      logoImage = _block$attributes.logoImage,
      logoTitle = _block$attributes.logoTitle,
      logoDescription = _block$attributes.logoDescription;
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
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px'
  };
  return createElement("div", {
    className: "builder-blocks-logo-block",
    style: style
  }, logoType === 'image' ? createElement("a", {
    className: "site-branding",
    href: window.location.host
  }, createElement("img", {
    src: logoImage.media.url,
    alt: logoImage.media.alt
  })) : createElement("div", {
    className: "site-branding"
  }, createElement("h1", {
    className: "site-title"
  }, createElement("a", {
    href: ""
  }, logoTitle)), createElement("h2", {
    className: "site-description"
  }, logoDescription)));
});

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
    sectionPosition: {
      type: 'string',
      "default": 'relative'
    },
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
          containerWidth = _this$props$block$att.containerWidth,
          sectionPosition = _this$props$block$att.sectionPosition;
      var style = {
        backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
        backgroundImage: 'url(' + backgroundImage.url + ')',
        backgroundPosition: backgroundPosition,
        backgroundRepeat: backgroundRepeat,
        backgroundSize: backgroundSize,
        borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
        borderWidth: borderWidth + 'px',
        borderStyle: borderStyle,
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        position: sectionPosition,
        width: containerWidth === 'full' ? '100%' : 'auto',
        zIndex: sectionPosition === 'absolute' || sectionPosition === 'fixed' ? '2' : '1'
      };
      var containerStyle = {
        margin: margin.top + 'px -' + padding.right + 'px ' + margin.bottom + 'px -' + padding.left + 'px',
        maxWidth: contentWidth === 'container' ? '1200px' : '100%',
        padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
        width: '1200px'
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
          borderColor = _this$props$block$att.borderColor,
          sectionPosition = _this$props$block$att.sectionPosition;
      return createElement(InspectorControls, null, createElement(PanelBody, {
        title: __('Section Settings')
      }, createElement("h4", null, "Section Positioning"), createElement("div", {
        className: "builder-block-settings-positioning"
      }, createElement(SelectControl, {
        label: __('Select Section Positioning:'),
        value: sectionPosition,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            sectionPosition: value
          });
        },
        options: [{
          value: 'relative',
          label: 'Relative'
        }, {
          value: 'absolute',
          label: 'Absolute'
        }, {
          value: 'fixed',
          label: 'Fixed'
        }]
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
      contentWidth = _block$attributes.contentWidth,
      sectionPosition = _block$attributes.sectionPosition;
  var style = {
    backgroundColor: 'rgba(' + backgroundColor.r + ', ' + backgroundColor.g + ', ' + backgroundColor.b + ', ' + backgroundColor.a + ')',
    backgroundImage: 'url(' + backgroundImage.url + ')',
    backgroundPosition: backgroundPosition,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    borderColor: 'rgba(' + borderColor.r + ', ' + borderColor.g + ', ' + borderColor.b + ', ' + borderColor.a + ')',
    borderWidth: borderWidth + 'px',
    borderStyle: borderStyle,
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    position: sectionPosition,
    width: containerWidth === 'full' ? '100%' : 'auto',
    zIndex: sectionPosition === 'absolute' || sectionPosition === 'fixed' ? '2' : '1'
  };
  var containerStyle = {
    margin: margin.top + 'px -' + padding.right + 'px ' + margin.bottom + 'px -' + padding.left + 'px',
    maxWidth: contentWidth === 'container' ? '1200px' : '100%',
    padding: padding.top + 'px ' + padding.right + 'px ' + padding.bottom + 'px ' + padding.left + 'px',
    width: '1200px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL0xvZ28vaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTG9nby9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9lZGl0LmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2luc3BlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vc2F2ZS5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3N0eWxlcy9ibG9ja3Muc2NzcyJdLCJuYW1lcyI6WyJyZWdpc3RlckJsb2NrVHlwZSIsIndwIiwiYmxvY2tzIiwiX18iLCJpMThuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaWNvbiIsImF0dHJpYnV0ZXMiLCJsb2dvVHlwZSIsInR5cGUiLCJsb2dvSW1hZ2UiLCJhbHQiLCJ1cmwiLCJpZCIsImxvZ29UaXRsZSIsImxvZ29EZXNjcmlwdGlvbiIsInBhZGRpbmciLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW4iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyIiwiZyIsImIiLCJhIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiZWRpdCIsInNhdmUiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudCIsImJsb2NrIiwiQ29tcG9uZW50IiwiRGlzYWJsZWQiLCJjb21wb25lbnRzIiwiRWRpdG9yIiwic3R5bGUiLCJ3aW5kb3ciLCJob3N0IiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJQYW5lbEJvZHkiLCJUZXh0Q29udHJvbCIsIkNvbG9yUGlja2VyIiwiU2VsZWN0Q29udHJvbCIsIkJ1dHRvbiIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJJbnNwZWN0b3IiLCJ2YWx1ZSIsImxhYmVsIiwibWVkaWEiLCJvcGVuIiwicmdiIiwiSW5uZXJCbG9ja3MiLCJzZWN0aW9uUG9zaXRpb24iLCJjb250YWluZXJXaWR0aCIsImNvbnRlbnRXaWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJjb250YWluZXJTdHlsZSIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMs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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9ibG9ja3MvU2VjdGlvbi9TZWN0aW9uJ1xuLy8gaW1wb3J0IFJlc3RhdXJhbnRNZW51IGZyb20gJy4vYmxvY2tzL1Jlc3RhdXJhbnRNZW51L1Jlc3RhdXJhbnRNZW51J1xuLy8gaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vYmxvY2tzL01lbnVJdGVtL01lbnVJdGVtJ1xuLy8gaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL2Jsb2Nrcy9UZXN0aW1vbmlhbHMnXG5pbXBvcnQgSGVybyBmcm9tICcuL2Jsb2Nrcy9IZXJvL0hlcm8nXG5pbXBvcnQgTG9nbyBmcm9tICcuL2Jsb2Nrcy9Mb2dvL0xvZ28nXG5cbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2Nrc1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3Mvc2VjdGlvbicsIFNlY3Rpb24pXG4vLyByZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvcmVzdGF1cmFudG1lbnUnLCBSZXN0YXVyYW50TWVudSlcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9tZW51aXRlbScsIE1lbnVJdGVtKVxuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3Rlc3RpbW9uaWFscycsIFRlc3RpbW9uaWFscylcbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9oZXJvJywgSGVybylcbnJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy9sb2dvJywgTG9nbykiLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ0xvZ28nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBIGJsb2NrIHRoYXQgZGlzcGxheXMgdGhlIHNpdGUgdGl0bGUgJiBkZXNjcmlwdGlvbiBvciBhbiBpbWFnZSBsb2dvLicpLFxuICBjYXRlZ29yeTogJ2J1aWxkZXItYmxvY2tzJyxcbiAgaWNvbjogJ2V4Y2VycHQtdmlldycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBsb2dvVHlwZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICB9LFxuICAgIGxvZ29JbWFnZToge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFsdDogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGlkOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvZ29UaXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnU2l0ZSBUaXRsZScsXG4gICAgfSxcbiAgICBsb2dvRGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ1NpdGUgRGVzY3JpcHRpb24nLFxuICAgIH0sXG4gICAgLy8gVW5pdmVyc2FsIEF0dHJpYnV0ZXNcbiAgICBwYWRkaW5nOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgdG9wOiAnMjAnLFxuICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgYm90dG9tOiAnMjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1hcmdpbjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRJbWFnZToge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFsdDogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGlkOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ25vLXJlcGVhdCcsXG4gICAgfSxcbiAgICBib3JkZXJXaWR0aDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgYm9yZGVyU3R5bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3NvbGlkJyxcbiAgICB9LFxuICAgIGJvcmRlckNvbG9yOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcjogMjU1LFxuICAgICAgICBnOiAyNTUsXG4gICAgICAgIGI6IDI1NSxcbiAgICAgICAgYTogMS4wLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJpbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vaW5zcGVjdG9yJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcblxuY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5zcGVjdG9yIGJsb2NrPXsgYmxvY2sgfS8+XG4gICAgICA8RWRpdG9yIGJsb2NrPXsgYmxvY2sgfS8+XG4gICAgPC8+XG4gIClcbn1cbiIsImNvbnN0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IERpc2FibGVkIH0gPSB3cC5jb21wb25lbnRzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGxvZ29UeXBlLCBsb2dvSW1hZ2UsIGxvZ29UaXRsZSwgbG9nb0Rlc2NyaXB0aW9uIH0gPSB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGJhY2tncm91bmRJbWFnZS51cmwgPyAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknIDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24gPyBiYWNrZ3JvdW5kUG9zaXRpb24gOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0ID8gYmFja2dyb3VuZFJlcGVhdCA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZSA/IGJhY2tncm91bmRTaXplIDogJ2luaGVyaXQnLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAnICsgbWFyZ2luLnJpZ2h0ICsgJ3B4ICcgKyBtYXJnaW4uYm90dG9tICsgJ3B4ICcgKyBtYXJnaW4ubGVmdCArICdweCcsXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLnRvcCArICdweCAnICsgcGFkZGluZy5yaWdodCArICdweCAnICsgcGFkZGluZy5ib3R0b20gKyAncHggJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaXNhYmxlZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1sb2dvLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ29UeXBlID09PSAnaW1hZ2UnXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNpdGUtYnJhbmRpbmdcIiBocmVmPXsgd2luZG93LmxvY2F0aW9uLmhvc3QgfT48aW1nIHNyYz17IGxvZ29JbWFnZS5tZWRpYS51cmwgfSBhbHQ9eyBsb2dvSW1hZ2UubWVkaWEuYWx0IH0gLz48L2E+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWJyYW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2l0ZS10aXRsZVwiPjxhIGhyZWY9XCJcIj57IGxvZ29UaXRsZSB9PC9hPjwvaDE+XG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic2l0ZS1kZXNjcmlwdGlvblwiPnsgbG9nb0Rlc2NyaXB0aW9uIH08L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlzYWJsZWQ+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgbG9nb1R5cGUsIGxvZ29UaXRsZSwgbG9nb0Rlc2NyaXB0aW9uLCBsb2dvSW1hZ2UgfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnTG9nbyBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXsgX18oICdTZWxlY3QgbG9nbyB0eXBlOicgKSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgbG9nb1R5cGUgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbG9nb1R5cGU6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICdUZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ltYWdlJywgbGFiZWw6ICdJbWFnZScgfSxcbiAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ29UeXBlID09PSAnaW1hZ2UnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoND57IF9fKCdMb2dvIEltYWdlJykgfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1sb2dvLWltYWdlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgbG9nb0ltYWdlLnVybCB9IGFsdD17IGxvZ29JbWFnZS5hbHQgfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGxvZ29JbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5sb2dvSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lZGlhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbG9nb0ltYWdlLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBfXygnT3BlbiBNZWRpYSBMaWJyYXJ5JyApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaXRlIFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBsb2dvVGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChsb2dvVGl0bGUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGxvZ29UaXRsZSB9KSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNpdGUgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGxvZ29EZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGxvZ29EZXNjcmlwdGlvbikgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbG9nb0Rlc2NyaXB0aW9uIH0pIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3R5bGUgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5CYWNrZ3JvdW5kPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYmFja2dyb3VuZENvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsgYmFja2dyb3VuZEltYWdlLnVybCB9IGFsdD17IGJhY2tncm91bmRJbWFnZS5hbHQgfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1lZGlhLmlkLFxuICAgICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYmFja2dyb3VuZEltYWdlLmlkIH1cbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuIH0+XG4gICAgICAgICAgICAgICAgICAgICAgT3BlbiBNZWRpYSBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+Qm9yZGVyPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU2l6ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJXaWR0aCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlcldpZHRoOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU3R5bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyU3R5bGUgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU29saWQnLCB2YWx1ZTogJ3NvbGlkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0hpZGRlbicsIHZhbHVlOiAnaGlkZGVuJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Rhc2hlZCcsIHZhbHVlOiAnZGFzaGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdHRlZCcsIHZhbHVlOiAnZG90dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdWJsZScsIHZhbHVlOiAnZG91YmxlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0dyb292ZScsIHZhbHVlOiAnZ3Jvb3ZlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1JpZGdlJywgdmFsdWU6ICdyaWRnZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdJbnNldCcsIHZhbHVlOiAnaW5zZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT3V0c2V0JywgdmFsdWU6ICdvdXRzZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyU3R5bGU6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBib3JkZXJDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3BhY2luZyBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+TWFyZ2luPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4udG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICByaWdodDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3R0b21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PlBhZGRpbmc8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcuYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICApXG4gIH1cbn1cbiIsImNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGxvZ29UeXBlLCBsb2dvSW1hZ2UsIGxvZ29UaXRsZSwgbG9nb0Rlc2NyaXB0aW9uIH0gPSBibG9jay5hdHRyaWJ1dGVzXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQsXG4gICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxuICAgIGJvcmRlckNvbG9yOiAncmdiYSgnICsgYm9yZGVyQ29sb3IuciArICcsICcgKyBib3JkZXJDb2xvci5nICsgJywgJyArIGJvcmRlckNvbG9yLmIgKyAnLCAnICsgYm9yZGVyQ29sb3IuYSArICcpJyxcbiAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICBtYXJnaW46IG1hcmdpbi50b3AgKyAncHggJyArIG1hcmdpbi5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAnICsgbWFyZ2luLmxlZnQgKyAncHgnLFxuICAgIHBhZGRpbmc6IHBhZGRpbmcudG9wICsgJ3B4ICcgKyBwYWRkaW5nLnJpZ2h0ICsgJ3B4ICcgKyBwYWRkaW5nLmJvdHRvbSArICdweCAnICsgcGFkZGluZy5sZWZ0ICsgJ3B4JyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1sb2dvLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAge1xuICAgICAgICBsb2dvVHlwZSA9PT0gJ2ltYWdlJ1xuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2l0ZS1icmFuZGluZ1wiIGhyZWY9eyB3aW5kb3cubG9jYXRpb24uaG9zdCB9PjxpbWcgc3JjPXsgbG9nb0ltYWdlLm1lZGlhLnVybCB9IGFsdD17IGxvZ29JbWFnZS5tZWRpYS5hbHQgfSAvPjwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWJyYW5kaW5nXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaXRlLXRpdGxlXCI+PGEgaHJlZj1cIlwiPnsgbG9nb1RpdGxlIH08L2E+PC9oMT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpdGUtZGVzY3JpcHRpb25cIj57IGxvZ29EZXNjcmlwdGlvbiB9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdTZWN0aW9uJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQSB3cmFwcGVyIGJsb2NrIGZvciByb3dzLicpLFxuICBjYXRlZ29yeTogJ2J1aWxkZXItYmxvY2tzJyxcbiAgaWNvbjogJ2V4Y2VycHQtdmlldycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICAvLyBVbml2ZXJzYWwgQXR0cmlidXRlc1xuICAgIHNlY3Rpb25Qb3NpdGlvbjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAncmVsYXRpdmUnLFxuICAgIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgIHRvcDogJzIwJyxcbiAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgIGJvdHRvbTogJzIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJnaW46IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICduby1yZXBlYXQnLFxuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGJvcmRlclN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdzb2xpZCcsXG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWluZXJXaWR0aDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZnVsbCcsXG4gICAgfSxcbiAgICBjb250ZW50V2lkdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2NvbnRhaW5lcicsXG4gICAgfSxcbiAgfSxcbiAgZWRpdCxcbiAgc2F2ZVxufVxuIiwiaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL2luc3BlY3RvcidcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5cbmNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluc3BlY3RvciBibG9jaz17IGJsb2NrIH0vPlxuICAgICAgPEVkaXRvciBibG9jaz17IGJsb2NrIH0vPlxuICAgIDwvPlxuICApXG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGNvbnRlbnRXaWR0aCwgY29udGFpbmVyV2lkdGgsIHNlY3Rpb25Qb3NpdGlvbiB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoJyArIGJhY2tncm91bmRDb2xvci5yICsgJywgJyArIGJhY2tncm91bmRDb2xvci5nICsgJywgJyArIGJhY2tncm91bmRDb2xvci5iICsgJywgJyArIGJhY2tncm91bmRDb2xvci5hICsgJyknLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknLFxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXG4gICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBiYWNrZ3JvdW5kUmVwZWF0LFxuICAgICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgICAgYm9yZGVyV2lkdGg6IGJvcmRlcldpZHRoICsgJ3B4JyxcbiAgICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICBwb3NpdGlvbjogc2VjdGlvblBvc2l0aW9uLFxuICAgICAgd2lkdGg6IGNvbnRhaW5lcldpZHRoID09PSAnZnVsbCcgPyAnMTAwJScgOiAnYXV0bycsXG4gICAgICB6SW5kZXg6IChzZWN0aW9uUG9zaXRpb24gPT09ICdhYnNvbHV0ZScgfHwgc2VjdGlvblBvc2l0aW9uID09PSAnZml4ZWQnKSA/ICcyJyA6ICcxJyxcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAtJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIG1hcmdpbi5ib3R0b20gKyAncHggLScgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmcudG9wICsgJ3B4ICcgKyBwYWRkaW5nLnJpZ2h0ICsgJ3B4ICcgKyBwYWRkaW5nLmJvdHRvbSArICdweCAnICsgcGFkZGluZy5sZWZ0ICsgJ3B4JyxcbiAgICAgIHdpZHRoOiAnMTIwMHB4JyxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2stY29udGVudFwiIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cbiAgICAgICAgICA8SW5uZXJCbG9ja3MgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiIsImNvbnN0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzLCBNZWRpYVVwbG9hZCwgTWVkaWFVcGxvYWRDaGVjayB9ID0gd3AuZWRpdG9yXG5jb25zdCB7IFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIENvbG9yUGlja2VyLCBTZWxlY3RDb250cm9sLCBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHNcbmNvbnN0IEFMTE9XRURfTUVESUFfVFlQRVMgPSBbICdpbWFnZScgXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnNwZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBzZWN0aW9uUG9zaXRpb24gfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU2VjdGlvbiBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGg0PlNlY3Rpb24gUG9zaXRpb25pbmc8L2g0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9jay1zZXR0aW5ncy1wb3NpdGlvbmluZ1wiPlxuICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgbGFiZWw9eyBfXyggJ1NlbGVjdCBTZWN0aW9uIFBvc2l0aW9uaW5nOicgKSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgc2VjdGlvblBvc2l0aW9uIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHNlY3Rpb25Qb3NpdGlvbjogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ3JlbGF0aXZlJywgbGFiZWw6ICdSZWxhdGl2ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdhYnNvbHV0ZScsIGxhYmVsOiAnQWJzb2x1dGUnIH0sXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnZml4ZWQnLCBsYWJlbDogJ0ZpeGVkJyB9LFxuICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1N0eWxlIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+QmFja2dyb3VuZDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtd3JhcFwiPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJhY2tncm91bmRDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZENvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17IGJhY2tncm91bmRJbWFnZS51cmwgfSBhbHQ9eyBiYWNrZ3JvdW5kSW1hZ2UuYWx0IH0gaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiAvPlxuICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgKG1lZGlhKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYmFja2dyb3VuZEltYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IG1lZGlhLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBtZWRpYS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtZWRpYS5pZCxcbiAgICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IGJhY2tncm91bmRJbWFnZS5pZCB9XG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgb3BlbiB9PlxuICAgICAgICAgICAgICAgICAgICAgIE9wZW4gTWVkaWEgTGlicmFyeVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJvcmRlcjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFNpemVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyV2lkdGggfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJXaWR0aDogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFN0eWxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlclN0eWxlIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NvbGlkJywgdmFsdWU6ICdzb2xpZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEYXNoZWQnLCB2YWx1ZTogJ2Rhc2hlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3R0ZWQnLCB2YWx1ZTogJ2RvdHRlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3VibGUnLCB2YWx1ZTogJ2RvdWJsZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdHcm9vdmUnLCB2YWx1ZTogJ2dyb292ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdSaWRnZScsIHZhbHVlOiAncmlkZ2UnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSW5zZXQnLCB2YWx1ZTogJ2luc2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ091dHNldCcsIHZhbHVlOiAnb3V0c2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXG4gICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlclN0eWxlOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYm9yZGVyQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlckNvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1NwYWNpbmcgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0Pk1hcmdpbjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnRvcCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5yaWdodCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5ib3R0b20gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5QYWRkaW5nPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcudG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0LCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBjb250YWluZXJXaWR0aCwgY29udGVudFdpZHRoLCBzZWN0aW9uUG9zaXRpb24gfSA9IGJsb2NrLmF0dHJpYnV0ZXNcblxuICBjb25zdCBzdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKCcgKyBiYWNrZ3JvdW5kQ29sb3IuciArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuZyArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYiArICcsICcgKyBiYWNrZ3JvdW5kQ29sb3IuYSArICcpJyxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJhY2tncm91bmRJbWFnZS51cmwgKyAnKScsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb24sXG4gICAgYmFja2dyb3VuZFJlcGVhdDogYmFja2dyb3VuZFJlcGVhdCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXG4gICAgYm9yZGVyQ29sb3I6ICdyZ2JhKCcgKyBib3JkZXJDb2xvci5yICsgJywgJyArIGJvcmRlckNvbG9yLmcgKyAnLCAnICsgYm9yZGVyQ29sb3IuYiArICcsICcgKyBib3JkZXJDb2xvci5hICsgJyknLFxuICAgIGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aCArICdweCcsXG4gICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICBwb3NpdGlvbjogc2VjdGlvblBvc2l0aW9uLFxuICAgIHdpZHRoOiBjb250YWluZXJXaWR0aCA9PT0gJ2Z1bGwnID8gJzEwMCUnIDogJ2F1dG8nLFxuICAgIHpJbmRleDogKHNlY3Rpb25Qb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyB8fCBzZWN0aW9uUG9zaXRpb24gPT09ICdmaXhlZCcpID8gJzInIDogJzEnLFxuICB9XG5cbiAgY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gICAgbWFyZ2luOiBtYXJnaW4udG9wICsgJ3B4IC0nICsgcGFkZGluZy5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAtJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgbWF4V2lkdGg6IGNvbnRlbnRXaWR0aCA9PT0gJ2NvbnRhaW5lcicgPyAnMTIwMHB4JyA6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiBwYWRkaW5nLnRvcCArICdweCAnICsgcGFkZGluZy5yaWdodCArICdweCAnICsgcGFkZGluZy5ib3R0b20gKyAncHggJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgd2lkdGg6ICcxMjAwcHgnLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2stY29udGVudFwiIHN0eWxlPXsgY29udGFpbmVyU3R5bGUgfT5cbiAgICAgICAgPElubmVyQmxvY2tzLkNvbnRlbnQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=