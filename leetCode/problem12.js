var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let mostWater = 0;
  while (left !== right) {
    const x = height[left];
    const y = height[right];
    const width = right - left;
    const height1 = Math.min(x, y);
    const area = width * height1;
    mostWater > area ? mostWater : (mostWater = area);
    if (x < y) {
      left++;
    } else {
      right--;
    }
  }
  return mostWater;
};
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const hel = maxArea(height);
console.log(hel);
