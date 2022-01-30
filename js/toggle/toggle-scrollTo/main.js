'use strict';
//Give a message when crolled
window.addEventListener('scroll', () => {
  console.log('scrolled');
});

//Give a line number when scrolled
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  console.log(scrolled);
});

//Give an alert when scrolled to the bottom of the page
window.addEventListener('scroll', () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  if (Math.ceil(scrolled === scrollable)) {
    alert('you reached the bottom');
  }
});
