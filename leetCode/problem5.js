//345. Reverse Vowels of a String
var reverseVowels = function (s) {
  let word = [...s];
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (!vowels.includes(word[left])) {
      left++;
    } else if (!vowels.includes(word[right])) {
      right--;
    } else {
      let temp = word[left];
      word[left] = word[right];
      word[right] = temp;
      left++;
      right--;
    }
  }

  return word.join("");
};

const s = "IceCreAm";
const hel = reverseVowels(s);
console.log(hel);
