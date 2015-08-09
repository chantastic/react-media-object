global.document = {};

/*
 * generator-react-component does not ship with a DOM implementation.
 * The ideal tool for testing against a DOM is [jsdom](https://github.com/tmpvar/jsdom).
 * Unfortunately recent versions are built exclusively for io.js.
 * You may install an unsupported, node-compatable version by runnig this command:
 *
 * $ npm install jsdom@3 --save-dev
 *
 * Once `jsdom` installed, you may use it by uncommenting the code below.
 */


// var jsdom = require("jsdom");
// var doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
// var win = doc.defaultView;
//
// global.document = doc;
// global.window = win;
//
// propagateToGlobal(win);
//
// function propagateToGlobal (window) {
//   for (let key in window) {
//     if (!window.hasOwnProperty(key)) continue;
//     if (key in global) continue;
//     global[key] = window[key];
//   }
// }
