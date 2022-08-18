// power
const result = Math.pow(3, 8);
console.log(result);

// absoulute
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if(gap < 5){
    console.log('you guys can be friend');
}
else{
    console.log('you guys stay apart');
}

// vongnangser jonne
const number = 2.4598;

const fullNumber = Math.round(number);
console.log(fullNumber);

// ceil
const result1 = Math.ceil(number);
console.log(result1);

// floor
const result2 = Math.floor(number);
console.log(result2);

// random
console.log(Math.random());

// if we need customize valo from random
const random = Math.random()*10;
console.log(random);

const random1 = Math.round(Math.random()*10);
console.log(random1);