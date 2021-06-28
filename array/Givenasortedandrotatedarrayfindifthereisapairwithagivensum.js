// Given a sorted and rotated array, find if there is a pair with a given sum

//Difficulty Level : Medium

//Given an array that is sorted and then rotated around an unknown point. Find if the array has a pair with a
// given sum ‘x’. It may be assumed that all elements in the array are distinct.

let test = [11, 15, 6, 8, 9, 10]
let x = 16
let message;
for (let i = 0; i < test.length; i++) {
    for (let j = 1; j < test.length; j++) {
        if (test[i] + test[j] === x) {
            message = true;
        }
    }
}
console.log(message)