var longestSubarray = function (nums) {
  let left = 0;
  let zeros = 0;
  let maxLength = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === 0) {
      zeros++;
    }
    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    let length = index - left;
    maxLength = Math.max(maxLength, length);
  }
  return maxLength;
};

const nums = [0, 1, 1, 1, 0, 1, 1, 0, 1];
const hell = longestSubarray(nums);

console.log(hell);
