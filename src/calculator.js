const calculator = (function () {
  const add = (a = 0, b = 0) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "invalid input - enter a number";
    }

    return a + b;
  };
  //subtract method
  const subtract = (a = 0, b = 0) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "invalid input - enter a number";
    }
    return a - b;
  };
  //divide method
  const divide = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "invalid input - enter a number";
    }
    if (b === 0) {
      return "division by 0 is invalid";
    }
    return a / b;
  };
  //multiply method
  const multiply = (a = 0, b = 0) => {
    if (typeof a !== "number" || typeof b !== "number") {
      return "invalid input - enter a number";
    }
    return a * b;
  };
  return { add, subtract, divide, multiply };
})();

export default calculator;
