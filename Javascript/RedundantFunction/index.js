//This is a simple app that has a function that will return another function
let string = prompt("Type anything")
alert(Redundant(string))
function Redundant(str) 
{
    return Second(str)
    
}
function Second(string) {
    return string
}