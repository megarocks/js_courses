function getUnProcessedDiv(elementsArray, reverseOrder, cssPropertyName) {


    if (reverseOrder === true) {

        //запустить цикл прохода по каждому элементу массива
        //начиная с последнего и идти до нулевого
        for (var i = elementsArray.length - 1; i >= 0; i--) {

            //в переменную сохранить элемент под индексом i
            var currentDiv = elementsArray[i];

            //если свойство backgroundColor не задано
            if (currentDiv.style[cssPropertyName] === '') {

                return currentDiv;

            }
        }

    } else if (reverseOrder === false) {

        //запустить цикл прохода по каждому элементу массива
        //начиная с последнего и идти до нулевого
        for (var i = 0; i < elementsArray.length; i++) {

            //в переменную сохранить элемент под индексом i
            var currentDiv = elementsArray[i];
            //если свойство backgroundColor не задано
            if (currentDiv.style[cssPropertyName] === '') {
                return currentDiv;
            }
        }
    } else {
        alert('Эй! Эта функция должна вызываться с параметром reverseOrder. Будь добр, дзадай его!');
    }
}

function setCssProperty(element, cssPropertyName, cssPropertyValue) {


    if (element) {
        element.style[cssPropertyName] = cssPropertyValue;
    } else {
        clearInterval(paintInterval);
        return;
    }

}

var x = 0;

var paintInterval = setInterval(function () {

    var propertyToSet = 'box-shadow';
    var valueToSet = '7px -7px 7px 0px rgba(0,0,0,0.25)';


    var divsToProcess = document.getElementsByClassName('my');  //получить массив с элементов с классом my

    var unProcessedElement = getUnProcessedDiv(divsToProcess, false, propertyToSet);   //вызвать функцию передав туда массив элементов в качестве параметра

    setCssProperty(unProcessedElement, propertyToSet, valueToSet);

    ++x;

    console.log('Interval function did something ' + x + ' times');

}, 250);