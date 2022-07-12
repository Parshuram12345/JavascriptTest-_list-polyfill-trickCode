//ques1------
function codiphic(s, t) {
  const subtract =
    s.charCodeAt(0) - t.charCodeAt(0) < 0
      ? s.charCodeAt(0) - t.charCodeAt(0) + 26
      : s.charCodeAt(0) - t.charCodeAt(0);
  console.log(subtract);
  for (let i = 1; i < s.length; i++) {
    let minussub =
      s.charCodeAt(i) - t.charCodeAt(i) < 0
        ? s.charCodeAt(i) - t.charCodeAt(i) + 26
        : s.charCodeAt(i) - t.charCodeAt(i);

    if (minussub != subtract) {
      return false;
    }
  }
  return true;
}
// let s = "seb";
let s = "zax";
//  let t = "ugd";
// let t = "fgh";
let t = "aby";
console.log(codiphic(s, t));
// t.C:O(n-1)
// S.C:O(1)

// ques 2-----
function passwordPattern(password) {
  if (password.length < 8) {
    return false;
  }
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let digitCount = 0;
  let specialChar = "'@#$%^&*()-+!";
  let specialCharCount = 0;
  for (let i = 0; i < password.length; i++) {
    if (password.charAt(i) === password.charAt(i + 1)) {
      return false;
    }

    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      upperCaseCount++;
    } else if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      // console.log(lowerCaseCount);
      lowerCaseCount++;
    } else if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      digitCount++;
    } else if (specialChar.includes(password.charAt(i))) {
      specialCharCount++;
    }
  }
  console.log(upperCaseCount);
  console.log(specialCharCount);
  console.log(digitCount);
  console.log(upperCaseCount);
  return (
    upperCaseCount >= 1 &&
    lowerCaseCount >= 1 &&
    digitCount >= 1 &&
    specialCharCount >= 1
  );
}
// let password = "MetYou--IsMyDream";
let password = "iloveLe3tcode!";
console.log(passwordPattern(password));
