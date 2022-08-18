/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return. */
var money = 500;
console.log('total money');
console.log(money);
var apple = 100;
var mango = 200;
var orange = 100;
var totalCost = apple + mango + orange;
console.log('total Cost');
console.log(totalCost);
var returnMoney = money - totalCost;
console.log('Return money'); 
console.log(returnMoney);

/*Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. */
var bangla = 50.76;
var math = 50;
var biology = 50.65;
var chemistry = 50;
var physics = 60.54;

var avg = (bangla+math+biology+chemistry+physics)/5;
var avgTwoDecimal = avg.toFixed(2);
console.log(avg);

/*John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
combine these two strings and print them in one line. Help John write the program.*/

var sentence1 = 'i wan to';
var sentence2 = 'be a programmer';

console.log(sentence1+sentence2);

/*Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
remainder would be if she divided the number by 5. Help Sarah write the program.*/
var number = 43;
var number1 = 5;
console.log(number%number1);