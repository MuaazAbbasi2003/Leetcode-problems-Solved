var removeStars = function (s) {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element !== "*") {
      stack.push(element);
    } else {
      stack.pop();
    }
  }

  return `${stack.join("")}`;
};

const s = "leet**cod*e";

const hel = removeStars(s);

console.log(hel);
