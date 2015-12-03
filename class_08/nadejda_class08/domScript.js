function doSomethingWithP(){
	var myParagraph = document.getElementById("example-p");
	myParagraph.innerText = "Новое содержимое тестового абзаца";
	console.log("Содержимое тестового абзаца: " + myParagraph.innerText)
}

var numberOfCreatedP = 0;


function doSomethingWithDiv() {
	numberOfCreatedP++;
	var myDiv = document.getElementById("example-div");
	
	console.log(myDiv.innerText);

	var newP = document.createElement("p");

	newP.innerHTML = "New created Paragraph";
	console.log("New tag p with number " + numberOfCreatedP)
	myDiv.appendChild(newP);
}

function doSomethingWithInput() {

	var myTextInput = document.getElementById("example-input");
	console.log("Value is: " + myTextInput.value);
}

function resetInput() {
	
	document.getElementById("example-input").value = "";
}


function handleSelectChange() {

	var selectOption = document.getElementById("example-select")
	console.log("You selected value - " + selectOption.value)
}

function doSomethingWithUl() {
	var testUl = document.getElementById("example-ul");
	var liArray = testUl.childNodes;
	var sumOfLi = 0;

	for (var i = 0; i<liArray.length; i++) {
		if (liArray[i].nodeType == 1){

			var liStringValue = liArray[i].innerText;
			var liIntValue = parseInt(liStringValue);

			sumOfLi += liIntValue;

		}
	}
	console.log("Sum of all li's", sumOfLi);
}