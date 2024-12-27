// Increasing triplet sequence
var increasingTriplet = function(arr) {
    let first = Infinity
    let second = Infinity

    for (let i = 0; i <= arr.length -1 ; i++) {
        if(arr[i]<=first){
            first = arr[i]
        }else if(arr[i]<=second){
            second = arr[i]
        }else{
            return true
        }
    }
    return false;
};
//ques 2 maximum incresing subarray sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(arr) {
    let max = arr[0];
    let current = arr[0];
    for(let i=1 ; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            current += arr[i]
        }else{
            current = arr[i]
        }
        if(current>max){
            max = current;
        }
    }
    return max; 
};
