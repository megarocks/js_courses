/*$(document).ready(function() {
    $('#example').DataTable();
} );

$('.btn').click(function() {
	alert('Button clicked');
});
*/



var calculatorPage = {

	init: function () {
		console.debug('Calculator page initialized');
		calculatorPage.bindControls();
	},

	bindControls: function () {
		$('#calculate-button').click(calculatorPage.calculate);

	},

	calculate: function () {
		var valueX = $('#value1').val();
		var valueY = $('#value2').val();

		valueX = parseInt(valueX);
		valueY = parseInt(valueY);

		var operation = $('#sel1').val();
		var result;

		console.log(valueX, valueY, operation);

		switch (operation) {
			case ('+'):
				result = valueX + valueY;
				break;
			case ('-'):
				result = valueX - valueY;
				break;
			case ('/'):
				result = valueX / valueY;
				break;
			case ('*'):
				result = valueX * valueY;
				break;
		}

		console.log('Result is:', result);

		var newRow = $('<tr></tr>');

        var tdWithDate = $('<td>' + moment().format('lll') + '</td>');  //ячейка с датой
        var tdWithOperation = $('<td>' + valueX.toString() + operation + valueY.toString() + '</td>');  //ячейка с выражением
        var tdWithResult = $('<td>' + result.toString() + '</td>');

        //создайте ячейку с результатом

        //добавить ячейки в строку

        newRow.append(tdWithDate);
        newRow.append(tdWithOperation);
        newRow.append(tdWithResult);

        //добавить строку в таблицу

        $('#example tbody').append(newRow);

        //сделать таблицу видимой display:block

        $('#example').show();

        calcSum: function () {
        	console.log('Здесь будет считаться сумма');

	        var tdWithResult = $('.td-with-result');
	        var sum = 0;

	        for (var i=0; i<tdWithResult.length; i++) {
	        	var currentResult = parseFloat($(tdWithResult[i].innerText));

	        }
 		}
	}


};

calculatorPage.init();