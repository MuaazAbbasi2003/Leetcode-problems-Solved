var maxOperations = function (nums, k) {
  let number = 0;
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const tofind = k - element;
    const found = map.get(tofind);
    if (!map.get(element)) {
      map.set(element, [index]);
    } else {
      map.get(element).push(index);
    }
    if (found !== undefined && found.length > 0) {
      if (element === tofind && found.length < 2) {
        continue;
      }
      number += 1;
      map.get(element).pop();
      found.pop();
    }
  }

  return number;
};

const nums = [3, 1, 3, 4, 3];
const k = 6;
const hel = maxOperations(nums, k);
console.log(hel);
