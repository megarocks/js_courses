
function doSomethingWithP() {
    var a = document.getElementById("example-p");
    console.log(a.innerHTML = "VASYA");
}

var numberCreatedP = 0;
function doSomethingWithDiv() {
    numberCreatedP++;
    var exampleDiv = document.getElementById("example-div");
    var newP = document.createElement("p");
    newP.innerHTML = "new tag p with number" + numberCreatedP;
    exampleDiv.appendChild(newP);


}

function doSomethingWithInput() {

    var testInput = document.getElementById("example-input");
    console.log(testInput.value);

}
function resetInput(){

    var testInput = document.getElementById("example-input");
    testInput.value = "";  

}


function handleSelectChange() {

    var   testSelect = document.getElementById("example-select");
    console.log(testSelect.value);


}

function doSomethingWithUl() {

    var list = document.getElementById('example-ul');    
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






















