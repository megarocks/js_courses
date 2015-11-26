
function cat(name, color, age)  
{
	this.name = name;
	this.color = color;
	this.age = age;
	this.fluffy = 4;
	this.levelFluffy = 
	[
	"bald", "fur there", "medium fluffy", "standards fluffy", "monser fluffy"
	];
	this.lastTimeEat = null;
	this.countMeow = 0;
	this.play = [];
	this.aboutMe = function()
			{
				alert("Hi! My name is " + this.name + "." + " I'm is " + this.color + "." + " I'm " + this.age 
				+ " years old.\n" + "My level of fluffy is " + '"' + this.levelFluffy[this.fluffy - 1] + '"\n' + this.hungry() 
				+ "\n" + this.playTotal());
			};
	this.meow = function()
			{			
				this.countMeow = prompt("Input how much you want that I'm meowing.");
				for( var i = 1; i <= this.countMeow; i++)
				{
					console.log("Meow!");
				}
			};
	this.eat = function() {
				this.lastTimeEat = new Date(); 
				console.log("I'm eating");
			};
	this.hungry = function ()
			{
				var feelHungry = "";
				var currentTime = new Date();
				var lastAte = (currentTime - this.lastTimeEat) / 1000;
				if(lastAte < 10)
				{
					feelHungry = "I'm not hungry";
					console.log(feelHungry);
				}
				else
				{
					feelHungry = "I'm so hungry!!";
					console.log(feelHungry);
				}
				return feelHungry;
			};
	this.playNow = function()
			{
				this.play.push(new Date());
			};
	this.playTotal = function()
			{
				var playTimes = "With me played " + this.play.length + " times.\n ";
				for( var k = 0; k < this.play.length; k++)
				{
					playTimes += k + 1 +" time at " + this.play[k] + ";\n";
				}
				return playTimes;
			};
}
/*setInterval(function()
{
	cat.hungry();
}, 2000);
*/
var catCompany = [];
for(var i = 1; i <= 3; i++)
{
	var name = prompt("Input name of " + i + " cat");
	var color = prompt("Input color of " + i + " cat");
	var age = prompt("Input age of " + i + " cat");
	catCompany.push(new cat(name, color, age));
	catCompany[i-1].aboutMe(); 
}