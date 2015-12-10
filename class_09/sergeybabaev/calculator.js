var calculatorPage = {
	init: function () {
		console.debug('Calculator page initialized');
		calculatorPage.bindControls();
	},

	bindControls: function () {
		$('#calculate_button').click(calculatorPage.calculate);
		$('#btnMax').click(calculatorPage.findMax);
		$('#btnMin').click(calculatorPage.findMin);
		$('#btnSum').click(calculatorPage.findSum);
		$('#btnAvg').click(calculatorPage.findAvg);


	},

	calculate: function () {
		var valueX = parseInt($('#value-x').val());
		var valueY = parseInt($('#value-y').val());

		var operation = $('#selector').val();
		var result;

		console.log(valueX,operation,valueY);

		switch (operation) {
			case('+'): 
				result = valueX + valueY;
				break;
			case('-'): 
				result = valueX - valueY;
				break;
			case('/'): 
				result = valueX / valueY;
				break;
			case('*'): 
				result = valueX * valueY;
				break;
		}
		console.log('Result is:', result);

		var newRow = $('<tr></tr>');

		var tdWithDate = $('<td>' + moment().format('lll') + '</td>');// ячейка с датой 
		var tdWithOperation = $('<td>' + valueX.toString() + operation + valueY.toString() +'</td>'); // ячейка с выражением 
		var tdWithResult = $('<td class="result">'+ result.toString() +'</td>'); //ячейка с результатом

		newRow.append(tdWithDate);
		newRow.append(tdWithOperation);
		newRow.append(tdWithResult);
		$('#myTable tbody').append(newRow);
		$('#myTable').show();
	},

	findMax: function() {
	 	var myArray = $('.result');
	 	var digArray = [];
	 	for (var i=0; i< myArray.length; i++) {
	 		digArray.push(Number(myArray[i].innerText));
	 	}
	 	var max = Math.max.apply(Math,digArray);
	 	console.log('Максимальное значение: ',max);
	 	// $('#output').innerHTML = ('<p>Максимальное число в таблице: </p>');
	 },

 	findMin: function() {
	 	var myArray = $('.result');
	 	var digArray = [];
	 	for (var i=0; i< myArray.length; i++) {
	 		digArray.push(Number(myArray[i].innerText));
	 	}
		var min = Math.min.apply(Math,digArray);
		console.log('Минимальное значение: ',min);
    },

 	findSum: function() {
 		var myArray = $('.result');
	 	var digArray = [];
	 	var sum = 0;
	 	for (var i=0; i< myArray.length; i++) {
	 		digArray.push(Number(myArray[i].innerText));
	 		sum += digArray[i];
	 	}
        console.log('Сумма всех чисел в таблице равна: ',sum);
    },
    findAvg: function() {
 		var myArray = $('.result');
	 	var digArray = [];
	 	var sum = 0;
	 	var avg;
	 	for (var i=0; i< myArray.length; i++) {
	 		digArray.push(Number(myArray[i].innerText));
	 		sum += digArray[i];
	 	}
	 	avg = sum / digArray.length;
        console.log('Среднее всех чисел в таблице равна: ',avg);
    }
};

calculatorPage.init();