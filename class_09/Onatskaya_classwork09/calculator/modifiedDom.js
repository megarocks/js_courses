var calculatorPage = {

	firstInputValue: null,
	secondInputValue: null,
	selectValue: null,
	results: null,
	tableBody: {},// Глобальная переменная для тела таблицы(чтоб таблица не переписывалась заново при каждом нажатии кнопки, а в нее добавлялись результаты)
	resArray: [],//Создаем массив из значений последних ячеек в каждой строке


	
	init: function () {
        calculatorPage.bindControls();
    },

    bindControls: function() {
    	$('#compare-values').click(calculatorPage.compareInputValues);
    	$('#getResults').click(calculatorPage.createResultsTable);
    	$("#operators").change(calculatorPage.calculateInputValues)
    	$(".maximRow").click(calculatorPage.paintTheBiggestValueRow);
    	$(".minimRow").click(calculatorPage.paintTheSmallestValueRow);
    	$('#getResults').click(calculatorPage.getSum);
    	$('#getResults').click(calculatorPage.getAvg);
    	$(".clearTable").click(calculatorPage.clearTable);
    	$(".asc").click(calculatorPage.sortByResultAsc);
    	$(".desc").click(calculatorPage.sortByResultDesc);
    	$(".dateAsc").click(calculatorPage.sortByDateAsc);
    	$(".dateDesc").click(calculatorPage.sortByDateDesc);


    },

    //Получение значения из инпутов и селекта
    getInputValues: function() {
    	calculatorPage.firstInputValue = parseInt($("#firstInput").val());
		calculatorPage.secondInputValue = parseInt($("#secondInput").val());
		calculatorPage.selectValue = $("#operators").val();

		var inputValuesArray = {
			firstValue: calculatorPage.firstInputValue,
			secondValue:  calculatorPage.secondInputValue,
			operator: calculatorPage.selectValue
		}
		return inputValuesArray
	},

	// Функция сравнения данных, полученых в предидущей функции
	compareInputValues: function() {
		var inputValues = calculatorPage.getInputValues();
		var result = document.createElement('div');
		document.getElementById("inputs").appendChild(result);
		  

		if (inputValues.firstValue > inputValues.secondValue) {
			result.innerText = "The first input number is bigger (" + inputValues.firstValue + ")";
		} else if (inputValues.firstValue < inputValues.secondValue) {
			result.innerText = "The second input number is bigger (" + inputValues.secondValue + ")";
		} else {
			result.innerText = "The numbers are equal";
		}
	},

	// Функция, считающая введенное пользователем выражение (значения из инпутов и знак из селекта)
	calculateInputValues: function() {
		var inputValues = calculatorPage.getInputValues();

		switch(inputValues.operator) {
			case "+": 
				calculatorPage.results = inputValues.firstValue + inputValues.secondValue
			break
			case "-":
				calculatorPage.results = inputValues.firstValue - inputValues.secondValue
			break
			case "*":
				calculatorPage.results = inputValues.firstValue * inputValues.secondValue
			break
			case "/":
				calculatorPage.results = inputValues.firstValue / inputValues.secondValue
			break

		}
		var resultInfo = document.createElement('div');
		resultInfo.innerText = "The result is: " + inputValues.firstValue + inputValues.operator + inputValues.secondValue + " = " + calculatorPage.results;
		document.getElementById("inputs").appendChild(resultInfo);
		//resArray.push(calculatorPage.results);	//Каждый результат добавляется в массив, чтобы позже определить наибольшый результат из всех
		return calculatorPage.results;
	},

	createResultsTable: function() {
		var inputValues = calculatorPage.getInputValues();
	
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
			$('td')[0].setAttribute("class", "dateAsc");
			
			$('td')[1].innerText = "Expression";
			
			$('td')[2].innerText = "Result";
			$('td')[2].setAttribute("class", "asc");

			// Добавляем тело таблицы
			calculatorPage.tableBody = document.createElement('tbody');
			//tableBody.insertRow(0);
			resultsTable.appendChild(calculatorPage.tableBody);		
		}
		
		// Добавляем одну строку в таблицу при каждом вызове функции и заполняем ее данными (время операции, вычисляемое выражение, результат)
	    //var date = (new Date).getDay() + "." + (new Date).getMonth() + "." + (new Date).getFullYear() + ", " + (new Date).getHours() + "." + (new Date).getMinutes();
		var date = moment().format('LLLL');
		var tr = document.createElement('tr');
		calculatorPage.tableBody.appendChild(tr);
		for (var j=0; j<3; j++){
			var td = document.createElement('td');
			tr.appendChild(td);

			if (j == 0){
				td.innerText = date;
			} else if(j == 1){
				td.innerText = inputValues.firstValue + inputValues.operator + inputValues.secondValue;
		
			} else if(j == 2){
				calculatorPage.resArray.push(td.innerText = calculatorPage.calculateInputValues());//Каждую последнюю ячейку тела таблицы добавляем в массив, чтобы позже определить количество выполненных операций и среднее арифметическое
				td.className = "result";
			}
		}
	},

	// Функция покраски строки с наибольшим результатом
	paintTheBiggestValueRow: function() {
		var max = calculatorPage.resArray[0];//Находим максимальное значение из массива элементов
		for(var i = 0; i <=calculatorPage.resArray.length -1; i++){
				
			if((max - calculatorPage.resArray[i]) <= 0){
				max = calculatorPage.resArray[i];
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
	},

	paintTheSmallestValueRow: function() {
		var min = calculatorPage.resArray[0];//Находим минимальное значение из массива элементов
		for(var i = 0; i <=calculatorPage.resArray.length -1; i++){
				
			if((min - calculatorPage.resArray[i]) >= 0){
				min = calculatorPage.resArray[i];
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
	},

	//Функция считает количество проведенных расчетов, а также сумму чисел из последней колонки
	getSum: function() {
		if(!document.getElementsByClassName('sum').length){
			var theSumText = document.createElement("p");/*Создаем и добавляем элемент для вывода нашей информации*/
			theSumText.className = "sum";
			$("#resultsTable").append(theSumText);
		}
		var operationsCounter = calculatorPage.resArray.length;/*Количество расчетов равняется количеству ячеек с классом .result(получаем в функции createResultsTable)*/

		//console.log(operationsCounter);
		var theSum = 0;
		for (var i = 0; i <= calculatorPage.resArray.length -1; i++) {
			theSum += calculatorPage.resArray[i];/*Считаем сумму значений в каждой ячейке с классом .result*/
		}
		
		$(".sum").text("There are was " + operationsCounter + " operations executed. The sum of all operations is " + theSum);
		return theSum;
	},

	getAvg: function() {
		if(!document.getElementsByClassName('avg').length){
	
			var theAvgText = document.createElement("p");/*Создаем и добавляем элемент для вывода нашей информации*/
			//theSumText.className = "sum";
			theAvgText.className = "avg";
			$("#resultsTable").append(theAvgText);
		}
		
		var theAvg = calculatorPage.getSum()/calculatorPage.resArray.length;/*Вычисляем среднее арифметическое, используя значение theSum из предидущей функции*/
		
		$(".avg").text("The avg of all operations is " + theAvg);
	},

	//Очистка строк таблицы от данных
	clearTable: function() {
		var tableText = $("tbody tr td").text("");//Заменяем существующий текст ячеек на пустую строку
	},

	/*Сортировка строк таблицы по возрастанию результата*/
	sortByResultAsc: function () {
		var rows = $("tbody tr");
		rows.sort(function(firstRow, secondRow){

			var resultOfFirstRow = parseInt($(firstRow).find('td')[2].innerText);
			var resultOfSecondRow = parseInt($(secondRow).find('td')[2].innerText);
			console.log(resultOfFirstRow - resultOfSecondRow);
			return resultOfFirstRow - resultOfSecondRow;
		});
		rows.appendTo('tbody');
		$("thead tr td:last-child").removeClass("asc").addClass("desc");
	},

	/*Сортировка строк таблицы по убыванию результата*/
	sortByResultDesc: function() {
		var rows = $("tbody tr");
		rows.sort(function(firstRow, secondRow){

			var resultOfFirstRow = parseInt($(firstRow).find('td')[2].innerText);
			var resultOfSecondRow = parseInt($(secondRow).find('td')[2].innerText);
			console.log( resultOfSecondRow - resultOfFirstRow);
			return resultOfSecondRow - resultOfFirstRow;
		});
		rows.appendTo('tbody');
		$("thead tr td:last-child").removeClass("desc").addClass("asc");
	},

	sortByDateAsc: function() {
		var rows = $("tbody tr");
		rows.sort(function(firstRow, secondRow){

			var resultOfFirstRow = Date.parse($(firstRow).find('td')[0].innerText);
			var resultOfSecondRow = Date.parse($(secondRow).find('td')[0].innerText);
			console.log(resultOfFirstRow - resultOfSecondRow);
			return resultOfFirstRow - resultOfSecondRow;
		});
		rows.appendTo('tbody');
		$("thead tr td:first-child").removeClass("dateAsc").addClass("dateDesc");
	},

	/*Сортировка строк таблицы по убыванию результата*/
	sortByDateDesc: function() {
		var rows = $("tbody tr");
		rows.sort(function(firstRow, secondRow){

			var resultOfFirstRow = Date.parse($(firstRow).find('td')[0].innerText);
			var resultOfSecondRow = Date.parse($(secondRow).find('td')[0].innerText);
			console.log( resultOfSecondRow - resultOfFirstRow);
			return resultOfSecondRow - resultOfFirstRow;
		});
		rows.appendTo('tbody');
		$("thead tr td:first-child").removeClass("dateDesc").addClass("dateAsc");
	}


};


$(document).ready(function() {
	calculatorPage.init();
})