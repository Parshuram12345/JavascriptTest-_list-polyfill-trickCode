// ques 1 ----
function maxSubarrayAscending(nums) {
  let currMax = 0,
    allMax = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currMax += nums[i];
    if (currMax > allMax) {
      allMax = currMax;
    }
    if (nums[i] >= nums[i + 1]) {
      currMax = 0;
    }
  }
  return allMax;
}
// let nums = [10, 20, 30, 5, 10, 50];
let nums = [12, 17, 15, 13, 10, 11, 12];
console.log(maxSubarrayAscending(nums));
//T.C:O(n)
//S.C:O(1)

// ques2 -------///
function maxHeightcontainer(height) {
  let area = 0;
  let i = 0,
    j = height.length - 1;
  while (i <= j) {
    let small = height[i] > height[j] ? height[j] : height[i];
    area = Math.max(area, small * (j - i));
    height[i] < height[j] ? i++ : j--; //using ternary operator
  }
  return area;
}
// let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let height = [1, 1];
console.log(maxHeightcontainer(height));
//T.C:O(n)
//S.C:O(1)
if (6 > undefined) {
  console.log("sdafasdg");
} else console.log("sdg");
