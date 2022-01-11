//parent element
function machine() {
  this.q = 'strike';
  this.x = 'snowball';
}
machine.prototype.name = 'Kim'

//child element : able to access datas from parent element
//  if input 'person.name' in console, you can see it took the value 'Kim' from parent element
var person = new machine() 

//prototype.chine : 
function makeHyebin() {
  this.c = 'coffee';
  this.r = 'bread';
  makeHyebin.prototype.food = 'brunch'
}

const antoine = new makeHyebin()
