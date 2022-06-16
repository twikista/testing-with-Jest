function smallLetterRule(x, n) {
  let offSet = null;
  if (x < 97 || x > 122) {
    offSet = x;
    return offSet;
  }
  offSet = (x + n) % 122;
  if (offSet === 0) {
    offSet = 97;
  } else if (offSet < 97) {
    offSet = 96 + offSet;
  }
  return offSet;
}

function capitalLetteRule(x, n) {
  let offSet = null;
  if (x < 65 || x > 90) {
    offSet = x;
    return offSet;
  }
  offSet = (x + n) % 90;
  if (offSet === 0) {
    offSet = 65;
  } else if (offSet < 64) {
    offSet = 64 + offSet;
  }

  return offSet;
}

function caesarCipher(string, num = 3) {
  if (typeof string !== "string" || typeof num !== "number") {
    return "error: first and second arguements should be a string and number respectively";
  }
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let current = string.codePointAt(i);
    newString +=
      current <= 90
        ? String.fromCodePoint(capitalLetteRule(current, num))
        : String.fromCodePoint(smallLetterRule(current, num));
  }
  return newString;
}

export default caesarCipher;
