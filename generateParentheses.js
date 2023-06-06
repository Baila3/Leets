

var generateParenthesis = function(n) {
  let son1 = "";
  let son2 = "";
  let permutations = [];
  const range = n * n;
  for (let i = 0; i < n; i++) {
    son1 += "(";
    son2 += ")";
  }
  const parent = son1 + son2
  permutations.push(parent);
  let parentheses = parent.split("");
  let x = n;
  let v = n - 1
  for (let j = 0; j < n -1   ; j++) {
    parentheses.splice(x - v, 0, parentheses.splice(x, 1)[0]);
    permutations.push(parentheses.join(""));
    x += 1;
    v -= 1
  }
  x = 0
  v = n - 1
  // for (let d = 0; d < n - 1 ; d++) {
  //   parentheses.splice(x + v, 0, parentheses.splice(x, 1)[0]);
  //   permutations.push(parentheses.join(""));
  //   x += 1;
  //   v -= 1
  // }
  
  return permutations;
};

console.log(generateParenthesis(1));