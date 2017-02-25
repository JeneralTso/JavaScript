function Total() {
	var list; //for itemizing receipt
	var totalPrice = 0;
	
	//Size
	var sizePrice = 0;
	var sizes = document.getElementsByClassName("size"); 

	for (var i=0; i<sizes.length; i++) {
		if (sizes[i].checked) {
			var selSize = sizes[i].value;
		}
	}

	if (selSize === "Personal Size Pizza") {
		sizePrice = 6;
	} else if (selSize === "Medium Pizza") {
		sizePrice = 10;
	} else if (selSize === "Large Pizza") {
		sizePrice = 14;
	} else if (selSize === "Extra Large Pizza") {
		sizePrice = 16;
	}

	//Crust
	var crusts = document.getElementsByClassName("crust"); 
	for (var j=0; j<crusts.length; j++) {
		if (crusts[j].checked) {
			var selCrust = crusts[j].value;
		}
	}

	//Sauce
	var sauces = document.getElementsByClassName("sauce");
	for (var k=0; k<sauces.length; k++) {
		if (sauces[k].checked) {
			var selSauce = sauces[k].value;
		}
	}

//Cheese
	var cheesePrice = 0;
	var cheeses = document.getElementsByClassName("cheese");
	for (var l=0; l<cheeses.length; l++) {
		if (cheeses[l].checked) {
			var selCheese = cheeses[l].value;
		}
	}
		if (selCheese === "Extra Cheese") {
		cheesePrice = 3;
		} else {
		cheesePrice = 0;
		}

	//Itemize current selections on receipt
	list = selSize + "<br />" + selCrust + "<br />" + selSauce + "<br />" + selCheese + "<br />";

	totalPrice = (sizePrice + cheesePrice);

	Meats(totalPrice,list);
};

function Meats(totalPrice,list) {
	var meatsPrice = 0;
	var selectedMeat = []; //declares new array, recommended over using the new Array() constructor.
	var meats = document.getElementsByClassName("meats");

	for (var m=0; m<meats.length; m++) {
		if (meats[m].checked) {
			selectedMeat.push(meats[m].value);
			list = list + meats[m].value + "<br />";
		}
	}

	var meatsCount = selectedMeat.length;
	if (meatsCount>1) {
		meatsPrice = (meatsCount - 1);
	} else {
		meatsPrice = 0;
	}
	totalPrice = (totalPrice + meatsPrice);	
	document.getElementById("invoiceText").innerHTML = list;
	document.getElementById("totalPrice").innerHTML = "Your Total: $" + totalPrice + ".00";
	Veggies(totalPrice,list);
};

function Veggies(totalPrice,list) {
	var veggiesPrice = 0;
	var selectedVeggies = []; 
	var veggies = document.getElementsByClassName("veggies");

	for (var n=0; n<veggies.length; n++) {
		if (veggies[n].checked) {
			selectedVeggies.push(veggies[n].value);
			list = list + veggies[n].value + "<br />";
		}
	}

	var veggiesCount = selectedVeggies.length;
	if (veggiesCount>1) {
		veggiesPrice = (veggiesCount - 1);
	} else {
		veggiesPrice = 0;
	}
	totalPrice = (totalPrice + veggiesPrice);	
	document.getElementById("invoiceText").innerHTML = list;
	document.getElementById("totalPrice").innerHTML = "Your Total: $" + totalPrice + ".00";
};
















