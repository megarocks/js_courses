var catepushist = [
    "Лысый",
    "Шорстка есть",
    "Средней пушистости",
    "Норм пушист",
    "Пушистость в порядке",
];
var cat = {
	name: "Mike",
	color: "white",
	age: 10,
	pushist: function(value){
     console.log(catepushist[value]);
},
	myau: function(myaucol) {
	for (var i = 0; i < myaucol+1; i++) {
		console.log("Мяу" + i)	};
}
};
cat.name = prompt("Введите имя кота");
cat.color = prompt("Введите цвет кота");
cat.age = prompt("Введите возраст кота");
console.log("My name is " + cat.name + ". My color is " + cat.color + ". I am " + cat.age + cat.pushist(4) + cat.myau(10));

