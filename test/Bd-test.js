import assert from "assert";
import sinon from "sinon";

import React, { addons } from "react/addons";
import Bd from "../src/Bd.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("Bd", () => {
  let result;

  before(() => {
    shallowRenderer.render(<Bd>Inner Text</Bd>);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders an `div` as it's root element", () => {
    assert.strictEqual(result.type, "div");
  });

  it("renders with the default class 'bd'", () => {
    assert.strictEqual(result.props.className, "bd");
  });

  it("renders provided children", () => {
    assert.strictEqual(result.props.children, "Inner Text");

    shallowRenderer.render(<Bd><strong>strong</strong></Bd>);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.children, <strong>strong</strong>);

    shallowRenderer.render(<Bd>1</Bd>);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.children, 1);
  });

  it("element has default styles", () => {
    assert.strictEqual(result.props.style.display, "table-cell");
    assert.strictEqual(result.props.style.verticalAlign, "top");
    assert.strictEqual(result.props.style.width, "10000px !important");
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<Bd onClick={spyCallback} />);
    result = shallowRenderer.getRenderOutput();
    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
