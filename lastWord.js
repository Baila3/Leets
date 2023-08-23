var lengthOfLastWord = function(s) {
  const string = s.trim().split(" ")
  const last = string.pop()
  return (last.length)
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))