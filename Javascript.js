var calculatorPage = {

    init: function () {

        calculatorPage.bindControls();

    },

    bindControls: function () {

        $('#calculate-button').click(calculatorPage.calculate);
        $('#calc-sum').click(calculatorPage.calcSum);
        $('#int-val').click(calculatorPage.intVal);
        $('#calculate-button').click(calculatorPage.notValue);
        $('#find-max').click(calculatorPage.findMax);
        $('#find-min').click(calculatorPage.findMin);    
       },
    calculate: function () {

        var valueX = $('#value-x').val();
        var valueY = $('#value-y').val();

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
            case  ('/'):
                result = valueX / valueY;
                break;
            case  ('*'):
                result = valueX * valueY;
                break;

        }

        console.log('Result is:', result);

        var newRow = $('<tr></tr>');

        var tdWithDate = $('<td>' + moment().format('lll') + '</td>');  //ячейка с датой
        var tdWithOperation = $('<td>' + valueX.toString() + operation + valueY.toString() + '</td>');  //ячейка с выражением
        var tdWithResult = $('<td class="td-with-result">' + result.toString() + '</td>');

        //создайте ячейку с результатом

        //добавить ячейки в строку

        newRow.append(tdWithDate);
        newRow.append(tdWithOperation);
        newRow.append(tdWithResult);

        //добавить строку в таблицу

        $('#example tbody').append(newRow);

        //сделать таблицу видимой display:block

        $('#example').show();


    },

    calcSum: function () {

        console.log('Тут будем считать сумму');

        var tdWithResult = $('.td-with-result');
        var sum = 0;

        for (var i = 0; i < tdWithResult.length; i++) {

            var currentTdResult = parseInt(tdWithResult[i].innerText);

            sum = sum + currentTdResult;

        }

        console.log('Sum is:', sum);

    },
    notValue: function (){
       var notValueX = $('#value-x').val('');
       var notValueY = $('#value-y').val('');
    },
    intVal: function(){
        var tdWithResult = $('.td-with-result');
        var sum = 0;
        for (var i = 0; i < tdWithResult.length; i++) {

            var currentTdResult = parseInt(tdWithResult[i].innerText);

            sum = sum + currentTdResult;
        }
        srVal = sum / tdWithResult.length;
        console.log ('Среднее значение ' + srVal);
    },
    findMin: function(){
        var tdWithResult = $('.td-with-result');
        
                var intSrav = parseInt(tdWithResult[0].innerText) ;
        var result;
        for (var i = 0; i < tdWithResult.length; i++){
            var valueMax = parseInt(tdWithResult[i].innerText);
            if( intSrav > valueMax){
                intSrav = valueMax;
            }
            else{
                continue;            
            }

        }
    console.log('Мах значение: '+ intSrav);
    },
    findMax: function(){
        var tdWithResult = $('.td-with-result');
        var intSrav = parseInt(tdWithResult[0].innerText) ;
        for (var i = 0; i < tdWithResult.length; i++){

            var valueMin = parseInt(tdWithResult[i].innerText);
            if( intSrav < valueMin){
                intSrav=valueMin;
            }
            else{
                continue;            
            }

        }
    console.log('Мin значение: '+ intSrav);
    },



};
$(document).ready(function() {
    calculatorPage.init();
});
