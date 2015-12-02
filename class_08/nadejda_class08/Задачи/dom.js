var firstInputValue;
var secondInputValue;

function getInputValues() {
	
	firstInputValue = parseInt(document.getElementById("firstInput").value);
	secondInputValue = parseInt(document.getElementById("secondInput").value);

	var inputValuesArray = [firstInputValue, secondInputValue]
	return inputValuesArray
};



function compareInputValues() {
	var inputValues = getInputValues();
	var result = document.createElement('div');
	document.getElementById("inputs").appendChild(result);
	  

	if (inputValues[0] > inputValues[1]) {
		result.innerText = "The first input number is bigger (" + inputValues[0] + ")";
	} else if (inputValues[0] < inputValues[1]) {
		result.innerText = "The second input number is bigger (" + inputValues[1] + ")";
	} else {
		result.innerText = "The numbers are equal";
	}
};

function calculateInputValues() {
	firstInputValue = parseInt(document.getElementById("firstInput").value);
	secondInputValue = parseInt(document.getElementById("secondInput").value);

	var selectValue = document.getElementById("operators").value;
	var result;
	switch(selectValue) {
		case "+": 
			result = firstInputValue + secondInputValue
		break
		case "-":
			result = firstInputValue - secondInputValue
		break
		case "*":
			result = firstInputValue * secondInputValue
		break
		case "/":
			result = firstInputValue / secondInputValue
		break

	}
	var resultInfo = document.createElement('div');
	resultInfo.innerText = "The result is: " + firstInputValue + selectValue + secondInputValue + " = " + result;
	document.getElementById("selectAria").appendChild(resultInfo);
};

