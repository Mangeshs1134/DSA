// ques Remove element from array
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp =0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[temp]=nums[i]
            temp += 1
        }

    }
    return temp;
};
// squares of sorted array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i=0; i<nums.length; i++){
        nums[i]= nums[i]*nums[i];
    }
    nums = nums.sort((a,b)=> a-b)
    return nums
};
