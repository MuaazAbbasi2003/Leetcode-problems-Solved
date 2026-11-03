var decodeString = function (s) {
  let countStack = [];
  let stringStack = [];
  let currentString = "";
  let number = 0;

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element >= "0" && element <= "9") {
      number = number * 10 + Number(element);
    } else if (element === "[") {
      countStack.push(number);
      stringStack.push(currentString);
      number = 0;
      currentString = "";
    } else if (element === "]") {
      let repeatCount = countStack.pop();
      let previousString = stringStack.pop();
      currentString = previousString + currentString.repeat(repeatCount);
    } else {
      currentString += element;
    }
  }

  return currentString;
};

const s = "3[a]2[bc]";
const hel = decodeString(s);

console.log(hel);
