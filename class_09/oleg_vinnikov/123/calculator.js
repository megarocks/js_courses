var calculatorPage = {

    init: function () {

        calculatorPage.bindControls();

    },

    bindControls: function () {

        $('#calculate-button').click(calculatorPage.calculate);
        $('#calc-sum').click(calculatorPage.calcSum);
        $('#calc-avg').click(calculatorPage.calcAvg);

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
        case ('/'):
            result = valueX / valueY;
            break;
        case ('*'):
            result = valueX * valueY;
            break;

        }

        console.log('Result is:', result);

        var newRow = $('<tr></tr>');

        var tdWithDate = $('<td>' + moment().format('lll') + '</td>'); //ячейка с датой
        var tdWithOperation = $('<td>' + valueX.toString() + operation + valueY.toString() + '</td>'); //ячейка с выражением
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

            var currentTdResult = parseFloat(tdWithResult[i].innerText);

            sum = sum + currentTdResult;

        }

        console.log('Sum is:', sum);
        //        return sum;

    },
    calcAvg: function () {


        var sumAvg = $('.td-with-result');
        var srSum = 0;
        for (var i = 0; i < sumAvg.length; i++) {

            var currentSrSum = parseFloat(sumAvg[i].innerText);
            srSum += currentSrSum;
        }

        var srSum1 = srSum / sumAvg.length;
        console.log(srSum1);


    }


};

calculatorPage.init();