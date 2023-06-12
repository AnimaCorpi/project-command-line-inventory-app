const organicsData = require("../data/organicsData.json")

//console.log(organicsData) ✅ check to make sure the the dat file was properly exported


// example data type
//  {"itemType": "fruit", "itemName": "apple", "price": 1.25, "quantity": 100},


//checks the inventory
    //checks the quantity of each item
        //if it is not stock, it will add a new key called "inStock" to the object, setting it to "false"
            // if not stock, it puts all the out of stock items into a seperate array
function checkInventory (organicsData){
    let outOfStock = ["out of stock items:", ]
    for (let items of organicsData){
        if (items.quantity === 0) {
            items["inStock"] = false
            outOfStock.push(items)
        }
    }
    return outOfStock
}
//console.log (checkInventory(organicsData)) ✅ works

//creates a new object for the information given
    //if the information given does not match the format given, then it will send an error message asking for the correct information type
function addToInventory (organicsData, type, name, itemPrice, itemQuantity) {
    if (typeof(type) != "string"){
        return "item type must be a string"
    }
    if (typeof(name) != "string"){
        return "item name must be a string"
    }
    if (typeof(price) != "number"){
        return "item price must be a number"
    }
    if (typeof(quantity) != "number"){
        return "item type must be a number"
    }
    else {
    let obj = {"itemType": `${type}`, "itemName": `${name}`, "price": `${itemPrice}`, "quantity": `${itemQuantity}`}
    organicsData.push(obj)
    return organicsData
    }
}    
// console.log(addToInventory(organicsData, "candy", "skittles", 0.75, 50)) ✅ works
// console.log(addToInventory(organicsData, 99, "skittles", 0.75, 50)) ✅ works
// console.log(addToInventory(organicsData, "candy", 57, 0.75, 50)) ✅ works
// console.log(addToInventory(organicsData, "candy", "skittles", true, 50)) ✅ works
// console.log(addToInventory(organicsData, "candy", "skittles", 0.75, "stuffy stuff stuff stuff")) ✅ works


// node src/organics.js


function removeFromInventory(organicsData, name) {
    for (let i = 0; i < organicsData.length; i++) {
        if (organicsData[i].itemName === name) {
            organicsData.splice(i,1)
        }
    }
    return organicsData
}
// console.log(removeFromInventory(organicsData, "apple")) ✅ works