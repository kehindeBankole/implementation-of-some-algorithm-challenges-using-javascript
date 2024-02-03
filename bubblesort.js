function bubblesort(arr) {
  let checked;
  do {
    checked = false;
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] > arr[x + 1]) {
        console.log(checked, x);
        let temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;
        checked = true;
      }
    }
  } while (checked);

  return arr;
}

console.log(bubblesort([9, 12, 28, 2, 1, 34, 4]));
