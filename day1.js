// Ques.1 Product of Array except Self 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    length= nums.length
    let prefix= Array(length).fill(1);
    let suffix= Array(length).fill(1);
    let output= Array(length).fill(1);

    prefix[0]=1;
    for i in range (1, length){
        prefix[i]= prefix[i-1]*nums[i-1]
    }
    suffix[length-1]=1;
    for(let i=length-2; i>0; i--){
        suffix[i]= suffix[i+1]*nums[i+1]
    }
    for i in range length {
        output[i]=prefix[i]*suffix[i]
    }
    return output;
};
