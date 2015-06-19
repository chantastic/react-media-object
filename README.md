# React Media Object

The [Media Object] in React


## Demo & Examples

Live demo: [chantastic.github.io/react-media-object](http://chantastic.github.io/react-media-object/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-media-object is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-media-object.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-media-object --save
```


## Usage

ReactMediaObject is four components, half of which are optional

```js
var { Media, MediaImg, MediaImgExt, MediaBd } = require('react-media-object');

// With optional reagons
<Media>
  <MediaImg href="http://twitter.com/chantastic">
    <MediaImgExt src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
  </MediaImg>

  <MediaBd>
    I've spent most of my career focused on taming styles in CSS. I saw it as a
    problem that would never be solved. Then, <i>#reactjs</i> happened.
  </MediaBd>
</Media>

// With only required reagons
<Media>
  <MediaBd>
    I've spent most of my career focused on taming styles in CSS. I saw it as a
    problem that would never be solved. Then, <i>#reactjs</i> happened.
  </MediaBd>
</Media>
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

The MIT License (MIT)

Copyright (c) 2015 Michael Chan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
