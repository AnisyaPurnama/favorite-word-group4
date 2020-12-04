'use strict';

console.log('--- loading interaction -->');

/**
 * allows a user to see their word with all the vowels or all the consonants removed
 */
const removeVowelsOrConsonants = () => {
  // 1. if there is no saved word, call displayWord and exit early

  let inputWord = ''
  if (favoriteWord === '') {
    displayWord();
    return;
  }

  // 2. use chooseBetween to let the user select 'vowels' or 'consonants'
  let select = chooseBetween(['vowels', 'consonants']);

  // 3. use removeCharacters to create a new string
  //  remove all vowels (lower and upper case) if the user selected "vowels"
  if (select === 'vowels') {
    change = removeCharacters(favoriteWord, 'AEIOUaeiou');
  }

  //  remove all consonants (lower and upper case) if the user selected "consonants"
  if (select === 'consonants') {
    change = removeCharacters(favoriteWord, 'bcdfghklmnpqrstvwxyzBCDFGHKLMNPQRSTVWXYZ');
  }

  // 4. render a final before/after message with favoriteWord and the new string from ^ up there
  let finalMessage = beforeAfter(favoriteWord, change, 'the vowels/consonants removed')

  // 5. alert the rendered message
  alert(finalMessage);

};


/* let displayWord = ''; (this was my first try)

while (true) {

  displayWord = prompt ('enter your favorite word');
console.log('displayWord:', typeof displayWord, displayWord);

if (displayWord === null || displayWord === ''){
  alert('that is nothing');
  break;
}

}

const chooseBetween = 'Choose! \n\n'
+ '"vowels": remove all vowels\n'
+ '"consonants": remove all consonants\n'
const displayWord = prompt(chooseBetween);

if (displayWord === 'vowels') {
  let characterVowels = string.split("")
  return characterVowels.map(character => {
    if(/[aeiouAEIOU].test(character)){
      character = ""
    } else {return character}
  }).join("")
  
}

if (displayWord === 'consonants') {
  let characterConsonants = string.split("")
  return characterConsonants.map(character => {
    if(/[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz].test(character)){
      character = ""
    } else {return character}
  }).join("")
} */


