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