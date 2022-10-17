function findAverageOfSubArray(k, arr) {
    let left = 0;
    let sum = 0.0
    const result = [];
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right]
        if (right >= k - 1) {
            result.push(sum / k); // calculate the average
            sum -= arr[left]; // subtract the element going out
            left += 1; // slide the window ahead
        }
    }
    console.log(result)
}
findAverageOfSubArray(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])

