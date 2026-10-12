var largestAltitude = function (gain) {
  let add = 0;
  let arr = [0];
  for (let index = 0; index < gain.length; index++) {
    const element = gain[index];
    add += element;
    arr.push(add);
  }
  return Math.max(...arr);
};
const gain = [-5, 1, 5, 0, -7];
const hel = largestAltitude(gain);
console.log(hel);
