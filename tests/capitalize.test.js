import capitalize from "../src/capitalize";

describe("test cases for captialize function", () => {
  test("capitalize 'string' to become 'String'", () => {
    const string = "analyze";
    const output = "Analyze";
    expect(capitalize(string)).toEqual(output);
  });
  test("capitlaize 'String' output 'String'", () => {
    expect(capitalize("Analyze")).toEqual("Analyze");
  });
  test("capitalize non-string types to output null", () => {
    expect(capitalize(12340)).toEqual(null);
  });
  test("capitalize string that begins with numbers to output non-valid string", () => {
    expect(capitalize("12345")).toEqual("non-valid string");
  });
  test("capitalize empty string output 'string cannot be empty'", () => {
    expect(capitalize("")).toEqual("string cannot be empty");
  });
});
