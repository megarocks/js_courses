function doSomethingWithP () {
	var a = document.getElementById('example-p');

	console.log(a.innerText = "My text");


}

var numberOfCreateP = 0;

function doSomethingWithDiv() {
	numberOfCreateP++;

	var myDiv = document.getElementById('example-div');
	
	var newP = document.createElement('p');
	newP.innerHTML = 'new tag p'+ numberOfCreateP;

	myDiv.appendChild(newP);

}



function doSomethingWithInput() {
	console.log('doSomethingWithInput works');
	var testInput = document.getElementById('example-input');
	console.log(testInput.value);
}


function doReset(){
	var testInput = document.getElementById('example-input');
	testInput.value = "";

}

function handSelectChange(){
	var change = document.getElementById('example select');
	console.log(change.value);
}


function doSomethingWithUl(){

	var list = document.getElementById('example-ul');
	// console.log(list.innerText);
	var liArray = list.childNodes;
	var onlyLi = [];
	var sumOfLi = 0;
	

	for (i = 0; i < liArray.length;i++) {

		if(liArray[i].nodeType == 1) {

			var liStringValue = liArray[i].innerText;
			var liIntValue = parseInt(liStringValue);

			sumOfLi = sumOfLi + liIntValue;



		}
	}

console.log('Sum of all li', sumOfLi);
}