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

  it("renders with provided `alt` prop", () => {
    assert.strictEqual(result.props.alt, "sample alt");
  });

  it("renders with provided `src` prop", () => {
    assert.strictEqual(result.props.src, "http://x.xxx");
  });

  it("element has default styles", () => {
    assert.deepEqual(result.props.style, { display: "block" });
  });

  it("when given a style prop, it merges styles", () => {
    shallowRenderer.render(<ImgExt style={{ backgroundColor: "blue" }}alt="sample alt" src="http://x.xxx" />);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.style, {
      display: "block",
      backgroundColor: "blue"
    });
  });

  it("when given a style prop, with a rule that overrides a default, it replaces the default", () => {
    shallowRenderer.render(<ImgExt style={{ display: "inline-block" }}alt="sample alt" src="http://x.xxx" />);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.style, {
      display: "inline-block"
    });
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<ImgExt onClick={spyCallback} alt="alt" src="http://x.xxx" />);
    result = shallowRenderer.getRenderOutput();
    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
