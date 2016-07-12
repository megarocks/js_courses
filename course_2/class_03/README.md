# Управление порядком выполнения скрипта, Блок-схемы

## Ветвление

1. Условное выполнение **if**

```javascript
var myVariable = prompt("Как много книг вы прочли за прошлый год?");    
var readBooks = Number(myVariable);    
if (readBooks > 4) {  
    alert("Так держать!");  
}
```


1. Инструкция **else**

```javascript
var favColor = prompt("Какой цвет радуги ваш любимый?");      
if (favColor === "оранжевый") {  
    alert("Замечательно! Ваш любимый цвет оранжевый");  
} else {
    alert("Ваш любимый цвет не оранжевый!")
}
```

1. Создание нескольких путей **if else if**

```javascript
var userInput = prompt("Введите число");
var userNumber = Number(userInput);
      
if (userNumber < 0) {  
    alert("Вы ввели отрицательное число");  
} else if(userNumber === 0) {
    alert("Вы ввели 0")
} else if(userNumber > 0) {
    alert("Выввели положительное число");  
} else {
    alert("Вы ввели что-то что не больше не меньше нуля и самим нулём тоже не является. Ох.");
}
```

## Циклы

1. **while**

```javascript
var z = 0; 

while (z < 10) {
    console.log("Текущее значение z: " + z);
    z = z + 1; // z += 1; z++;
}
```

1. **do while**

```javascript

var userInput;

do {
    userInput = prompt("Введите строку длинее 5 символов, тогда отстану");
} while (userInput.length < 5);

```

1. **for**

```javascript

for (var i = 0; i < 25; i = i + 5) {
    console.log('Текущее i: ' + i);
}

```

```javascript

for (var i = 27; i >= 0; i -= 3) {
    console.log('Текущее i: ' + i);
}

```

```javascript
var i = 27;

for (;;) {
    if (i < 0) {
        break;
    }
    console.log('Текущее i: ' + i);
    i = i - 3;
}
```


1. Управление работой цикла: **break** и **continue**

```javascript

for (var i = 0; ; i +=7) {
  if (i % 7) {
    continue;
  } else if ( i === 50 ) {
    break;
  }
}

```

## Задачи

1. Напишите код, который будет спрашивать логин (prompt).Если посетитель вводит «admin», то спрашивать пароль,
 если нажал отмена – выводить «login canceled», если вводит что-то другое – «incorrect username». 
 Пароль проверять так. Если введён пароль «admin», то выводить «Welcome, admin!», иначе – «incorrect password»,
  при отмене – «login canceled».