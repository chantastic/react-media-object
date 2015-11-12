'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

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