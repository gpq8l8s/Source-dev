console.log('Hello world');

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
  // console.log("Hello " + person + ", today is" + date.toDateString() + "!")
}
greet('Brendan', new Date());

//Implements
interface car {
  color: string;
  wheels: number;
  start(): void;
}

//Extends
interface Benz extends car {
  door: number;
  stop(): void;
}

class BMW implements car {
  color: string;
  wheels: 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('..go');
  }
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop');
  },
  color: 'black',
  wheels: 4,
  start() {
    console.log('..go');
  },
};

const b = new BMW('green');
console.log(b);
b.start();

console.log(benz);

function
function hello(name?: string) {
  return `Hello, ${name || "world"}`;
}

function hello(name = 'jam') {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello('sam');

function age(name: string, age?: number): string {
  if (age !== undefined) {
    return `$hello, ${name}. you are ${age} years.`;
  } else {
    return `hello ${name}`;
  }
}

console.log(age('sam', 30));
console.log(age('sam', undefined));

interface user {
  name: string;
}

const sam: user = {name: 'sam'};

function showName(age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}

const a = showName.bind(sam);
a(30, 'm');

interface User {
  name: string;
  age: number;
}

function join(name: string, age: number): User;
function join(name: string, age: number): string;
function join(name: string, age: number | string): User | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return 'age. in. number.';
  }
}

const jane: User = join('Jane', 30);
const sam: string = join('Sam', '30');
