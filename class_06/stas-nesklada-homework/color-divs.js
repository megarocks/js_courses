//var iceCream = 5;
//while (iceCream > 0) {
//    iceCream--
//    console.log('Ешь-еш')
//}




//for (var iceCream = 7; iceCream >= 0; iceCream--) {
    
//    if (iceCream == 5) {
//        console.log('Кушай быстрее,осталось 5 !');
//    } else if(iceCream == 3) {
//        console.log('Кушай быстрее,осталось 3 !');
//    } else if (iceCream == 1) {
//        console.log('Осталось одно!');
//    } else if(iceCream == 0) {
//        console.log('Все,последнее растаяло');
//    } else {
//        console.log('Еще есть');
//    }
//}

// function validateEmail(email) {
//     var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
//     return re.test(email);
// }

// var email = prompt('Email please?');

// if (validateEmail(email)) {
//     console.log('С днём рождения тебя,');
//     console.log('С днём рождения тебя,');
//     console.log('С днём рождения тебя.');
// } else {
//     console.log('Ошибка')
// }



// var nameUser = prompt('Whats your name?');

// if (nameUser &&  nameUser.length > 1) {
//    console.log('С днём рождения тебя,');
//    console.log('С днём рождения тебя,');
//    console.log('С днём рождения тебя,' + nameUser + '!');
//    console.log('С днём рождения тебя.');
// } else {
//    console.log('Ошибка: Длина имени должна быть минимум 2 символа')
// }

// var a = prompt('Введите значение переменной а:');
// var b = prompt('Введите значение переменной b:');
// if (a > b) {
//    alert("a("+a+") > b("+b+") ;")
// } else if (a < b) {
//    alert("a(" + a + ") < b(" +b+ ") ;")
// } else {
//    alert("Равны!")
// }

// var userWrite;
// var myArray = [];
// do {
//    userWrite = prompt("Введите игру в которую играли:");
//    myArray.push(userWrite);
// } while (userWrite !== "" ) {
//    var colGames = myArray.length - 1;
//    if (colGames == 1) {
//        alert("у вас на счету одна любимая игра.");
//    }
//    else if (colGames == 0 ) {
//        alert("Нет любимых игр,мне жаль");
//    }
//    else if (colGames <= 3) {
//        alert("у вас на счету " + colGames + " любимые игры.");
//    }
//    else {
//        alert("у вас на счету " + colGames + " любимых игр.");
//    }
// }

// var distance = 0;

//  function myFunc(distance){
//  	if(distance<100){
//  		alert('автомобиль проехал мало');
//  	} else if( 100 >= distance && distance < 300){
//  		alert('автомобиль проехал норм');
//  	}else{
//  		alert('автомобиль проехал много');
//  	}
//  }
//  distance = prompt(" Cколько проехал автомобиль?");
//  myFunc(distance);




//var cat = {
//	name : "кузя",
//	color: "серый",
//	age : 2,
//	fyfu : 3,
//	lasttimeeat: null,
//	levelfyfu: ["лысый.","шерстка есть.","средняя пушистость.","норм пушистость.","в поряде."],
//	property2: function (){
//			console.log("кота зовут " + this.name + ", мой цвет " + this.color + ",мне " + this.age + " года,пушистость " + this.levelfyfu[this.fyfu-1]);
//		},
//	vote: function (col){
//		col = prompt("cколько раз мяукнуть?");
//		    for(var i = 0; i <= col ;i++){
//			    console.log("я сказал мяу "+i+" раз!!!");
//		    }
//	},
//	eat: function(){
//		console.log("i am ok.")
//		this.lasttimeeat = new date();
//	},
//	hengry: function(){
//		var seconddate = new date();
//		var difer = seconddate - this.lasttimeeat;
//	}
//};
//cat.property2();
//cat.vote();
var catFunction = function (cat, nameCat, colorCat, ageCat) {
    cat = prompt("Какой кот?");
    nameCat = prompt("Как назавём кота?");
    colorCat = prompt("Какой расцветки будет кот?");
    ageCat = prompt("Какой возраст?");
    var cat = {
        name: nameCat,
        color: colorCat,
        age: ageCat,
        fyfu: 3,
        lasttimeeat: null,
        levelfyfu: ["лысый.", "шерстка есть.", "средняя пушистость.", "норм пушистость.", "в поряде."],
        property2: function () {
            console.log("кота зовут " + this.name + ", мой цвет " + this.color + ",мне " + this.age + " года,пушистость " + this.levelfyfu[this.fyfu - 1]);
        },
        vote: function (col) {
            col = prompt("cколько раз мяукнуть?");
            for (var i = 0; i <= col ; i++) {
                console.log("я сказал мяу " + i + " раз!!!");
            }
        },
        eat: function () {
            console.log("i am ok.")
            this.lasttimeeat = new date();
        },
        hengry: function () {
            var seconddate = new date();
            var difer = seconddate - this.lasttimeeat;
        }
    };
    cat.property2();
    cat.vote();
}
catFunction();
