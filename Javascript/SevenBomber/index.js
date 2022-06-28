//This app detects if the given array has the number 7 as an element. If true, the message "KABOOOOOOM" appears.
//If not, the defusal message appears
let bomb1 = [1, 3, 4, 8, 7, 9, 0]
let bomb2 = [3, 2, 1, 6, 5, 8, 9]
let bomb3 = [1, 6, 7, 0]
Defusal(bomb1)
Defusal(bomb2)
Defusal(bomb3)
function Defusal(bomb) {
    let defuser = bomb.filter(element => { return element == 7 })
    console.log(defuser)
    if (defuser == 7) {
        console.log("KABOOOOOOM")
    }
    else {
        console.log("Bomb succesfully defused!")
    }
    return defuser
}
