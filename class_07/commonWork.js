//add your code here
setTimeout(function()
{
	var myString = document.getElementById("sergey-babaev-row");
	var myStringClass = myString.className += ' success';
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