"use strict";

console.log("--- loading interaction -->");

/**
 * allows a user to set a new value for the saved word.
 * if there's already a saved word, they are asked to confirm replacing it
 */

// ---- ---- Prompt ---- ----
const promptAndConfirmSomething = (message = 'enter something:') => {
  console.log('---', message, '---');

  let userInput = '';
  let userConfirmed = false;
  while (!userConfirmed) {

    userInput = prompt(message);
    console.log('userInput:', typeof userInput, userInput);

    if (userInput === null || userInput === '') {
      alert('nope, gotta enter something.');
      continue;
    }

    userConfirmed = confirm(`is this correct: "${userInput}"`);
    console.log('userConfirmed:', typeof userConfirmed, userConfirmed);

  }

  return userInput;
};

// ---- ---- Reverse ---- ----
const reverseWord = (text = "") => {
  // 1. if there is no saved word, call displayWord and exit early
  // 2. use reverseString to reverse the favorite word
  // 3. render a final before/after message with favoriteWord and the new string from ^ up there
  // 4. alert the rendered message


  //1. Chech if there is no saved word. Here we want to call the displayWord function and exit early. (want some extra work)
  if (text.length == 0) {
    console.log("displayWord");
  }

  //2. Use reverseString to reverse the favorite word
  let reverseString = "";

  for (let index = text.length - 1; index > -1; index--) {
    const nextCharacter = text[index];
    reverseString = reverseString + nextCharacter;
  }
  return reverseString;
};

  // ---- ---- Input ---- ----
  const favoriteWord = promptAndConfirmSomething('enter some text. it will be reversed');
  const reverseInput = reverseWord(favoriteWord)

  //3. Render a final before/after message with favoriteWord and the new string from ^ up there
  const finalMessage = 'before:\n' + '- "' + favoriteWord + '"\n\n' + 'after:\n' + '- "' + reverseInput + '"\n\n';
  // 4. alert the rendered message
  alert(finalMessage);