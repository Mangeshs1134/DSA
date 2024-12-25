//  989. Add to Array-Form of Integer

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    n= num.length
    k= String(k)
    len= k.length
    let carry = 0;
    let i=0
    while( carry>0 || i<n){
        let z= k[len-1-i]
        console.log(typeof(parseInt(z)));
        
        if (z===Number) {
            console.log(z);
            num[n-i-1] += parseInt(k[len-1-i])
        }
        if (carry>0) {
            num[n-1-i] += 1;
        }
        if (num[n-1-i] > 9) {
            num[n-1-i] -= 10;
            carry ++;
        }else{
            carry=0
        }

        
        // console.log(i);
        
        i=i+1;
    }
    if(num[0]>9){
        let x = num[0]
        num[0] = x%10;
        // console.log(typeof(num[0]));
        
        num.unshift(Math.floor(x/10))
    }
    return num;
};
let num= [9,9,9,9,9,9,9,9,9,9]
console.log(addToArrayForm(num,1));
