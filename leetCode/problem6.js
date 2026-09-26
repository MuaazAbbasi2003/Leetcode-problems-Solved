//Reverse Words in a String
// var reverseWords = function (s) {
//   let word = "";
//   let array1 = [...s];
//   let arr1 = [];
//   for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     if (index === array1.length - 1 && element !== " ") {
//       word += element;
//       arr1.push(word);
//     }
//     if (element === " " && word.length !== 0) {
//       arr1.push(word);
//       word = "";
//     } else if (element !== " ") {
//       word += element;
//     }
//   }
//   return arr1.reverse().join(" ");
// };
var reverseWords = function (s) {
  return s.split(" ").filter(Boolean).reverse().join(" ");
};

const s = "the sky is blue";
const hel = reverseWords(s);
console.log(hel);
