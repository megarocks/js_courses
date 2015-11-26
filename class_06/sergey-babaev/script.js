// Написать скрипт который будет анализировать дистанцию которую проехал автомобиль.
// Начальная дистанция должна быть 0. Количество проеханных километров спросить у пользователя. 
// Полученную величину передать в функцию. Функция должна проанализировать значение.
// Если автомобиль проехал меньше 100 км - вывести на экран: автомобиль проехал мало.
// Если от 100 км (включительно) но меньше 300 км - вывести на экран: "автомобиль проехал норм". 
// Если больше 300 (включительно) - вывести на экран: "автомобиль проехал много".

// var km = 0;
// var km = prompt("Сколько проехал автомобиль?");

// function distant(km){
// 	if (km < 100) {
// 		alert("автомобиль проехал мало");
// 	} else if (100 <= km < 300) {
// 		alert("автомобиль проехал нормально");
// 	} else if ( km >= 300) {
// 		alert("втомобиль проехал много");
// 	}
// }

// distant(km);


// -------------------------------------------------------
// Задача с котом

// Создать переменную cat и присвоить в неё обьект. Обьект должен описывать свойства типичного кота:

// Имя
// Цвет
// Возраст




var levelOfFur = ["Bold", "Little bit", "Middle", "So long"];

var cat = {
	name: "Mick",
	color: "Black",
	age: 5,
	fur: levelOfFur[1],
	info: function (){
			console.log
			("My name is  " + this.name + ". "+ "My color is " + this.color + ". " + "My age is " + this.age + "." + "My fur is " + this.fur);
	},
	// quantity: ,
	meay: function (qty){
			var i = 0;
			while (i < qty) {
			console.log("Meay!");
			i++;
			}
	},

	feeddd: null,

	giveFood: function () {
	var feed = new Date();
	}
};

cat.info();
cat.meay(prompt("How many times say meay?"));





// Дополнить котейку возможностью кормления.
// Котейка должен запоминать момент, когда его угощали в крайний раз. 
// При рассказе о себе котейка теперь должен упоминать голоден ли он или нет.
// Если кормили больше 30 секунд назад - голоден. 
// Если меньше - не


var feed;
var doYouWannaEat;

function giveFood () {
	var feed = new Date();
}


setInterval(wantAgain,5000);

function wantAgain () {
	var doYouWannaEat = new Date();
}

function count () {
var result = (feed - doYouWannaEat) / 1000;
Math.floor(result); 
if (result < 30) {
	console.log("Я ещё сыт");
	} else {
		console.log("Я уже голоден");
	}
}

