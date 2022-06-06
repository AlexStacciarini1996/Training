let firstnumber = NumberOne()
let secondNumber = NumberTwo()
TheReturner(firstnumber, secondNumber)
function NumberOne() {
let number = prompt("Type the first number")
return number
}
function NumberTwo() {
    let number = prompt("Type the second number")
    return number
}
function TheReturner(first,second)
{
    if (first > second) {
        alert("F")
     }
    else if (first < second) {
        alert("G")
    }
    else {
        alert("NEITHER")
    }
}