var testVariable = "test variable GLOBAL!";

function getInnerFunction() {

    function inner() {
        return testVariable;
    }

    var testVariable = "test variable LOCAL!";

    return inner;
}

var innerFunction = getInnerFunction();
var result = innerFunction();

console.log(result);
