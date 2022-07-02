// ques1--------
function AnagramStr(s, t) {
  if (s.length != t.length)
    //not equal length
    return false;
  let newarrS = Array.from({ length: 128 }, () => 0);
  //   let newarrT = Array.from({ length: 128 }, () => 0);

  for (let i = 0; i < s.length; i++) {
    newarrS[s.charCodeAt(i)]++;
    newarrS[t.charCodeAt(i)]--;
  }
  //   console.log(newarrT);
  console.log(newarrS);
  for (let i = 0; i < newarrS.length; i++) {
    if (newarrS[i] > 0) return false;
  }
  return true;
  //   let newS = s.split("").sort();
  //   let newT = t.split("").sort();
  //   console.log(newS, newT);
  //   for (let i = 0; i < s.length; i++) {
  //     if (newS[i] != newT[i]) {
  //       return false;
  //     }
  //   }
  //   return true;
}
// let s = "anagram";
// let t = "nagaram";
// let s = "rat";
// let t = "car";
let s = "anag2ram";
let t = "nagaram1";
console.log(AnagramStr(s, t));
// T.C:O(n)+O(n logn)
// S.C:O(n)

//ques2-----//
function replaceZeroToFive(num) {
  if (num === 0) return 5;
  else {
    var temp = 0;
    while (num > 0) {
      let rem = num % 10;
      if (rem === 0) rem = 5;
      temp = temp * 10 + rem;
      num = parseInt(num / 10);
    }
    let resnum = String(temp)
      .split("")
      .reverse()
      .join("");
    return resnum;
  }
}
let num = 1004;
// console.log(replaceZeroToFive(num));
// t.C:O(n)+O(nlogn)
//S.C:O(n)
