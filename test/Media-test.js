import assert from "assert";
import sinon from "sinon";

import React, { addons } from "react/addons";
import Media from "../src/Media.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("Media", () => {
  let result;

  beforeEach(() => {
    shallowRenderer.render(<Media><div /></Media>);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders a `div` as it's root element", () => {
    assert.strictEqual(result.type, "div");
  });

  it("renders with no default style", () => {
    assert.deepEqual(result.props.style, {});
  });

  it("when given a style prop, it merges styles", () => {
    shallowRenderer.render(<Media style={{ backgroundColor: "blue" }}><div /></Media>);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.style, { backgroundColor: "blue" });
  });

  it("has a styled `:before`-like element", () => {
    assert.strictEqual(result.type, "div");
    assert.strictEqual(result.props.children[0].props.style.display, "table");
  });

  it("has a styled `:after`-like element", () => {
    assert.strictEqual(result.type, "div");

    let lastChildIndex = result.props.children.length - 1;
    assert.strictEqual(result.props.children[lastChildIndex].props.style.display, "table");
    assert.strictEqual(result.props.children[lastChildIndex].props.style.clear, "both");
  });

  it("renders `props.children` between before/after elements", () => {
    shallowRenderer.render(<Media><blockquote className="test-child" /></Media>);
    result = shallowRenderer.getRenderOutput();

    assert.strictEqual(result.props.children.length, 3);
    assert.strictEqual(result.props.children[1].type, "blockquote");
    assert.strictEqual(result.props.children[1].props.className, "test-child");
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<Media onClick={spyCallback}><div /></Media>);
    result = shallowRenderer.getRenderOutput();

    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
