///promise of check divide number---//
function divide(a, b) {
  let result = new Promise((resolve, reject) => {
    // try {
    if (!(typeof a === "number" && typeof b === "number" && b != 0)) {
      reject("input is not valid ");
    }
    let res = Math.trunc(a / b);
    resolve(res);
    // } catch {
    //   // reject(err);
    // }
  });
  return result;
}
// divide(8, 4)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

///// with async and await
async function divided(a, b) {
  const output = await new Promise((resolve, reject) => {
    if (!(typeof a === "number" && typeof b === "number" && b != 0)) {
      reject("input is not valid ");
    }
    let res = Math.trunc(a / b);
    resolve(res);
  });
  //   let res = await output;
  console.log(output);
}
let a = 12;
let b = 3;
// divided(a, b);

// function time() {
//   let wait;
// //   if (true) {
//     wait = setInterval(() => {
//       console.log("time is running with settime");
//     }, 2000);
// //   }
//   //  else{
//   return () => {
//     clearInterval(wait);
//   };
//   //
// }
// // time();
