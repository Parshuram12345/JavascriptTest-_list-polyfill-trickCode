// ques1---///
function placeWithIndex(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[arr[i]];
  }
  return newArr;
}
let arr = [0, 2, 1, 5, 3, 4];
console.log(placeWithIndex(arr));
//T.C:O(n)
//S.C:O(1)

//ques2---//
function findSmallerNum(arr1) {
    //******************order of n2--/
//   let newcount = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr1.length; j++) {
//       if (arr1[i] > arr1[j]) {
//         count++;
//       }
//     }
//     newcount[i] = count;
//   }
//   return newcount;
//---------------------------------//
let freqarr = Array.from({length:Math.max(...arr1)+1},()=>0)
for (let i = 0; i < arr1.length; i++) {
        freqarr[arr1[i]]++;
    }
    console.log(freqarr)
    for(let i=1;i<freqarr.length;i++)
    { 
        freqarr[i]=freqarr[i]+freqarr[i-1];
    }
    // console.log(freqarr)
    let temp =[];
    for(let i=0;i<arr1.length;i++){
          temp[i] = freqarr[arr1[i]-1]
    }
    return temp;
}
let arr1 = [8, 1, 2, 2, 3];
console.log(findSmallerNum(arr1));
///T.C:O(n);
//S.C:O(1)
