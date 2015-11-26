
/*

getDateRange();


function getDateRange() {


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


        if ( dateFromUser === null && correctDatesArray.length === 0 ) {
            
            return;
            
        } else if ( correctDatesArray.length > 0 && dateFromUser === null ) {
            
            break;
        }
            var dateObject = new Date(dateFromUser);
            console.log("Строка, введенная пользователем, преобразована в: " + dateObject);
            
        

            if (dateObject.toString() == 'Invalid Date') {

                //                console.error('Пользователь ввёл некорректную дату');
                alert('Вы ввели некорректную дату');

            } else {
                //                console.log("Введенная дата корректна. Работаем:)");

                correctDatesArray.push(dateObject);
                //                console.log("Содержимое массива с датами: " + correctDatesArray);

            }

        } else if (dateFromUser == "stop") {
            //если пользователь ввёл строку и это стрка stop

            //            console.warn("Пользователь ввёл строку stop");

        }


    } while (dateFromUser !== 'stop');


    var maxDate;
    var minDate;


    if (correctDatesArray.length === 0) {

        alert("Вы не ввели ни одной даты");
        //        console.warn("Массив с датами пуст");

    } else if (correctDatesArray.length == 1) {
        //тут мы выводим нашу одну единственную дату

        var d = correctDatesArray[0];
        maxDate = correctDatesArray[0];
        minDate = correctDatesArray[0];

    } else if (correctDatesArray.length > 1) {

        //будем искать самую "маленькую" и самую "большую" дату из массива
        //вывести даты на экран

        //предполагаем что самая большая дата - самый первый элемент массива с датами
        maxDate = correctDatesArray[0];

        //предполагаем что самая маленькая дата - самый первый элемент массива с датами
        minDate = correctDatesArray[0];

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

    }

    var msg = messageToUser( minDate, maxDate, weekDays, months );

    alert(msg);
}


function messageToUser( minDate, maxDate, weekDays, months ) {  



    var messageUser = "Наибольшая дата: ";

    messageUser += weekDays [maxDate.getDay()] + "\n";
    messageUser += maxDate.getDate() + " ";
    messageUser += months [maxDate.getMonth()] + " ";
    messageUser += maxDate.getFullYear() + "\n\n ";

    messageUser += "Наименьшая дата: ";
    messageUser += weekDays [minDate.getDay()] + "\n";
    messageUser += minDate.getDate() + " ";
    messageUser += months [minDate.getMonth()] + " ";
    messageUser += minDate.getFullYear() + "";

    return messageUser;

}
*/
/*

// birthDay


var startDay = new Date();
var birthDay = new Date('08/27/2016');

var date = (  (birthDay - startDay ) / 1000 / 60 / 60 / 24 );
date = Math.ceil( date );

 alert(date);

 

*/
   



//Katejki



var cat = {
    
    name: "Kote",
    color: "White",
    age: "two years old",
    say:
    // базарит  пушистый
    function() { 
        
        console.log(this.name + " " + this.color + " " + this.age);
    },
    //научили понимать сколько гаду мяукать
    voice: function(times) {
        
        for(var i = 0; i <= times; i++) {       
        
       console.log( this.name + " мявкнул " + " " + i + " " + "раз");
        }
    },
    skin: function() {
    
        var catSkin = ["лысый", "шерстка есть", "средней пушистоти", "норм пушист", "в поряде пушист"];
        
    }
}


cat.say();
cat.voice(prompt(" "));














