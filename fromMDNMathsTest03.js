/*
In the final task for this article, we want you to write some tests. You've got three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made. Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.
*/

// Statement 1:The elephant weighs less than the mouse
var elephant = 1000;
var mouse = 50;

let weightComparison = elephant == mouse;
const weightTest = weightComparison;

if (weightTest == true) {
   console.log("True — elephants weigh less than mice!?");
} else {
   console.log("False — of course an elephant is heavier than a mouse!");
}

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

const heightComparison = ostrichHeight == duckHeight;
const heightTest = heightComparison;

if (heightTest == true) {
   console.log("True — an ostrich is indeed taller than a duck!");
} else {
   console.log("False — apparently a duck is taller than an ostrich!?");
}

// Statement 3: The two passwords match

const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

const pwdMatch = pwd1 === pwd2;

const pwdTest = pwdMatch;
if (pwdTest == true) {
   console.log("True — the passwords match.");
} else {
   console.log("False — the passwords do not match; please check them");
}
