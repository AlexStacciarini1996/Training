//This app will calculate the total price of groceris a persona bought in the market
//A grocery is an object that has a name, quantity and price
//Given an array of groceries bought, calculate the price
let grocery =  {
   
} 
let groceryList = []
let itemName = ""
let quant
let price
let looper = 1
let newItem = Object.create(grocery)
do {
itemName = prompt("Which object did you buy?")
console.log(itemName)
newItem.name = itemName
console.log(itemName) 
quant = parseInt(prompt("How many did you buy?"))
newItem.quantity = quant
price = parseFloat(prompt("How much did it cost?"))
newItem.price = price
groceryList.push(newItem)
console.log(newItem)
console.log(groceryList)
looper = parseInt(prompt("Type 1 to add another item or any other number to exit"))
}while(looper == 1) 
console.log(groceryList)

