var firstInputValue;
var secondInputValue;
var selectValue;
var results;


/*$('.btn').on('click', function() {
	alert("Button clicked");
});*/



//Получение значения из инпутов и селекта
function getInputValues() {
	
	/*firstInputValue = parseInt(document.getElementById("firstInput").value);
	secondInputValue = parseInt(document.getElementById("secondInput").value);
	selectValue = document.getElementById("operators").value;*/

	firstInputValue = parseInt($("#firstInput").val());
	secondInputValue = parseInt($("#secondInput").val());
	selectValue = $("#operators").val();

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

$('#compare-values').click(compareInputValues);
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
	//resArray.push(results);	//Каждый результат добавляется в массив, чтобы позже определить наибольшый результат из всех
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
		
		$('td')[0].innerText = "Date";
		$('td')[0].setAttribute("id", "facility_header");
		
		$('td')[1].innerText = "Expression";
		
		$('td')[2].innerText = "Result";
		$('td')[2].setAttribute("id", "city_header");

		// Добавляем тело таблицы
		tableBody = document.createElement('tbody');
		tableBody.insertRow(0);
		resultsTable.appendChild(tableBody);		
	}
	
	// Добавляем одну строку в таблицу при каждом вызове функции и заполняем ее данными (время операции, вычисляемое выражение, результат)
    //var date = (new Date).getDay() + "." + (new Date).getMonth() + "." + (new Date).getFullYear() + ", " + (new Date).getHours() + "." + (new Date).getMinutes();
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
				resArray.push(td.innerText = calculateInputValues());//Каждую последнюю ячейку тела таблицы добавляем в массив, чтобы позже определить количество выполненных операций и среднее арифметическое
				td.className = "result";
			}


		}
	
    
}
$('#getResults').click(createResultsTable);




var resArray = [];//Создаем массив из значений последних ячеек в каждой строке

// Функция покраски строки с наибольшим результатом
function paintTheBiggestValueRow() {
	var max = resArray[0];//Находим максимальное значение из массива элементов
	for(var i = 0; i <=resArray.length -1; i++){
			
		if((max - resArray[i]) <= 0){
			max = resArray[i];
		}
		console.log(max);
	}
	var maxTd = document.getElementsByClassName("result");//Находим строку с классом .result
	for( var i = 0; i <= maxTd.length-1; i++) {
		if( maxTd[i].innerText == max) {//Сравниваем содержимое ячейки со значением максимального результата
			maxTd[i].parentNode.className = "maxRow";
			console.log(maxTd[i].parentNode.className);
		}
	}
}

$(".maximRow").click(paintTheBiggestValueRow);


//Функция покраски строки с наименьшим результатом
function paintTheSmallestValueRow() {
	var min = resArray[0];//Находим минимальное значение из массива элементов
	for(var i = 0; i <=resArray.length -1; i++){
			
		if((min - resArray[i]) >= 0){
			min = resArray[i];
		}
		console.log(min);
	}
	var minTd = document.getElementsByClassName("result");//Находим строку с классом .result
	for( var i = 0; i <= minTd.length-1; i++) {
		if( minTd[i].innerText == min) {//Сравниваем содержимое ячейки со значением минимального результата
			minTd[i].parentNode.className = "minRow";
			console.log(minTd[i].parentNode.className);
		}
	}
}

$(".minimRow").click(paintTheSmallestValueRow);

function getSum() {//Функция считает количество проведенных расчетов, а также сумму чисел из последней колонки
	if(!document.getElementsByClassName('sum').length){
	
		var theSumText = document.createElement("p");/*Создаем и добавляем элемент для вывода нашей информации*/
		theSumText.className = "sum";
		$("#resultsTable").append(theSumText);
	}
	var operationsCounter = resArray.length;/*Количество расчетов равняется количеству ячеек с классом .result(получаем в функции createResultsTable)*/

	//console.log(operationsCounter);
	var theSum = 0;
	for (var i = 0; i <= resArray.length -1; i++) {
		theSum += resArray[i];/*Считаем сумму значений в каждой ячейке с классом .result*/
	}
	
	$(".sum").text("There are was " + operationsCounter + " operations executed. The sum of all operations is " + theSum);
	return theSum;
}
$('#getResults').click(getSum);





function getAvg() {
	
	if(!document.getElementsByClassName('avg').length){
	
		var theAvgText = document.createElement("p");/*Создаем и добавляем элемент для вывода нашей информации*/
		//theSumText.className = "sum";
		theAvgText.className = "avg";
		$("#resultsTable").append(theAvgText);
	}
	
	var theAvg = getSum()/resArray.length;/*Вычисляем среднее арифметическое, используя значение theSum из предидущей функции*/
	
	$(".avg").text("The avg of all operations is " + theAvg);
}
$('#getResults').click(getAvg);




function clearTable() {//Очистка строк таблицы от данных
	var tableText = $("tbody tr td").text("");//Заменяем существующий текст ячеек на пустую строку
}
$(".clearTable").click(clearTable);

/*-------------------------------------------------------------------------------------------------*/
/*var table = $('table');
    
    $('#facility_header, #city_header')
        .wrapInner('<span title="sort this column"/>')
        .each(function(){
            
            var th = $(this),
                thIndex = th.index(),
                inverse = false;
            
            th.click(function(){
                
                table.find('td').filter(function(){
                    
                    return $(this).index() === thIndex;
                    
                }).sortElements(function(a, b){
                    
                    return $.text([a]) > $.text([b]) ?
                        inverse ? -1 : 1
                        : inverse ? 1 : -1;
                    
                }, function(){
                    
                    // parentNode is the element we want to move
                    return this.parentNode; 
                    
                });
                
                inverse = !inverse;
                    
            });
                
        });*/

/*function sortTable() {

	var rows = $("tbody tr");
	rows.sort(function(firstRow, secondRow){
		var resultOfFirstRow = $(firstRow).find('td')[2].val();
		var resultOfSecondRow = $(secondRow).find('td')[2].val();

		console.debug('Row to sort: ',oneRow);	

		return resultOfFirstRow - resultOfSecondRow;
	});
	console.log(rows);
}


$(".sort").click(sortTable);
*/

/*

var calculatorPage = {
	
	init: function() {
		console.debug("Calculator page initialized");
	}
}


calculatorPage.init();

http://jsfiddle.net/spetnik/gFzCk/1953/

*/

