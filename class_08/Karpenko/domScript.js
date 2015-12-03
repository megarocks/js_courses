function doSomethingWithP() {
	console.log("Do something with example-p");
	var exampleP = document.getElementById("example-p");
	console.log("Text is example-p is:", exampleP.innerText);
	exampleP.innerText = "ololo";
}

var numberOfCreatedP = 0;

function doSomethingWithDiv() {
	console.debug('doSomethingWithDiv called');
	numberOfCreatedP++;
	var exampleDiv = document.getElementById('example-div');
	var newP = document.createElement('p');
	newP.innerHTML = 'new tag p with number ' + numberOfCreatedP;
	exampleDiv.appendChild(newP);
}

function doSomethingWithInput() {
	console.log("doSomethingWithInput works");
	var testInput = document.getElementById("example-input");
	console.log('Value of input is', testInput.value);
}

var resetInput = function() {
	var testInput = document.getElementById('example-input');
	testInput.value = "";
}

function handleSelectChange() {
	var testSelect = document.getElementById('example-select');
	console.log('Select value changed', testSelect.value);
}

function doSomethingWithUl() {
	var testUl = document.getElementById('example-ul');
	var liArray = testUl.childNodes;
	var onlyLi = [];
	var sumOfLi = 0;

	for (var i = 0; i < liArray.length; i++) {
		if (liArray[i].nodeName == 'LI') {
			var liStringValue = liArray[i].innerText;
			var liIntValue = parsInt(liStringValue);
			sumOfLi = sumOfLi + liIntValue;
		}
	}
	console.log('Sum of all LIs', sumOfLi);
}