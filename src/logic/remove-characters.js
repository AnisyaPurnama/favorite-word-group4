"use strict";

console.log("--- loading logic --> ");

/**
 * removes all the provided characters from a string
 * @param {string} [text=''] - text to remove characters from
 * @param {string} [charactersToRemove=''] - string of characters to remove
 * @returns {string} new string with all provided characters removed
 */


const removeCharacters = (text = '', charactersToRemove = '') => {
  if (charactersToRemove !== "") {
    let newString = '';
    for (let index = 0; index < charactersToRemove.length; index++){
      newString = text.replace(charactersToRemove[index], '')
      text = newString;
      }
      console.log(newString)
      return newString;
  }
  console.log(text);
  return text ;
};

{
  const consoleLog = console.log;
  console.log = () => {};

  try {
    console.assert(removeCharacters("asdf") === "asdf", "Test 0 a");
    console.assert(removeCharacters("") === "", "Test 0 b");
    console.assert(removeCharacters("asdf", "ad") === "sf", "Test 1");
    console.assert(removeCharacters("ASDF", "ad") === "ASDF", "Test 2");
    console.assert(removeCharacters("", "ad") === "", "Test 3");
    console.assert(removeCharacters("asdf", "xz") === "asdf", "Test 4");
    console.assert(removeCharacters("asdf", "") === "asdf", "Test 5");
    console.assert(removeCharacters("howdy", "dw") === "hoy", "Test 6");
    console.assert(removeCharacters("AaSsDdFf", "aSdF") === "AsDf", "Test 7");
    console.assert(removeCharacters("asdf", "fdsa") === "", "Test 8");
  } catch (err) {
    console.error(err);
  }

  console.log = consoleLog;
}