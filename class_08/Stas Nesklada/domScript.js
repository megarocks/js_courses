//function doSomethingWithP(){
//	console.log("Всё работает!!");
//	var fff = document.getElementById("example-p");
//	console.log( fff.innerText="Как то так!!!" );
//}
//var numberTug = 0;
//function doSomethingWithDiv(){
//	console.warn("Всё работает!!");
//	var div = document.getElementById("example-div");
//	var newP = document.createElement("p");
//	numberTug++;
//	newP.innerText = "new tag p number "+numberTug;
//	div.appendChild(newP);
//}
//function doSomethingWithInput(){
//	console.log ('input в работе :)');
//	var search = document.getElementById('example-input');
//	console.warn(search.value);
//}
//function doSomethingWithInputReset(){
//	console.log("work")
//	var search = document.getElementById('example-input');
//	search.value = " ";
//}
//function changeSelect(){
//	var selectValue = document.getElementById('example-select');
//	console.warn(selectValue.value);
//}
//function doSomethingWithUl(){
//	var searchNumber = document.getElementById('example-ul');
//	var liArrays = searchNumber.childNodes;
//	var onlyLi = [];
//	var sumOfLi = 0;
//	for (var i = 0 ; i<liArrays.length;i++){
//		if(liArrays[i].nodeType == 1){

//			var liStrValue = liArrays[i].innerText;
//			var liIntValue = parseInt(liStrValue);
//			sumOfLi = sumOfLi + liIntValue;
//		}
//	}
//	console.log(sumOfLi)
//}

function valueX() {
    var summa=0;
    var searchX = document.getElementById('value-x');
    var xStr = searchX.value;
    var x = parseInt(xStr);
    var searchY = document.getElementById('value-y');
    var yStr = searchY.value;
    var y = parseInt(yStr);
    var eventSearch = document.getElementById('exis');
    var event = eventSearch.value;
    if (isNaN(x) == true ){
        alert('Некорректное значение X!')
    } else if (isNaN(y) == true) {
        alert('Некорректное значение Y!')
    }
    else {
        switch (event) {
            case "+":
                summa = x + y;
                break;
            case "-":
                summa = x - y;
                break;
            case "/":
                summa = x / y;
                break;
            case "*":
                summa = x * y;
                break;
    }
    }

    var searchSumma = document.getElementById("table");
    var newP = document.createElement("p");
    newP.innerText = "Выражение равно " + summa;
    searchSumma.appendChild(newP);
}
