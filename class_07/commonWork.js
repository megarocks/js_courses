//add your code here
function findYourName(name)
{
	var myString = document.getElementById(name);
	setTimeout(function()
	{
		var myStringClass = myString.className += ' success';
	}, 8000 );
}
findYourName("aleks-krivtsov-row");
findYourName("sergey-babaev-row");