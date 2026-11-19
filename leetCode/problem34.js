// var removeDuplicates = function (nums) {
//   let current = null;
//   let w = 0;
//   for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     if (index === 0 && w === 0) {
//       nums[w] = element;
//       current = element;
//       w++;
//     } else {
//       if (element !== current) {
//         nums[w] = element;
//         w++;
//         current = element;
//       }
//     }
//   }
//   return w;
// };

// const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// const hel = removeDuplicates(nums1);

// console.log(hel);

// function factorial() {

// }

// let hel = factorial();

// console.log(hel);

let arr1 = [1, 2, 3, 4, 5, 6];
let aar2 = [2, 3, 4, 8];
function isCommon(a, b) {
  let arr = [];
  let arr2 = new Set(b);
  for (let index = 0; index < a.length; index++) {
    let element = a[index];
    if (arr2.has(element)) {
      arr.push(element);
    }
  }
  return arr;
}

console.log(isCommon(arr1, aar2));
