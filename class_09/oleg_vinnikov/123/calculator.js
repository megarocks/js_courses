
var calculatorPage = {
init: function() {
	console.debug("calc start");
	calculatorPage.bindControls();

},

bindControls: function() {
  $("#calculate-button").click(calculatorPage.calculate);


},


calculate: function() {
	var valueX = $("#value-x").val();
	var valueY = $("#value-y").val();
	valueX = parseInt(valueX);
	valueY = parseInt(valueY);
	var operation = $("#sel1").val();
	var result;

	console.log(valueX, valueY, operation);

	switch(operation) {
        case "+": 
            result = valueX + valueY;
            break;
        case "-":
            result = valueX - valueY;
            break;
        case "*":
           result = valueX * valueY;
            break;
        case "/":
            result = valueX / valueY;
            break;

    }
    console.log(result);


     var newRow = $("<tr></tr>");
     var  tdWithDate = $("<td>" + moment().format("lll") + "</td>");
     var tdWithOperation = $("<td>" + valueX.toString() + operation + valueY.toString() + "</td>");
     var tdWithResult = $("<td>" + result.toString() + "</td>");
     
       newRow.append(tdWithDate);
       newRow.append(tdWithOperation);
       newRow.append(tdWithResult);
       $("#example tbody").append(newRow);
       $("#example").show();


}

};

calculatorPage.init ();
