'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var styles = {
  float: 'left',
  marginRight: 10
};

var Img = (function (_Component) {
  function Img() {
    _classCallCheck(this, Img);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(Img, _Component);

  _createClass(Img, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('a', _extends({}, this.props, { style: this.style }));
    }
  }, {
    key: 'style',
    get: function () {
      return _extends({}, styles, this.props.style);
    }
  }]);

  return Img;
})(_react.Component);

Img.propTypes = {
  children: _react.PropTypes.node.isRequired,
  href: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object
};

exports['default'] = Img;
module.exports = exports['default'];