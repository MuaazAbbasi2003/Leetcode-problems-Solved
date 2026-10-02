//1004. Max Consecutive Ones III
var longestOnes = function (nums, k) {
  let left = 0;
  let zeros = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > k) {
      if (nums[left] === 0) {
        zeros--;
      }

      left++;
    }
    let length = right - left + 1;
    maxLength = Math.max(maxLength, length);
  }

  return maxLength;
};
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;
const hel = longestOnes(nums, k);

console.log(hel);
