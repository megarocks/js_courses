var getX;
var getY;
var sign;
var results;
var myArray = [];
var buttonCount = $("#button_count").click(counting);
var buttonMax = $("#buttonMax").click(findMax); 
var buttonMin = $("#buttonMin").click(findMin); 
var buttonSum = $("#buttonSum").click(calcSum);                    
var buttonAvg = $("#buttonAvg").click(calcAvg);  

function getValue() {
	getX = parseInt($('#ourX').val());
	getY =  parseInt($('#ourY').val()); 
	sign = $('#chooseOperator').val(); 
};

function counting() {
	var value = getValue();

	switch (sign) {
		case "+": 
			results = getX + getY
		break
		case "-":
			results = getX - getY
		break
		case "*":
			results = getX * getY
		break
		case "/":
			results = getX / getY
		break
	}
	myArray.push(results);
	console.log(myArray);
};


function findMax() {
	var max = Math.max.apply(Math,myArray);
	console.log("Максимальное значение: ",max);
};


function findMin() {
	var min = Math.min.apply(Math,myArray);
	console.log("Минимальное значение: ",min);
};

function calcSum() {
	var sum = 0;
	for(var i=0; i < myArray.length; i++){
	    sum = sum + parseInt(myArray[i]);
	}
	console.log("Сумма всех чисел: ",sum);
	return sum;
};

function calcAvg() {						
	var sum = calcSum();
	var avg = sum/myArray.length;
	console.log("Среднее всех чисел: ",avg);
};

