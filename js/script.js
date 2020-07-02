"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + "5");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log('Постфиксная операция')
console.log(incr++);
console.log(decr--);

console.log('Префиксная операция')
console.log(++incr);
console.log(--decr);

console.log('5%2');
console.log(5%2);

console.log(2*4 == 8);
console.log(2*4 == '8');
console.log(2*4 === '8');
console.log(2*4 === 8);

const isChecket = true,
      isClose = true;

console.log(isChecket && isClose);
console.log(isChecket || isClose);




