var rotate = function (nums, k) {
  let w = 0;

  while (w !== k) {
    const val = nums.pop();
    nums.unshift(val);
    w++;
  }
  return nums;
};

nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const hel = rotate(nums, k);

console.log(hel);
