'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to set a new value for the saved word.
 * if there is no saved word, the user is told so and the interaction ends.
 * if there is a saved word, the user is asked to confirm replacing it.
 * if the user confirms, they enter a new word that replaces the old one.
 */
const setWord = () => {
    if (savedword === ""){
      alert("you have no saved word");
      return;
    }
    confirmMessage = "this is your word" + savedword + "do you want to replace it?"
    userConfirm = confirm(confirmMessage);
    if (userConfirm){
      enterWord(message = "enter the replace word");
    }
    else {
      savedword = savedword;
    }
  };
