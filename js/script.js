'use strict';

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  let num = 10;
  console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


const logger = function() {
  console.log("Hello")
};

logger();

const calc = (a, b) => {
  console.log('1');
  return a + b;
};

console.log(calc(4, 6));