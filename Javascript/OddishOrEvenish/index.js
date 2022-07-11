//This app will check if a number is oddish or evennish
//A number is Oddish if the sum of all of its digits are odd
//A number is Evenish is the sum of all of its nmbers is even
//This has nothing to do with Pokémon, as far as I know
let number = prompt("Type a number and we will tell you if it's Oddish or Evenish")
Checker(number)
function Checker(numberString) {
   let sum = 0
   let splitNumbers = []
   splitNumbers = numberString.split('')
   let convertedNumbers = splitNumbers.map(function(element) { return parseInt(element)})
   for (let i = 0; i < convertedNumbers.length; i++) {
    sum += convertedNumbers[i]
   }
   let checker = sum % 2
   let message = ""
   if (checker == 0) {
    message = "Oddish"
   }
   else {
    message = "Evenish"
   }
   alert("The number is: " + message)
   return message
}