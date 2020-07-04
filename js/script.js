'use strict';

const arr = [2, 3, 6, 8, 10];

arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} внутри массива ${arr}`);
});

