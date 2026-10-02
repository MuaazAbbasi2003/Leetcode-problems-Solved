var maxVowels = function (s, k) {
  let total = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  for (let index = 0; index < k; index++) {
    const element = s[index];
    if (vowels.has(element)) {
      total += 1;
    }
  }
  let t2 = total;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      total -= 1;
    }
    if (vowels.has(s[i])) {
      total += 1;
    }

    t2 = Math.max(t2, total);
  }
  return t2;
};
const s = "abciiidef";
const k = 3;
const hel = maxVowels(s, k);

console.log(hel);
