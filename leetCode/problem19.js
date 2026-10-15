var pivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, x) => x + acc);
  let leftsum = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    totalSum -= element;
    if (leftsum === totalSum) {
      return index;
    }
    leftsum += nums[index];
  }
  return -1;
};
const nums = [1, 7, 3, 6, 5, 6];
const hel = pivotIndex(nums);
console.log(hel);
