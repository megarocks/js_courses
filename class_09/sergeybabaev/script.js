var sign;
var x;
var y;
function getOperator() {
	var takeOperator = document.getElementById('chooseOperator'); // Получаю сюда значение сэлэкта.
	var sign = takeOperator.value; // Получаю непосредственно знак.

}

function count() {
	var getX = document.getElementById('ourX'); // Получаю сюда x
	var getY = document.getElementById('ourY'); // Получаю сюда y
	var x = getX.value; // Забираю отсюда именно цифру 
	var y = getY.value; // Забираю отсюда именно цифру
	console.info("Это икс",x,"Это игрик",y); // Для себя


	// Есть цифры, есть знак. Пора писать swith. Но я не могу получить результат из getOperator. 
	// С помощью return пробывал, у меня не получилось. Что то пишу не так. 
}


console.log(x,sign,y);
