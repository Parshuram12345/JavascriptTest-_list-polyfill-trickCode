// let c =8;
// function foo(){
//     // console.log(c)
//    c=9;
//    console.log(c)
// }
// foo()
// console.log(c)

//some tricky js code
// console.log("9" > "11"); //true
// console.log("25" > "33"); //false
// console.log("9" > 11); // false
// console.log("9" - +"11"); //-2
// console.log("" > -1); //true
// console.log("1" - -"1"); //2
// console.log("1" - +"1"); //0
// console.log("1" + -"1"); //1-1
// console.log(7 < 8 < 9); //true
// console.log(9 > 8 > 7); //false
// console.log(["a"]+["b"]) //"ab"
// console.log([]+[]) //""
// console.log(![]) //false
// console.log(![]+[]) //false
// console.log("a"-"b") //NaN
// console.log(true>-1) //true
// console.log(6>false) //true
// console.log(5+false)

//polyfill for map ,filter and reduce
//for map method---------//
Array.prototype.myMap = function(cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this)); //it take three arugment (element,index,array)
  }
  return temp;
};

let nums = [1, 2, 3, 4, 5];
const doublearr = nums.myMap((element, i, array) => {
  return element * 2;
});
// console.log(doublearr);

//for filter method---------//
Array.prototype.myfilter = function(cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    // const result = cb(this[i], i, this); //it take three arugment (element,index,array)
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
    // console.log(temp)
  }
  return temp;
};
let num = [1, 2, 3, 4, 5];
const greaterthanTwo = num.myfilter((element) => {
  return element > 3;
});
console.log(greaterthanTwo);

//for reduce method---------//
Array.prototype.myreduce = function(cb, initialvalue) {
  let accumlator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumlator = accumlator ? cb(accumlator, this[i], i, this) : this[i]; //it take four arugment (accumlator,currentvalue,index,array)
  }
  return accumlator;
};

let arr = [1, 2, 3, 4, 5];
const sumOfArr = arr.myreduce((acc, curr, i, array) => {
  return acc + curr;
}, 0);

console.log(sumOfArr);

///polyfill for foreach loop--------//
Array.prototype.myForEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const arrData = [5, 6, 7, 8, 9];

arrData.myForEach((element, i, arr) => {
  console.log(element, i, arr);
});
