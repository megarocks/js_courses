/*var milerage = 0;
 function getMilerage() {
 	milerage = parseInt(prompt("Сколько км Вы проехали?", ""));
 	if (milerage <100){
 		alert("Автомобиль проехал мало")
 	}
 	else if( milerage >=100 && milerage < 300 ){
 		alert("Автомобиль проехал достаточно")
 	}
 	else if(milerage >= 300){
 		alert("Автмобиль проехал много")
 	}
 }
 getMilerage();
 */
 
 //Cats
 var furArray = ["лысый", "шерстка есть", "средней пушистоти", "норм пушист", "супер волосат"]

function Cat(name, color, age, fur) {
 	this.name = name;
 	this.color = color;
 	this.age = age;
 	this.lastTimeIWasFeeded = null;
	this.lastTimeIWasPlaying = null;
	this.playingTimes = 0;
 	this.story = function(){

			console.log("Мое имя " + this.name + ". Я "
			 + this.color + " цвета. Мне "
			  + this.age + " года. Моя пушистость оценивается как "
			   + furArray[+ this.fur] + ". Со мной играли "
			    + this.playingTimes + " раз, последний раз был в "
			     + this.lastTimeIWasPlaying)
 		};
 	this.tolk = function(timesTolk){
 			for (var i = 0; i<timesTolk; i++){
 				console.log("Мяу-мяу");
 			}
 		};
 	this.fur = fur;
 	this.eat = function(){
 		this.lastTimeIWasFeeded = new Date();
 	};
 	this.hungryOrNot = function(){
 		if ((new Date - this.lastTimeIWasFeeded)/1000 >= 30){
 			console.log("Я очень-очень голоден.")
 		}
		else if((new Date - this.lastTimeIWasFeeded)/1000 < 30){
			console.log("Не хочу кушать, еще не успел проголодаться")
		}
	};
	this.play = function(){
			this.lastTimeIWasPlaying = new Date();
			this.playingTimes += 1;
		}
    
 };


var cats = [];
var i = 0;
var createCats = function (){
	while (i < 3){
		var parameters = prompt("Введите имя, цвет, возраст и уровень шерстистости кота", "Василий, серый, 2, 3").split(",");
		var name = parameters[0];
		var color = parameters[1];
		var age = parameters[2];
		var fur = parameters[3];
		
		var someCats = cats.push(new Cat(name, color, age, fur));
		console.log(cats[i].story());
		i++;
	}
};

createCats();

//var vasiliy = new Cat("Василий", "рыжий", "5");

 /*var cat = {
 	name: "Джери",
 	color: "черного",
 	age: 2,
 	lastTimeIWasFeeded: null,
	lastTimeIWasPlaying: null,
	playingTimes: 0,
 	story: function(){
			console.log("Мое имя " + this.name + ". Я " + this.color + " цвета. Мне " + this.age + " года. Моя пушистость оценивается как " + furArray[this.fur] + ". Со мной играли " + this.playingTimes + " раз, последний раз был в " + this.lastTimeIWasPlaying)
 		},
 	tolk: function(timesTolk){
 			for (var i = 0; i<timesTolk; i++){
 				console.log("Мяу-мяу");
 			}
 		},
 	fur: 4,
 	eat: function(){
 		this.lastTimeIWasFeeded = new Date();
 	},
 	hungryOrNot: function(){
 		if ((new Date - this.lastTimeIWasFeeded)/1000 >= 30){
 			console.log("Я очень-очень голоден.")
 		}
		else if((new Date - this.lastTimeIWasFeeded)/1000 < 30){
			console.log("Не хочу кушать, еще не успел проголодаться")
		}
	},
	play: function(){
			this.lastTimeIWasPlaying = new Date();
			this.playingTimes += 1;
		}
 
 };*/
 
 
 
 