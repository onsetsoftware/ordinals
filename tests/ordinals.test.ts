import { describe, expect, test } from "vitest";
import { ordinal, withOrdinal } from "../src";

describe("Ordinals", () => {
  test("Basic ordinals", () => {
    expect(ordinal(1)).toBe("st");
    expect(ordinal(2)).toBe("nd");
    expect(ordinal(3)).toBe("rd");
    expect(ordinal(4)).toBe("th");
    expect(ordinal(21)).toBe("st");
  });

  test("Basic ordinals with number", () => {
    expect(withOrdinal(1)).toBe("1st");
  });

  test("Basic international ordinals (French)", () => {
    expect(ordinal(1, "fr")).toBe("er");
    expect(ordinal(15, "fr")).toBe("e");
  });

  test("Basic international ordinals (Spanish)", () => {
    expect(ordinal(1, "es")).toBe("º");
    expect(ordinal(15, "es")).toBe("º");
  });
});
