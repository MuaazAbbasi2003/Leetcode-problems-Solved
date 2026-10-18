var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const map1 = new Map();
  const map2 = new Map();

  for (let index = 0; index < word2.length; index++) {
    const element = word2[index];
    if (!map1.has(element)) {
      map1.set(element, 1);
    } else {
      map1.set(element, map1.get(element) + 1);
    }
  }

  for (let index = 0; index < word1.length; index++) {
    const element = word1[index];
    if (!map1.has(element)) {
      return false;
    }

    map2.set(element, (map2.get(element) || 0) + 1);
  }

  const freq1 = [...map1.values()].sort((a, b) => a - b);
  const freq2 = [...map2.values()].sort((a, b) => a - b);

  return (
    freq1.length === freq2.length &&
    freq1.every((freq, index) => freq === freq2[index])
  );
};

const word1 = "abb";
const word2 = "aab";

const hel = closeStrings(word1, word2);

console.log(hel);
