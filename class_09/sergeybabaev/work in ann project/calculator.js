var calculatorPage = {
	init: function () {
		console.debug('Calculator page initialized');
		calculatorPage.bindControls();
	},

	bindControls: function () {
		$('#calculate-button').click(calculatorPage.calculate);
		$('#calc-sum').click(calculatorPage.calcSum);
	},

	calculate: function () {
		var valueX = parseInt($('#value-x').val());
		var valueY = parseInt($('#value-y').val());

		var operation = $('#sel1').val();
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
		var tdWithResult = $('<td>'+ result.toString() +'</td>'); //ячейка с результатом
// добавиь ячейки
		newRow.append(tdWithDate);
		newRow.append(tdWithOperation);
		newRow.append(tdWithResult);
// добавтить строку в таблицу
		$('#example tbody').append(newRow);
//Сделать таблицу видимой 
		$('#example').show();

	}
	calcSum: function() {

	}
};

calculatorPage.init();