/*
In the final task for this article, we want you to write some tests. You've got three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.
*/

// Statement 1:The elephant weighs less than the mouse
var elephant = 1000;
var mouse = 50;
if (elephant > mouse) {
   console.log(true);
} else {
   console.log(false);
}

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

if (ostrichHeight > duckHeight) {
   console.log(false);
} else {
   console.log(true);
}
