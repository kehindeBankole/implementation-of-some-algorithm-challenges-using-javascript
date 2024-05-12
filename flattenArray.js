function flattenArray(array, depth) {
  let newArray = [];

  array.forEach((item) => {
    if (!Array.isArray(item)) {
      newArray.push(item);
    } else {
      //console.log(flattenArray(item))
      newArray.push(...flattenArray(item));
      //   if (depth > 1) {
      //     newArray.push(...flattenArray(item, depth - 1));
      //   } else {
      //     newArray.push(...item);
      //   }
    }
  });

  return newArray;
}

// console.log(
//   flattenArray([1, [2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 23, [12, 34, 23]]]]]], 3)
// );
// setTimeout(()=>{

// },0)

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// var name = 'sjj';

// function dd(name) {
//   console.log({ name });
// }
// dd('my name');

// console.log([1,2,3]+1)

let a = {
  key: 3,
  bad: 10,
  baby: 17,
};

// Object.keys(a).map((item)=>{
//   console.log(a[item])
// })

// Object.getOwnPropertyNames(a).forEach((property) => {
//   console.log(property);
// });

function sum(a, b, c) {
  //  console.log(a + b + c);
  return a + b + c;
}

function curry(fn) {
  return function curreid(...args) {
    if (args.length >= fn.length) {
      fn(...args);
    } else {
      return function (...newArgs) {
        return curreid(...args, ...newArgs);
      };
    }
  };
}

let cf = curry(sum);

// console.log(cf(1)(2)(2));

const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 45,
    },
  },
};

// Object.freeze(obj);

function freeze(object) {
  for (x in object) {
    if (typeof object[x]) {
      freeze(object[x]);
    }
  }
  return Object.freeze(object);
}
freeze(obj);
obj.b.d.e = 43;

// console.log(calls.call({}) , "kkd")

// Define myMap method on the Array prototype
Array.prototype.myMap = function (callback) {
  // Log 'this', which refers to the array itself
  const result = [];

  for (let x = 0; x < this.length; x++) {
    result.push(callback(this[x], x));
  }
  // Return 23
  return result;
};

// Optional chaining operator is used to ensure that myMap is called only if the array exists
// When called, it should log the array and return 23
// console.log([1, 2, 3]?.myMap((x, i) => x + i));

// console.log([1, 2, 3, 5].map(function(x) { return this }));

// function chunk(arr, len) {
//   let newRes = [];
//   let newChunk = [];
//   for (let x = 0; x < arr.length; x++) {
//     newChunk.push(arr[x]);
//     if (newChunk.length === len || x === arr.length - 1) {
//       newRes.push(newChunk);
//       newChunk = [];
//     }
//   }
//  // console.log({ newRes, arr, newChunk });
// }
// chunk([1, 2, 3, 4], 3); // => [[1, 2], [3, 4]]

// function compact(arr) {
//   // arr.splice(1, 1);
//   for (let x = 0; x <= arr.length; x++) {

//     if (!arr[x]) {
//       console.log(arr[x]);
//       arr.splice(x, 1);
//     }
//   }
//   console.log({ arr });
//   return arr;
// }

// compact([false, null]);

// function functionLength(fn){
//   console.log(fn.length)
// }

// function bar(a) {}

// functionLength(bar);

function makeCounter(init) {
  let value = init ? init : 0;
  return {
    get: () => {
      return value;
    },
    decrement: () => {
      value--;
      return value;
    },
    reset: () => {
      value = init;
      return value;
    },
    increment: () => {
      value += 1;
      return value;
    },
  };
}

const counter = makeCounter(-4);
counter.get(); // 5
counter.decrement(); // 4
counter.decrement(); // 3
counter.get(); // 3
counter.reset(); // 5

// let aa = [1, 2];
// Array.prototype.myConcat = function (...data) {
//   console.log(data);
//   let newArr = [...this];
//   for (let x = 0; x < data.length; x++) {
//     newArr.push(data[x])
//   }
//   return newArr.flat()
// };

// console.log(aa.myConcat([3,4]));

function countBy(array, iteratee) {
  let acc = {};

  for (let x = 0; x < array.length; x++) {
    let item = array[x];
    const key = iteratee(item);
    acc[key] = (acc[key] || 0) + 1;
  }
}

countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

//countBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => { undefined: 2 }

// countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// => { '3': 2, '5': 1 }

function multiplyThreeNumbers(a, b, c) {
  return a * b * c;
}

function curryNew(fn) {
  return function newCurry(...args) {
    if (args.length === fn.length) {
     return fn(...args);
    } else {
      return function (...newArgs) {
        return newCurry(...newArgs, ...args);
      };
    }
  };
}

const curriedMultiplyThreeNumbers = curryNew(multiplyThreeNumbers);
// curriedMultiplyThreeNumbers(4)(5)(6); // 120
console.log(curriedMultiplyThreeNumbers(4)(5)(6))
