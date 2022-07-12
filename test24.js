// ques1......\

function rangeSum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

let start = 5;
let end = 9;
let result = rangeSum(start, end);
console.log(result);
// T .C :-(n1-n2+1),S.C: O(1)

// ques2----
function stringSum(string) {
  let sum = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 48 && string.charCodeAt(i) <= 57)
      sum += string.charAt(i);
  }
  return sum;
}
let string = "123xyz";
let res = stringSum(string);
console.log(res);
// T.C : O(n),S.C O(1)

// const str = "1xyz23";
// const stringadd = (str) => {
//   let res = 0;
//   let s = 0;
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (!isNaN(ch)) {
//       s += ch;
//     } else {
//       console.log(parseInt(s));
//       res += parseInt(s);
//       s = "0";
//     }
//   }
//   return res + parseInt(s);
// };
// console.log(stringadd(str));

const calculateSum = (s1) => {
  let sum = 0;
  let num = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.charCodeAt(i) >= 48 && s1.charCodeAt(i) <= 57) {
      //   console.log(s1.charCodeAt(i) - 48);
      num = num * 10 + s1.charCodeAt(i) - 48;
      console.log(num, typeof num);
    } else {
      sum = sum + num;
      num = 0;
    }
  }
  if (num != 0) {
    sum += num;
  }
  return sum;
};
const s1 = "123xyz1";
const s2 = "1xyz23";
console.log(calculateSum(s2));
