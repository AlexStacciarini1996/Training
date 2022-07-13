//This app will check if a number is oddish or evennish
//A number is Oddish if the sum of all of its digits are odd
//A number is Evenish is the sum of all of its nmbers is even
//This has nothing to do with Pokémon, as far as I know
//Exercise origin: edabit.com
let number = prompt("Type a number and we will tell you if it's Oddish or Evenish")
Checker(number)
function Checker(numberString) {
   let sum = 0
   let splitNumbers = []
   //Split the string into an array of chars
   splitNumbers = numberString.split('')
   //Convert the chars in the array into integers
   let convertedNumbers = splitNumbers.map(function(element) { return parseInt(element)})
   for (let i = 0; i < convertedNumbers.length; i++) {
      //sum the digits
    sum += convertedNumbers[i]
   }
   //Check the rest of the division and store it in a variable
   let checker = sum % 2
   let message = ""
   //Alert the appropriate message
   if (checker == 0) {
    message = "Oddish"
   }
   else {
    message = "Evenish"
   }
   alert("The number is: " + message)
   return message
}