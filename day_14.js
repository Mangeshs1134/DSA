// kth largest number
var findKthLargest = function(arr, k) {
  
  
    let n = arr.length
    let dict = {}
    for (let i = 0; i < n ; i++) {
        // dict[arr[i]] = 1;
        if (dict[arr[i]] ) {
            dict[arr[i]] = dict[arr[i]] + 1;
        }else{
            dict[arr[i]] = 1 
        }
    }
    arr = Object.keys(dict)
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        
        if(dict[arr[i]]>1){
            console.log(dict[arr[i]]);
            temp.push(arr[i])
            dict[arr[i]] = dict[arr[i]] - 1;
            i--;
        }else if(dict[arr[i]]===1){
            temp.push(arr[i])
            dict[arr[i]] = dict[arr[i]] - 1;
        }
    }
    console.log(temp);
    
    return (parseInt(temp[temp.length - k]))
    
};
let arr = [0,0]
console.log(findKthLargest(arr,4));
