// ques search in a 2D matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let n= matrix.length, m= matrix[0].length
    let low = 0, high= n*m -1 ;
    while (high>=low) {
        mid= Math.floor((low+high)/2);
        let i = Math.floor(mid/m); let j= mid%m;
        console.log(i);
        
        if (matrix[i][j]===target) {
            return true;
        } else if(matrix[i][j]<target) {
            low= mid+1;
        }else{
            high=mid-1;
        }
    }
    return false;
    
};
// ques 2 median of two sorted arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

let array= [...nums1,...nums2]

array.sort((a,b)=> a-b)

let n=array.length
if (n%2===0) {
    let mid= Math.floor(n/2)
    return parseFloat((array[mid]+array[mid-1])/2)
} else {
    let mid=Math.floor(n/2)
    return parseFloat(array[mid])
}
    
};
