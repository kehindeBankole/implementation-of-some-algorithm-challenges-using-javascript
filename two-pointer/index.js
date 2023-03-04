function pairWithTargetSum(arr, targetSum) {
  //Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target
  let left = 0,
    right = arr.length - 1;
  for (let left = 0; left < right; left++) {
    const currentSum = arr[left] + arr[right];
    console.log(currentSum);
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (currentSum > targetSum) {
      right -= 1;
    } else {
      left += 1;
    }
  }
  return [-1, -1];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
