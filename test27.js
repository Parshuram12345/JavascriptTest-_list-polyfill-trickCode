//---ques1-------//
// function occurenceFirstStr(haystack, needle) {
//   if (needle.length === 0) {
//     return "needle is Empty String";
//   }
//   //   const result = haystack.indexOf(needle);
//   //   return result;
//   for (let i = 0; i < haystack.length; i++) {
//     for (let j = i + 1; j < haystack.length; j++) {
//       if (haystack.substring(i, j) === needle) {
//         return i;
//       }
//     }
//   }
//   reutrn - 1;
// }
// let haystack = "hello";
// let needle = "ll";
// console.log(occurenceFirstStr(haystack, needle));
// T .C:O(n*2)
// S.C:O(1)

///ques2-------//
function ExtraTypedStr(fname, typed) {
  if (typed.length < fname.length) return false;
  let i = 0;
  let j = 0;
  while (j < typed.length) {
    if (fname[i] === typed.charAt(j)) {
      i++;
      j++;
    } else if (i > 0 && fname.charAt(i - 1) === typed.charAt(j)) j++;
    else {
      return false;
    }
  }
  return i === fname.length;
}
// let fname = "alex";
// let typed = "aaleex";
let fname = "saaeed";
let typed = "ssaaeedd";
const resultSTR = ExtraTypedStr(fname, typed);
console.log(resultSTR);
// T.C:O(n)where n is fname.length (atleast)
// S.C :O(1)

let a = [1, 2, 3].forEach((v) => {
  // return v;
  console.log(v);
  if (v === 2) {
    return;
  }
});
// console.log(a);

[1, 2, 3, 4, 5].filter((v) => {
  if (v % 2 !== 0) {
    return;
  }
  // console.log(v);
});

var obj1 = {
  a: 1,
  b: 2,
};

const obj2 = obj1;
obj2.a = 3;
// console.log(obj1);
// console.log(obj2);

var sum = (v) => {
  for (let i = 0; i < v.length; i++) {
    if (v[i] === 4) {
      return;
    }
    console.log(v[i]);
  }
};
let v = [1, 2, 4];
// sum(v);

let arr = ["el1", "el2", "el3"];

// arr.addedProp = "arrProp";

// elKey are the property keys
// for (let elKey in arr) {
//   console.log(elKey);
// }

// elValue are the property values
for (let elValue of arr) {
  console.log(elValue);
}
