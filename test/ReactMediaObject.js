import assert from "assert";
import React, { addons } from "react/addons";
import { Media } from "../src/ReactMediaObject.js";

let TestUtils = addons.TestUtils;

describe("ReactMediaObject.Meda", () => {
  let component, node;

  before(() => {
    component = TestUtils.renderIntoDocument(<Media><div /></Media>);
    node = React.findDOMNode(component);
  });

  it("renders a `div` is it's root element", () => {
    assert.strictEqual(node.tagName, "DIV");
  });

  it("renders with the `className` media", () => {
    assert.strictEqual(node.className, "media");
  });

  it("has a styled `:before`-like element", () => {
    assert.strictEqual(node.tagName, "DIV");
    console.log(node.children[0].style.display, "table");
  });

  it("has a styled `:after`-like element", () => {
    assert.strictEqual(node.tagName, "DIV");

    let lastChildIndex = node.children.length -1;
    assert.strictEqual(node.children[lastChildIndex].style.display, "table");
    assert.strictEqual(node.children[lastChildIndex].style.clear, "both");
  });

  it("renders `props.children` between before/after elements", () => {
    component = TestUtils.renderIntoDocument(<Media><blockquote className="test-child" /></Media>);
    node = React.findDOMNode(component);

    assert.strictEqual(node.children.length, 3);
    assert.strictEqual(node.children[1].tagName, "BLOCKQUOTE");
    assert.strictEqual(node.children[1].className, "test-child");
  });
});
