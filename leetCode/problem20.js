var findDifference = function (nums1, nums2) {
  const map1 = new Set(nums1);
  const map2 = new Set(nums2);
  map1.forEach((element) => {
    if (map2.has(element)) {
      map2.delete(element);
      map1.delete(element);
    }
  });
  nums1 = [...map1];
  nums2 = [...map2];
  return [nums1, nums2];
};

const nums1 = [-3, 6, -5, 4, 5, 5];
const nums2 = [6, 6, -3, -3, 3, 5];

const hel = findDifference(nums1, nums2);
console.log(hel);
