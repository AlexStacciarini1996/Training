let figure = prompt("Type 's' for calculating the perimeter of a square or 'c' for calculating the perimeter of a circle" )
let num = 0
switch (figure) {
    case "s": 
    num = prompt("Type the value of the square side: ")
    console.log("The value of the perimeter is: " + Calculator(num))
    break
    case "c":
    num = prompt("Type the value of the circle radius: ")
    console.log("The value of the perimeter is: " + Calculator(num))
    break
    
}


function Calculator(number) {
    if (figure == "s") {
        let sqrPerim = 4 * number
        console.log(sqrPerim)
        return sqrPerim
    }
    else if (figure == "c") {
        let circPerim = 6.28 * number
        console.log(circPerim)
        return circPerim
    }
}
