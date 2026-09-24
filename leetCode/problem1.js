//Merge Strings Alternately
var mergeAlternately = function (word1, word2) {
  let string = "";
  let loopRun = word1.length > word2.length ? word1.length : word2.length;
  for (let index = 0; index < loopRun; index++) {
    const element = word1[index] !== undefined ? word1[index] : "";
    if (word2[index]) {
      const word = element + word2[index];
      string += word;
    } else {
      string += element;
    }
  }
  return string;
};

const hel = mergeAlternately("a", "pqrs");

console.log(hel);
