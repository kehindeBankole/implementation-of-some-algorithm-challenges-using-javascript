function validPalindrome(data) {
  const cleanedWords = data.toLowerCase().replace(/[^\w]/g, '');
  return cleanedWords.split('').reverse().join('') === cleanedWords;
}

console.log(validPalindrome('race a car'));
