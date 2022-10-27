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
//findAverageOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
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

// console.log(smallest_subarray_sum(3, [2, 1, 5, 2, 3, 2]));

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in 
    // the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    console.log(charFrequency , windowStart , windowEnd)
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}


// console.log(`Length of the longest substring: `
//   + longest_substring_with_k_distinct("cbbebi", 3));
// console.log(`Length of the longest substring: `
//   + longest_substring_with_k_distinct('araaci', 1));
// console.log(`Length of the longest substring: `
//   + longest_substring_with_k_distinct('cbbebi', 3));



function non_repeat_substring(str) {
  let windowStart = 0,
      maxLength = 0,
      charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      const rightChar = str[windowEnd];
      // if the map already contains the 'rightChar', shrink the window from the beginning 
      // so that we have only one occurrence of 'rightChar'
      if (rightChar in charIndexMap) {
        console.log(Math.max(windowStart, charIndexMap[rightChar] + 1))
          // this is tricky; in the current window, we will not have any 'rightChar' after 
          // its previous index and if 'windowStart' is already ahead of the last index of 
          // 'rightChar', we'll keep 'windowStart'
          windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
      }
      // insert the 'rightChar' into the map
      charIndexMap[rightChar] = windowEnd;
      // remember the maximum length so far
      maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}


console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);