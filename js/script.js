'use strict';

//const obj = new Object();

const options = {
  name: 'test',
  width: 1024,
  heigth: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

console.log(options);
console.log(options.name);
// console.log(options["name"]);

//delete options.name;

//console.log(options);

for (let key in options) {
  console.log(`Свойство ${key}, имеет значение ${options[key]}`);
}

