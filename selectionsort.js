function selectionSort(arr) {
  for (let x = 0; x < arr.length; x++) {
    let lowest = x;
    for (var y = x + 1; y < arr.length; y++) {
        console.log(x,y)
      if (arr[y] < arr[lowest]) {
        lowest = y;
      }
    }
    let temp = arr[x];
    arr[x] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

console.log(selectionSort([3, 9, 1, 23, 132, 0]));
