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
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]){
      console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
    }
  } else {
    console.log(`Свойство ${key}, имеет значение ${options[key]}`);
  }
}

