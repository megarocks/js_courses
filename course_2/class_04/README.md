# Функции

#### Определение функции

```javascript
function name(parameter1, parameter2, parameter3) {
    //code to be executed
}
```

```javascript
function greet(name) {
  return "Hello, " + name;
}

console.log(greet('John'));
```
> Hello, John

#### Параметры

Функция без параметров:
```javascript
var sayHello = function() {
  console.log('Hello');
}

sayHello();
```
> Hello  
undefined

Функция с несколькими параметрами:
```javascript
var sum = function(a, b) {
  return a + b;
}

console.log(sum(21, 34));
```
> 55

#### Область видимости, локальные и глобальные переменные

```javascript
var x = "global";

var function1 = function(){
  var x = "local inside function 1";
}

function1();
console.log(x);
```
> global

```javascript
var function2 = function(){
  x = "local inside function 2";
}

function2();
console.log(x);
```
> local inside function 2

#### Вложенные области видимости

```javascript
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
```
>___/''''\______/'\_


#### let

```javascript
var x = 1;
{
  var x = 2;
  var y = 3;
  let z = 5;
}

console.log(x);
console.log(y);
console.log(z);
```
>2  
3  
Uncaught ReferenceError: z is not defined(…)

#### Функция в качестве параметра и вызов функции

```javascript
// эта обьявление функции которая при вызове
function mySuperFunction() {
  //выведет в консоль сообщение
  console.log('mySuperFunction called');
}

// это обьявление функции - "вызыватора" других функций
// она принимает в качестве параметра любую функцию и при вызове
function functionCaller(functionToCall) {
  //вызывает переданную ей функцию тремя различными способами
  functionToCall();
  functionToCall.call();
  functionToCall.apply();
}

// это вызов (выполнение) функции выполняющей другие функции
// в данном случае мы отдаём функции functionCaller функцию mySuperFunction
functionCaller(mySuperFunction);
```
>mySuperFunction called  
mySuperFunction called  
mySuperFunction called

#### Обьявление функции

```javascript
function square(x) {
  return x * x;
}

var square = function() {
  return x * x;
}
```

Так будет работать:
```javascript
multiply(3, 5, 8);  // вызов функции

//обьявление функции
function multiply(a, b, c) {
  return a * b * c;
}
```
>120

А так работать не будет:
```javascript
multiply(3, 5, 8);  // вызов функции

//обьявление функции
var multiply = function(a, b, c) {
  return a * b * c;
}
```
>Uncaught TypeError: multiply is not a function(…)


#### Анонимные функции

```javascript
function sayHello() {
  console.log("Hello");
};

setInterval(sayHello, 5000);
```

```javascript
setInterval(function() {
  console.log('Hello!')  
}, 5000);
```

#### Необязательные параметры (аргументы)

```javascript
function multiply(a,b) {
    var result;
    if (typeof b !== 'undefined') {
        result = a * b;
    } else {
        result = a * a;
    }
    return result;
}

console.log(multiply(5,7));
console.log(multiply(5));
```

>35  
25

#### Замыкания

```javascript
function createCounter() {
   var numberOfCalls = 0;
   return function() {
      return ++numberOfCalls;
   }
}
var counter = createCounter();
console.log(counter(),counter(),counter());
```
> 1 2 3

```javascript
function sumWithNumber(a) {
    var doAddition = function (b) {
        return a + b;
    }
    return doAddition;
}
var sumWith7 = sumWithNumber(7);
console.log(sumWith7(8));
console.log(sumWith7(25));
```
>15  
32

#### Стек вызовов
```javascript
function greet (name) {
  console.log('Hello ' + name);
  greetWithAlert(name);
}
function greetWithAlert(name) {
  alert("Hello " + name);
}

greet('John Smith');
console.log('Goodbye');
```

>top  
&nbsp;&nbsp;greet  
&nbsp;&nbsp;&nbsp;&nbsp;console.log  
&nbsp;&nbsp;&nbsp;&nbsp;greetWithAlert  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;alert  
&nbsp;&nbsp;&nbsp;&nbsp;greetWithAlert  
&nbsp;&nbsp;greet  
top  
top  
&nbsp;&nbsp;console.log  
top

Stack Overflow:
```javascript
function sayToWoman() {
  //console.log('Ты первая клади трубку')
  return sayToMan();
}
function sayToMan() {
  //console.log('Ты первый клади трубку')
  return sayToWoman();
}
console.log(sayToMan());
```

#### Рекурсия

```javascript
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
```

## Задачи

1. Напишите функцию принимающую в качестве параметра число и возвращающую переданное чесло возведенное в куб.

2. Напишите функцию, принимающую в качестве параметров две строки. Код функции должен проверять являются ли переданные параметры строками. Если так, то выполнять конкатенацию и возврат результата. В случае если хотя бы один из параметров - не строка, - показывать alert с ошибкой. 
Используйте возвращенное функцией значение для вывода в консоль.

3. Напишите функцию принимающую в качестве параметров два числа. Если были переданы оба числа - то верните их сумму. Если было передано одно число - то удвойте его и верните. Если функция была вызвана без параметров - верните 0.

4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

5. Напишите функцию, которая принимает в качестве параметра значени года, и возвращает булевое значение: если высокосный - true, если нет - false. Для вычисления используйте рекурсию.

5. Напишите функцию принимающую в качестве параметра число и возвращающую true, если число чётное и false, если число не чётное. Реализуйте функцию тремя разными способами: 1 - при помощи оператора %, 2 - при помощи цикла, 3 - при помощи рекурсии

6. Напишите функцию, создающую функцию по определению чётности числа. Функция создатель `createEvenDetector` должна принимать параметр, указывающий на то, каким образом будут выполнены вычисления: 1 - при помощи оператора %, 2 - при помощи цикла, 3 - при помощи рекурсии. Функция, созданная создателем, должна принимать в качестве параметра число, подлежащее проверке `isEven1(25)` Используйте замыкание.
Пример использования, функций, которые вы реализуете:
```javascript
var isEven1 = createEvenDetector(1);  
var isEven2 = createEvenDetector(2);
var isEven3 = createEvenDetector(3);

isEven1(10); // -> true
isEven2(15); // -> false
```

