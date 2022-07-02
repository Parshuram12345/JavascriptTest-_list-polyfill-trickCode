var a = 9;
let b = 23;
let c = 10;
function purefunc(b, c) {
  return b + c;
}
console.log(purefunc(b, c)); //pure function bcoz it does not effecting the other side effect

function impurefunc(a, b, c) {
  a = 20;
  return a + b + c;
}

console.log(impurefunc(a, b, c)); //
console.log(a);

/////--------------------///

function ifeven(num) {
  return new Promise((res, rej) => {
    try {
      if (!(num % 2 === 0)) {
        throw new Error("number is odd ");
      }
      res("number is even");
    } catch (err) {
      console.log(err);
      rej(err);
    }
  });
}
let num = 1;
ifeven(num).then((res) => console.log(res))
.catch((err) => console.log(err));
// console.log(ifeven(a));
