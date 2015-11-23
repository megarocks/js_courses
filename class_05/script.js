var dateFromUser;
var correctDatesArray = [];

var weekDays = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

var months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

do {

    dateFromUser = prompt("Введите дату в следующем формате: mm/dd/yyyy");
    console.log("Пользователь ввёл строку: " + dateFromUser);

    if (dateFromUser !== "stop") {
        //если пользователь ввёл строку и это НЕ стрка stop

        var dateObject = new Date(dateFromUser);
        console.log("Строка, введенная пользователем, преобразована в: " + dateObject);


        if (dateObject.toString() == 'Invalid Date') {

            console.error('Пользователь ввёл некорректную дату');
            alert('Пользователь ввёл некорректную дату');

        } else {
            console.log("Введенная дата корректна. Работаем:)");

            correctDatesArray.push(dateObject);
            console.log("Содержимое массива с датами: " + correctDatesArray);

        }

    } else if (dateFromUser == "stop") {
        //если пользователь ввёл строку и это стрка stop

        console.warn("Пользователь ввёл строку stop");

    }


} while (dateFromUser !== 'stop');

if (correctDatesArray.length == 0) {

    alert("Вы не ввели ни одной даты");
    console.warn("Массив с датами пуст");

} else if (correctDatesArray.length == 1) {
    //тут мы выводим нашу одну единственную дату

    var d = correctDatesArray[0];

    var messageToUser = "Наибольшая дата: ";

    messageToUser += weekDays [d.getDay()] + " ";
    messageToUser += d.getDate() + " ";
    messageToUser += months [d.getMonth()] + " ";
    messageToUser += d.getFullYear() + ", ";


    messageToUser += "наименьшая дата: ";
    messageToUser += weekDays [d.getDay()] + " ";
    messageToUser += d.getDate() + " ";
    messageToUser += months [d.getMonth()] + " ";
    messageToUser += d.getFullYear() + ".";


    console.log(messageToUser);


} else if (correctDatesArray.length > 1) {

    //будем искать самую "маленькую" и самую "большую" дату из массива
    //вывести даты на экран

    //предполагаем что самая большая дата - самый первый элемент массива с датами
    var maxDate = correctDatesArray[0];

    //предполагаем что самая маленькая дата - самый первый элемент массива с датами
    var minDate = correctDatesArray[0];

    //настраиваем цикл для прохода по всем элементам массива с датами
    for (var i = 0; i < correctDatesArray.length; i++) {

        //выбираем дату для анализа на текущей итерации
        var currentDateToCompare = correctDatesArray[i];

        //если эта дата больше той которую мы считали самой большой
        if (currentDateToCompare > maxDate) {
            //будем считать самой большой ту которую анализируем сейчас
            maxDate = currentDateToCompare;
        }

        if (currentDateToCompare < minDate) {
            minDate = currentDateToCompare;
        }

    }

    var messageToUser = "Наибольшая дата: ";

    messageToUser += weekDays [maxDate.getDay()] + " ";
    messageToUser += maxDate.getDate() + " ";
    messageToUser += months [maxDate.getMonth()] + " ";
    messageToUser += maxDate.getFullYear() + ", ";


    messageToUser += "наименьшая дата: ";
    messageToUser += weekDays [minDate.getDay()] + " ";
    messageToUser += minDate.getDate() + " ";
    messageToUser += months [minDate.getMonth()] + " ";
    messageToUser += minDate.getFullYear() + ".";

    console.log(messageToUser);


}
