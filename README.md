# React Media Object

This is a Media Object implementation in React.js.

The CSS [Media Object](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/) was created by [Nicole Sullivan](https://twitter.com/stubbornella). It's an undeniably concise nugget of CSS. I love it.

This project is part of a proof-of-concept for React inline-styles. In practice, can a Media Object component be as usefel and flexible as the original OOCSS version.


## Installation

#### Node

```bash
npm install react-media-object --save
```

#### In-browser

```html
<script src="./path/to/dist/react-media-object.js"></script>
```

*`React` must be available as a global when this script is run.*


## Usage

ReactMediaObject is four components, half of which are optional

```html
var { Media, Img, ImgExt, Bd } = require('react-media-object');

var MediaObjectWithAllRegions = (
  <Media>
    <Img href="http://twitter.com/chantastic">
      <ImgExt src="http://0.gravatar.com/avatar/d56966cb85dc4153ceeec7ca0bdb568e" alt="chantastic" />
    </Img>

    <Bd>
      I've spent most of my career focused on taming styles in CSS. I saw it as a
      problem that would never be solved. Then, <i>#reactjs</i> happened.
    </Bd>
  </Media>
);

var MediaObjectWithMinimalRegions = (
  <Media>
    <Bd>
      I've spent most of my career focused on taming styles in CSS. I saw it as a
      problem that would never be solved. Then, <i>#reactjs</i> happened.
    </Bd>
  </Media>
);

ReactDOM.render(MediaObjectWithAllRegions, mountNode);
```


## Development

To build the examples locally, clone and run:

```bash
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


#### Structure

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
