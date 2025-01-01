
1491. Average Salary Excluding the Minimum and Maximum Salary
Solved
Easy
Topics
Companies
Hint
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max = Math.max(...salary)
    let min = Math.min(...salary)
    let sum = salary.reduce((a,b) => a + b)
    
    sum -= max
    sum -= min
    
    return sum / (salary.length - 2)
};
