function reverseString(string) {
  string = String(string);
  if (!string.length) {
    return "can't reverse empty string";
  }
  const reversed = [...string].reverse();
  const joinString = reversed.join("");
  return joinString;
}

export default reverseString;
