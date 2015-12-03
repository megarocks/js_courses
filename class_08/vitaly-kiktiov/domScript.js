function doSomethingWithP() {

    console.debug('doSomethingWithP called');

    var exampleP = document.getElementById('example-p');

    console.log('Text in example-p is:', exampleP.innerText);

    exampleP.innerText = "ololo";

}

var numberOfCreatedP = 0;

function doSomethingWithDiv() {

    console.debug('doSomethingWithDIV called');

    numberOfCreatedP++;

    var exampleDiv = document.getElementById('example-div');

    var newP = document.createElement('p');

    newP.innerHTML = 'new tag p with number ' + numberOfCreatedP;

    exampleDiv.appendChild(newP);


}

function doSomethingWithInput() {
    console.log('doSomethingWithInput works');

    var testInput = document.getElementById('example-input');

    console.log('Value of test input is:', testInput.value);

}

var resetInput = function () {
    var testInput = document.getElementById('example-input');
    testInput.value = "";
}

function handleSelectChange() {

    var testSelect = document.getElementById('example-select');
    console.log('Select value changed', testSelect.value);

    switch (testSelect.value) {
        case ("/"):
            console.log('case with / worked');
            break;
    }

}

function doSomethingWithUl() {

    var testUl = document.getElementById('example-ul');

    var liArray = testUl.childNodes;

    var sumOfLi = 0;

    for (var i = 0; i < liArray.length; i++) {

        if (liArray[i].nodeName == 'LI') {

            var liStringValue = liArray[i].innerText;
            var liIntValue = parseInt(liStringValue);

            sumOfLi = sumOfLi + liIntValue;

        }

    }

    console.log('Sum of all LI`s', sumOfLi);

}

function showSwitchCase() {

    var a = 10;
    var b = 15;
    var c;

    var whatToDo = '*';

    switch (whatToDo) {

        case ('*'):
            c = a * b;
            break;
        case ('+'):
            c = a + b;
            break;
        case ('-'):
            c = a + b;
            break;

    }

}

