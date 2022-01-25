'use strict';
//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const earth = document.querySelector('.earth img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const color = document.querySelector('.color');

//Moving Animation Event
container.addEventListener('mousemove', e => {
  //console.log(e.pageX, e.pageY);
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'none';
  //Popout
  title.style.transform = 'translateZ(150px)';
  earth.style.transform = 'translateZ(200px) rotateZ(-45deg)';
  description.style.transform = 'translateZ(125px)';
  color.style.transform = 'translateZ(100px)';
  purchase.style.transform = 'translateZ(75px)';
});

//Animate Out
container.addEventListener('mouseleave', e => {
  card.style.transition = 'all .5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  title.style.transform = 'translateZ(0px)';
  earth.style.transform = 'translateZ(0px) rotateZ(0deg)';
  description.style.transform = 'translateZ(0px)';
  color.style.transform = 'translateZ(0px)';
  purchase.style.transform = 'translateZ(0px)';
});
