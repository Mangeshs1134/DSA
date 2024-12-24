// ques plaindrome number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = String(x)
    n= (x.length)/2
    let i=0
    while (i<n) {
        if (x[i] !==x[x.length-i-1]) {
            // console.log(x[i],x[x.length-i]);
            
            return 0;
        }
        i=i+1
    }
    return true;

};
