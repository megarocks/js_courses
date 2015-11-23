/**
 * Created by alt on 11/5/15.
 */
var a = 5;
var b = 10;
var c = undefined;

c = b / a;  //2
c = a * b;  //50


var price = 200;
var discount = 15;
var fixedDiscount = 30;
var finalPrice;

finalPrice = price - fixedDiscount - ( (discount / price) * 100);

console.log(finalPrice);