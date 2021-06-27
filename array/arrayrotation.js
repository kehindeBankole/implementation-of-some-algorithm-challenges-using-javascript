//Difficulty Level : Easy

//Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements. 
let shifted = []

function rotate(arr , d) {
    for (let x = 0; x < d; x++) {
        shifted = arr.shift(arr[x])
        arr.push(shifted)

    }
    console.log (arr)
}
rotate([1 ,2 , 3 ,4, 5 ,6 ,7] , 3)