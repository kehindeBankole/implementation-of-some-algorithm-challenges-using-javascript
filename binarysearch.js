function binrecurs(arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) {
      return "found at" + " " + mid;
    }
    if (arr[mid] < x) {
      return binrecurs(arr, x, mid + 1, end);
    } else {
      return binrecurs(arr, x, start, mid - 1);
    }
  }
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(binrecurs(arr, 6, 0, arr.length - 1));
  