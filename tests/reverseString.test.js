import reverseString from "../src/reverseString";

describe("test cases for reverseString function", () => {
  test("reverse spot to tops", () => {
    expect(reverseString("spot")).toEqual("tops");
  });
  test("reverse empty string", () => {
    expect(reverseString("")).toEqual("can't reverse empty string");
  });
  test("reverse non-string types", () => {
    expect(reverseString(12345)).toEqual("54321");
    expect(reverseString(null)).toEqual("llun");
  });
});
