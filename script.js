
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//   alert('Click');
// };

// btn.addEventListener('click', () => {
//   alert('Click');
// });

// let i = 0;
const deleteElement = (e) => {
  console.log(e.target);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
  event.preventDefault();

  console.log(event.target);
});


