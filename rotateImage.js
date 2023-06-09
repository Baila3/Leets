var rotate = function(matrix) {
   const rev = matrix.reverse();
   let output = [];
   let x = 0;
   for (let i = 0; i < rev.length; i ++) {
    let smoll = []
    while (x < rev.length) {
      smoll.push(rev[x][i])
      x++
    }
    x = 0
    output.push(smoll)
   }
   return output
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))