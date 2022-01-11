// 1. let
let globalName = 'global name';
{
  let name = 'me';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// 2. var
// var hoisting
console.log(age);
age = 4;
var age;

// 3. variable types
  // number : special numeric values
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' /2;

  // string : ``, boolean, null, undefined, symbol
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymnol1 = Symbol.for('id');
const gSymnol2 = Symbol.for('id');
console.log(gSymnol1 === gSymnol2);


// 4. Dynamic typing
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(text.charAt(0)); //Be sure that the text is string
console.log(`value ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value ${text}, type: ${typeof text}`);

// 5. object
const me = {name: 'me', age: 20};
console.log(me);
me.age = 21; //re-declaration
console.log(me);

