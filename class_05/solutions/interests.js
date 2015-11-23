var interests = [];

do {

    var userInput = prompt("Чем вас легко увлечь?");

    interests.push(userInput);

} while (userInput !== "");

for (var i = 0; i < interests.length; i++) {
    console.log("Увлечение под индексом " + i, interests[i]);
}

alert("У вас " + interests.length + " увлечений. Подробнее в консоли");
