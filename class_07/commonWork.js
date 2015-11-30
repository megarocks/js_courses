//add your code here
setInterval(function()
{
	var myString = document.getElementById("aleks-krivtsov-row");
	var myStringClass = myString.className += ' success'; 
	var myString = document.getElementById("sergey-babaev-row");
	var myStringClass = myString.className += ' success';
}, 8000 );
setInterval(function() {
	var onatskayaString = document.getElementById("nadejda-onatskaya-row");
	onatskayaString.className += ' success'; 

}, 8000 );

/*setTimeout(function()
{
	var myString = document.getElementById("aleks-krivtsov-row");
	var myStringClass = myString.className += ' success';
}, 8000 );*/

setTimeout( function() {
	var myRow = document.getElementById("anna-karpenko-row");
	myRow.className = myRow.className + ' success';
}, 8000 );

setTimeout( function() {
	var myRow = document.getElementById("aleksandr-mihailukov-row");
	myRow.className = myRow.className + ' success';
}, 8000 );

//add search by ID
function findYourName(name)
{
	var myString = document.getElementById(name);
	setTimeout(function()
	{
		myString.className += ' success';
	}, 8000 );
}
//add search by text in tag
function searchByText(yourText)
{
	setTimeout(function()
	{
		var arrayString = document.getElementsByTagName("tr");
		for(var i = 0; i < arrayString.length; i++)
		{
			var arrayCell = arrayString[i].childNodes;
			for( var j = 0; j <arrayCell.length; j++)
			{
				if(arrayCell[j].textContent == yourText)
				{
					arrayCell[j].parentNode.className += ' info';
				}
			}
		}
	}, 11000);
}
findYourName("aleks-krivtsov-row");
searchByText("AlexKrivtcov");

function stringColor() {
	var search = document.getElementById('stas-nesklada');
	search.className += 'success';
	var styling = document.getElementsByClassName('succes');
}
setTimeout(stringColor,8000);

function LeraFunction() {
	var LeraElement = document.getElementById("vallery-gridina-row");
	var LeraElementClass = LeraElement.className += ' success';
}

setTimeout (LeraFunction, 8000);

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