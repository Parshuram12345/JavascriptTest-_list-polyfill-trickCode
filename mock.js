let arr = [1, 2, 3];
console.log(typeof arr);
if (typeof arr == Object) {
  console.log("this is array :" + arr);
} else console.log("this is not array type :");
//object
const obj = {
  name: "sr",
  age: 23,
};
const obj1 = [
  {
    name: "sr",
    age: 23,
  },
  {
    name: "mk",
    age: 26,
  },
];

let newformat = "";
let res = obj1.map((elem,index) => {
    return (
    elem)
    // console.log(elem)
});
console.log(res)
// for (let key in obj1[elem]) {
//      console.log(key)
//   newformat += `${key}=${obj[key]}`;
// }
// console.log(newformat);

function doWork(){}

if (typeof doWork === 'function') {
    console.log('✅ function returns true');
  }
  else {
    console.log("not funcition")}
