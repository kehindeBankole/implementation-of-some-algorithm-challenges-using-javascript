function pairWithTargetSum(arr, targetSum) {
  //Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target
  let left = 0;
  let right = arr.length - 1;

  for (let x = left; x < right; x++) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }
    if (currentSum > targetSum) {
      right--;
    } else {
      left++;
    }
  }
  return [-1 , -1]
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 16))
