function countNonDuplicates(arr) {
  //can also be implemented with set , but using this method just to practice 2 pointer
  /*Given an array of sorted numbers, remove all duplicate number instances from it in-place, such that each element appears only once. The relative order of the elements should be kept the same and you should not use any extra space so that that the solution have a space complexity of O(1).
  Move all the unique elements at the beginning of the array and after moving return the length of the subarray that has no duplicate in it*/
  let left = 0;
  let right = 1;
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] !== arr[right]) {
      arr[left] = arr[right];
      left += 1;
    }
    right += 1;
  }
  return left
}
console.log(countNonDuplicates([2, 3, 3, 3, 3, 3 , 6,  7, 7, 7, 7, 7, 7, 8 , 8 ,8 , 9, 9 , 9 , 9 ,9 ]));
