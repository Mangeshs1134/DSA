// ques- search in rotated array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let n= nums.length , low=0, high=n-1;
    while (low<=high) {
        let mid=Math.floor((low+high)/2)
        if (nums[mid]===target) {
            return mid;
        }else if(nums[mid]<=nums[high]){
            if (nums[mid]<=target && target<=nums[high]) {
                low=mid+1
            } else {
                high=mid-1
            }
        }
         else {
            if (nums[low]<=target && target<=nums[mid]) {
                high=mid-1
            } else {
                low=mid+1
            }
        }
    }
    return -1;
    
};
