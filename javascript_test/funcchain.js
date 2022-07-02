//creating a function Land()
function Land() {
  this.area = "";
  this.status = "for Sale";
}
//Setting status open for sale
Land.prototype.open = function() {
  this.status = "Open for Sale";
  return this;
};
//Setting status not for sale
Land.prototype.close = function() {
  this.status = "Not for Sale";
  return this;
};
//Setting Parameters
Land.prototype.setParams = function(area) {
  this.area = area;
  return this;
};
//printing land status
Land.prototype.doorStatus = function() {
  console.log("The", this.area, "Land is", this.status);
  return this;
};
//creating a land object
var land = new Land();
land
  .setParams("500 sq ft")
  .close()
  .doorStatus()
  .open()
  .doorStatus();

// running perfectly fine
///call the function in two ways//------
function sum(...args) {
  const rest = args;
  return rest.reduce((curr, prev) => (curr += prev), 0);
}
function addcurry(...args) {
  console.log(args);
  return function(...args1) {
    // console.log(...args1);
    const total = args.concat(args1);
    // console.log(total);
    if (args1.length === 0) return sum(...total);
    return addcurry(...total);
  };
}
// console.log(addcurry(6, 3)(5)());
// console.log(addcurry(0)(3)(5)());
// console.log(addcurry(-1, 3)(5)());

///-------//////
//infinite currying
function add(a) {
  // console.log(a);
  return function(b) {
    console.log(a);
    if (b) return add(a + b);

    // return a;
  };
}
console.log(add(5)(3)(4)(9)(-2)());

const my = {
  name: "parshuram",
  age: 22,
  city: "noida",
};
const mymap = new Map([
    ["firstname", "mr"],
    [2, 21],
    ["course", "javascript"]
])
//for object 
for (let key in my) {
  console.log(`${key} : ${my[key]}`);
}
// for map
for (let [key,value] of mymap) {
  console.log(`${key} : ${value}`);
}
Object.keys(my).forEach((elem) => {
  console.log(`${elem} and it values is ${my[elem]}`);
});
