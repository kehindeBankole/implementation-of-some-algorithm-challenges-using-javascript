function validAnagram(s, t) {
  const lookup = {};
  for (let x = 0; x < s.length; x++) {
    let letter = s[x];
    if (lookup[letter]) {
      lookup[letter] += 1;
    } else {
      lookup[letter] = 1;
    }
  }

    for (let x = 0; x < t.length; x++) {
      let letter = t[x];
      lookup[letter] ? (lookup[letter] -= 1) : false;
    }
  console.log(lookup);
}

console.log(validAnagram('listen', 'silent'));
