# Структуры данных: объекты и массивы

## Массивы

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

```javascript
var cars = ["bmw", "audi", "samsung"];
cars.length;  //get quantity of array elements -> 3
var myNumbers = [7, 12, 14, 3, 78, 2, 1];
myNumbers.sort(); // -> [1, 12, 14, 2, 3, 7, 78]
```

Продвинутая сортировка:
```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a}); // -> [100,40,25,10,5,1]
```

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a}); // -> [100, 40, 25, 10, 5, 1]
```

Добавление елемента в конец массива:
```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");                // adds a new element (Lemon) to fruits
```

Проход по массиву:
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