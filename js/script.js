'use strict';

const arr = [2, 13, 26, 8, 10];
arr.sort();

console.log(arr);

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
  return a - b;
}

