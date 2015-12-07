var calculatorPage = {

	init: function () {
		console.log("Calculator iniotializeted");

	}
var getX;
var getY;
var sign;
var results;
myArray: [];
buttonCount: $("#button_count").click(counting);
buttonMax: $("#buttonMax").click(findMax); 
buttonMin: $("#buttonMin").click(findMin); 
buttonSum: $("#buttonSum").click(calcSum);                    
buttonAvg: $("#buttonAvg").click(calcAvg);  

 getValue: function() {
	getX = parseInt($('#ourX').val());
	getY =  parseInt($('#ourY').val()); 
	sign = $('#chooseOperator').val(); 
};

counting: function() {
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


 findMax: function() {
	var max = Math.max.apply(Math,myArray);
	console.log("Максимальное значение: ",max);
};


 findMin: function() {
	var min = Math.min.apply(Math,myArray);
	console.log("Минимальное значение: ",min);
};

 calcSum: function() {
	var sum = 0;
	for(var i=0; i < myArray.length; i++){
	    sum = sum + parseInt(myArray[i]);
	}
	console.log("Сумма всех чисел: ",sum);
	return sum;
};

 calcAvg: function() {						
	var sum = calcSum();
	var avg = sum/myArray.length;
	console.log("Среднее всех чисел: ",avg);
};



};
calculatorPage.init();
