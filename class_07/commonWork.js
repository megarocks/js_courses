//add your code here
setInterval(function()
{
	 var myString = document.getElementById("aleks-krivtsov-row");
	var myStringClass = myString.className += ' success'; 
	/* var onatskayaString = document.getElementById("nadejda-onatskaya-row");
	onatskayaString.className += ' success'; */
	var onatskayaString = document.getElementsByTagName("tr");
	for(var i = 0; i <= (onatskayaString.length - 1); i++){
		var trContent = onatskayaString[i].innerText;
		if( trContent.indexOf("Nadejda") > -1) {
			onatskayaString.className += ' success';
		}
	}
}, 2000 );