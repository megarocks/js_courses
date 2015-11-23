/**
 * Created by alt on 11/9/15.
 */
/*
 var i = 11;

 while (i <= 10) {
 console.log(i);
 i++;
 }

 var z = -7;

 do {
 z--;
 console.log(z);
 } while (z > 0);*/

var testArray = ["Иван", "Андрей", "Сергей", "Екатерина", "Елена", "Алиса", "Ия", "Татьяна"];
var arrayLength = testArray.length;

for (var j = 0; j < arrayLength; j = j + 3) {

    var indexValue = j;

    var currentName = testArray[j];

    var message = "Элемент массива с индексом ";

    var messageToDisplay = message + indexValue + " " + currentName;

    console.log(messageToDisplay)


}



