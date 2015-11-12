'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

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