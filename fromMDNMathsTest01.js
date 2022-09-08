/* 
Let's start out by testing your knowledge of basic math operators. You will have to create four numeric values, then add the first two together, then subtract the fourth from the third, then multiply the two secondary results together to get a result of 48. Finally, we need to write a test that proves that this value is an even number.
So, try updating the live code below to recreate the finished example, following these steps:

Create four variables that contain numbers. Call the variables something sensible.
Add the first two variables together and store the result in another variable.
Subtract the fourth variable from the third and store the result in another variable.
Multiply the results from the last two steps together, storing the result in a variable called finalResult. The product should be 48. If it isn't, you'll have to adjust some of the initial input values.
Finally, write a calculation that checks whether finalResult is an even number. Store the result in a variable called evenOddResult.
*/

var num1 = 4;
var num2 = 8;
var num3 = 1;
var num4 = 5;

let sum = num1 + num2;
let sub = num4 - num3;

let finalResult = sum * sub;

console.log(finalResult);

var evenOddResult = finalResult % 2;

if (evenOddResult) {
   console.log("Final Result Is Odd. Hrm");
} else {
   console.log("Final Result Is Even. Hrm");
}
