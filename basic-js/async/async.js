//async & await
//clear style of using promise

//1. async
async function fetchUser() {
    //network request in 10 sec..
    return 'ellie';
}

const user = fetchUser();
user
.then(console.log);

//2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎'
}
async function getBanana() {
  await delay(1000);
  return '🍌'
}

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
};

pickFruits().then(console.log)

async function  pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} +${banana}`;
}

//3. userful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log)