# Практика работы с обьектами и функциями

## Теория

####На этом этапе по теории нужно знать:
* [основы JS](http://javascript.ru/tutorial/foundation)
* [структура скриптов](http://javascript.ru/tutorial/foundation/structure)
* из [этого](https://www.youtube.com/playlist?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem) подкаста посмотреть и понять 1 - 13 уроки 
        
####Прочитать про:
        
* [функции](http://habrahabr.ru/post/240349/), [тут подкаст] (https://youtu.be/M3ACkFObsQw?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem)
* [обьекты](http://javascript.ru/tutorial/object/intro), [тут подкаст](https://youtu.be/J1aIrZFnGig?list=PL363QX7S8MfSxcHzvkNEqMYbOyhLeWwem)
* [возможности обьекта Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)

## Задания

### Разминка 

1. Написать скрипт который будет анализировать дистанцию которую проехал автомобиль. Начальная дистанция должна быть 0.
Количество проеханных километров спросить у пользователя. Полученную величину передать в функцию.
Функция должна проанализировать значение. Если автомобиль проехал меньше 100 км - вывести на экран: автомобиль проехал мало.
Если от 100 км (включительно) но меньше 300 км - вывести на экран: "автомобиль проехал норм".
Если больше 300 (включительно) - вывести на экран: "автомобиль проехал много".

### Практическое задание

1. Задача с котом
  1. Создать переменную cat и присвоить в неё обьект. Обьект должен описывать свойства типичного кота:
    1. Имя
    1. Цвет
    1. Возраст
        
  1. Наделить котейку следующими возможностями:
    1. Функция рассказа о себе: котейка рассказыват обо всех своих свойствах, которые помнит.
    1. Функция мяуканья. Котейка мяукает 10 раз
             
  1. научить котейку понимать сколько раз мы хотим чтобы он мяукнул. Передавать количество в функцию мяуканья при помощи параметраОбновить функцию мяуканья в соответствии с новыми требованиями
        
  1. дополнить образ котейки (модель) уровнем пушистости по 5-и бальной шкале
    1. При рассказе о себе котейка теперь должен упоминать и о своей пушистости
    1. Научить котейку говорить о пушистости не в балах а словами: 
      * 1: лысый, 
      * 2: шерстка есть
      * 3: средней пушистоти
      * 4: норм пушист
      * 5: в поряде пушист
эпитеты можно выбрать свои :-)
        
  1. Дополнить котейку возможностью кормления. Котейка должен запоминать момент, когда его угощали в крайний раз. 
  При рассказе о себе котейка теперь должен упоминать голоден ли он или нет.Если кормили больше 30 секунд 
  назад - голоден. Если меньше - нет.

  1. Дополнить котейку возможностью играться. Котейка должен запоминать моменты когда с ним играли. При рассказе о себе 
  говорить что с ним играли столько-то раз и в такое-то время:
    1. 1-й раз: 17:18:19
    1. 2-й раз: 18:18:18
    1. ...
    
## Домашнее задание

1. Доделать задачи не завершенные на практическом
1. Написать функцию конструктор котеек. Функция должна создавать котеек на основе данных переданных пользователем:
  1. Имя
  1. Цвет
  1. Возраст
Остальные свойства котейки должны быть заданы по умолчанию на момент создания.
1. Создать троих котеек при помощи цикла. Попросить каждого рассказать о себе
        

