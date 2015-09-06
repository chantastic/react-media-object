import assert from "assert";
import sinon from "sinon";

import React, { addons } from "react/addons";
import Img from "../src/Img.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("Img", () => {
  let result;

  beforeEach(() => {
    shallowRenderer.render(<Img href=""><div /></Img>);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders an `a` as it's root element", () => {
    assert.strictEqual(result.type, "a");
  });

  it("renders with the `className` img", () => {
    assert.strictEqual(result.props.className, "img");
  });

  it("element has default styles", () => {
    assert.strictEqual(result.props.style.float, "left");
    assert.strictEqual(result.props.style.marginRight, 10);
  });

  /*
   * FIX:
   * Something is preventing doing a camparison with JSX. Find out why.
   * Example: https://github.com/facebook/react/blob/4b9c349fd057b3c4b1a0fab5fbdf5bd0c625db8d/src/test/__tests__/ReactTestUtils-test.js#L179-L195
   */
  it("renders `props.children`", () => {
    shallowRenderer.render(<Img href="">hi</Img>);
    result = shallowRenderer.getRenderOutput();

    assert.strictEqual(result.props.children, "hi");
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<Img href="" onClick={spyCallback}><div /></Img>);
    result = shallowRenderer.getRenderOutput();
    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
