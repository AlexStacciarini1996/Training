let array1 = [true, false, true, true, false, false]
let array2 = [false, false]
let array3 = [true, true, false]
let array4 = []
console.log(TrueCounter(array1))
console.log(TrueCounter(array2))
console.log(TrueCounter(array3))
console.log(TrueCounter(array4))




function TrueCounter(array) {
   let trueValue = 0
   
   for (let i = 0; i < array.length; i++) {
       if (array[i].toString() == "true") {
           trueValue++
       }
       if (array.length == 0) {
           return 0
       }
   }
   console.log("The number of true values in the array is: " + trueValue)
   return trueValue
 }