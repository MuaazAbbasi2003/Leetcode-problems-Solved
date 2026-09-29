// 283. Move Zeroes

var moveZeroes = function (nums) {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      [nums[write], nums[read]] = [nums[read], nums[write]];
      write++;
    }
  }
  return nums;
};
const nums = [0, 0, 1];
const hel = moveZeroes(nums);
console.log(nums);
