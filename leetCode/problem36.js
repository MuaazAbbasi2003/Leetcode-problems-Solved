var majorityElement = function (nums) {
  let map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    map.set(element, (map.get(element) ?? 0) + 1);
  }
  const [key, val] = [...map].reduce((a, b) => (b[1] > a[1] ? b : a));

  return key;
};

const nums = [2, 2, 1, 1, 1, 2, 2];

console.log(majorityElement(nums));
