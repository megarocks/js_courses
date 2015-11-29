//add your code here
setTimeout(function()
{
	var myString = document.getElementById("sergey-babaev-row");
	var myStringClass = myString.className += ' success';
}, 8000 );

setTimeout(function()
{
	var myString = document.getElementById("aleks-krivtsov-row");
	var myStringClass = myString.className += ' success';
}, 8000 );

setTimeout( function() {
	var myRow = document.getElementById("anna-karpenko-row");
	myRow.className = myRow.className + ' success';
}, 8000 );