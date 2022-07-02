// ques1--------
function bracketPair(s) {
  for (let i = 0; i < s.length; i = i + 2) {
    if (s.charAt(i) != s.charAt(i + 1)) {
      return false;
    }
  }
  return true;
}
let s = "()(]{}";
console.log(bracketPair(s));
// T.C:O(n)
// S.C:O(1)

// ques2------
function removeCharacter(str) {
  if (str.length <= 1) return str;
  let newStr;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] != str[i + 1]) {
    //   console.log(newStr);
      newStr += str[i];
    }
  }
  newStr += str[str.length - 1];
  return newStr;
}
let str = "aabbaa";
console.log(removeCharacter(str));
// T.C:O(n)
// S.C:O(1)
//////
// function removeCharacter(str){
//   const newmap = new Map();
//   let uniquestr="";
//   for(let i=0;i<str.length;i++)
//   {
//       if(!newmap.containkey(str[i]))
//       {
//           newmap.set(str[i],1)
//       }
//       else
//         {
//            uniquestr = newmap.get(i)
//         }
//   }
// }

// removeCharacter(str)
