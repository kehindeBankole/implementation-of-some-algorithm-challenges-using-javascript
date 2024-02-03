function shortestDistance(words, word1, word2) {
  let word1Pos = -1;
  let word2Pos = -1;
  let shortestDistance = words.length;
  for (let x = 0; x < words.length; x++) {
    if (words[x] === word1) {
      word1Pos = x;
    }
    if (words[x] === word2) {
      word2Pos = x;
    }

    if (word1Pos !== -1 && word2Pos !== -1) {
      shortestDistance = Math.min(
        shortestDistance,
        Math.abs(word1Pos - word2Pos)
      );
    }
  }

  console.log({ word1Pos, word2Pos });
  return shortestDistance;
}

console.log(shortestDistance(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 'fox', 'dog'));
