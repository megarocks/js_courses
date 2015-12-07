var getX;
var getY;
var sign;
var results;
var myArray = [];
var buttonCount = $("#button_count").click(counting);
var buttonMax = $("#buttonMax").click(findMax); 
var buttonMin = $("#buttonMin").click(findMin); 
var buttonSum = $("#buttonSum").click(calcSum);                    
var buttonAvg = $("#buttonAvg").click(calcAvg);  // Спросить можно ли переменные называть так же как и айдишники

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
};

function calcAvg() {						// Спросить как сократить код в расчетах среднего
	var sum = 0;
	for(var i=0; i < myArray.length; i++){
	    sum = sum + parseInt(myArray[i]);
	}
	var avg = sum/myArray.length;
	console.log("Среднее всех чисел: ",avg);
};

// //----------------------------------------------------------------------------

	var tableBody = {};

	function createResultsTable() {

	var values = getValue();
	// Если таблица с таким классом не существует, тогда создаем такую таблицу
	
		var resultsTable = document.createElement("table");
		resultsTable.border='1';
		resultsTable.className = "table table-striped";
		document.getElementById("resultsTable").appendChild(resultsTable);

		// Добавляем шапку таблицы
		var tableHead = document.createElement('thead');
		resultsTable.appendChild(tableHead);
		
		var tr = document.createElement('tr');
		tableHead.appendChild(tr);

		for (var i=0; i<3; i++){
			var td = document.createElement('td');
			tr.appendChild(td);
		}
		
		document.getElementsByTagName('td')[0].innerText = "Date";
		
		document.getElementsByTagName('td')[1].innerText = "Expression";
		
		document.getElementsByTagName('td')[2].innerText = "Result";
		
		// Добавляем тело таблицы
		tableBody = document.createElement('tbody');
		tableBody.insertRow(0);
		resultsTable.appendChild(tableBody);		
	
	
	// Добавляем одну строку в таблицу при каждом вызове функции и заполняем ее данными (время операции, вычисляемое выражение, результат)
    
	var date = moment().format('LLLL');
	var tr = document.createElement('tr');
		tableBody.appendChild(tr);
		for (var j=0; j<3; j++){
			var td = document.createElement('td');
			tr.appendChild(td);

			if (j == 0){
				td.innerText = date;
			} else if(j == 1){
				td.innerText = inputValues.firstValue + inputValues.operator + inputValues.secondValue;
		
			} else if(j == 2){
				td.innerText = calculateInputValues();
		
			}


		}
	
    
}