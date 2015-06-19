require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('react-media-object');

var Media = _require.Media;
var MediaImg = _require.MediaImg;
var MediaImgExt = _require.MediaImgExt;
var MediaBd = _require.MediaBd;

var App = React.createClass({
  displayName: 'App',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'section',
        { className: 'section' },
        React.createElement(
          'h2',
          { className: 'demo-heading' },
          ' With optional regions '
        ),
        React.createElement(
          'div',
          { className: 'demo-block' },
          React.createElement(
            Media,
            null,
            React.createElement(
              MediaImg,
              { href: 'http://twitter.com/chantastic' },
              React.createElement(MediaImgExt, {
                src: 'http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e',
                alt: 'chantastic' })
            ),
            React.createElement(
              MediaBd,
              null,
              'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.',
              React.createElement(
                'div',
                null,
                React.createElement(
                  'a',
                  { href: 'http://twitter.com/chantastic' },
                  '@chantastic'
                ),
                React.createElement(
                  'span',
                  { className: 'detail' },
                  ' 7 hours ago'
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'section' },
        React.createElement(
          'h2',
          { className: 'demo-heading' },
          ' Without optional ',
          React.createElement(
            'code',
            null,
            'imgExt'
          ),
          ' '
        ),
        React.createElement(
          'div',
          { className: 'demo-block' },
          React.createElement(
            Media,
            null,
            React.createElement(
              MediaImg,
              { href: 'http://twitter.com/chantastic' },
              'chantastic'
            ),
            React.createElement(
              MediaBd,
              null,
              'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.',
              React.createElement(
                'div',
                null,
                React.createElement(
                  'a',
                  { href: 'http://twitter.com/chantastic' },
                  '@chantastic'
                ),
                ' ',
                React.createElement(
                  'span',
                  { className: 'detail' },
                  ' 7 hours ago'
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'section',
        { className: 'section' },
        React.createElement(
          'h2',
          { className: 'demo-heading' },
          ' Without optional ',
          React.createElement(
            'code',
            null,
            'img'
          ),
          ' '
        ),
        React.createElement(
          'div',
          { className: 'demo-block' },
          React.createElement(
            Media,
            null,
            React.createElement(
              MediaBd,
              null,
              React.createElement(
                'div',
                null,
                'I\'ve spent most of my career focused on taming styles in CSS. I saw it as a problem that would never be solved. Then, #reactjs happened.',
                React.createElement(
                  'a',
                  { href: 'http://twitter.com/chantastic' },
                  '@chantastic'
                ),
                React.createElement(
                  'span',
                  { className: 'detail' },
                  ' 7 hours ago'
                )
              )
            )
          )
        )
      ),
      React.createElement(
        'h2',
        { className: 'demo-heading' },
        ' TODO '
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Why doesn\'t instanceOf work as expected?'
        ),
        React.createElement(
          'li',
          null,
          'Expose styling props.'
        ),
        React.createElement(
          'li',
          null,
          'Play with merging styles vs overriding.'
        ),
        React.createElement(
          'li',
          null,
          'Add tests.'
        )
      )
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-media-object":undefined}]},{},[1]);
