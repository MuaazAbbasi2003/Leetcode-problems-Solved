// 643. Maximum Average Subarray I

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let maxSum = sum;
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
const nums = [1, 12, -5, -6, 50, 3];
const hel = findMaxAverage(nums, 3);
console.log(hel);
