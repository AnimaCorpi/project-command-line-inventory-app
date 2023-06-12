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

function addToInventory (organicsData, type, name, itemPrice, itemQuantity) {
    let obj = {"itemType": `${type}`, "itemName": `${name}`, "price": `${itemPrice}`, "quantity": `${itemQuantity}`}
    organicsData.push(obj)
    return organicsData
}
//console.log(addToInventory(organicsData, "candy", "skittles", 0.75, 50)) ✅ works
function removeFromInventory(organicsData, name) {
    for (let items = 0; items < organicsData.length; items++) {
        // const element = organicsData[items];
        if (items.itemName === `${name}`) {
            organicsData.splice(items,1)
        }
    }
    return organicsData
}
console.log(removeFromInventory(organicsData, "apple"))