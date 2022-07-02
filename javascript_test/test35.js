function maxOfArray(arr, n, max) {
  if (n >= 0) {
    // max = max < arr[n] ? arr[n] : max;
    if (max < arr[n]) {
      max = arr[n];
    }
    return maxOfArray(arr, n - 1, max);
    //   console.log(max);
  } else return max;
}
let arr = [4, 2, 5, 6, 3, 8, 1];
let max = 0;
let n = arr.length;
console.log(maxOfArray(arr, n - 1, max));

// ques2 ------//
function lastIndex(a, n, x = 4) {
  if (n === -1) return -1;
  if (a[n] === x) return n;
  return lastIndex(a, n - 1);
}
let a = [4, 5, 6, 4, 6];
console.log(lastIndex(a, a.length - 1));

function fun(x) {
  console.log(typeof x, arguments.length);
}
fun(undefined);
fun(7);
fun("1", "2", "3");

const Students ={
  name:"sdf",
  id:5,
  age:23,

}
let id =5;
for(let values in Students){
  var index ;
    if(Students[values] ===id){
      index = Students[values];
      break;
    }
}
console.log(index)