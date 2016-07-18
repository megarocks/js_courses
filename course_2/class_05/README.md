# Структуры данных: массивы

#### Обьявление переменной и инициализация массивом
```javascript
var emptyArr = []; //empty array
var arrayWithData = ["audi", "bmw", "samsung"]; //array with items
var namesArr = [
  "John",
  "Jane",
  "Mike"
];  //one more array with items
```

#### Доступ к элементам массива

```javascript
var cars = ["bmw", "audi", "samsung"];
cars[0];  //get element with index == 0 -> bmw
var myCar = cars[1]; // get element with index == 1 -> audi
```

#### Методы и свойства массивов

#### Длина массива
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); // 4
```

##### Проход по массиву
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for (var i=0; i< fruits.length; i++) {
  console.log(fruits[i]);
}
```

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

##### Сортировка:
```javascript
var myNumbers = [7, 12, 14, 3, 78, 2, 1];
myNumbers.sort(); // -> [1, 12, 14, 2, 3, 7, 78]
```

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a}); // -> [100,40,25,10,5,1]
```

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a}); // -> [100, 40, 25, 10, 5, 1]
```

##### Добавление елемента в массив:
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");                // adds a new element (Lemon) to fruits
```

##### Удаление елемента из массива
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1); // remove 1 item starting from index: 2
console.log(fruits); // ["Banana", "Orange", "Mango"]
```

##### Поиск элемента в массиве

Определение индекса элемента

```javascript
var appleIdx;
var fruits = ["Banana", "Orange", "Apple", "Mango"];
for (var i=0; i< fruits.length; i++) {
  if (fruits[i] === "Apple") {
    appleIdx = i; // appleIdx == 2
  }
}
```

```javascript
var appleIdx;
var fruits = ["Banana", "Orange", "Apple", "Mango"];

appleIdx = fruits.indexOf("Apple"); // appleIdx == 2

fruits[appleIdx]; // Apple
```

##### Фильтрация массива:
```javascript
var numbers = [144, 34, 89, 55, 21, 13, 3, 5, 233, 8, 1];
var bigNumbers = numbers.filter(function(number) {
  return number > 100;
});
```

```javascript
var numbers = [144, 34, 89, 55, 21, 13, 3, 5, 233, 8, 1];
var evenNumbers = numbers.filter(function(number) {
  if (number % 2 === 0) { //если текущий элемент разделился без остатка на 2
    return true;  //то он проходит фильтр
  } else {
    return false; //в ином случае элемент НЕ проходит
  }
});
```

##### Преобразование массива:
```javascript
var numbers = [144, 34, 89, 55, 21, 13, 3, 5, 233, 8, 1];
var twicedNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(twicedNumbers); // [288, 68, 178, 110, 42, 26, 6, 10, 466, 16, 2]
```

## Задачи

1. Напишите функцию `generateOddRange`, которая принимает в качестве параметра массив из двух чисел. Число с индексом 0 - это нижняя граница диапазона, число с индексом 1 - верхняя граница. Пусть функция возвращает массив, наполненный всеми нечётными числами, из указанного диапазона.
```javascript
var oddRange = generateOddRange([1, 10]);
console.log(oddRange); // [1, 3, 5, 7, 9]
```
1. Напишите функцию `sum` принимающую в качестве параметра массив и возвращающую сумму его элементов
```javascript
var sumOffMyArray = sum([1, 10, 20, 30]);
console.log(sumOffMyArray); // 61
```
1. Напишите функцию `minMax` принимающуюу в качентсве параметра массив чисел и возвращающую массив, состоящий  только из минимального и максимального значений изначального массива:
```javascript
var a = minMax([144, 5, 34, 13, 89]);
console.log(a); // [5, 144];
```
1. Напишите функцию принимающую в качестве параметра массив строк и возвращающую строку, максимальной длинны.
```javascript
var maxLengthString = getMaxLengthString(["abcd", "ab", "abc", "a", "ab"]);
console.log(maxLengthString); // "abcd";
```
1. Дан массив с данными разрозненного: `[1, "apple", 2, "orange", "mango", [13,3,5], {}, 55, true, 21, null, "", 0 ]`. Отфильтруйте его так, чтоб новый массив содержал только те элементы исходного массива, тип которых - строка.
```javascript
var maxLengthString = getMaxLengthString(["abcd", "ab", "abc", "a", "ab"]);
console.log(maxLengthString); // "abcd";
```
1. Дан массив строк: `['144', '34', '89', '55', '21', '13', '3', '5', '233', '8', '1']`. Преобразуйте его в массив чисел. Выведите новый массив в консоль. Отсортируйте полученный массив по убыванию. Выведите отсортированный массив в консоль.

1. Напишите функцию `compareArrays`, принимающую в качестве параметров два массива и возвращающую true, в случае если каждый из елементов первого массива равен соответствующему элементу второго массива (элементу с таким же индексов). В случае если хотя бы один из элементов не равен - вернуть false.
```javascript
var arraysEqual = compareArrays([1,1,2,3,5],[1,1,2,3,5]);
console.log(arraysEqual); // true

arraysEqual = compareArrays([1,1,2,3,5,8],[1,1,2,3,5]);
console.log(arraysEqual); // false
```

