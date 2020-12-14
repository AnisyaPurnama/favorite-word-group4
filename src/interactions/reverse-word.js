"use strict";

console.log("--- loading interaction -->");

/**
 * allows a user to set a new value for the saved word.
 * if there's already a saved word, they are asked to confirm replacing it
 */

// ---- ---- Reverse ---- ----
const reverseWord = () => {
  // 1. if there is no saved word, call displayWord and exit early
  // 2. use reverseString to reverse the favorite word
  // 3. render a final before/after message with favoriteWord and the new string from ^ up there
  // 4. alert the rendered message


  //1. Chech if there is no saved word. Here we want to call the displayWord function and exit early.
  if (favoriteWord === '') {
    displayWord();
    return;
  }

  //2. Use reverseString to reverse the favorite word
  const reverseFavoriteWord = reverseString(favoriteWord);

  //3. Render a final before/after message with favoriteWord and the new string from ^ up there
  const finalMessage = beforeAndAfter(favoriteWord, reverseFavoriteWord, 'Reverse favorite word ');
  
  // 4. alert the rendered message
  alert(finalMessage);
};