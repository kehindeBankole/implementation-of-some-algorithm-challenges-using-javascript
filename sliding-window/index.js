function findAverageOfSubArray(k, arr) {
  let left = 0;
  let sum = 0.0;
  const result = [];
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    if (right >= k - 1) {
      result.push(sum / k); // calculate the average
      sum -= arr[left]; // subtract the element going out
      left += 1; // slide the window ahead
    }
  }
}
findAverageOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
function smallest_subarray_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2]));
