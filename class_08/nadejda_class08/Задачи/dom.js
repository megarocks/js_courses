function getInputValues() {
	var firstInputValue = document.getElementById("firstInput").value;
	var secondInputValue = document.getElementById("secondInput").value;

	firstInputValue = parseInt(firstInputValue);
	secondInputValue = parseInt(secondInputValue);

		var inputValuesArray = [firstInputValue, secondInputValue]
		return inputValuesArray
	};



function compareInputValues() {
	var inputValues = getInputValues();
	if (inputValues[0] > inputValues[1]) {
		console.log("The first input number is bigger (", inputValues[0], ")");
	} else if (inputValues[0] < inputValues[1]) {
		console.log("The second input number is bigger (", inputValues[1], ")");
	} else {
		console.log("The numbers are equal");
	}
};

compareInputValues();