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

	meay: function (qty){
			var i = 0;
			while (i < qty) {
			console.log("Meay!");
			i++;
			}
	},

	giveFood: function () {	
		this.food = new Date();
		console.log("Тут покормил", this.food);
	},

	howAreyou: function () {                                    
		var wantOrNot = new Date();
		console.log("Тут спрашиваю", wantOrNot);

		var answer = Math.floor(((wantOrNot - this.food) / 1000));

		if ( answer <= 5 ) {
			console.log("Я сыт");
			} else {
				console.log("Я голоден");
		}	
	}};


cat.giveFood();

setInterval( function() {

	cat.howAreyou();

} , 1000);     // Не могу понять как и куда пихать setInterval. 


// 	learnjavascript.ru советует писать вот так.
// 	setInterval( function() { object.func.call(object) } , 1000)

// я попытался но я даже не могу понять работает или нет потому что в 27 какая-то ошибка.





