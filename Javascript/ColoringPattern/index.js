//This app simulates the coloring of a striped pattern
//When coloring, the person will color the squares sequentially
//This app will calculate the ampunt of time needed to color the squares, based on the number of colors and the time needed to switch the pencils
//It takes 2 seconds to color a pattern and 1 second to switch between pencils 
//This person is coloring like, really fast, OMG
//Exercise origin: edabit.com

//Create array of colors

let col = ["Red", "Green", "Blue", "Yellow"]
Color(col)
let col2 = ["Black", "Gray"]
Color(col2)

function Color(array) {
    //Calculating the time based on the array length (2 seconds to color a square based on the number of colors, 1 second to switch the pencil)
    let itsColorinTime = array.length * 2
    let itSwitchinTime = array.length - 1
    //Sum the times
    let itsSumTime = itSwitchinTime + itsColorinTime
    alert ("The amount of time needed is " + itsSumTime + " seconds") 
}