function createCounter() {

    var countValue = 0;

    function counter() {
        //внутри этой функции countValue - свободная переменная (не локальная но и не глобальная)
        //замыкание происходит на том уровне где эта переменная обьявлена
        //т.е. на уровне функции createCounter и включает в себя всё окружение этой функции
        countValue++;
        return countValue;
    }

    return counter;

}

//вызываем функцию createCounter, которая вернёт нам функцию, содержащую свободную переменную +
// окружение до того уровня на котором эта переменная обьявлена
//если по другому: вызываем функцию createCounter, которая вернёт нам замыкание.
var count = createCounter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());

var button = document.getElementById('count-button');
button.addEventListener('click', function () {
    console.log(count());
});
