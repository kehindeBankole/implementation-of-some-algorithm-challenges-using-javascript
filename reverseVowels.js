function reverseVowels(string) {
  let vowels = 'aeiouAEIOU';
  const allVowels = [...string].map((item, index) => {
    if (vowels.includes(item)) {
      return item;
    }
  });
  const cleanedVowels = allVowels.filter(Boolean).reverse();
  const reversedSentence = [...string].map((item) => {
    if (vowels.includes(item)) {
      item = cleanedVowels.shift();
      return item;
    }

    return item;
  });
  return reversedSentence.join('');
}

console.log(reverseVowels('DesignGUrus'));
