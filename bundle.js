require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-media-object":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var clearfixStyles = {
  ':before': {
    display: 'table'
  },
  ':after': {
    display: 'table',
    clear: 'both'
  }
};

var mediaStyles = {
  root: {
    marginTop: '1.5em',
    marginBottom: '1.5em'
  },
  img: {
    float: 'left',
    marginRight: 10
  },
  imgExt: {
    display: 'block'
  },
  bd: {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '10000px !important'
  }
};

var Media = (function (_Component) {
  function Media() {
    _classCallCheck(this, Media);

    if (_Component != null) {
      _Component.apply(this, arguments);
    }
  }

  _inherits(Media, _Component);

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        _extends({ className: 'media', style: mediaStyles.root }, this.props),
        _react2['default'].createElement('div', { style: clearfixStyles[':before'] }),
        this.props.children,
        _react2['default'].createElement('div', { style: clearfixStyles[':after'] })
      );
    }
  }]);

  return Media;
})(_react.Component);

Media.propTypes = {
  children: _react.PropTypes.node.isRequired
};

var MediaImg = (function (_Component2) {
  function MediaImg() {
    _classCallCheck(this, MediaImg);

    if (_Component2 != null) {
      _Component2.apply(this, arguments);
    }
  }

  _inherits(MediaImg, _Component2);

  _createClass(MediaImg, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('a', _extends({ className: 'img', style: mediaStyles.img }, this.props));
    }
  }]);

  return MediaImg;
})(_react.Component);

MediaImg.propTypes = {
  children: _react.PropTypes.node.isRequired,
  href: _react.PropTypes.string.isRequired
};

var MediaImgExt = (function (_Component3) {
  function MediaImgExt() {
    _classCallCheck(this, MediaImgExt);

    if (_Component3 != null) {
      _Component3.apply(this, arguments);
    }
  }

  _inherits(MediaImgExt, _Component3);

  _createClass(MediaImgExt, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('img', _extends({ style: mediaStyles.imgExt }, this.props));
    }
  }]);

  return MediaImgExt;
})(_react.Component);

MediaImgExt.propTypes = {
  alt: _react.PropTypes.string.isRequired,
  src: _react.PropTypes.string.isRequired
};

var MediaBd = (function (_Component4) {
  function MediaBd() {
    _classCallCheck(this, MediaBd);

    if (_Component4 != null) {
      _Component4.apply(this, arguments);
    }
  }

  _inherits(MediaBd, _Component4);

  _createClass(MediaBd, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('div', _extends({ className: 'bd', style: mediaStyles.bd }, this.props));
    }
  }]);

  return MediaBd;
})(_react.Component);

MediaBd.propTypes = {
  children: _react.PropTypes.node
};

exports.Media = Media;
exports.MediaImg = MediaImg;
exports.MediaImgExt = MediaImgExt;
exports.MediaBd = MediaBd;

},{"react":undefined}]},{},[]);
