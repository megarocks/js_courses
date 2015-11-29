//add your code here
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
findYourName("sergey-babaev-row");



