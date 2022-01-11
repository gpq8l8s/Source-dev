'use strict';

//promise is javascript object for asnychrous operation
//state: pendint -> fulfilled or rejected
//producer vs consumer

//1. producer
//when new promise is created, the executor runs antomatically
const promise = new Promise((resolve, reject) => {
  //doing heavy work (networks, read files)
  console.log('doing something...');
  setTimeout(() =>{
    resolve('ellie');
    reject(new Error('no network'));
  }, 2000);
}); 

//2. consumer: able to get date by using then, catch, finally
promise //
.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally');
});

//3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));


//error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error (`error! ${hen} => 🥚`)), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
  setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

//getHen()
//  .then(hen => getEgg(hen))
//  .then(egg => cook(egg))
//  .then(meal => console.log(meal));

getHen()
  .then(getEgg)
  .catch(error => {
    return '🍟';
  })
  .then(cook)
  .then(console.log);

//