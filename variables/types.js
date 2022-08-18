// variable typeof
var price = 333;
// console.log(typeof price);
var price1 = "333";
// console.log(typeof price1);
var isHappy = true;
// console.log(typeof isHappy);
// undefine type variable
var romantic ;
// console.log(typeof romantic);

var number1 = 0.1;
var number2 = 0.2;
var number3 = number1 + number2;
console.log(number3);
// tofixed number ke string e convert kore dey.
number3 = number3.toFixed(4);
console.log(number3);
// String ke number e convert er jonne parseInt(int caile)/ parseFloat(float caile) use korte Hby.
number3 = parseFloat(number3);
console.log(number3);