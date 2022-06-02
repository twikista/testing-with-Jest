function analyzeArray(array) {
  if (!Array.isArray(array)) {
    return "invalid input";
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      return "all array elements must be numbers";
    }
  }

  const arrayTotal = array.reduce((prev, cur) => prev + cur, 0);
  const arrayLength = array.length;
  const arrayAverage = arrayTotal / arrayLength;

  const sortedArray = array.sort((a, b) => a - b);
  const min = sortedArray[0];
  const max = sortedArray[arrayLength - 1];

  return {
    average: arrayAverage,
    min,
    max,
    length: arrayLength,
  };
}

export default analyzeArray;
