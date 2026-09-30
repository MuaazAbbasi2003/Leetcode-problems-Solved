var isSubsequence = function (s, t) {
  let arr = [...s];
  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    if (element === arr[0]) {
      arr.splice(0, 1);
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

const s = "abc";
const t = "ahbgdc";

const hel = isSubsequence(s, t);
console.log(hel);
