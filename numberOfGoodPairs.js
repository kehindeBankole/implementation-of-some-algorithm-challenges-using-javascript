function numGoodPairs(nums) {
  let lookup = {};
  let pairs = 0;
  for (let x = 0; x < nums.length; x++) {
    const num = nums[x];
    lookup[num] = (lookup[num] || 0) + 1;
    console.log(lookup[num]);
    pairs += lookup[num] - 1;
  }

  return { lookup, pairs };
}

console.log(numGoodPairs([1, 1, 1, 1]));
