# Переменные

## Обьявление переменных

#### Ключевое слово var
`var myVariable;`

#### Обьявление c присваиванием и без
`var someNumber;`
`var someNumber = 7;`
`var someString = "hello";`

#### Правила именования переменных
`var $ = "possibly it should be jquery";`
`var _ = "possibly it should be underscore";`
`var secretVariable38 = true;`
`var 38secretVariable = false;`

## Использование переменных

#### Получение значения переменной
```javascript
var x = 15;
x;
console.log(x);
alert(x);
```

#### Присваивание и пере-присваивание значения переменной
```javascript
var y = "hello";
console.log(y);
y="goodbye";
console.log(y);
```

#### Использование операторов и манипуляции с данными
```javascript
var ten = 10;
console.log(ten * ten);
```

## Использование некоторых функций

#### alert

```javascript
alert("привет");
```

```javascript
var message = "ПРИВЕТ!"
alert(message);
```

#### prompt

```javascript
prompt("введите ваше имя");
```

```javascript
var name = prompt("введите ваше имя");
```

```javascript
var name = prompt("введите ваше имя");
alert(name);
```

#### confirm

```javascript
var userConfirm = confirm("вам уже исполнилось 18?");
userConfirm ? alert("доступ разрешён") : alert("доступ запрещён");
```

#### log

```javascript
console.log("hello");
```

```javascript
var name = prompt("Enter your name");
console.log("hello " + name);
console.log("hello", name);
```

```javascript
var firstName = prompt("Enter first name");
var lastName = prompt("Enter last name");
console.log(firstName, lastName);
console.log("fist name is: %s and last name is: %s", firstName, lastName);
```

## Окружение и переменные окружения

#### window, screen, document, console

`console.log`

```javascript
console.log(window);
console.log(window.location);
console.log(screen);
console.log(document);
```


## Практика

1. Обьявить переменные и присвоить им значения следующих типов: `string`, `number`, `boolean`, `undefined`, `null`. Использовать оператор typeof для проверки типа значения хранимого переменной. Результаты вывести в консоль.
1. Присвоить двум переменным цифровые значения и вывести в консоль их сумму, разницу, произведение и результат деления первого на второе
1. Обьявить переменную и сохранить в неё цену товара (386) монет. Обьявить еще одну переменную и сохранить в неё размер скидки (17.5) %. Обьявить еще одну переменную и сохранить в неё значение скидки в монетах. Обьяваить еще одну переменную и сохранить в неё стоимость товара с учётом скидки. Вывести в консоль результаты в виде:
> Цена товара: XXX монет
Размер скидки: XXX %, что составляет XXX монет
Цена товара с учетом скидки: XXX монет

**XXX - заменить на расчетные значения**
  
1. Использовать prompt и получить от пользователя значение. Присвоить это значение переменной. Вывести в консоль результат ввода в таком виде:
  > "Пользователь ввёл: {тут то что ввёл пользователь}"
  **{тут то что ввёл пользователь} - заменить на ту строку которая была введена**

