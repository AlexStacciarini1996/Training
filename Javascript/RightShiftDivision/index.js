//This program will make a right shift division
//A right shift division is similar to floor division by powers of two: 80 >> 3 = floor(80/2^3)

alert("This program will make a right shift division based on the numbers you give")
let int1 = prompt("Type the first number (The number to be divided)");
let int2 = prompt("Type the second number (The pow)");
alert(Calculator(int1, int2));

function Calculator(number1, number2) {
//Code to calculate the right shift division
let result = number1 / Math.pow(2, number2);    
return result
}