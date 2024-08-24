function twoSum(nums, target) {
  // Create a hashmap to store the difference and index
  const hashmap = {};

  // Iterate over the array
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    // Check if the complement exists in the hashmap
    if (hashmap.hasOwnProperty(complement)) {
      // If it exists, return the indices
      return [hashmap[complement], i];
    }

    hashmap[num] = i;

    console.log(complement , hashmap)
  }

  // If no solution is found, return an empty array (though the problem assumes there is always one solution)
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
