// // let s = "ababc",
// //   s2 = "";
// // if (s.includes(s2)) {
// //   console.log("lsadfls");
// // }
// // let strs = ["flower", "flow", "flight"];
// // let sr = strs.sort((a, b) => b - a);
// // console.log(sr);

// //ques1------//
// function antiClockwiseMove(array, kth) {
//   let rotateTimes = kth % array.length;
//   while (rotateTimes > 0) {
//     let firstElement = array[0];
//     for (let i = 0; i < array.length; i++) {
//       array[i] = array[i + 1];
//     }
//     array[array.length - 1] = firstElement;
//     rotateTimes--;
//   }
// }
// let array = [1, 2, 3, 4, 5];
// let kth = 3;
// antiClockwiseMove(array, kth);
// // T .C :O(n*m)
// //  S.C:O(1)

// //ques2-----
// function removeduplicate(arr) {
//   let temp = [];
//   let freqarr = Array.from({ length: Math.max(...arr) + 1 }, () => 0);
//   for (let i = 0; i < arr.length; i++) {
//     freqarr[arr[i]]++;
//   }
//   for (let i = 1; i < freqarr.length; i++) {
//     if (freqarr[i] <= 2) {
//       temp.push(i);
//     }
//   }
//   return temp;
// }
// let arr = [1, 2, 3, 3, 4, 4, 4, 5, 5, 6];
// console.log(removeduplicate(arr));
// // T .C : O(n)
// // S .C : O(n)

// // let i = "a";
// // let j = "b";
// console.log("i" > "j");

// function fun(a, b) {
//   arguments[1] = 2;
//   console.log(b);
// }
// fun(2);
let fun = function func() {
  console.log(func === func);
};
fun();
