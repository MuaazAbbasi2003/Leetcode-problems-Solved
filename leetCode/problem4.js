// 605. Can Place Flowers

var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    const prev = i === 0 ? 0 : flowerbed[i - 1];
    const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
    if (flowerbed[i] === 0 && prev === 0 && next === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
};
const flowerbed = [1, 0, 0, 0, 0, 1];
const n = 2;
let hel = canPlaceFlowers(flowerbed, n);

console.log(hel);
