var firstInputValue;
var secondInputValue;
var selectValue;
var results;

//Получение значения из инпутов и селекта
function getInputValues() {
	
	firstInputValue = parseInt($("#firstInput").val());
	secondInputValue = parseInt($("#secondInput").val());
	selectValue = document.getElementById("operators").value;

	var inputValuesArray = {
		firstValue: firstInputValue,
		secondValue:  secondInputValue,
		operator: selectValue
	}
	return inputValuesArray
};


// Функция сравнения данных, полученых в предидущей функции
function compareInputValues() {
	var inputValues = getInputValues();
	var result = document.createElement('div');
	document.getElementById("inputs").appendChild(result);
	  

	if (inputValues.firstValue > inputValues.secondValue) {
		result.innerText = "The first input number is bigger (" + inputValues.firstValue + ")";
	} else if (inputValues.firstValue < inputValues.secondValue) {
		result.innerText = "The second input number is bigger (" + inputValues.secondValue + ")";
	} else {
		result.innerText = "The numbers are equal";
	}
};

// Функция, считающая введенное пользователем выражение (значения из инпутов и знак из селекта)
function calculateInputValues() {
	var inputValues = getInputValues();


	switch(inputValues.operator) {
		case "+": 
			results = inputValues.firstValue + inputValues.secondValue
		break
		case "-":
			results = inputValues.firstValue - inputValues.secondValue
		break
		case "*":
			results = inputValues.firstValue * inputValues.secondValue
		break
		case "/":
			results = inputValues.firstValue / inputValues.secondValue
		break

	}
	var resultInfo = document.createElement('div');
	resultInfo.innerText = "The result is: " + inputValues.firstValue + inputValues.operator + inputValues.secondValue + " = " + results;
	document.getElementById("inputs").appendChild(resultInfo);
	return results;

};


// Глобальная переменная для тела таблицы(чтоб таблица не переписывалась заново при каждом нажатии кнопки, а в нее добавлялись результаты)
var tableBody = {};

function createResultsTable() {



	var inputValues = getInputValues();
	
	// Если таблица с таким классом не существует, тогда создаем такую таблицу
	if(!document.getElementsByClassName('table-striped').length){
	
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
	}
	
	// Добавляем одну строку в таблицу при каждом вызове функции и заполняем ее данными (время операции, вычисляемое выражение, результат)
    // var date = (new Date).getDay() + "." + (new Date).getMonth() + "." + (new Date).getFullYear() + ", " + (new Date).getHours() + "." + (new Date).getMinutes();
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

// Функция покраски строки с наибольшим результатом
/*function painTheBiggestValueRow() {

}*/
var myButton = $('#compare-values');

$('#compare-values').click(compareInputValues);


$('#getResults').click(createResultsTable);