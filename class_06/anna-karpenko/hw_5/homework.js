 var date;
 var dateArray = [];
 function putIntoArray() { 
 	date = document.getElementsByTagName('input')[0].value;
 	if(date=='stop') {
 		document.getElementsByTagName('input')[1].disabled = true; 
 		showMaxAndMinDate();
 		return; 
 	}
 	var correctDate=Date.parse(date); 
 	var isCorrectDate = !isNaN(correctDate);
 	if(isCorrectDate) {
 		dateArray.push(new Date(date)); 
 	}
 }
function showMaxAndMinDate() {
	var minDate = dateArray[0];
	var maxDate = dateArray[0];
	for(var i=0; i<dateArray.length; i++) {
		if (maxDate < dateArray[i]) {
			maxDate = dateArray[i];
    	} 
    	if (minDate > dateArray[i]) {
    		minDate = dateArray[i];
    	}
	}
	document.getElementsByTagName('p')[0].innerHTML = "Наибольшая дата: " + maxDate;
	document.getElementsByTagName('p')[1].innerHTML = "Наименьшая дата: " + minDate;
