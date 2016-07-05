var array = [
    {name: 'John', age: 22},
    {name: 'Mary', age: 12},
    {name: 'Nick', age: 60},
    {name: 'Victor', age: 33},
    {name: 'Alex', age: 17},
    {name: 'John Smith', age: 77}
];

console.log('Before sort:', array);

var comparator = function (objectOne, objectTwo) {

    if (objectOne.age > objectTwo.age) {
        return 1;
    } else if (objectOne.age < objectTwo.age) {
        return -1;
    } else if (objectOne.age == objectTwo.age) {
        return 0;
    }


}
