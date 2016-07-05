var globalVariable = 'string from global variable';

function myThirdFunction() {

    var localVariable = 'string from local variable';

    console.log(globalVariable);

}

//console.log(localVariable);

function topLevelFunction() {

    var topLevelVariable = 'top level variable value';

    var subLevelFunction = function() {

        topLevelVariable = 12;

        console.log(topLevelVariable);

        var subLevelVariable = 'sub level variable value';

    }

    subLevelFunction();

}

topLevelFunction();
