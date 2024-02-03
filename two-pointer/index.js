
function threeSome(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    // skip same element to avoid duplicate triplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    searchPair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}
function searchPair(arr, targetSum, left, triplets) {
  let right = arr.length - 1;
  for (let x = 0; x < right; x++) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

console.log(threeSome([-3, 0, 1, 2, -1, 1, -2]));
