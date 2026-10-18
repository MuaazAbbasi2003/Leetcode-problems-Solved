var equalPairs = function (grid) {
  let map1 = new Map();
  let map2 = new Map();
  let count = 0;

  for (let index = 0; index < grid.length; index++) {
    const row = grid[index];
    const col = grid.map((arr) => arr[index]);
    const rowKey = JSON.stringify(row);
    const colKey = JSON.stringify(col);

    map1.set(rowKey, (map1.get(rowKey) ?? 0) + 1);
    map2.set(colKey, (map2.get(colKey) ?? 0) + 1);
  }
  for (let index = 0; index < grid.length; index++) {
    const key = JSON.stringify(grid[index]);
    if (map1.has(key) && map2.has(key)) {
      let val1 = map1.get(key);
      let val2 = map2.get(key);
      count += val1 * val2;
    }
  }
  return count;
};
const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];

const hel = equalPairs(grid);
console.log(hel);
