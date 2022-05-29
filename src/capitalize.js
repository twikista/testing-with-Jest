function capitalize(string) {
  if (typeof string !== "string") {
    return null;
  }

  if (string.codePointAt(0) < 65 || string.codePointAt(0) > 122) {
    return "non-valid string";
  }
  if (!string.length) {
    return "string cannot be empty";
  }

  const firstLetter = string[0];
  const capitalizedLetter = firstLetter.toUpperCase();
  const newString = `${capitalizedLetter}${string.slice(1)}`;
  return newString;
}

export default capitalize;
