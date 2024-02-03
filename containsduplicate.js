function containsDuplicate(nums) {
  const newArr = new Set([...nums]);

  return [...newArr].length !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 3]));
