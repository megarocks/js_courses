function Cat(objectWithParams) {

    if (!objectWithParams.name) {
        throw new Error("Cat name should be specified");
    } else {
        this.name = objectWithParams.name;
    }

    if (!objectWithParams.age) {
        throw new Error("Cat age should be specified");
    } else {
        this.age = objectWithParams.age;
    }

    if (!objectWithParams.color) {
        throw new Error("Cat color should be specified");
    } else {
        this.color = objectWithParams.color;
    }

}

Cat.prototype.run = function () {
    console.log('I am a cat with name ' + this.name + ' and I am running now');
};

Cat.prototype.hungry = true;


Cat.prototype.toString = function () {
    console.log('My name is: ' + this.name);
};

function FashionCat() {
    this.isFashion = true;

    this.doSomeFashionWork = function () {
        console.log('I am a cat with name ' + this.name + 'and I am fashion');
    }
}

FashionCat.prototype = Cat();


var cat1 = new Cat({
    name: 'cat1',
    age: 1,
    color: 'white'
});

cat1.run();

var cat2 = new Cat({
    name: 'cat2',
    age: 2,
    color: 'white'
});

var cat3 = new Cat({
    name: 'cat3',
    age: 3,
    color: 'white'
});

var cat4 = new FashionCat();

/*var catsArray = [];

 for (var i = 0; i < 100500; i++) {

 var catParams = {
 name: 'cat' + i,
 age: i + 1,
 color: 'white'
 };

 catsArray.push(new Cat(catParams));
 }*/

/*catsArray[999].run();*/
