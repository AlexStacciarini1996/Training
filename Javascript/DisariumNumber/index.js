//This app will check if a number is a Disarium Number
// A Disarium Number is a number where the sum of its digits raised to their respective positions is the number itself
//Example: number 135 > 1 ^ 1 + 3 ^ 2 + 5 ^ 3 = 1 + 9 + 125 = 135. 135 is a Disarium number
//Exercise origin: edabit.com

//Get the number as a string
let numberString = prompt("Type the number you want to check")
//Call the function
DisariumChecker(numberString)
function DisariumChecker(number) {
    //Split the string into an array of chars
    let splitNumbers = number.split('')
    console.log(splitNumbers)
    //Some variables declaration
    let disarium
    let dis = 0
    //Convert the chars into integers
    let convertedArray = splitNumbers.map(function(element) { return parseInt(element)})
    console.log(convertedArray)

    for(let i = 0; i < convertedArray.length; i++) {
        //For each element in the array, calculate number ^ the index + 1, and sum with the number
        dis += Math.pow(convertedArray[i], i + 1)
        console.log(dis)
    }
    //Check if the sum of the digits is equal to the number given
    if (dis == number) {
        disarium = true
        console.log(disarium)
        alert("The number is a Disarium Number")
    }
    else {
        disarium = false
        console.log(disarium)
        alert("The number is not a Disarium Number")
    }
    return disarium


}
