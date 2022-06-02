import analyzeArray from "../src/analyzeArray";
describe("analyzeArray function test cases", () => {
  test('it should return "invalid input" if arguement is not an array', () => {
    expect(analyzeArray("notArray")).toEqual("invalid input");
  });
  test('it should return "all array elements must be numbers"', () => {
    const array = [1, "4", 5, 6, "boy"];
    expect(analyzeArray(array)).toEqual("all array elements must be numbers");
  });
  test("it should return an object with the average of the array elements as a property", () => {
    const array = [5, 10, 2, 3];
    expect(analyzeArray(array)).toEqual({
      average: 5,
      min: 2,
      max: 10,
      length: 4,
    });
  });
  test("it should return an object with the minimum value of the array as a property", () => {
    const array = [5, 10, 2, 3];
    expect(analyzeArray(array)).toEqual({
      average: 5,
      min: 2,
      max: 10,
      length: 4,
    });
  });
  test("it should return an object with the maximum value of the array as a property", () => {
    const array = [5, 10, 2, 3];
    expect(analyzeArray(array)).toEqual({
      average: 5,
      min: 2,
      max: 10,
      length: 4,
    });
  });
  test("it should return an object with the length of the array as a property", () => {
    const array = [5, 10, 2, 3];
    expect(analyzeArray(array)).toEqual({
      average: 5,
      min: 2,
      max: 10,
      length: 4,
    });
  });
});
