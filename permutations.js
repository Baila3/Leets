var permute = function(nums) {
  if (nums.length == 1) {
      return nums;
  }
  const permutations = [];
  const runtime = nums.length;
  for (let i = 0; i < runtime; i ++){
      let first = nums.indexOf(nums[i]);
      let unsplice = nums.splice(first,1);
      let newray = [...nums]
      for (let j = 0; j < runtime - 1; j++){
          let sole = [];
          sole.push(...unsplice);
          newray.unshift(newray.pop());
          sole.push(...newray);
          permutations.push(sole);
      }
      nums.splice(first,0,...unsplice);
  }
  return permutations;
};

console.log(permute([1,2,3]))