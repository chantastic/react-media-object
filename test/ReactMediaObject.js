import assert from "assert";
import React, { addons } from "react/addons";
import { Media } from "../src/ReactMediaObject.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("ReactMediaObject.Media", () => {
  let result;

  before(() => {
    shallowRenderer.render(<Media><div /></Media>);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders a `div` as it's root element", () => {
    assert.strictEqual(result.type, "div");
  });

  it("renders with the `className` media", () => {
    assert.strictEqual(result.props.className, "media");
  });

  it("has a styled `:before`-like element", () => {
    assert.strictEqual(result.type, "div");
    assert.strictEqual(result.props.children[0].props.style.display, "table");
  });

  it("has a styled `:after`-like element", () => {
    assert.strictEqual(result.type, "div");

    let lastChildIndex = result.props.children.length -1;
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

  // sample state test that would fail without global.document
  // it("accepts React events as props", () => {
  //   shallowRenderer.render(<Media />);
  //   result = shallowRenderer.getRenderOutput();

  //   let mockEvent = {};
  //   result.props.onClick(mockEvent);
  //   let postClickResult = shallowRenderer.getRenderOutput();
  //   // assert state change
  // });
});
