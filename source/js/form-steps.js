let step1 = document.getElementById('step--first');
let step2 = document.getElementById('step--second');
let step3 = document.getElementById('step--third');

let dot1 = document.querySelector('.bullets__one');
let dot2 = document.querySelector('.bullets__two');
let dot3 = document.querySelector('.bullets__three');
let link1 = document.querySelector('.bullets__1');
let link2 = document.querySelector('.bullets__2');
let link3 = document.querySelector('.bullets__3');

let go2from1 = document.getElementById('1-2');
let go3from2 = document.getElementById('2-3');

let go1from2 = document.getElementById('2-1');
let go2from3 = document.getElementById('3-2');

go2from1.addEventListener('click', function (evt) {
  evt.preventDefault();
  step1.classList.toggle('step--hidden');
  step2.classList.toggle('step--hidden');
  dot1.classList.toggle('bullets__bullet--progress');
  dot2.classList.toggle('bullets__bullet--progress');
  link1.classList.toggle('bullets__text--progress');
  link2.classList.toggle('bullets__text--progress');
})

go3from2.addEventListener('click', function (evt) {
  evt.preventDefault();
  step2.classList.toggle('step--hidden');
  step3.classList.toggle('step--hidden');
  dot2.classList.toggle('bullets__bullet--progress');
  dot3.classList.toggle('bullets__bullet--progress');
  link2.classList.toggle('bullets__text--progress');
  link3.classList.toggle('bullets__text--progress');
})

go1from2.addEventListener('click', function (evt) {
  evt.preventDefault();
  step1.classList.toggle('step--hidden');
  step2.classList.toggle('step--hidden');
  dot1.classList.toggle('bullets__bullet--progress');
  dot2.classList.toggle('bullets__bullet--progress');
  link1.classList.toggle('bullets__text--progress');
  link2.classList.toggle('bullets__text--progress');
})

go2from3.addEventListener('click', function (evt) {
  evt.preventDefault();
  step2.classList.toggle('step--hidden');
  step3.classList.toggle('step--hidden');
  dot2.classList.toggle('bullets__bullet--progress');
  dot3.classList.toggle('bullets__bullet--progress');
  link2.classList.toggle('bullets__text--progress');
  link3.classList.toggle('bullets__text--progress');
})
