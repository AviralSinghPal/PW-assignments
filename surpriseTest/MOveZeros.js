/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    let co=0;

    while(i<=nums.length-1){
        if(nums[i]!==0){
            nums[co]=nums[i];
            co++;
        }
        i++;
    }
    while(co<=nums.length-1){
        nums[co]=0;
        co++;
    }
};
