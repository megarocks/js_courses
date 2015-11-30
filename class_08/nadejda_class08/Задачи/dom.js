function getInputValues() {
	var firstInputValue = document.getElementById("firstInput");
	var secondInputValue = document.getElementById("secondInput");

	if (firstInputValue != Number){
		alert("You didn't write a number");
	} else {
		firstInputValue = parseInt(firstInputValue.innerText);
		secondInputValue = parseInt(secondInputValue.innerText);
		console.log("firstInputValue");

		var inputValuesArray = [firstInputValue, secondInputValue]
		return inputValuesArray
	}
};



function compareInputValues() {
	var inputValues = getInputValues();
	if (inputValues[0] > inputValues[1]) {
		console.log(inputValues[0]);
	} else if (inputValues[0] < inputValues[1]) {
		console.log(inputValues[1]);
	} else {
		console.log("The numbers are equal");
	}
};

compareInputValues();