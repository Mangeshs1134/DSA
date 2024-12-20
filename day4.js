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
