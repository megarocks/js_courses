# DOM

## Структура документа

```html
<!doctype html>
<html>
  <head>
    <title>My home page</title>
  </head>
  <body>
    <h1>My home page</h1>
    <p>Hello! I am document</p>
    <p>I also wrote a book. Find it <a href="http://eloquentjavascript.net">here</a>.</p>
  </body>
</html>
```

## Поиск и получение елементов

### Finding HTML Element by Id

```javascript
var introEl = document.getElementById("intro");
```

### Finding HTML Elements by Tag Name

```javascript
var pElements = document.getElementsByTagName("p");
```

### Finding HTML Elements by Class Name

```javascript
var allIntroElements = document.getElementsByClassName("intro");
```

### Finding HTML Elements by CSS Selectors

```javascript
var allPWithClassIntro = document.querySelectorAll("p.intro");
```

## Изменение елементов

## Добавление и удаление елементов
## Установка обработчиков событий
## Установка обработчиков событий



```javascript

```

