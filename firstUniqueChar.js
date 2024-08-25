var firstUniqChar = function (s) {
  let obj = {};
  for (let x = 0; x < s.length; x++) {
    let item = s[x];
    obj[item] = (obj[item] || 0) + 1;
  }

  for (let x = 0; x < s.length; x++) {
    if (obj[s[x]] === 1) {
      return x;
    }
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
