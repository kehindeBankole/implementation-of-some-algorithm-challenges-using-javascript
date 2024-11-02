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

    } else if (currentSum < targetSum) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}


function strStr(haystack, needle) {
  if (needle === "") return 0; // If needle is an empty string, return 0
  
  const haystackLen = haystack.length;
  const needleLen = needle.length;
  console.log(haystackLen - needleLen)
  // Iterate through the haystack up to the point where the remaining substring could be long enough to contain the needle
  for (let i = 0; i <= haystackLen - needleLen; i++) {
    
      // Check if the substring of haystack from i to i + needleLen matches needle
      let j = 0;

      while (j < needleLen && haystack[i + j] === needle[j]) {
          j++;
      }
      // If the entire needle has been matched, return the start index
      if (j === needleLen) {
          return i;
      }
  }
  
  // If no match was found, return -1
  return -1;
}


console.log(strStr("sadbutsad", "sad"))
