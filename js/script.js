'use strict';

const arr = [1, 2, 3, 6, 8];

console.log(arr);

arr.pop();
console.log(arr);

arr.push(8);
arr.push(10);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let value of arr) {
  console.log(value);
}
