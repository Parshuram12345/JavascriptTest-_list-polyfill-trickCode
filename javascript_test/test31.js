// ques1--------
function selectionSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  //   console.log(arr);
  return arr;
}
let arr = [4, 3, 6, 5, 9, 7, 2];
console.log(selectionSort(arr));

// ques2-----
function intersectionArr(arr1, arr2, arr3) {
  let temp = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      temp.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j] && arr[i] < arr3[k]) i++;
    else if (arr2[j] < arr3[k] && arr[j] < arr3[i]) j++;
    else k++;
  }

  return temp;
  // console.log(temp);
}
let arr1 = [1, 5, 10, 20, 40, 80];
let arr2 = [6, 5, 20, 80, 100];
let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
console.log(intersectionArr(arr1, arr2, arr3));
