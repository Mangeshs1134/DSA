// Ques 1 Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left=0;
    let right = nums.length-1;
    let temp=0;
    if(nums[left]===target){
        return left;
    }
    else if(nums[right]===target){
        return right;
    } else{
        while(right>=left){
            temp=left;
            let mid =Math.floor((left+right)/2);
            if(nums[mid]===target){
                return mid;
            }else if(nums[mid]>target){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        temp=temp+1;
        return left;
    }
};

// ques 2 First Bad Version
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let first=1;
        let last=n;
        while(last > first){
            let mid= first + Math.floor((last-first)/2);
            if(isBadVersion(mid)){
                last=mid;
            }else{
                first=mid+1;
            }
        }
        return first;
    };
};
