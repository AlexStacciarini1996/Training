//This app will find the number of digits in a given number
//This challenge will be solved without the use of strings
//Exercise origin: edabit.com

//Read input
let number = prompt("Please type a number...")
alert("The number " + number + " has " + DigitCalculator(number) + " digits")

function DigitCalculator (number) {
    return number.length
    //Honestly, I tought "let's just test it this way, but I doubt it will work. It worked."
}