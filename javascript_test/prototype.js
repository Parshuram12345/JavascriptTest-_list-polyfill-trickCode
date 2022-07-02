const obj = {
  //   name: "parhsuram",
  age: 23,
};
const obj2 = {
  name: "pardeep",
  age: 22,
  city: "noida",
};
const obj3 = {};
console.log(obj2, obj);
// obj.__proto__ = obj2; //never do this
// obj3.__proto__ = obj2; //never do this

// console.log(isNaN("u1"))
// console.log(isFinite())
///call apply and bind ---------//
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

const cheese = new Food('feta', 5);
const fun = new Toy('robot', 40);
console.log(cheese,fun,)

///using call calling the anonymous function --------//
const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (let i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}

// function greet() {
//   const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
//   console.log(reply);
// }

// const ob = {
//   animal: 'cats', sleepDuration: '12 and 16 hours'
// };

// greet.call(ob);  // cats typically sleep between 12 and 16 hours


//using call  property of function without passing first argument----//
let sData = 'Wisen';
function display() {
  console.log('sData value is'+ this.sData);
}
display()

// test();
// test();  // sData value is Wisen
// console.log(globalThis)
