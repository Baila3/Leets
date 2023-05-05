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
    let x = word.length;
    // console.log(word.slice(0,1 + 3))
    while(x > 0) {

      console.log(word)
      let startWith = [];
      // console.log("1",startWith)
      // console.log(x)
      startWith = strs.filter((str) => str.startsWith(word.slice(0,1 + num)))
      // console.log("2",startWith)
      if (startWith.length > 1 && num != word.length - 1) {
        x++
        prefixes.push(word.slice(0,1 + num))
        num++
      } else {
         x--
      }
      // console.log("boy",startWith)
      console.log("me",prefixes)
    }
  //   if (word.length < 3) {
  //     word.split('')
  //     let pre = word.slice(0,1)
  //     prefixes.push(pre)
  //   } else {
  //     word.split('')
  //     let pre = word.slice(0,1 + 1)
  //     prefixes.push(pre)
  //   }
  // }
  console.log(prefixes)
  
  //  console.log("you",word.slice(0,1))
  //   let startWith = strs.filter((str) => str.startsWith(word.slice(0,1)))
  //   console.log(startWith)
}

prefixes.forEach(function(x) {count[x] = (count[x] || 0) + 1;})
console.log(count)
if (Object.values(count).every( v => v < 2 ) && prefixes.length > 1) {
  return "";
}
return "there there"
  // return _.max(Object.keys(count), o => count[o]);
};

console.log(longestCommonPrefix(["flower","flow","flight"]))