import assert from "assert";
import sinon from "sinon";

import React, { addons } from "react/addons";
import ImgExt from "../src/ImgExt.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("ImgExt", () => {
  let result;

  beforeEach(() => {
    shallowRenderer.render(<ImgExt alt="sample alt" src="http://x.xxx" />);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders an `img` as it's root element", () => {
    assert.strictEqual(result.type, "img");
  });

  it("renders with the no `className`", () => {
    assert.strictEqual(result.props.className, undefined);
  });

  it("renders with provided `alt` prop", () => {
    assert.strictEqual(result.props.alt, "sample alt");
  });

  it("renders with provided `src` prop", () => {
    assert.strictEqual(result.props.src, "http://x.xxx");
  });

  it("element has default styles", () => {
    assert.strictEqual(result.props.style.display, "block");
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<ImgExt onClick={spyCallback} alt="alt" src="http://x.xxx" />);
    result = shallowRenderer.getRenderOutput();
    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
