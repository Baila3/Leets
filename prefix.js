/**
 * @param {string[]} strs
 * @return {string}
 */
const prefixes = [];
const count = {};
var longestCommonPrefix = function(strs) {
  for (const word of strs) {
    word.split('')
    let pre = word.slice(0,1 + 1)
    prefixes.push(pre)
  }
  prefixes.forEach(function(x) {count[x] = (count[x] || 0) + 1;})
  if (Object.values(count).every( v => v < 2 )) {
    return "";
  }
  console.log(Object.values(count).every( v => v < 2 ))
  return _.max(Object.keys(count), o => count[o]);
};

console.log(longestCommonPrefix(["dog","racecar","doi","car"]))