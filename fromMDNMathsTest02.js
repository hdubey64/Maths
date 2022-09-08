/*
In the second task you are already provided with two calculations, with the results stored in the variables result and result2. But these results aren't what we want; you'll need to take the calculations and change them to give us what we want.

What do we want? After multiplying the two results together and formatting the result to 2 decimal places, the final result should be 10.42.

Try updating the live code below to recreate the finished example, following these steps:

Write a calculation that multiplies result and result2 together and assigns the result back to result. This will require assignment shorthand.

Write a line of code that takes result and formats it to 2 decimal places, storing the result of this in a variable called finalResult.

Check the data type of finalResult using typeof; you'll probably see that it is actually of string type! Write a line of code that converts it to a number type, storing the result in a variable called finalNumber.

The value of finalNumber needs to be 10.42. Go back and update the original calculations you were provided with so that they give this final result. Don't update the numbers or the operators.
*/

// let result = 7 + 13 / 9 + 7;
// let result2 = (100 / 2) * 6;

let result = (7 + 13) / (9 + 7);
let result2 = 100 / (2 * 6);

result *= result2;

let finalresult = parseFloat(parseFloat(result).toFixed(2));

console.log(typeof finalresult);

let finalNumber = JSON.parse(finalresult);
console.log(`Final Number is: ${finalNumber}`);
