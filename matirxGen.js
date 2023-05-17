/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const bigMatrix = [];
  i = 0;
  while (i < n) {
      bigMatrix.push([])
      i++
  }

  console.log(bigMatrix)
};

console.log(generateMatrix(3))