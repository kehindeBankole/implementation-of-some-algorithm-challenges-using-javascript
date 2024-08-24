var isHappy = function (n) {
  let stringedN = String(n);
  let obj = {};

  function multiplyDigitSq(stringed) {
    let newSum = 0;
    for (let x = 0; x < stringed.length; x++) {
      let num = stringed[x];
      let sqd = num * num;
      newSum = sqd += newSum;
    }


    if (newSum === 1) {
      return true;
    }

    if (obj[newSum]) {
      return false;
    }

    obj[newSum] = true;

   return multiplyDigitSq(String(newSum));
  }

  let result = multiplyDigitSq(stringedN);

return result
};

console.log(isHappy(2))
