//add your code here
setTimeout(function()
           {
    var myString = document.getElementById("aleks-krivtsov-row");
    var myStringClass = myString.className += ' success';
}, 8000 );


// Подсветка строки Олег Винников №1

/*setTimeout(function() {
    var olegSrting = document.getElementById("Oleg-Vinnikov-row");
    olegSrting.className += " success";
}, 8000);*/


//Подсветка строки Олег Винников №2

setTimeout(function() {

    var otherString = document.getElementsByTagName("td");

    for (var i = 0; i < otherString.length; i++) {

        var tdString = otherString[i].innerHTML == "Oleg";
        if (tdString === true) {        

            var tdSiblingString = otherString[i + 2].innerHTML == "Leess";
            if (tdSiblingString === true) {

                otherString[i].parentElement.className += " success";
            }
        }

    }    

}, 8000);