// Product of Array Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    length= nums.length
    let prefix= Array(length)
    let suffix= Array(length)
    let output= Array(length).fill(1);

    prefix[0]=1;
    for (let i=1; i<length; i++){
        prefix[i]= prefix[i-1]*nums[i-1]
    }
    suffix[length-1]=1;
    for(let i=length-2; i>=0; i--){
        suffix[i]= suffix[i+1]*nums[i+1]
    }
    for (let i=0; i<length; i++) {
        output[i]=prefix[i]*suffix[i]
    }
    // console.log(prefix)
    // console.log(suffix)
    return output;
};
// Ques.2 Combination Sum
var combinationSum = function(candidates, target) {
    const res = [];

    function makeCombination(idx, comb, total) {
        if (total === target) {
            res.push([...comb]);
            return;
        }

        if (total > target || idx >= candidates.length) {
            return;
        }

        comb.push(candidates[idx]);
        makeCombination(idx, comb, total + candidates[idx]);
        comb.pop();
        makeCombination(idx + 1, comb, total);
    }

    makeCombination(0, [], 0);
    return res;    
};
