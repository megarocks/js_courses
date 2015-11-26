//add your code here
setInterval(function()
{
	 var myString = document.getElementById("aleks-krivtsov-row");
	var myStringClass = myString.className += ' success'; 
	/* var onatskayaString = document.getElementById("nadejda-onatskaya-row");
	onatskayaString.className += ' success'; */
	var onatskayaString = document.getElementsByTagName("tr");
	console.log(onatskayaString.firstChild().innerHTML);
	if(onatskayaString.innerHTML === "https://github.com/Onatskaya") {
		onatskayaString.className += ' success';
	}
}, 2000 );