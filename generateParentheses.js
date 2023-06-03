

var generateParenthesis = function(n) {
  let parent = "";
  let permutations = [];
  const range = n * n
  for (let i = 0; i < n; i++) {
    parent += "()";
  }
  permutations.push(parent)
  let parentheses = parent.split("")
  let x = 1;
  for (let j = 0; j < n ; j++) {
    if (j == n - 1) {
      parentheses.splice(0, 0, parentheses.splice(x - 2, 1)[0])
    }
    parentheses.splice(x + 2, 0, parentheses.splice(x, 1)[0]);
    permutations.push(parentheses.join(""))
    x += 2
  }
  return permutations;
};

console.log(generateParenthesis(4))