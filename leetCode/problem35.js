var removeDuplicates = function (nums) {
  let w = 0;
  let current = null;
  let apeared = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (current === null && index === 0) {
      nums[w] = element;
      current = element;
      w++;
      apeared++;
    } else {
      if (element === current && apeared < 2) {
        nums[w] = element;
        w++;
        apeared++;
      } else if (element !== current) {
        nums[w] = element;
        w++;
        current = element;
        apeared = 1;
      } else {
        continue;
      }
    }
  }
  return nums;
};

const nums = [1, 1, 1, 1, 2, 2, 3];
const hel = removeDuplicates(nums);

console.log(hel);
