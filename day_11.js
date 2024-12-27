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
