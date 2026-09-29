var compress = function (chars) {
  let keyPairs = "";

  let number = 1;

  for (let index = 0; index < chars.length; index++) {
    const element = chars[index];
    const next = chars[index + 1];
    if (element === next) {
      number += 1;
    } else if (element !== next) {
      keyPairs += element;
      if (number > 1) {
        keyPairs += number;
      }
      number = 1;
    }
  }
  chars.splice(0, chars.length, ...keyPairs);
  return chars.length;
};
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const hel = compress(chars);
console.log(hel);
