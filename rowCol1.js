const equalPairs = function(grid) {
  const big = [];
  let num = 0;
  let ans = 0;
  const nGrid = grid.map(JSON.stringify)
  for (let i = 0; i < grid.length; i++) {
    let boy = [];
    for (let j = 0; j < grid[i].length; j ++) {
      boy.push(grid[j][num]);
    }
   
    big.push(boy);
    console.log(boy)
    if (nGrid.includes(JSON.stringify(boy))) {
      big.pop()
      ans++;
    }
    num++;
  }
  return ans;
};

console.log(equalPairs([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]))