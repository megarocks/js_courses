function firstLevelFunc() {

    var firstLevelVar = 1;

    function secondLevelFunc() {

        var secondLevelVar = 2;

        function thirdLevelFunc() {

            var thirdLevelVar = 3;

            function thisIsCauseOfClosure() {

                firstLevelVar++;
                secondLevelVar++;
                thirdLevelVar++;

                return "firstLevelVar: " + firstLevelVar + " secondLevelVar: " + secondLevelVar + " thirdLevelVar: " + thirdLevelVar;

            }

            return thisIsCauseOfClosure;

        }

        return thirdLevelFunc;

    }

    return secondLevelFunc;

}

var ololo = firstLevelFunc()()();

console.log(ololo());
console.log(ololo());
console.log(ololo());
