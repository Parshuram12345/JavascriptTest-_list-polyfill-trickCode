//ques1------// ---using recursion ---
function powerOfNum(x, n) {
  let pow;
  if (n === 0) {
    return 1;
  } else {
    return x * powerOfNum(x, n - 1);
  }
}
// let x =2.00000;
let x = 2.1;
let n = 3;
let res = powerOfNum(x, n);
console.log(res.toFixed(5));

//ques2------//
function arrayFind(arr, target, left, right) {
  let mid;
  if (left <= right) {
    // console.log("inside the loop");
    mid = Math.trunc((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return arrayFind(arr, target, left, mid - 1);
    } else {
      return arrayFind(arr, target, mid + 1, right);
    }
  }
  return -1;
}

let arr = [-1, 0, 3, 5, 9, 12];
let target = -1;
let left = 0;
let right = arr.length - 1;
console.log(arrayFind(arr, target, left, right));
