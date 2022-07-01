//This app will count the number of boomerangs in a given array
//A boomerang is a sequence of 3 numbers where the first and last numbers are equal, and the middle one is different
//For example, in the array = [1,2,1,3,4] we have the sequence ]1,2,1]. That sequence is a boomerang


let array1 = [1,2,1,3,5,8,4,6,4]
let array2 = [3,6,8,9,0,9]
let array3 = [1,2,1,2,5,6,5]
let array4 = [1,2,3,4,4,4]
console.log()
alert("Those are the arrays: \n" + "Array 1: " + array1 + "\n" +  "Array 2: " + array2 + "\n" + "Array 3: " + array3 + "\n" + "Array 4: " + array4 +  "\n" + 
    "The number of boomerang in each array is: \n" + BoomerangCounter(array1) + " on Array 1" + "\n" + BoomerangCounter(array2) + " on Array 2 \n"
 + BoomerangCounter(array3) + " on Array 3 \n" + BoomerangCounter(array4) + " on Array 4")
function BoomerangCounter(array) {
let boomerCounter = 0
for (let i = 0; i < array.length; i++) {
    
    if(array[i] == array[i + 2] && array[i] != array[i + 1] && array[i + 2] != array[i + 1]) {
        boomerCounter++
        
    }
    
}
return boomerCounter
}