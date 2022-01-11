// 1. Ternary Operator 
//💔
function getResult(score) {
  let result;
  if (score > 5) {
    result = '👍';
  } else if (score <= 5) {
    result = '👎';
  }
  return result
}

//Good Code ?
function getResult(score) {
  return score > 5 ? '👍' : '👎';
}

// 2. Nullish Coalescing Operator
//💔
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to Display';
  }
  console.log(message);
}

//Good Code ? 
function printMessage(text) {
  const message = text ?? 'Nothing to Display';
  console.log(message);
}

// leftExpr(null / undefined) ?? rightExpr
// leftExpr(null / undefined / -0, 0 / NaN / false / '', "", ``) || rightExpr
// Same for Function : const result = getInitialState() ?? fetchFromServer();


// 3. Object Destructuring
const person = {
  name: 'Julia',
  age: 20,
  phone: '0102322222',
};

//💔
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

//💔
function displayPerson(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// Good code ? 
// const {} = variableName
function displayPerson(person) {
  const {name, age} = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// 4. Spread Syntax
const item = { type: '👔', size: 'M'};
const detail = { price: 20, made: 'Korea', gender: 'M' };

//💔
item['price'] = detail.price;

//💔
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

//💔
const newObject2 = {
  type : item.type,
  size : item.size,
  price : detail.price,
  made : detail.made,
  gender : detail.gender,
};

// Good Code ?
const shirt0 = Object.assign(item, 
  detail);

// Better Code !
// Good point :  easiler to add new data
const shirt = { ...item, ...detail}

const shirt = { ...item, ...detail, price : 40//(update infos)
}

// 5. Optional Chaining
const bob = {
  name : 'Julia',
  age : 20,
};
const anna = {
  name : 'Julia',
  age : 20,
  job : {
    title : 'Software Engineer'
  },
};

//💔 :  it's not best to use && when it is not sure that we have data of If statement
function displayJobTitle(person) {
  if (person.Job && person.job.title) {
    console.log(person.job.title);
  }
}

// Good Code ?
function displayJobTitle(person) {
  if (person.job?.title){
    //if the person doesn't have job, the if statement doesn't execute
    //and return false(good to not waste data)
    console.log(person.job.title);
  }
}

// Good Code 2 with Nullish Coalescing
function displayJobTitle(person) {
  const title = person.job?.title ?? 'no job yet';
  console.log(title);
}

//6. Template Literals (Template String)
const person = {
  name : 'Julia',
  score : 4,
};

//💔
console.log(
  'Hello' + person.name + ', Your current score is: ' + person.score
);

// Good Code ? 
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// Good Code 2
function greetings(person) {
  const {name, score} = person
  console.log(`Hello ${name}, Your current score is: ${score}`);
}

// 7. Looping : get result of even numbers and multiply 4 and add all the numbers
const items = [1, 2, 3, 4, 5, 6]

//1 💔
const evens = getAllEvent(items);
const multiple = miltiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

//2 💔
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

//3 💔
function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

//4 💔
let sum = 0; {
  for (let i = 0; i < items.length; i++){
    sum += items[i];
  }
  return sum;
}


// Good Code ? from 2 💔
function getAllEvens(items) {
  return items.filter((num) => num % 2 === 0);
}

// Good Code from 3 💔
function multiplyByFour(items) {
  return items.map(num => num * 4);
}

// Good Code from 4 💔
function sumArray(items) {
  items.reduce((a, b) => a + b, 0);
}

// it's possible to make the code above as one
const evens = items.filter((num) => num % 2 ===0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// Best Good Code by Chainging
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
  console.log(result);

// 8. Promise -> Async/await
//💔
function displayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

//Good Code ?

async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}
