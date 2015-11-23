var vozvediVStepen = function (chislo, stepen) {

    if (!chislo) {
        return "no number";
    }

    var result = chislo;

    for (var i = 1; i < stepen; i++) {

        result *= chislo;

    }

    return result;

}

/*var resultat1 = vozvediVStepen(2, 1);
var resultat2 = vozvediVStepen(2, 3);
var resultat3 = vozvediVStepen(2, 5);

console.log(resultat1);
console.log(resultat2);
console.log(resultat3);*/


var param1ForFunction = vozvediVStepen(3, 2);
var param2ForFunc = vozvediVStepen(2, 1);

var complexFunctionCallResult = vozvediVStepen(param1ForFunction, param2ForFunc);

console.log(complexFunctionCallResult);