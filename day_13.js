//  Max of Count of positive and negative numbers in a array

var maximumCount = function(arr) {
    let n = arr.length
    let noOfNeg; let noOfPos
    if(arr[0]===0 && arr[n-1]===0){
        return 0;
    }
    if ((arr[0]>0) || arr[n-1]<0) {
        return n;
    }

    noOfNeg = endOfNegative(arr) + 1
    let temp = startOfPositive(arr) 
    if (temp !== -1) {
        noOfPos = n - startOfPositive(arr) 
    }else{
        noOfPos = 0;
    }
    return Math.max(noOfNeg, noOfPos)
    
    
};
function endOfNegative(arr) {
    let n = arr.length
    let low = 0; let high = n-1;
    while (high>=low) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid]<0 && arr[mid+1]>=0) {
            return mid
        } else if(arr[mid]>=0) {
            high = mid - 1
        }else{
            low = mid + 1;
        }
    } 
    return -1;
}
function startOfPositive(arr) {
    let n = arr.length
    let low = 0; let high = n-1;
    while (high>=low) {
        let mid = Math.floor((low + high)/2);
        if (arr[mid]>0 && arr[mid-1]<=0) {
            return mid
        } else if(arr[mid]>0) {
            high = mid - 1
        }else{
            low = mid + 1;
        }
    } 
    return -1;
}
