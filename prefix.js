/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  const prefixes = [];
  const count = {};
  for (const word of strs) {
    let num = 0
    word.split('')
    while(true) {
      const startsWith = strs.filter((moi) => moi.startsWith(word[0]));
      startsWith.length > 1
    }
    if (word.length < 3) {
      word.split('')
      let pre = word.slice(0,1)
      prefixes.push(pre)
    } else {
      word.split('')
      let pre = word.slice(0,1 + 1)
      prefixes.push(pre)
    }
  }
  console.log(prefixes)
  prefixes.forEach(function(x) {count[x] = (count[x] || 0) + 1;})
  if (Object.values(count).every( v => v < 2 ) && prefixes.length > 1) {
    return "";
  }

  return _.max(Object.keys(count), o => count[o]);
};

console.log(longestCommonPrefix(["a", "ab"]))