var uniqueOccurrences = function (arr) {
  const map1 = new Map();
  for (let index = 0; index < arr.length; index++) {
    const key = arr[index];
    map1.set(key, (map1.get(key) || 0) + 1);
  }
  const allUnique = new Set(map1.values()).size === map1.size;
  return allUnique;
};

const arr = [1, 2, 2, 1, 1, 3];
const hel = uniqueOccurrences(arr);
console.log(hel);
