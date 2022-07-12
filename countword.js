// let s = "h"
// if(s[0]!= " "){
//     console.log("sdasg")
// }
// else
//  console.log(s[0])

const obj = { name: "parshuram" };

if (Object.values(obj).length === 0) {
  console.log("object is empty");
} else console.log("object is not empty");

///call apply and bind
const object = {
  name: "parshuram",
  lastname: "saini",
  add: "noida",
  age: 23,
};
const object2 = {
  name: "pardeep",
  lastname: "kumar",
  add: "delhi",
  age: 22,
  callApplymethod: function(a, b) {
    console.log(this.name + " " + this.lastname + a + b);
  },
};
object2.callApplymethod.call(object, "from", "haryana");

///object .create method
const person = {};
const ovj = Object.create(person);
console.log(Object.entries(person).length);

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// object using function Constructor ///
// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");
console.log(Object.entries(myFather).length);

///class constructor;
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const Obj = new Employee("parshuram", 23);
console.log(Object.entries(Obj).length);

// console.log(NaN === NaN);
// ///immutable object
// const myob = Object.assign({}, luck);
// luck.name = "parshuram";
// console.log(luck);

var ot = {
  // assigns 10 to value
  value: 10,
};
// creates a non-extensible object
Object.seal(ot);
// the value gets updated to 20
ot.value = "parshuram";
ot.max =0
console.log(ot);

