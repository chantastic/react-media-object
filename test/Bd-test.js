import assert from "assert";
import sinon from "sinon";

import React, { addons } from "react/addons";
import Bd from "../src/Bd.js";

let shallowRenderer = addons.TestUtils.createRenderer();

describe("Bd", () => {
  let result;

  beforeEach(() => {
    shallowRenderer.render(<Bd>Inner Text</Bd>);
    result = shallowRenderer.getRenderOutput();
  });

  it("renders an `div` as it's root element", () => {
    assert.strictEqual(result.type, "div");
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
    assert.deepEqual(result.props.style, {
      display: "table-cell",
      verticalAlign: "top",
      width: "10000px !important"
    });
  });

  it("when given a style prop, it merges styles", () => {
    shallowRenderer.render(<Bd style={{ backgroundColor: "blue" }}>Inner Text</Bd>);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.style, {
      backgroundColor: "blue",
      display: "table-cell",
      verticalAlign: "top",
      width: "10000px !important"
    });
  });

  it("when given a style prop, with a rule that overrides a default, it replaces the default", () => {
    shallowRenderer.render(<Bd style={{ verticalAlign: "bottom" }}>Inner Text</Bd>);
    result = shallowRenderer.getRenderOutput();

    assert.deepEqual(result.props.style, {
      display: "table-cell",
      verticalAlign: "bottom",
      width: "10000px !important"
    });
  });

  it("accepts event props", () => {
    let spyCallback = sinon.spy();

    shallowRenderer.render(<Bd onClick={spyCallback} />);
    result = shallowRenderer.getRenderOutput();
    result.props.onClick();

    assert.strictEqual(spyCallback.calledOnce, true);
  });
});
