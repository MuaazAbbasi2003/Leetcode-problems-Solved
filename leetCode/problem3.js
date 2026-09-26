// 1431. Kids With the Greatest Number of Candies

var kidsWithCandies = function (candies, extraCandies) {
  let number = Math.max(...candies);
  const array2 = candies.map((x) => {
    if (x + extraCandies >= number) {
      return true;
    } else {
      return false;
    }
  });

  return array2;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

let hel = kidsWithCandies(candies, extraCandies);

console.log(hel);

// Output: [true,true,true,false,true]
