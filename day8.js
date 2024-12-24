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
// ques 2 power of two
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n===1){
        return true;
    }else if(n%2!==0){
        return false;
    }else{
        for (let i = 1; i <= 30; i++) {
            if (Math.pow(2,i)===n) {
                return true;
            }
         }
    }
    return false;

};
// ques 3 fibonocci number
/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    if (n===0) {
        return 0;
    }else if(n===1){
        return 1;
    }

    let f1= 0;
    let f2= 1;
    for (let i = 1; i <= n; i++) {
        
        let f3= f1+f2;

        f1= f2;
        f2= f3;

        
    }
    return f1

};

// ques 4 waterbottles
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let temp= numBottles;
    while(numBottles>=numExchange){
        temp= temp + Math.floor(numBottles/numExchange)
        numBottles= Math.floor(numBottles/numExchange) + (numBottles%numExchange)
    }
    return temp;
};
//  kth tribonacci number
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n===0) {
        return 0;
    }else if(n===1 || n===2){
        return 1;
    } 
    let t1= 0, t2= 1, t3=  1;
    for (let i = 1; i <=n ; i++) {
        
        let t4 = t3+t2+t1;

        t1=t2;
        t2=t3;
        t3=t4;
        
    }
    return t1;

};
