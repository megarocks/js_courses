var arrayOfDivs = document.getElementsByClassName('my');

console.log(arrayOfDivs);

for (var i = arrayOfDivs.length - 1; i >= 0; i = i - 1) {

    var currentElement = arrayOfDivs[i];

    currentElement.style.display = "none";

}


