// // ques1-------
function maxSubarraySum(nums) {
  let currentSum = nums[0];
  // let maxSum = Math.max(...nums);
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (currentSum > maxSum) maxSum = currentSum;
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}
let nums = [-3, 1, -1, -5];
console.log(maxSubarraySum(nums)); //[-4,-1,2,1]
// //T.C:O(n)
// //S.C:O(1)

// // ques2//------
// function findTargetIndex(num, target) {
//   //   for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
//   //     if (target === num[i]) {
//   //       return i;
//   //     }
//   //     if (target === num[j]) return j;
//   //   }
//   //   return -1; // if  it will not find
//   let left = 0;
//   let right = num.length - 1;
//   let mid;
//   while (left <= right) {
//     mid = left + Math.trunc(right - left) / 2;
//     console.log(mid);
//     if (num[mid] === target) {
//       return mid;
//     } else if (num[mid] > target) {
//       left = mid + 1;
//     } else if (num[mid] < target) {
//       right = mid - 1;
//     }
//   }
//   retrun - 1;
// }
// let num = [-1, 0, 3, 5, 9, 12];
// let target = 9;
// console.log(findTargetIndex(num, target));
// // T.C:O(n/2)
// //S.C:O(1)

// console.log("Hello, World!");
function findTargetIndex(num, target) {
  //   for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
  //     if (target === num[i]) {
  //       return i;
  //     }

  //     if (target === num[j]) return j;
  //   }
  //   return -1; // if  it will not find
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    let mid = parseInt((right + left) / 2);

    if (num[mid] === target) {
      return mid;
    } else if (num[mid] > target) {
      right = mid;
    } else if (num[mid] < target) {
      left = mid;
    }
  }
  retrun - 1;
}
let num = [-1, 0, 3, 5, 9, 12];
let target = 9;
console.log(findTargetIndex(num, target));
// T.C:O(n/2)
//S.C:O(1)
