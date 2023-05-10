/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  console.log(strs[0][0])
  const prefixes = [];
  const count = {};
  for (const word of strs) {
    let num = 0
    word.split('')
    let x = word.length;
    while(x > 0) {
      let startWith = [];
      startWith = strs.filter((str) => str.startsWith(word.slice(0,1 + num)))
      if (startWith.length > 1 && num != word.length) {
        x++
        prefixes.push(word.slice(0,1 + num))
        num++
      } else {
         x--
      }
    }
}
  prefixes.forEach(function(x) {count[x] = (count[x] || 0) + 1;})
  // console.log(count)
  if (Object.values(count).every( v => v < 2 ) && strs.length > 1) {
    return "";
  }
  const repeatFix = Math.max.apply(null, Object.values(count));
  const long = Object.keys(count).filter(key => count[key] === repeatFix);
  const longestPrefix = long.find(pre => pre.length === Math.max(...(long.map(el => el. length))));
  return longestPrefix
};

console.log(longestCommonPrefix(["flower", "bing"]))


