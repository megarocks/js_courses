function doSomethingWithP(){
	var exampleP = document.getElementById('example-p');
	console.log('Text in example-p is: ', exampleP.innerText);
	exampleP.innerText = 'hello';
}

var numberOfCreatedP = 0;

function doSomethingWithDiv(){
	console.debug('doSomethingWithDiv called');
	numberOfCreatedP++;
	var exampleDiv = document.getElementById('example-div');
	var newDiv = document.createElement('p'); 
	newDiv.innerHTML = 'new tag p with number ' + numberOfCreatedP;
	exampleDiv.appendChild(newDiv);
}
function doSomethingWithInput(){
	console.log('doSomethingWithInput works');
	var testInput = document.getElementById('example-input');
	console.log(testInput.value);
}
var resetInput = function(){
	var testInput = document.getElementById('example-input');
	testInput.value = '';
}

function handleSelectChange(){
	var testSelect = document.getElementById('example-select');
	console.log('Select value changed', testSelect.value);

}

function doSomethingWithUl(){
	var testUl = document.getElementById('example-ul');
	var liArrays = testUl.childNodes;
	var sumOfLi = 0;
	for (var i=0; i < liArrays.length; i++){
		if(liArrays[i].nodeName == 'LI'){
			var liStringValue = liArrays[i].innerHTML;
			var liIntValue = parseInt(liStringValue);
			
			sumOfLi = sumOfLi + liIntValue;
		}
	}
	console.log(sumOfLi);
}