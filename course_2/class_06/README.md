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
var pElements = document.getElementsByTagName("p"); // returns array-like node-list
```

### Finding HTML Elements by Class Name

```javascript
var allIntroElements = document.getElementsByClassName("intro"); //returns array like node-list
```

### Finding HTML Elements by CSS Selectors

```javascript
var allPWithClassIntro = document.querySelectorAll("p.intro");  // returns array
```

## Навигация по DOM

```html
<div id="content">
    <p>hello</p>
    <ul id="test">
        <li>list item 1</li>
        <li>list item 2</li><li>list item 3</li>
        <li>
            list item 4
        </li>
        <li>list item 5</li>
    </ul>
    <p>world</p>
</div>

<script>
    var node = document.getElementById('test');
    node.parentNode;
    node.childNodes;
    node.children;
    node.firstChild;
    node.lastChild;
    node.nextSibling;
    node.previousSibling;

    for(var i = 0; i < node.childNodes.length; i++) {
        console.log(`type of node.childNodes[${i}]: ${node.childNodes[i].nodeType}`);
    }

</script>
```

Node types:
1. Element	1
2. Attribute	2
3. Text	3
4. Comment	8
5. Document	9


## Изменение елементов

### Changing the HTML Output Stream

```javascript
document.write(Date());
console.log('Sync operation');
document.write(Date());
```

### Changing HTML Content
```javascript
document.getElementById('content').innerHTML = `<p>${2 + 2}</p>`;
```

### Changing the Value of an Attribute
```javascript
document.getElementById('content').id = "content-updated";
document.getElementById('a.example').href = "http://google.com";
```

### Changing HTML Style

```javascript
document.getElementById('content').style.background="orange";
```

```javascript
document.querySelectorAll('p').forEach(p => p.style.color="magenta")
```

## Добавление и удаление елементов

### Creating New HTML Elements (Nodes)


#### Добавление как lastChild
```html
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
</script>
```

#### Добавление перед указанным елементом

```html
<div id="div1">
    <p id="p1">This is a paragraph.</p>
    <p id="p2">This is another paragraph.</p>
</div>

<script>
    var para = document.createElement("p");
    var node = document.createTextNode("This is new.");
    para.appendChild(node);

    var element = document.getElementById("div1");
    var child = document.getElementById("p1");
    element.insertBefore(para,child);
</script>
```

### Удаление елемента

```javascript
var child = document.getElementById("p1");
child.parentNode.removeChild(child);
```

### Замента елемента

```javascript
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para,child);
```

## Обработка событий


### Атрибут on{event}
```html
<div id="content" onclick="document.getElementById('content').innerHTML='clicked'">Hello World</div>
```

```html
<h1 id="page-header" onclick="changePageHeaderText('There is no spoon')">Hello World</h1>

<script>
    function changePageHeaderText(text){
        document.getElementById('page-header').innerHTML=text;
    }
</script>
```

### element.addEventListener

```html
<h1 id="page-header">Hello World</h1>

<script>
    function changePageHeaderText(text){
        this.innerHTML=text;    // this inside event-handler point to node emitted event
    }

    var pageHeader = document.getElementById('page-header');

    pageHeader.addEventListener('click', function() { changePageHeaderText('There is no spoon'); });
    pageHeader.addEventListener('click', function() { console.log('hello from another click handler') });
    pageHeader.addEventListener('click', function() { document.body.style.background = 'orange'; });
</script>
```

```html

<input id="user-name" type="text">

<script>
    var userNameInpt = document.getElementById('user-name');

    userNameInpt.addEventListener('change', function() {
        console.log('change handler called');
        console.log(`Input value is: ${this.value}`);
    });

    userNameInpt.addEventListener('keypress', function (event) {
        console.log('keypress handler called with following event argument: %O', event);
    });
</script>

```

```html

<body>

<div id="content"></div>

<script>
    document.documentElement.addEventListener('mousemove', function (event) {
        document.getElementById('content').innerHTML = `x: ${event.x}, y: ${event.y}`;
        if (event.x > 500) {
            document.body.style.background = 'orange'
        } else {
            document.body.style.background = 'white'
        }
    });
</script>

</body>
```

## Задачи

Решение каждой задачи выполните в виде файлов: html + js (css).

1. Создайте скрипт, который большими красивыми цифрами выводит на страницу текущее время, обновляемое каждую секунду.
Будьте креативны в дизайне страницы.

2. Создайте страницу с кнопкой. Пусть нажатие на кнопку добавит на страницу 9 div. Каждый из div должен содержать свой
номер от 1 до 9. Блоки должны образовать на экране сетку 3x3

3. Расширьте функционал предидущей задачи так чтоб клик по каждому из div приводил к смене цвета его фона на зелёный.

4. Пусть клик на div приводит к выводу в консоль сообщения вида: click on div with #n, где n - номер кликнутого блока.

5. Пусть каждый из div содержит в себе счетчик количества кликов. Каждый клик левой кнопкой пусть увеличивает счетчик на 1
Клик правой кнопкой - уменьшает

6. Усложните логику так, чтоб фон в блоке менялся постепенно и становился зеленее в зависимости от текущего значения
счетчика кликов. Чем больше - тем зеленее

7. Добавьте в каждый div три input. Дайте возможность задать значения для красного, зелёного и синего путём ввода
 цифровых значений в эти поля.

8. Выполните предидущую задачу так, чтоб каждый из div содержал в себе элемент select. Заполните каждый select списком
option сосотоящим из цветов радуги. Выбор опции в select должен менять цвета фона div, в котором этот select расположен.
Значения в полях также должны изменяться соответственно выбранному в select цвету. Поля дожны стать readonly.

9. Добавьте в каждый select опцию custom. Эта опция разблокирует возможность ручной настройки фона для
соответсвующего div.

10. Добавьте на страницу кнопку сброса. По клику фоны всех блоков становятся белыми. В select выбрана опция white.
В полях ручной настройки 0, 0, 0

