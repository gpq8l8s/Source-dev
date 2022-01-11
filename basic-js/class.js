class person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  speak(){
    console.log(`${this.name}: hello!`);
  }
}

// Static properties and methods
class Article{
  static publisher = 'Dream coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }
  static printPublisher(){
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//inheritance : a way for one class to expand another class
class shape{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color of`);
  }
  getArea(){
    return width * this.height;
  }
}

//class checking: insteadOf

//Easy class!
// previous version : by using function
function character(a, b) {
  this.q = a;
  this.w = b;
}

var nunu = new character('consume', 'snowball')
var garen = new character('strike', 'knife')
console.log(nunu);
console.log(garen);

// New versino : by using class
class Hero  {
//class name: start with capital letter
  constructor(a, b) {
    this.q = a;
    this.w = b;
  }
}
console.log(`q: ${'consume'}, w: ${'snowball'}`);
console.log(`${'strike'}, ${'arrow'}`);