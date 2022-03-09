const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// ** Show all the infos
grandparent.addEventListener('click', e => {
  console.log(e);
});

// ** Show html of the element
grandparent.addEventListener('click', e => {
  console.log(e.target);
});

// ** Show the text when clicked
grandparent.addEventListener('click', e => {
  console.log('grandparent 1');
  console.log('grandparent 2');
});

// // ** when clicked, all the element behind give console message
// // **(if child element clicked, parent and grandparent give console message)
// // ** it is called "Bubbling"
grandparent.addEventListener('click', e => {
  console.log('Grandparent Bubble');
});
// // ** if you want to remove eventListener, use removeEventListenr()
// // ** possible to check by removeEventListener with console.log() instead of the function we used
parent.addEventListener('click', printHi());

setTimeout(() => {
  parent.removeEventListener('click', printHi);
}, 2000);

child.addEventListener('click', e => {
  console.log('Child Bubble');
});
function printHi() {
  console.log('Hi');
}

const divs = document.querySelectorAll('div');

divs.forEach(div => {
  div.addEventListener('click', () => {
    console.log('hi');
  });
});
document.addEventListener('click', () => {
  if (e.target.marches('div')) {
    console.log('hi');
  }
});

// ** One of the good way to make js considers all the <div>s
// ** make a function like under
addGlobalEventListener('click', 'div', e => {
  console.log('Hi');
});
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) callback(e);
  });
}
//** create <div> on JS with createElement
//** when you click, it doesn't give a console message unlike example above
//** It's because newDiv is placed under the forEach function
const newDiv = document.createElement('div');
newDiv.style.width = '250px';
newDiv.style.height = '250px';
newDiv.style.backgroundColor = 'black';
document.body.append(newDiv);
