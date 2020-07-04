'use strict';

//const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  heigth: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function (){
    console.log('Test makeTest');
  }
};

options.makeTest();

console.log(options);

console.log(Object.keys(options));
console.log(Object.keys(options).length);


