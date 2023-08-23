var removeElement = function(nums, val) {
    let i = nums.length
    while (i--) {
        if (nums[i] === val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2,3,2], 2))