var searchInsert = function(nums, target) {
  if (!nums.includes(target)) {
      nums.push(target)
      nums.sort(function(a,b) {
        return  a - b;
      })
      return nums.indexOf(target)
  }
  return nums.indexOf(target)
  
};
console.log([3,5,7,9,10,8].sort(function(a,b) {
        return  a - b;
      }))