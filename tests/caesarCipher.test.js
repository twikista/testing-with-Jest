import caesarCipher from "../src/caesarCipher";

describe("caesarCipher function takes a string and return it with each character shifted by the offset/shift proived", () => {
  test("its first arguement should be a string type", () => {
    expect(caesarCipher(true, 4)).toEqual(
      "error: first and second arguements should be a string and number respectively"
    );
  });
  test("its second arguement should be a number type", () => {
    expect(caesarCipher("I code everyday", "2")).toEqual(
      "error: first and second arguements should be a string and number respectively"
    );
  });
  test("default offset of 3 is used if no offset is provided", () => {
    expect(caesarCipher("I code everyday")).toEqual("L frgh hyhubgdb");
  });
  test("each character of string proivded should be shifted by the offset provided", () => {
    expect(caesarCipher("The Odin Project is awesome", 4)).toEqual(
      "Xli Shmr Tvsnigx mw eaiwsqi"
    );
  });
  test("it should should shift z to a", () => {
    expect(caesarCipher("z", 1)).toEqual("a");
  });
  test("shifted string shuold keep the same case as original string provided", () => {
    expect(caesarCipher("A Zebra", 2)).toEqual("C Bgdtc");
  });
  test("punctuations in original string should be preserved in transformed string", () => {
    expect(caesarCipher("Great!", 3)).toEqual("Juhdw!");
  });
});
