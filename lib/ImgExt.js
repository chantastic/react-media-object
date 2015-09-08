'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsStyleResolver = require('./utils/styleResolver');

var _utilsStyleResolver2 = _interopRequireDefault(_utilsStyleResolver);

var styles = { display: 'block' };

var ImgExt = (function (_Component) {
  _inherits(ImgExt, _Component);

  function ImgExt() {
    _classCallCheck(this, ImgExt);

    _get(Object.getPrototypeOf(ImgExt.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ImgExt, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('img', _extends({}, this.props, {
        style: (0, _utilsStyleResolver2['default'])(styles, this.props)
      }));
    }
  }, {
    key: 'style',
    get: function get() {
      return _extends({}, styles, this.props.style);
    }
  }]);

  return ImgExt;
})(_react.Component);

exports['default'] = ImgExt;

ImgExt.propTypes = {
  alt: _react.PropTypes.string.isRequired,
  src: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};
module.exports = exports['default'];