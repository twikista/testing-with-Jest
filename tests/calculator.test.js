import calculator from "../src/calculator";

describe("calculator handles addition", () => {
  test("add 2 and 3 to equal 5", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });
  test('addition of non-number type returns "invalid input - enter a number"', () => {
    expect(calculator.add("2", 3)).toEqual("invalid input - enter a number");
  });
  test("entering only one arguement 2 reutrns 2", () => {
    expect(calculator.add(2)).toBe(2);
  });
  test("not entering any number returns 0", () => {
    expect(calculator.add()).toBe(0);
  });
});

describe("calculator handles subtraction", () => {
  test("suntract 2 from 8 to equal 6", () => {
    expect(calculator.subtract(8, 2)).toBe(6);
  });
  test('subtraction of non-number type returns "invalid input - enter a number"', () => {
    expect(calculator.subtract("10", 3)).toEqual(
      "invalid input - enter a number"
    );
  });
  test("not entering any number returns 0", () => {
    expect(calculator.subtract()).toBe(0);
  });
});

describe("calculator handles division", () => {
  test("divide 8 by 2 to equal 4", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
  test('divion of non-number type returns "invalid input - enter a number"', () => {
    expect(calculator.subtract("10", 2)).toEqual(
      "invalid input - enter a number"
    );
  });
  test("division by 0 is invalid", () => {
    expect(calculator.divide(2, 0)).toEqual("division by 0 is invalid");
  });
});

describe("calculator handles multiplication operations", () => {
  test("multiply 2 and 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test('non-number types should return "invalid input - enter a number"', () => {
    expect(calculator.multiply("4", 3)).toEqual(
      "invalid input - enter a number"
    );
  });
});
