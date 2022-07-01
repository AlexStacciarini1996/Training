//Char Repeater
//Type a character 
//Type how many times you want it to be repeated (x)
//The function will repeat the number x times
//The native repeat() Javascript function is forbidden
let repeatingChar = prompt("Type a character you want to repeat")
let times = parseInt(prompt("How many times do you want to repeat it?"))
alert(Repeater(repeatingChar, times)) 
function Repeater(character, number) {
    let charRep = []
    for (let rep = 0; rep <= number - 1; rep++) {
       charRep.push(character)     
    }
    let shower = ("Char repeated " + number + " times" + "\n" + charRep)
    return shower
}