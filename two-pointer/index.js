function pairWithTargetSum(arr, targetSum) {
  //Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target
  let right = arr.length - 1;
  for (let left = 0; left < right; left++) {
    const currentSum = arr[left] + arr[right];
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
//pairWithTargetSum([1, 2, 3, 4, 6], 6);

function removeDuplicates(arr) {
  //can also be implemented with set , but using this method just to practice 2 pointer
  /*Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).
Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it*/
  let nextNonDuplicate = 1;
  for (let x = 0; x < arr.length; x++) {
    if (arr[nextNonDuplicate - 1] !== arr[x]) {
      arr[nextNonDuplicate] = arr[x];
      nextNonDuplicate += 1;
    }
  }
  return nextNonDuplicate;
}
//removeDuplicates([2, 3, 3, 3, 6, 9, 9]);

function squareSortedArray(arr) {
  //Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
  return arr.map((item) => item * item).sort((a, b) => a - b);
}
//squareSortedArray([-2, -1, 0, 2, 3]);

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