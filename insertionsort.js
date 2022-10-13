function insertionsort(arr) {
    for (let x = 1; x < arr.length; x++) {
        let key = arr[x]
        let j = x - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
    return arr
}

console.log(insertionsort([2, 10, 3, 4, 5]))