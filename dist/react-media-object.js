(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactMediaObject = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsStyleResolver = require('./utils/styleResolver');

var _utilsStyleResolver2 = _interopRequireDefault(_utilsStyleResolver);

var styles = {
  display: 'table-cell',
  verticalAlign: 'top',
  width: '10000px !important'
};

var Bd = function Bd(props) {
  return _react2['default'].createElement('div', _extends({}, props, { style: (0, _utilsStyleResolver2['default'])(styles, props) }));
};

Bd.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object
};

exports['default'] = Bd;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils/styleResolver":6}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsStyleResolverJs = require('./utils/styleResolver.js');

var _utilsStyleResolverJs2 = _interopRequireDefault(_utilsStyleResolverJs);

var styles = {
  standard: {
    float: 'left',
    marginRight: 10
  },
  reverse: {
    float: 'right',
    marginLeft: 10
  }
};

function baseStyle(context) {
  return context.reverse ? styles.reverse : styles.standard;
}

var Img = function Img(props, context) {
  return _react2['default'].createElement('a', _extends({}, props, { style: (0, _utilsStyleResolverJs2['default'])(baseStyle(context), props, context) }));
};

Img.propTypes = {
  children: _react.PropTypes.node.isRequired,
  href: _react.PropTypes.string,
  style: _react.PropTypes.object
};

Img.contextTypes = {
  reverse: _react.PropTypes.bool
};

exports['default'] = Img;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils/styleResolver.js":6}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsStyleResolver = require('./utils/styleResolver');

var _utilsStyleResolver2 = _interopRequireDefault(_utilsStyleResolver);

var styles = { display: 'block' };

var ImgExt = function ImgExt(props) {
  return _react2['default'].createElement('img', _extends({}, props, { style: (0, _utilsStyleResolver2['default'])(styles, props) }));
};

ImgExt.propTypes = {
  alt: _react.PropTypes.string.isRequired,
  src: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

exports['default'] = ImgExt;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils/styleResolver":6}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _utilsStyleResolverJs = require('./utils/styleResolver.js');

var _utilsStyleResolverJs2 = _interopRequireDefault(_utilsStyleResolverJs);

var clearfixStyles = {
  ':before': {
    display: 'table'
  },
  ':after': {
    display: 'table',
    clear: 'both'
  }
};

var styles = null;

var Media = (function (_Component) {
  _inherits(Media, _Component);

  function Media() {
    _classCallCheck(this, Media);

    _get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Media, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { reverse: this.props.reverse };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { style: (0, _utilsStyleResolverJs2['default'])(styles, this.props) }),
        _react2['default'].createElement('div', { style: clearfixStyles[':before'] }),
        this.props.children,
        _react2['default'].createElement('div', { style: clearfixStyles[':after'] })
      );
    }
  }]);

  return Media;
})(_react.Component);

exports['default'] = Media;

Media.propTypes = {
  children: _react.PropTypes.node.isRequired,
  reverse: _react.PropTypes.bool,
  style: _react.PropTypes.object
};

Media.childContextTypes = {
  reverse: _react.PropTypes.bool
};

exports['default'] = Media;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./utils/styleResolver.js":6}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MediaJs = require('./Media.js');

var _MediaJs2 = _interopRequireDefault(_MediaJs);

var _ImgJs = require('./Img.js');

var _ImgJs2 = _interopRequireDefault(_ImgJs);

var _ImgExtJs = require('./ImgExt.js');

var _ImgExtJs2 = _interopRequireDefault(_ImgExtJs);

var _BdJs = require('./Bd.js');

var _BdJs2 = _interopRequireDefault(_BdJs);

exports.Media = _MediaJs2['default'];
exports.Img = _ImgJs2['default'];
exports.ImgExt = _ImgExtJs2['default'];
exports.Bd = _BdJs2['default'];

},{"./Bd.js":1,"./Img.js":2,"./ImgExt.js":3,"./Media.js":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = style;
var nullBase = {};
var nullProps = {
  style: {},
  noDefaultStyle: false
};

function style() {
  var base = arguments.length <= 0 || arguments[0] === undefined ? nullBase : arguments[0];
  var props = arguments.length <= 1 || arguments[1] === undefined ? nullProps : arguments[1];

  return _extends({}, !props.noDefaultStyle && base, props.style);
}

module.exports = exports["default"];

},{}]},{},[5])(5)
});