var increasingTriplet = function (nums) {
  let left = Infinity;
  let middle = Infinity;

  for (let element of nums) {
    if (element <= left) {
      left = element;
    } else if (element <= middle) {
      middle = element;
    } else {
      return true;
    }
  }

  return false;
};

const nums = [0, 4, 2, 1, 0, -1, -3];
const hel = increasingTriplet(nums);
console.log(hel);
