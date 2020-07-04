'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log (b);
console.log (a);

const obj = {
  a: 5,
  b: 1
};


function copy (mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

newNumbers.c.x=10;

console.log(numbers);
console.log(newNumbers);

