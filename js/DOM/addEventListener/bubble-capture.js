// ** when clicked, all the element behind give console message
// **(if child element clicked, parent and grandparent give console message)
// ** it is called "Bubbling"
grandparent.addEventListener(
  'click',
  e => {
    console.log('Grandparent Capture');
  },
  {capture: true}
);
grandparent.addEventListener('click', e => {
  console.log('Grandparent Bubble');
});

parent.addEventListener(
  'click',
  e => {
    e.stopPropagation();
    console.log('Parent Capture');
  },
  {capture: true}
);
parent.addEventListener('click', e => {
  console.log('Parent Bubble');
});

child.addEventListener(
  'click',
  e => {
    console.log('Child Capture');
  },
  {capture: true}
);
child.addEventListener('click', e => {
  console.log('Child Bubble');
});

document.addEventListener(
  'click',
  e => {
    console.log('Document Capture');
  },
  {capture: true}
);
document.addEventListener('click', e => {
  console.log('document Bubble');
});
