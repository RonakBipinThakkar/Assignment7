/*eslint-env browser*/
var inventory = [
	[4824, "Shirt", 10, 15.99],
	[6343, "Jeans", 22, 39.99],
	[3223, "Socks", 36, 9.99],
	[2233, "Hat", 12, 14.99],
	[9382, "Jacket", 5, 49.99]]
    
do{
	window.console.log('Commands:');
	window.console.log("view - view products of the inventory \nupdate - update a product quantity. \nexit - exit.");
	var input = prompt("Enter command").toLowerCase();

	if (input == "view") {
		inventory.sort();
		for (var i = 0; i < inventory.length; i++) {
			var currentProduct = inventory[i];
			window.console.log(currentProduct[0] + " " + currentProduct[1] + " (" + currentProduct[2] + ") $" + currentProduct[3]);
		}
	}
	
	if (input == "update") {
		var sku = prompt("Enter sku")
		var quantity = prompt("Enter quantity")
		for (var i = 0; i < inventory.length; i++) {
			if(inventory[i][0] == sku) {
				inventory[i][2] = parseInt(quantity);
			}
		}
	}

	if (input == "exit") break;
}while(true)
