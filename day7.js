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
// ques 2 search in rotated array II
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
        }
            if (nums[mid]===nums[low] && nums[mid]===nums[high]) {
                console.log('ok');
                
                low=low+1;
                high=high-1;
                // continue;
            }
        else if(nums[mid]<=nums[high]){
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
nums=[1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
console.log(search(nums,2));
