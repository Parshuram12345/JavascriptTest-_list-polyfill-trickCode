// with recursion methods----------//
// ques1
function factorialNum(num) {
  let result = num === 0 || 1 ? 1 : num * factorialNum(num - 1);
  return result;
}
let num = 5;
// console.log(factorialNum(num)); //120
// T.C:O(n)
// S.C:O(1)

//ques2----------//
function reverseNumber(a,n) {
        
    if(n===0)return;
    console.log(a[n]) //5,7,1,4,3,2 //prearea
    reverseNumber(a,n-1)
    // console.log(a[n]) //2,3,4,1,7,5 //postarea
    
}
let a = [2, 3, 4, 1, 7, 5];
// console.log(reverseNumber(a,a.length-1));

// ques3
function fibonacciSeries(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else {
    return fibonacciSeries(n - 1) + fibonacciSeries(n - 2);
    
  }
}
let n = 6;
console.log(fibonacciSeries(n));
// T.C:O(n)
// S.C:O(1)
