function doSomethingWithP(){

console.debug('doSomethingWithP called');

var exampleP = document.getElementsById('example-p');

console.log('Text in example-p is:', exampleP.innerText);
exampleP.innerText = 'ololo';
}

var numberOfCreatedP = 0;

function doSomethingWithDiv(){

	console.debug('doSomethingWithDiv called');

	numberOfCreatedP++;

	var exampleDiv = document.getElementsById('example-div');

	var newP = document.createElement('p');

	newP.innerHTML = 'new tag p with number' + numberOfCreatedP;

	exampleDiv.appendChild(newP);

}

function doSomethingWithInput(){
	console.log('doSomethingWithInput works');

	var testInput = document.getElementsById('example-input');

	console.log('Value of test input is:', testInput.value);

}

var reset
