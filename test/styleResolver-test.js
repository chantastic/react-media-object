var assert = require("assert");
var styleResolver = require("../src/utils/styleResolver.js");

describe("styleResolver", () => {
  it("returns {} when no arguments are given", () => {
    assert.deepEqual(styleResolver(), {});
  });

  // NOTE: awaiting bad-data scenarios to write tests and conditions

  describe("when props.noDefaultStyle is falsy", () => {
    it("returns {} when base and props.style are empty", () => {
      const base = null;
      const props = { style: null };

      assert.deepEqual(styleResolver(base, props), {});
    });

    it("returns base when props.style is empty", () => {
      const base = { backgroundColor: "blue" };
      const props = { style: null };

      assert.deepEqual(styleResolver(base, props), { backgroundColor: "blue" });
    });

    it("returns props.style when base is empty", () => {
      const base = null;
      const props = { style: { backgroundColor: "blue" } };

      assert.deepEqual(styleResolver(base, props), { backgroundColor: "blue" });
    });

    it("returns a props.style-priority merge of the two objects when neither are empty", () => {
      const base = {
        backgroundColor: "blue",
        color: "white"
      };

      const props = {
        style: {
          backgroundColor: "pink",
          color: "blue"
        }
      };

      assert.deepEqual(
        styleResolver(base, props),
        {
          backgroundColor: "pink",
          color: "blue"
        }
      );
    });
  });

  describe("when props.noDefaultStyle is truthy", () => {
    it("returns {} when base and props.style are empty", () => {
      const base = null;
      const props = {
        style: null,
        noDefaultStyle: true
      };

      assert.deepEqual(styleResolver(base, props), {});
    });

    it("returns {} when props.style is empty", () => {
      const base = { backgroundColor: "blue" };
      const props = {
        style: null,
        noDefaultStyle: true
      };

      assert.deepEqual(styleResolver(base, props), {});
    });

    it("returns props.style when base is empty", () => {
      const base = null;
      const props = {
        style: { backgroundColor: "blue" },
        noDefaultStyle: true
      };

      assert.deepEqual(styleResolver(base, props), { backgroundColor: "blue" });
    });

    it("returns a props.style-priority merge of the two objects when neither are empty", () => {
      const base = {
        backgroundColor: "blue",
        color: "white"
      };

      const props = {
        style: { backgroundColor: "pink" },
        noDefaultStyle: true
      };

      assert.deepEqual(styleResolver(base, props), { backgroundColor: "pink" });
    });
  });
});
