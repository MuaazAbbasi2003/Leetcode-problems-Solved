var removeElement = function (nums, val) {
  let w = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element !== val) {
      nums[w] = element;
      w++;
    }
  }
  return w;
};
const nums1 = [1, 0, 3, 0, 2, 0];
const val = 0;

const hel = removeElement(nums1, val);
console.log(hel);
