/*
Task

Implement a function named factorial that has one parameter: an integer, . 
It must return the value of  (i.e.,  factorial).

Input Format
Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

Constraints
1 <= n <= 10
Output Format

The function must return the value of .

Sample Input :
4

Sample Output :
24
*/

// Solution

function factorial(n){
  return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

