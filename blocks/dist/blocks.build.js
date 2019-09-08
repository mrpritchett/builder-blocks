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
/* harmony import */ var _blocks_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Nav/Nav */ "./preprocess/scripts/blocks/Nav/Nav.js");
 // import RestaurantMenu from './blocks/RestaurantMenu/RestaurantMenu'
// import MenuItem from './blocks/MenuItem/MenuItem'
// import Testimonials from './blocks/Testimonials'




var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('builder-blocks/section', _blocks_Section_Section__WEBPACK_IMPORTED_MODULE_0__["default"]); // registerBlockType('builder-blocks/restaurantmenu', RestaurantMenu)
// registerBlockType('builder-blocks/menuitem', MenuItem)
// registerBlockType('builder-blocks/testimonials', Testimonials)

registerBlockType('builder-blocks/hero', _blocks_Hero_Hero__WEBPACK_IMPORTED_MODULE_1___default.a);
registerBlockType('builder-blocks/logo', _blocks_Logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"]);
registerBlockType('builder-blocks/nav', _blocks_Nav_Nav__WEBPACK_IMPORTED_MODULE_3__["default"]);

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
        href: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
      }, createElement("img", {
        src: logoImage.media.url,
        alt: logoImage.media.alt
      })) : createElement("div", {
        className: "site-branding"
      }, createElement("h1", {
        className: "site-title"
      }, createElement("a", {
        href: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
      }, logoTitle)), logoDescription && createElement("h2", {
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
    href: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
  }, createElement("img", {
    src: logoImage.media.url,
    alt: logoImage.media.alt
  })) : createElement("div", {
    className: "site-branding"
  }, createElement("h1", {
    className: "site-title"
  }, createElement("a", {
    href: location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '')
  }, logoTitle)), logoDescription && createElement("h2", {
    className: "site-description"
  }, logoDescription)));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Nav/Nav.js":
/*!**********************************************!*\
  !*** ./preprocess/scripts/blocks/Nav/Nav.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./preprocess/scripts/blocks/Nav/edit.js");

var __ = wp.i18n.__;
/* harmony default export */ __webpack_exports__["default"] = ({
  title: __('Nav'),
  description: __('A nav menu block.'),
  category: 'builder-blocks',
  icon: 'excerpt-view',
  attributes: {
    // Universal Attributes
    navMenu: {
      type: 'string',
      "default": ''
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
  save: function save() {
    return null;
  }
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Nav/edit.js":
/*!***********************************************!*\
  !*** ./preprocess/scripts/blocks/Nav/edit.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./preprocess/scripts/blocks/Nav/inspector.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.js */ "./preprocess/scripts/blocks/Nav/editor.js");


var createElement = wp.element.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (block) {
  return React.createElement(React.Fragment, null, createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    block: block
  }), createElement(_editor_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    block: block
  }));
});

/***/ }),

/***/ "./preprocess/scripts/blocks/Nav/editor.js":
/*!*************************************************!*\
  !*** ./preprocess/scripts/blocks/Nav/editor.js ***!
  \*************************************************/
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

  function Editor(props) {
    var _this;

    _classCallCheck(this, Editor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Editor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getMenuItems", function () {
      fetch("http://".concat(window.location.hostname, "/wp-json/builder_blocks/menus/").concat(_this.props.block.attributes.navMenu)).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({
          navItems: data.items
        });
      })["catch"](function (error) {
        return console.error(error);
      });
    });

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
          borderColor = _this$props$block$att.borderColor;
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

      var navItems = _this.state.navItems.map(function (item) {
        return createElement("a", {
          href: item.url
        }, item.title);
      });

      return createElement("div", {
        className: "builder-blocks-nav-block",
        style: style
      }, createElement("nav", null, navItems));
    });

    _this.state = {
      navItems: []
    };

    _this.getMenuItems();

    return _this;
  }

  return Editor;
}(Component);



/***/ }),

/***/ "./preprocess/scripts/blocks/Nav/inspector.js":
/*!****************************************************!*\
  !*** ./preprocess/scripts/blocks/Nav/inspector.js ***!
  \****************************************************/
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

  function Inspector(props) {
    var _this;

    _classCallCheck(this, Inspector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inspector).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getMenus", function () {
      fetch("http://".concat(window.location.hostname, "/wp-json/builder_blocks/menus/")).then(function (response) {
        return response.json();
      }).then(function (data) {
        var navMenus = [];
        data.map(function (dataItem) {
          var object = {
            value: dataItem.term_id,
            label: dataItem.name
          };
          navMenus.unshift(object);
        });

        if ('undefined' === typeof _this.props.block.attributes.navMenu) {
          _this.props.block.setAttributes({
            navMenu: data[0].term_id
          });
        }

        _this.getMenuItems();

        _this.setState({
          navMenus: navMenus
        });
      })["catch"](function (error) {
        return console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuItems", function () {
      fetch("http://".concat(window.location.hostname, "/wp-json/builder_blocks/menus/").concat(_this.props.block.attributes.navMenu)).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.props.block.setAttributes({
          menuItems: data.items
        });
      })["catch"](function (error) {
        return console.error(error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props$block$att = _this.props.block.attributes,
          padding = _this$props$block$att.padding,
          margin = _this$props$block$att.margin,
          backgroundImage = _this$props$block$att.backgroundImage,
          backgroundColor = _this$props$block$att.backgroundColor,
          borderWidth = _this$props$block$att.borderWidth,
          borderStyle = _this$props$block$att.borderStyle,
          borderColor = _this$props$block$att.borderColor,
          navMenu = _this$props$block$att.navMenu;
      return createElement(InspectorControls, null, createElement(PanelBody, {
        title: __('Section Settings')
      }, createElement("div", {
        className: "builder-block-settings-positioning"
      }, createElement(SelectControl, {
        label: __('Select Nav Menu:'),
        value: navMenu,
        onChange: function onChange(value) {
          return _this.props.block.setAttributes({
            navMenu: value
          });
        },
        options: _this.state.navMenus
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

    _this.state = {
      navMenus: []
    };

    _this.getMenus();

    return _this;
  }

  return Inspector;
}(Component);



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
      }, createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9Mb2dvL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL0xvZ28vaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTG9nby9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTmF2L05hdi5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL05hdi9lZGl0LmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvTmF2L2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL05hdi9pbnNwZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2VkaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcHJlcHJvY2Vzcy9zY3JpcHRzL2Jsb2Nrcy9TZWN0aW9uL2VkaXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcmVwcm9jZXNzL3NjcmlwdHMvYmxvY2tzL1NlY3Rpb24vaW5zcGVjdG9yLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc2NyaXB0cy9ibG9ja3MvU2VjdGlvbi9zYXZlLmpzIiwid2VicGFjazovLy8uL3ByZXByb2Nlc3Mvc3R5bGVzL2Jsb2Nrcy5zY3NzIl0sIm5hbWVzIjpbInJlZ2lzdGVyQmxvY2tUeXBlIiwid3AiLCJibG9ja3MiLCJfXyIsImkxOG4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpY29uIiwiYXR0cmlidXRlcyIsImxvZ29UeXBlIiwidHlwZSIsImxvZ29JbWFnZSIsImFsdCIsInVybCIsImlkIiwibG9nb1RpdGxlIiwibG9nb0Rlc2NyaXB0aW9uIiwicGFkZGluZyIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpbiIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciIsInIiLCJnIiwiYiIsImEiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJib3JkZXJXaWR0aCIsImJvcmRlclN0eWxlIiwiYm9yZGVyQ29sb3IiLCJlZGl0Iiwic2F2ZSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50IiwiYmxvY2siLCJDb21wb25lbnQiLCJEaXNhYmxlZCIsImNvbXBvbmVudHMiLCJFZGl0b3IiLCJzdHlsZSIsImxvY2F0aW9uIiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJNZWRpYVVwbG9hZCIsIk1lZGlhVXBsb2FkQ2hlY2siLCJQYW5lbEJvZHkiLCJUZXh0Q29udHJvbCIsIkNvbG9yUGlja2VyIiwiU2VsZWN0Q29udHJvbCIsIkJ1dHRvbiIsIkFMTE9XRURfTUVESUFfVFlQRVMiLCJJbnNwZWN0b3IiLCJ2YWx1ZSIsImxhYmVsIiwibWVkaWEiLCJvcGVuIiwicmdiIiwiSW5uZXJCbG9ja3MiLCJuYXZNZW51IiwiY29udGFpbmVyV2lkdGgiLCJjb250ZW50V2lkdGgiLCJmZXRjaCIsIndpbmRvdyIsInJlc3BvbnNlIiwibmF2SXRlbXMiLCJkYXRhIiwiaXRlbXMiLCJjb25zb2xlIiwiaXRlbSIsIm5hdk1lbnVzIiwib2JqZWN0IiwiZGF0YUl0ZW0iLCJuYW1lIiwidGVybV9pZCIsIm1lbnVJdGVtcyIsInNlY3Rpb25Qb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwid2lkdGgiLCJ6SW5kZXgiLCJjb250YWluZXJTdHlsZSIsIm1heFdpZHRoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTtBQUNBOztBQUNB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Q0FBMUYsSUFORDtBQU9aRixlQUFXLEVBQUVBLFdBQVcsR0FQWjtBQVFaQyxlQUFXLEVBUkM7QUFTWmdELFdBQU8sRUFUSztBQVVaQyxrQkFBYyxFQVZGO0FBV1o1RCxVQUFNLEVBWE07QUFZWjZELFlBQVEsRUFaSTtBQWFaQyxTQUFLLEVBQUVwQixjQUFjLEtBQWRBLGtCQWJLO0FBY1pxQixVQUFNLEVBQUdMLGVBQWUsS0FBZkEsY0FBa0NBLGVBQWUsS0FBbEQsT0FBQ0EsR0FBRCxHQUFDQSxHQUF1RTtBQWRwRSxHQUFkO0FBaUJBLE1BQU1NLGNBQWMsR0FBRztBQUNyQmhFLFVBQU0sRUFBRUEsTUFBTSxDQUFOQSxlQUFzQkwsT0FBTyxDQUE3QkssZ0JBQThDQSxNQUFNLENBQXBEQSxrQkFBdUVMLE9BQU8sQ0FBOUVLLE9BRGE7QUFFckJpRSxZQUFRLEVBQUV0QixZQUFZLEtBQVpBLHlCQUZXO0FBR3JCaEQsV0FBTyxFQUFFQSxPQUFPLENBQVBBLGNBQXNCQSxPQUFPLENBQTdCQSxnQkFBOENBLE9BQU8sQ0FBckRBLGlCQUF1RUEsT0FBTyxDQUE5RUEsT0FIWTtBQUlyQm1FLFNBQUssRUFBRTtBQUpjLEdBQXZCO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBZDtBQUE4QyxTQUFLLEVBQUd4QztBQUF0RCxLQUNFO0FBQUssYUFBUyxFQUFkO0FBQXNELFNBQUssRUFBRzBDO0FBQTlELEtBQ0UsY0FBQyxXQUFELFVBSE4sSUFHTSxDQURGLENBREYsQ0FERjtBQU9ELEM7Ozs7Ozs7Ozs7O0FDckNELHlDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBTZWN0aW9uIGZyb20gJy4vYmxvY2tzL1NlY3Rpb24vU2VjdGlvbidcbi8vIGltcG9ydCBSZXN0YXVyYW50TWVudSBmcm9tICcuL2Jsb2Nrcy9SZXN0YXVyYW50TWVudS9SZXN0YXVyYW50TWVudSdcbi8vIGltcG9ydCBNZW51SXRlbSBmcm9tICcuL2Jsb2Nrcy9NZW51SXRlbS9NZW51SXRlbSdcbi8vIGltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnLi9ibG9ja3MvVGVzdGltb25pYWxzJ1xuaW1wb3J0IEhlcm8gZnJvbSAnLi9ibG9ja3MvSGVyby9IZXJvJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9ibG9ja3MvTG9nby9Mb2dvJ1xuaW1wb3J0IE5hdiBmcm9tICcuL2Jsb2Nrcy9OYXYvTmF2J1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3NcblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3NlY3Rpb24nLCBTZWN0aW9uKVxuLy8gcmVnaXN0ZXJCbG9ja1R5cGUoJ2J1aWxkZXItYmxvY2tzL3Jlc3RhdXJhbnRtZW51JywgUmVzdGF1cmFudE1lbnUpXG4vLyByZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbWVudWl0ZW0nLCBNZW51SXRlbSlcbi8vIHJlZ2lzdGVyQmxvY2tUeXBlKCdidWlsZGVyLWJsb2Nrcy90ZXN0aW1vbmlhbHMnLCBUZXN0aW1vbmlhbHMpXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvaGVybycsIEhlcm8pXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbG9nbycsIExvZ28pXG5yZWdpc3RlckJsb2NrVHlwZSgnYnVpbGRlci1ibG9ja3MvbmF2JywgTmF2KVxuIiwiaW1wb3J0IGVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IHNhdmUgZnJvbSAnLi9zYXZlJ1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IF9fKCdMb2dvJyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQSBibG9jayB0aGF0IGRpc3BsYXlzIHRoZSBzaXRlIHRpdGxlICYgZGVzY3JpcHRpb24gb3IgYW4gaW1hZ2UgbG9nby4nKSxcbiAgY2F0ZWdvcnk6ICdidWlsZGVyLWJsb2NrcycsXG4gIGljb246ICdleGNlcnB0LXZpZXcnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgbG9nb1R5cGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgfSxcbiAgICBsb2dvSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsb2dvVGl0bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ1NpdGUgVGl0bGUnLFxuICAgIH0sXG4gICAgbG9nb0Rlc2NyaXB0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdTaXRlIERlc2NyaXB0aW9uJyxcbiAgICB9LFxuICAgIC8vIFVuaXZlcnNhbCBBdHRyaWJ1dGVzXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgIHRvcDogJzIwJyxcbiAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgIGJvdHRvbTogJzIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJnaW46IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICduby1yZXBlYXQnLFxuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGJvcmRlclN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdzb2xpZCcsXG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZWRpdCxcbiAgc2F2ZVxufVxuIiwiaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL2luc3BlY3RvcidcbmltcG9ydCBFZGl0b3IgZnJvbSAnLi9lZGl0b3IuanMnXG5cbmNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYmxvY2spIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEluc3BlY3RvciBibG9jaz17IGJsb2NrIH0vPlxuICAgICAgPEVkaXRvciBibG9jaz17IGJsb2NrIH0vPlxuICAgIDwvPlxuICApXG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBEaXNhYmxlZCB9ID0gd3AuY29tcG9uZW50c1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBwYWRkaW5nLCBtYXJnaW4sIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kU2l6ZSwgYmFja2dyb3VuZFBvc2l0aW9uLCBiYWNrZ3JvdW5kUmVwZWF0LCBib3JkZXJXaWR0aCwgYm9yZGVyU3R5bGUsIGJvcmRlckNvbG9yLCBsb2dvVHlwZSwgbG9nb0ltYWdlLCBsb2dvVGl0bGUsIGxvZ29EZXNjcmlwdGlvbiB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoJyArIGJhY2tncm91bmRDb2xvci5yICsgJywgJyArIGJhY2tncm91bmRDb2xvci5nICsgJywgJyArIGJhY2tncm91bmRDb2xvci5iICsgJywgJyArIGJhY2tncm91bmRDb2xvci5hICsgJyknLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kSW1hZ2UudXJsID8gJ3VybCgnICsgYmFja2dyb3VuZEltYWdlLnVybCArICcpJyA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uID8gYmFja2dyb3VuZFBvc2l0aW9uIDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYmFja2dyb3VuZFJlcGVhdCA/IGJhY2tncm91bmRSZXBlYXQgOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUgPyBiYWNrZ3JvdW5kU2l6ZSA6ICdpbmhlcml0JyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgnICsgYm9yZGVyQ29sb3IuciArICcsICcgKyBib3JkZXJDb2xvci5nICsgJywgJyArIGJvcmRlckNvbG9yLmIgKyAnLCAnICsgYm9yZGVyQ29sb3IuYSArICcpJyxcbiAgICAgIGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICBtYXJnaW46IG1hcmdpbi50b3AgKyAncHggJyArIG1hcmdpbi5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAnICsgbWFyZ2luLmxlZnQgKyAncHgnLFxuICAgICAgcGFkZGluZzogcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4ICcgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RGlzYWJsZWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3MtbG9nby1ibG9ja1wiIHN0eWxlPXsgc3R5bGUgfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2dvVHlwZSA9PT0gJ2ltYWdlJ1xuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJzaXRlLWJyYW5kaW5nXCIgaHJlZj17IGxvY2F0aW9uLnByb3RvY29sKycvLycrbG9jYXRpb24uaG9zdG5hbWUrKGxvY2F0aW9uLnBvcnQgPyAnOicrbG9jYXRpb24ucG9ydDogJycpIH0+PGltZyBzcmM9eyBsb2dvSW1hZ2UubWVkaWEudXJsIH0gYWx0PXsgbG9nb0ltYWdlLm1lZGlhLmFsdCB9IC8+PC9hPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1icmFuZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpdGUtdGl0bGVcIj48YSBocmVmPXsgbG9jYXRpb24ucHJvdG9jb2wrJy8vJytsb2NhdGlvbi5ob3N0bmFtZSsobG9jYXRpb24ucG9ydCA/ICc6Jytsb2NhdGlvbi5wb3J0OiAnJykgfT57IGxvZ29UaXRsZSB9PC9hPjwvaDE+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ29EZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInNpdGUtZGVzY3JpcHRpb25cIj57IGxvZ29EZXNjcmlwdGlvbiB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlzYWJsZWQ+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgbG9nb1R5cGUsIGxvZ29UaXRsZSwgbG9nb0Rlc2NyaXB0aW9uLCBsb2dvSW1hZ2UgfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnTG9nbyBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXsgX18oICdTZWxlY3QgbG9nbyB0eXBlOicgKSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgbG9nb1R5cGUgfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbG9nb1R5cGU6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICdUZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ltYWdlJywgbGFiZWw6ICdJbWFnZScgfSxcbiAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvZ29UeXBlID09PSAnaW1hZ2UnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoND57IF9fKCdMb2dvIEltYWdlJykgfTwvaDQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1sb2dvLWltYWdlLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgbG9nb0ltYWdlLnVybCB9IGFsdD17IGxvZ29JbWFnZS5hbHQgfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGxvZ29JbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5sb2dvSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lZGlhLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbG9nb0ltYWdlLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBfXygnT3BlbiBNZWRpYSBMaWJyYXJ5JyApIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaXRlIFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBsb2dvVGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IChsb2dvVGl0bGUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGxvZ29UaXRsZSB9KSB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNpdGUgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGxvZ29EZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKGxvZ29EZXNjcmlwdGlvbikgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbG9nb0Rlc2NyaXB0aW9uIH0pIH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3R5bGUgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5CYWNrZ3JvdW5kPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYmFja2dyb3VuZC13cmFwXCI+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYmFja2dyb3VuZENvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXsgYmFja2dyb3VuZEltYWdlLnVybCB9IGFsdD17IGJhY2tncm91bmRJbWFnZS5hbHQgfSBoZWlnaHQ9XCIxMDBcIiB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgIDxNZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyAobWVkaWEpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRJbWFnZToge1xuICAgICAgICAgICAgICAgICAgICAuLi5iYWNrZ3JvdW5kSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIGFsdDogbWVkaWEuYWx0LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IG1lZGlhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgaWQ6IG1lZGlhLmlkLFxuICAgICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgICAgICBhbGxvd2VkVHlwZXM9eyBBTExPV0VEX01FRElBX1RZUEVTIH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXsgYmFja2dyb3VuZEltYWdlLmlkIH1cbiAgICAgICAgICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eyBvcGVuIH0+XG4gICAgICAgICAgICAgICAgICAgICAgT3BlbiBNZWRpYSBMaWJyYXJ5XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9NZWRpYVVwbG9hZENoZWNrPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+Qm9yZGVyPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU2l6ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJXaWR0aCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlcldpZHRoOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3JkZXIgU3R5bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyU3R5bGUgfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBbXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnU29saWQnLCB2YWx1ZTogJ3NvbGlkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0hpZGRlbicsIHZhbHVlOiAnaGlkZGVuJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0Rhc2hlZCcsIHZhbHVlOiAnZGFzaGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdHRlZCcsIHZhbHVlOiAnZG90dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0RvdWJsZScsIHZhbHVlOiAnZG91YmxlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0dyb292ZScsIHZhbHVlOiAnZ3Jvb3ZlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1JpZGdlJywgdmFsdWU6ICdyaWRnZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdJbnNldCcsIHZhbHVlOiAnaW5zZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnT3V0c2V0JywgdmFsdWU6ICdvdXRzZXQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcbiAgICAgICAgICAgICAgICBdIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyU3R5bGU6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBib3JkZXJDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyQ29sb3I6IHZhbHVlLnJnYiB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU3BhY2luZyBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+TWFyZ2luPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4udG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICByaWdodDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3R0b21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PlBhZGRpbmc8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1wYWRkaW5nLXdyYXBcIj5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcuYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJMZWZ0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICApXG4gIH1cbn1cbiIsImNvbnN0IHsgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBJbm5lckJsb2NrcyB9ID0gd3AuZWRpdG9yXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRTaXplLCBiYWNrZ3JvdW5kUG9zaXRpb24sIGJhY2tncm91bmRSZXBlYXQsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIGxvZ29UeXBlLCBsb2dvSW1hZ2UsIGxvZ29UaXRsZSwgbG9nb0Rlc2NyaXB0aW9uIH0gPSBibG9jay5hdHRyaWJ1dGVzXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQsXG4gICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxuICAgIGJvcmRlckNvbG9yOiAncmdiYSgnICsgYm9yZGVyQ29sb3IuciArICcsICcgKyBib3JkZXJDb2xvci5nICsgJywgJyArIGJvcmRlckNvbG9yLmIgKyAnLCAnICsgYm9yZGVyQ29sb3IuYSArICcpJyxcbiAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICBtYXJnaW46IG1hcmdpbi50b3AgKyAncHggJyArIG1hcmdpbi5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAnICsgbWFyZ2luLmxlZnQgKyAncHgnLFxuICAgIHBhZGRpbmc6IHBhZGRpbmcudG9wICsgJ3B4ICcgKyBwYWRkaW5nLnJpZ2h0ICsgJ3B4ICcgKyBwYWRkaW5nLmJvdHRvbSArICdweCAnICsgcGFkZGluZy5sZWZ0ICsgJ3B4JyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1sb2dvLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAge1xuICAgICAgICBsb2dvVHlwZSA9PT0gJ2ltYWdlJ1xuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwic2l0ZS1icmFuZGluZ1wiIGhyZWY9eyBsb2NhdGlvbi5wcm90b2NvbCsnLy8nK2xvY2F0aW9uLmhvc3RuYW1lKyhsb2NhdGlvbi5wb3J0ID8gJzonK2xvY2F0aW9uLnBvcnQ6ICcnKSB9PjxpbWcgc3JjPXsgbG9nb0ltYWdlLm1lZGlhLnVybCB9IGFsdD17IGxvZ29JbWFnZS5tZWRpYS5hbHQgfSAvPjwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLWJyYW5kaW5nXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaXRlLXRpdGxlXCI+PGEgaHJlZj17IGxvY2F0aW9uLnByb3RvY29sKycvLycrbG9jYXRpb24uaG9zdG5hbWUrKGxvY2F0aW9uLnBvcnQgPyAnOicrbG9jYXRpb24ucG9ydDogJycpIH0+eyBsb2dvVGl0bGUgfTwvYT48L2gxPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9nb0Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzaXRlLWRlc2NyaXB0aW9uXCI+eyBsb2dvRGVzY3JpcHRpb24gfTwvaDI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBlZGl0IGZyb20gJy4vZWRpdCdcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiBfXygnTmF2JyksXG4gIGRlc2NyaXB0aW9uOiBfXygnQSBuYXYgbWVudSBibG9jay4nKSxcbiAgY2F0ZWdvcnk6ICdidWlsZGVyLWJsb2NrcycsXG4gIGljb246ICdleGNlcnB0LXZpZXcnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgLy8gVW5pdmVyc2FsIEF0dHJpYnV0ZXNcbiAgICBuYXZNZW51OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICcnLFxuICAgIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgIHRvcDogJzIwJyxcbiAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgIGJvdHRvbTogJzIwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBtYXJnaW46IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICByaWdodDogJzAnLFxuICAgICAgICBib3R0b206ICcwJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBhbHQ6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBpZDogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByOiAyNTUsXG4gICAgICAgIGc6IDI1NSxcbiAgICAgICAgYjogMjU1LFxuICAgICAgICBhOiAxLjAsXG4gICAgICB9LFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFNpemU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2F1dG8nLFxuICAgIH0sXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgbGVmdCcsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICduby1yZXBlYXQnLFxuICAgIH0sXG4gICAgYm9yZGVyV2lkdGg6IHtcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICB9LFxuICAgIGJvcmRlclN0eWxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdzb2xpZCcsXG4gICAgfSxcbiAgICBib3JkZXJDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb250YWluZXJXaWR0aDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnZnVsbCcsXG4gICAgfSxcbiAgICBjb250ZW50V2lkdGg6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ2NvbnRhaW5lcicsXG4gICAgfSxcbiAgfSxcbiAgZWRpdCxcbiAgc2F2ZTogKCkgPT4ge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsImltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3InXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vZWRpdG9yLmpzJ1xuXG5jb25zdCB7IGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbnNwZWN0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICAgIDxFZGl0b3IgYmxvY2s9eyBibG9jayB9Lz5cbiAgICA8Lz5cbiAgKVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgSW5uZXJCbG9ja3MgfSA9IHdwLmVkaXRvclxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYXZJdGVtczogW11cbiAgICB9XG5cbiAgICB0aGlzLmdldE1lbnVJdGVtcygpXG4gIH1cblxuICBnZXRNZW51SXRlbXMgPSAoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHA6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX0vd3AtanNvbi9idWlsZGVyX2Jsb2Nrcy9tZW51cy8ke3RoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlcy5uYXZNZW51fWApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hdkl0ZW1zOiBkYXRhLml0ZW1zIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICB9XG5cbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG5cbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoJyArIGJhY2tncm91bmRDb2xvci5yICsgJywgJyArIGJhY2tncm91bmRDb2xvci5nICsgJywgJyArIGJhY2tncm91bmRDb2xvci5iICsgJywgJyArIGJhY2tncm91bmRDb2xvci5hICsgJyknLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kSW1hZ2UudXJsID8gJ3VybCgnICsgYmFja2dyb3VuZEltYWdlLnVybCArICcpJyA6ICdpbmhlcml0JyxcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uID8gYmFja2dyb3VuZFBvc2l0aW9uIDogJ2luaGVyaXQnLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogYmFja2dyb3VuZFJlcGVhdCA/IGJhY2tncm91bmRSZXBlYXQgOiAnaW5oZXJpdCcsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUgPyBiYWNrZ3JvdW5kU2l6ZSA6ICdpbmhlcml0JyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgnICsgYm9yZGVyQ29sb3IuciArICcsICcgKyBib3JkZXJDb2xvci5nICsgJywgJyArIGJvcmRlckNvbG9yLmIgKyAnLCAnICsgYm9yZGVyQ29sb3IuYSArICcpJyxcbiAgICAgIGJvcmRlcldpZHRoOiBib3JkZXJXaWR0aCArICdweCcsXG4gICAgICBib3JkZXJTdHlsZTogYm9yZGVyU3R5bGUsXG4gICAgICBtYXJnaW46IG1hcmdpbi50b3AgKyAncHggJyArIG1hcmdpbi5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAnICsgbWFyZ2luLmxlZnQgKyAncHgnLFxuICAgICAgcGFkZGluZzogcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4ICcgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgIH1cblxuICAgIGNvbnN0IG5hdkl0ZW1zID0gdGhpcy5zdGF0ZS5uYXZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9eyBpdGVtLnVybCB9PnsgaXRlbS50aXRsZSB9PC9hPlxuICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1uYXYtYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgeyBuYXZJdGVtcyB9XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJjb25zdCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCB9ID0gd3AuZWxlbWVudFxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scywgTWVkaWFVcGxvYWQsIE1lZGlhVXBsb2FkQ2hlY2sgfSA9IHdwLmVkaXRvclxuY29uc3QgeyBQYW5lbEJvZHksIFRleHRDb250cm9sLCBDb2xvclBpY2tlciwgU2VsZWN0Q29udHJvbCwgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnaW1hZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zcGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmF2TWVudXM6IFtdXG4gICAgfVxuXG4gICAgdGhpcy5nZXRNZW51cygpXG4gIH1cblxuICBnZXRNZW51cyA9ICgpID0+IHtcbiAgICBmZXRjaChgaHR0cDovLyR7d2luZG93LmxvY2F0aW9uLmhvc3RuYW1lfS93cC1qc29uL2J1aWxkZXJfYmxvY2tzL21lbnVzL2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgbGV0IG5hdk1lbnVzID0gW11cbiAgICAgICAgZGF0YS5tYXAoZGF0YUl0ZW0gPT4ge1xuICAgICAgICAgIGxldCBvYmplY3QgPSB7XG4gICAgICAgICAgICB2YWx1ZTogZGF0YUl0ZW0udGVybV9pZCxcbiAgICAgICAgICAgIGxhYmVsOiBkYXRhSXRlbS5uYW1lLFxuICAgICAgICAgIH1cbiAgICAgICAgICBuYXZNZW51cy51bnNoaWZ0KG9iamVjdClcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXMubmF2TWVudSkge1xuICAgICAgICAgIHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG5hdk1lbnU6IGRhdGFbMF0udGVybV9pZCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRNZW51SXRlbXMoKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmF2TWVudXM6IG5hdk1lbnVzIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxuICB9XG5cbiAgZ2V0TWVudUl0ZW1zID0gKCkgPT4ge1xuICAgIGZldGNoKGBodHRwOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9L3dwLWpzb24vYnVpbGRlcl9ibG9ja3MvbWVudXMvJHt0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXMubmF2TWVudX1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1lbnVJdGVtczogZGF0YS5pdGVtcyB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbiAgfVxuXG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIG5hdk1lbnUgfSA9IHRoaXMucHJvcHMuYmxvY2suYXR0cmlidXRlc1xuICAgIHJldHVybiAoXG4gICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9eyBfXygnU2VjdGlvbiBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2NrLXNldHRpbmdzLXBvc2l0aW9uaW5nXCI+XG4gICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICBsYWJlbD17IF9fKCAnU2VsZWN0IE5hdiBNZW51OicgKSB9XG4gICAgICAgICAgICAgIHZhbHVlPXsgbmF2TWVudSB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBuYXZNZW51OiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIG9wdGlvbnM9eyB0aGlzLnN0YXRlLm5hdk1lbnVzIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1N0eWxlIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+QmFja2dyb3VuZDwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJhY2tncm91bmQtd3JhcFwiPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJhY2tncm91bmRDb2xvciB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VDb21wbGV0ZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZENvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17IGJhY2tncm91bmRJbWFnZS51cmwgfSBhbHQ9eyBiYWNrZ3JvdW5kSW1hZ2UuYWx0IH0gaGVpZ2h0PVwiMTAwXCIgd2lkdGg9XCIxMDBcIiAvPlxuICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgKG1lZGlhKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBiYWNrZ3JvdW5kSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uYmFja2dyb3VuZEltYWdlLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IG1lZGlhLmFsdCxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBtZWRpYS51cmwsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtZWRpYS5pZCxcbiAgICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAgICAgYWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17IGJhY2tncm91bmRJbWFnZS5pZCB9XG4gICAgICAgICAgICAgICAgICByZW5kZXI9eyAoeyBvcGVuIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgb3BlbiB9PlxuICAgICAgICAgICAgICAgICAgICAgIE9wZW4gTWVkaWEgTGlicmFyeVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTWVkaWFVcGxvYWRDaGVjaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtYm9yZGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJvcmRlcjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFNpemVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgYm9yZGVyV2lkdGggfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJXaWR0aDogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm9yZGVyIFN0eWxlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlclN0eWxlIH1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXsgW1xuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ1NvbGlkJywgdmFsdWU6ICdzb2xpZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdIaWRkZW4nLCB2YWx1ZTogJ2hpZGRlbicgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEYXNoZWQnLCB2YWx1ZTogJ2Rhc2hlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3R0ZWQnLCB2YWx1ZTogJ2RvdHRlZCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdEb3VibGUnLCB2YWx1ZTogJ2RvdWJsZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdHcm9vdmUnLCB2YWx1ZTogJ2dyb292ZScgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdSaWRnZScsIHZhbHVlOiAncmlkZ2UnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSW5zZXQnLCB2YWx1ZTogJ2luc2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ091dHNldCcsIHZhbHVlOiAnb3V0c2V0JyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXG4gICAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlclN0eWxlOiB2YWx1ZSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxuICAgICAgICAgICAgICAgIGNvbG9yPXsgYm9yZGVyQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJvcmRlckNvbG9yOiB2YWx1ZS5yZ2IgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICA8UGFuZWxCb2R5IHRpdGxlPXsgX18oJ1NwYWNpbmcgU2V0dGluZ3MnKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtbWFyZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0Pk1hcmdpbjwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ubGVmdCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUb3BcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLnRvcCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5yaWdodCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IG1hcmdpbjoge1xuICAgICAgICAgICAgICAgICAgLi4ubWFyZ2luLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQm90dG9tXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi5ib3R0b20gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5QYWRkaW5nPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2V0dGluZ3MtcGFkZGluZy13cmFwXCI+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmcudG9wIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnJpZ2h0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmJvdHRvbSB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTGVmdFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgbGVmdDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgZWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgc2F2ZSBmcm9tICcuL3NhdmUnXG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogX18oJ1NlY3Rpb24nKSxcbiAgZGVzY3JpcHRpb246IF9fKCdBIHdyYXBwZXIgYmxvY2sgZm9yIHJvd3MuJyksXG4gIGNhdGVnb3J5OiAnYnVpbGRlci1ibG9ja3MnLFxuICBpY29uOiAnZXhjZXJwdC12aWV3JyxcbiAgYXR0cmlidXRlczoge1xuICAgIC8vIFVuaXZlcnNhbCBBdHRyaWJ1dGVzXG4gICAgc2VjdGlvblBvc2l0aW9uOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdyZWxhdGl2ZScsXG4gICAgfSxcbiAgICBwYWRkaW5nOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgdG9wOiAnMjAnLFxuICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgYm90dG9tOiAnMjAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG1hcmdpbjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGxlZnQ6ICcwJyxcbiAgICAgICAgdG9wOiAnMCcsXG4gICAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICAgIGJvdHRvbTogJzAnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRJbWFnZToge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGFsdDogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIGlkOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHI6IDI1NSxcbiAgICAgICAgZzogMjU1LFxuICAgICAgICBiOiAyNTUsXG4gICAgICAgIGE6IDEuMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kU2l6ZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3RvcCBsZWZ0JyxcbiAgICB9LFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ25vLXJlcGVhdCcsXG4gICAgfSxcbiAgICBib3JkZXJXaWR0aDoge1xuICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICBkZWZhdWx0OiAwLFxuICAgIH0sXG4gICAgYm9yZGVyU3R5bGU6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgZGVmYXVsdDogJ3NvbGlkJyxcbiAgICB9LFxuICAgIGJvcmRlckNvbG9yOiB7XG4gICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcjogMjU1LFxuICAgICAgICBnOiAyNTUsXG4gICAgICAgIGI6IDI1NSxcbiAgICAgICAgYTogMS4wLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvbnRhaW5lcldpZHRoOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIGRlZmF1bHQ6ICdmdWxsJyxcbiAgICB9LFxuICAgIGNvbnRlbnRXaWR0aDoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBkZWZhdWx0OiAnY29udGFpbmVyJyxcbiAgICB9LFxuICB9LFxuICBlZGl0LFxuICBzYXZlXG59XG4iLCJpbXBvcnQgSW5zcGVjdG9yIGZyb20gJy4vaW5zcGVjdG9yJ1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL2VkaXRvci5qcydcblxuY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChibG9jaykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5zcGVjdG9yIGJsb2NrPXsgYmxvY2sgfS8+XG4gICAgICA8RWRpdG9yIGJsb2NrPXsgYmxvY2sgfS8+XG4gICAgPC8+XG4gIClcbn1cbiIsImNvbnN0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5lZGl0b3JcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgY29udGVudFdpZHRoLCBjb250YWluZXJXaWR0aCwgc2VjdGlvblBvc2l0aW9uIH0gPSB0aGlzLnByb3BzLmJsb2NrLmF0dHJpYnV0ZXNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGJhY2tncm91bmRJbWFnZS51cmwgKyAnKScsXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQsXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemUsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYmEoJyArIGJvcmRlckNvbG9yLnIgKyAnLCAnICsgYm9yZGVyQ29sb3IuZyArICcsICcgKyBib3JkZXJDb2xvci5iICsgJywgJyArIGJvcmRlckNvbG9yLmEgKyAnKScsXG4gICAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgICAgYm9yZGVyU3R5bGU6IGJvcmRlclN0eWxlLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiBzZWN0aW9uUG9zaXRpb24sXG4gICAgICB3aWR0aDogY29udGFpbmVyV2lkdGggPT09ICdmdWxsJyA/ICcxMDAlJyA6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogKHNlY3Rpb25Qb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyB8fCBzZWN0aW9uUG9zaXRpb24gPT09ICdmaXhlZCcpID8gJzInIDogJzEnLFxuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgICAgbWFyZ2luOiBtYXJnaW4udG9wICsgJ3B4IC0nICsgcGFkZGluZy5yaWdodCArICdweCAnICsgbWFyZ2luLmJvdHRvbSArICdweCAtJyArIHBhZGRpbmcubGVmdCArICdweCcsXG4gICAgICBtYXhXaWR0aDogY29udGVudFdpZHRoID09PSAnY29udGFpbmVyJyA/ICcxMjAwcHgnIDogJzEwMCUnLFxuICAgICAgcGFkZGluZzogcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4ICcgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgICAgd2lkdGg6ICcxMjAwcHgnLFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNlY3Rpb24tYmxvY2tcIiBzdHlsZT17IHN0eWxlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnVpbGRlci1ibG9ja3Mtc2VjdGlvbi1ibG9jay1jb250ZW50XCIgc3R5bGU9eyBjb250YWluZXJTdHlsZSB9PlxuICAgICAgICAgIDxJbm5lckJsb2NrcyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSA9IHdwLmVsZW1lbnRcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMsIE1lZGlhVXBsb2FkLCBNZWRpYVVwbG9hZENoZWNrIH0gPSB3cC5lZGl0b3JcbmNvbnN0IHsgUGFuZWxCb2R5LCBUZXh0Q29udHJvbCwgQ29sb3JQaWNrZXIsIFNlbGVjdENvbnRyb2wsIEJ1dHRvbiB9ID0gd3AuY29tcG9uZW50c1xuY29uc3QgQUxMT1dFRF9NRURJQV9UWVBFUyA9IFsgJ2ltYWdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCB7IHBhZGRpbmcsIG1hcmdpbiwgYmFja2dyb3VuZEltYWdlLCBiYWNrZ3JvdW5kQ29sb3IsIGJvcmRlcldpZHRoLCBib3JkZXJTdHlsZSwgYm9yZGVyQ29sb3IsIHNlY3Rpb25Qb3NpdGlvbiB9ID0gdGhpcy5wcm9wcy5ibG9jay5hdHRyaWJ1dGVzXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTZWN0aW9uIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2stc2V0dGluZ3MtcG9zaXRpb25pbmdcIj5cbiAgICAgICAgICAgIDxTZWxlY3RDb250cm9sXG4gICAgICAgICAgICAgIGxhYmVsPXsgX18oICdTZWxlY3QgU2VjdGlvbiBQb3NpdGlvbmluZzonICkgfVxuICAgICAgICAgICAgICB2YWx1ZT17IHNlY3Rpb25Qb3NpdGlvbiB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBzZWN0aW9uUG9zaXRpb246IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgdmFsdWU6ICdyZWxhdGl2ZScsIGxhYmVsOiAnUmVsYXRpdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IHZhbHVlOiAnYWJzb2x1dGUnLCBsYWJlbDogJ0Fic29sdXRlJyB9LFxuICAgICAgICAgICAgICAgICAgeyB2YWx1ZTogJ2ZpeGVkJywgbGFiZWw6ICdGaXhlZCcgfSxcbiAgICAgICAgICAgICAgXSB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTdHlsZSBTZXR0aW5ncycpIH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGg0PkJhY2tncm91bmQ8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1iYWNrZ3JvdW5kLXdyYXBcIj5cbiAgICAgICAgICAgICAgPENvbG9yUGlja2VyXG4gICAgICAgICAgICAgICAgY29sb3I9eyBiYWNrZ3JvdW5kQ29sb3IgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlQ29tcGxldGU9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IGJhY2tncm91bmRDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9eyBiYWNrZ3JvdW5kSW1hZ2UudXJsIH0gYWx0PXsgYmFja2dyb3VuZEltYWdlLmFsdCB9IGhlaWdodD1cIjEwMFwiIHdpZHRoPVwiMTAwXCIgLz5cbiAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17IChtZWRpYSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYmFja2dyb3VuZEltYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmJhY2tncm91bmRJbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWx0OiBtZWRpYS5hbHQsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbWVkaWEudXJsLFxuICAgICAgICAgICAgICAgICAgICBpZDogbWVkaWEuaWQsXG4gICAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgICAgIGFsbG93ZWRUeXBlcz17IEFMTE9XRURfTUVESUFfVFlQRVMgfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9eyBiYWNrZ3JvdW5kSW1hZ2UuaWQgfVxuICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17IG9wZW4gfT5cbiAgICAgICAgICAgICAgICAgICAgICBPcGVuIE1lZGlhIExpYnJhcnlcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L01lZGlhVXBsb2FkQ2hlY2s+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLWJvcmRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5Cb3JkZXI8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1ib3JkZXItd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTaXplXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IGJvcmRlcldpZHRoIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgYm9yZGVyV2lkdGg6IHZhbHVlIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvcmRlciBTdHlsZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBib3JkZXJTdHlsZSB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17IFtcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdTb2xpZCcsIHZhbHVlOiAnc29saWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnSGlkZGVuJywgdmFsdWU6ICdoaWRkZW4nIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRGFzaGVkJywgdmFsdWU6ICdkYXNoZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG90dGVkJywgdmFsdWU6ICdkb3R0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnRG91YmxlJywgdmFsdWU6ICdkb3VibGUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnR3Jvb3ZlJywgdmFsdWU6ICdncm9vdmUnIH0sXG4gICAgICAgICAgICAgICAgICB7IGxhYmVsOiAnUmlkZ2UnLCB2YWx1ZTogJ3JpZGdlJyB9LFxuICAgICAgICAgICAgICAgICAgeyBsYWJlbDogJ0luc2V0JywgdmFsdWU6ICdpbnNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdPdXRzZXQnLCB2YWx1ZTogJ291dHNldCcgfSxcbiAgICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxuICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJTdHlsZTogdmFsdWUgfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcbiAgICAgICAgICAgICAgICBjb2xvcj17IGJvcmRlckNvbG9yIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbXBsZXRlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBib3JkZXJDb2xvcjogdmFsdWUucmdiIH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgPFBhbmVsQm9keSB0aXRsZT17IF9fKCdTcGFjaW5nIFNldHRpbmdzJykgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLW1hcmdpbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoND5NYXJnaW48L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZXR0aW5ncy1tYXJnaW4td3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luLmxlZnQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVG9wXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbi50b3AgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHRvcDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSaWdodFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4ucmlnaHQgfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBtYXJnaW46IHtcbiAgICAgICAgICAgICAgICAgIC4uLm1hcmdpbixcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkJvdHRvbVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW4uYm90dG9tIH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgICAuLi5tYXJnaW4sXG4gICAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDQ+UGFkZGluZzwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1aWxkZXItYmxvY2tzLXNldHRpbmdzLXBhZGRpbmctd3JhcFwiPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRvcFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nLnRvcCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICB0b3A6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmlnaHRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5yaWdodCB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyAodmFsdWUpID0+IHRoaXMucHJvcHMuYmxvY2suc2V0QXR0cmlidXRlcyh7IHBhZGRpbmc6IHtcbiAgICAgICAgICAgICAgICAgIC4uLnBhZGRpbmcsXG4gICAgICAgICAgICAgICAgICByaWdodDogdmFsdWVcbiAgICAgICAgICAgICAgICB9IH0pIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJCb3R0b21cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5ib3R0b20gfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKHZhbHVlKSA9PiB0aGlzLnByb3BzLmJsb2NrLnNldEF0dHJpYnV0ZXMoeyBwYWRkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAuLi5wYWRkaW5nLFxuICAgICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gfSkgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkxlZnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZy5sZWZ0IH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICh2YWx1ZSkgPT4gdGhpcy5wcm9wcy5ibG9jay5zZXRBdHRyaWJ1dGVzKHsgcGFkZGluZzoge1xuICAgICAgICAgICAgICAgICAgLi4ucGFkZGluZyxcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlXG4gICAgICAgICAgICAgICAgfSB9KSB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgIClcbiAgfVxufVxuIiwiY29uc3QgeyBjcmVhdGVFbGVtZW50IH0gPSB3cC5lbGVtZW50XG5jb25zdCB7IElubmVyQmxvY2tzIH0gPSB3cC5lZGl0b3JcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGJsb2NrKSB7XG4gIGNvbnN0IHsgcGFkZGluZywgbWFyZ2luLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZFNpemUsIGJhY2tncm91bmRQb3NpdGlvbiwgYmFja2dyb3VuZFJlcGVhdCwgYm9yZGVyV2lkdGgsIGJvcmRlclN0eWxlLCBib3JkZXJDb2xvciwgY29udGFpbmVyV2lkdGgsIGNvbnRlbnRXaWR0aCwgc2VjdGlvblBvc2l0aW9uIH0gPSBibG9jay5hdHRyaWJ1dGVzXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgnICsgYmFja2dyb3VuZENvbG9yLnIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmcgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmIgKyAnLCAnICsgYmFja2dyb3VuZENvbG9yLmEgKyAnKScsXG4gICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBiYWNrZ3JvdW5kSW1hZ2UudXJsICsgJyknLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogYmFja2dyb3VuZFBvc2l0aW9uLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IGJhY2tncm91bmRSZXBlYXQsXG4gICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplLFxuICAgIGJvcmRlckNvbG9yOiAncmdiYSgnICsgYm9yZGVyQ29sb3IuciArICcsICcgKyBib3JkZXJDb2xvci5nICsgJywgJyArIGJvcmRlckNvbG9yLmIgKyAnLCAnICsgYm9yZGVyQ29sb3IuYSArICcpJyxcbiAgICBib3JkZXJXaWR0aDogYm9yZGVyV2lkdGggKyAncHgnLFxuICAgIGJvcmRlclN0eWxlOiBib3JkZXJTdHlsZSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcG9zaXRpb246IHNlY3Rpb25Qb3NpdGlvbixcbiAgICB3aWR0aDogY29udGFpbmVyV2lkdGggPT09ICdmdWxsJyA/ICcxMDAlJyA6ICdhdXRvJyxcbiAgICB6SW5kZXg6IChzZWN0aW9uUG9zaXRpb24gPT09ICdhYnNvbHV0ZScgfHwgc2VjdGlvblBvc2l0aW9uID09PSAnZml4ZWQnKSA/ICcyJyA6ICcxJyxcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIG1hcmdpbjogbWFyZ2luLnRvcCArICdweCAtJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIG1hcmdpbi5ib3R0b20gKyAncHggLScgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgIG1heFdpZHRoOiBjb250ZW50V2lkdGggPT09ICdjb250YWluZXInID8gJzEyMDBweCcgOiAnMTAwJScsXG4gICAgcGFkZGluZzogcGFkZGluZy50b3AgKyAncHggJyArIHBhZGRpbmcucmlnaHQgKyAncHggJyArIHBhZGRpbmcuYm90dG9tICsgJ3B4ICcgKyBwYWRkaW5nLmxlZnQgKyAncHgnLFxuICAgIHdpZHRoOiAnMTIwMHB4JyxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrXCIgc3R5bGU9eyBzdHlsZSB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWlsZGVyLWJsb2Nrcy1zZWN0aW9uLWJsb2NrLWNvbnRlbnRcIiBzdHlsZT17IGNvbnRhaW5lclN0eWxlIH0+XG4gICAgICAgIDxJbm5lckJsb2Nrcy5Db250ZW50IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9