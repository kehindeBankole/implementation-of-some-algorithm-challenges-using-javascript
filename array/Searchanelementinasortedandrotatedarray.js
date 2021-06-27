let test = [5, 6, 7, 8, 9, 10, 1, 2, 3]
let key = 3
let message;
for (let s = 0; s < test.length; s++) {
    if (test[s] === key) {
        message = "found at index " + s
    } else {
        message = "not found yo"
    }
}
console.log(message)