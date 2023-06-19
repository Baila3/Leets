const equalPairs = function(grid) {
  let big = [];
  let num = 0;
  const nGrid = grid.map(JSON.stringify)
  for (let i = 0; i < grid.length; i++) {
    if (grid.length != grid[i].length) {
      return 0
    }
    let boy = [];
    for (let j = 0; j < grid[i].length; j ++) {
      boy.push(grid[j][num]);
    }
    if (nGrid.includes(JSON.stringify(boy))) {
      let newGrid = nGrid.filter(list => list == JSON.stringify(boy))
      big.push(...newGrid)
      console.log("m",newGrid)
    }
    console.log(big)
    num++;
  }
  let ans = big.length
  return ans;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))