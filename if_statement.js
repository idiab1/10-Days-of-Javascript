/*
Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If 25 < score <= , then grade = A.
If 20 < score <= , then grade = B.
If 15 < score <= , then grade = C.
If 10 < score <= , then grade = D.
If 5 < score <= , then grade = E.
If 0 <= score <= , then grade = F.
Input Format

Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

Constraints

Output Format
The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

Sample Input 0
11

Sample Output 0
D

*/


// ----->>>> Solution
function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    
    return grade = "A";

  } else if (score > 20 && score <= 25) {
    
    return grade = "B";

  } else if (score > 15 && score <= 20) {
    
    return grade = "C";

  } else if (score > 10 && score <= 15) {
    
    return grade = "D";

  } else if (score > 5 && score <= 10) {
    
    return grade = "E";

  }else {
    
    return grade = "F";

  }
  return grade;
}

console.log(getGrade(11))
