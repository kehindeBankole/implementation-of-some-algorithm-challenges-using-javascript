function naiveSearch(string, elem) {
  let count = 0;
  for (let x = 0; x < string.length; x++) {
    for (let y = 0; y < elem.length; y++) {
      if (string[x + y] !== elem[y]) {
        break;
      }
      if (y === elem.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
