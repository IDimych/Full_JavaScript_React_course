const btns = document.querySelectorAll ('button');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
console.log(btns[1].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

if (btns[1].classList.contains('red')) {
  console.log('red');
}