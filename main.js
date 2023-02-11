const progress = document.getElementById('line-progress');
  const steps = document.querySelectorAll('.step');
  const contents = document.querySelectorAll('.section-content');
  let active = 1;

  steps.forEach((step, idx) => {
    step.addEventListener('click', () => {
      active = idx + 1;

      document.querySelector('.step.active').classList.remove('active');
      document.querySelector('.section-content.active').classList.remove('active');

      step.classList.add('active');
      contents[idx].classList.add('active');

      update();
    });
  });

  function update() {
    progress.style.width = ((active - 1) / (steps.length - 1)) * 100 + '%';

    steps.forEach((step, idx) => {
      if (idx < active) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    contents.forEach((content, idx) => {
      if (idx === active - 1) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

let moon = document.getElementById('moon');
let stars = document.getElementById('stars');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');
window.addEventListener('scroll', function() {
    var value = window.scrollY;
    moon.style.top = -value * -1.05 + 'px';
    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top =-value * -0.5 + 'px';
    header.style.top =-value * -0.5 + 'px';
    mountains_front.style.top =-value * 0 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
});

let toggle = document.querySelector('.toggle');
    let menu = document.querySelector('.menu');
    toggle.onclick = function(){
      menu.classList.toggle('active')
    }