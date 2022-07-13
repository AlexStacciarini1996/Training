//This app will generate a number between 1 and 6, representing a six sided dice in a board game
//The player may adavance in the board according to the number they got
//If the player lands on the same tile of another player, a bonus is activated

let position1 = Math.floor(Math.random() * 6 + 1)
console.log(position1)
let position2 = Math.floor(Math.random() * 6 + 1)
console.log(position2)
TileChecker(position1, position2)

function TileChecker(pos1, pos2) {
    let bonusChecker = false
    if (pos1 == pos2) {
        bonusChecker = true
        console.log("Bonus active!")
    }
    return bonusChecker
}
