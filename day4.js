// 852. Peak Index in a Mountain Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
    let n = arr.length
    let left =0 , right = n-1;
    while(right>=left){
        let mid= Math.floor((right+left)/2);
        if (arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1]) {
            // console.log("both");
            
            return mid;
        } else if (arr[mid]>arr[mid+1]){
            // console.log("else if");
            
            right= mid-1
        }
        else{
            // console.log("else");
            left= mid+1;
        }
    }
    
};
// ques Search in 2D matrix 
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var binarySearch= function (arr, target){
    let n= arr.length
    let left=0, right=n-1;
    while(right>=left){
        let mid= Math.floor((left+right)/2);
        if(arr[mid]===target){
            return true;
        }else if(arr[mid]>target){
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return -1
}
var searchMatrix = function(matrix, target) {
    let temp=false
    matrix.forEach(element => {
        if(binarySearch(element, target)===-1){
            
            // console.log('if');
        }else{
            // console.log('else');
            
            temp = binarySearch(element, target)
        }
    });
    return temp;
};
// ques Find minimum in rotated array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     
  let n= nums.length
  let left = 0 , right = n-1;
  while (right>left) {
      let mid= Math.floor((left+right)/2);
      if (nums[mid] <= nums[right]) {
        right=mid;
      }else{
        left=mid+1;
      }
  }
  return nums[left];
    
};
