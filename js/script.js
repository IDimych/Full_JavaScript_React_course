'use strict';

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();

newArr[1] = 'aasdalsj';
console.log(newArr);
console.log(oldArr);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newArray = [...array];

const q = {
  one: 1,
  two: 2
};

const newObj = {...q};





