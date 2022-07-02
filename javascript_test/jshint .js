// foo()
// a =0;

let count = 0;
(function() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }
  console.log(count);
})();

let arr = [2, 4, 5, 6];
const aarr = arr.map((element, i, array) => {
  return element * 2;
});
console.log(aarr);

///closure in js with the advantage of time optimization
function find() {
  let a = [];
  for (let i = 0; i < 10000; i++) {
    a[i] = i * i;
  }
  return function(index) {
    console.log(index);
  };
}
// const closure = find();
// console.time("6");
// closure(6);
// console.timeEnd("6"); //very very less
// console.time("50");
// closure(50);
// console.timeEnd("50"); //very less

///
//     for (var i = 0; i < 5; i++) {
//     function inner(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//   };
// inner(i);
// }

/////-----promises sequence output------///
// console.log("start");
// //it returns the promise.../
// async function apiFetch() {
//   console.log("before api fetching");
//   const response =  await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log("after api fetching");
//   const user_data = await response.json();
//   console.log("after geting user_data");
//   return user_data;
// }

// console.log("before calling async");
// const API = apiFetch();
// console.log("promise fullfilled or pending");
// API.then((data) => console.log(data));
// console.log("End");


//////------------------------
async function getApi3() {
    const dataapi3 = await fetch(
      "https://projectheist.herokuapp.com/characters/3"
    );

    if (dataapi3.ok) {
      setCount((count) => count + 1);
    }
    const data3 = await dataapi3.json();
    console.log(data3);
  }
  getApi3()