// ques k closest elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let len = arr.length
    if (x<=arr[0]) {
        return arr.slice(0,k)
    }
    if (x>=arr[arr.length-1]) {
        return arr.slice(-4)
        // return len
    }

    let n = binarySearch(arr,x);
    let result = []
    result.push(arr[n])
    // console.log(result);
    let counter = 1;
    let left=n-1, right=n+1;
    while (counter<k) {
        let left_diff= arr[n]-arr[left]
        let right_diff= arr[right]-arr[n]
        if (left_diff < right_diff || (left_diff===right_diff  ) )  {
            console.log("if");
            
            result.unshift(arr[left])
            left--;
        }else {
            console.log("else if");
            result.push(arr[right])
            right++;
        }
        counter++
    }
    return result
    
};

function binarySearch(arr, target){
     
    let n = arr.length
    let left =0 , right = n-1;
    while(right>=left){
        let mid= Math.floor((right+left)/2);
        if (arr[mid]===target) {
            return mid;
        } else if (arr[mid]>target){            
            right= mid-1
        }
        else{            
            left= mid+1;
        }
    }
    return left;
    
}
