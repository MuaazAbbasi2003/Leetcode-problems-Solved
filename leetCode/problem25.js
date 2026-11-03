var asteroidCollision = function (asteroids) {
  let arr = [];
  for (let index = 0; index < asteroids.length; index++) {
    const element = asteroids[index];
    if (arr.length < 1) {
      arr.push(element);
    } else {
      let val = arr[arr.length - 1];
      if (val < 0 || element > 0) {
        arr.push(element);
      } else {
        let destroyed = false;
        while (arr.length > 0 && arr[arr.length - 1] > 0 && element < 0) {
          val = arr[arr.length - 1];
          if (Math.abs(element) > Math.abs(val)) {
            arr.pop();
          } else if (Math.abs(element) === Math.abs(val)) {
            arr.pop();
            destroyed = true;
            break;
          } else {
            destroyed = true;
            break;
          }
        }
        if (!destroyed) {
          if (arr.length === 0 || arr[arr.length - 1] < 0) {
            arr.push(element);
          }
        }
      }
    }
  }
  return arr;
};