/*
You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
 */ 

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
var position = fruits.indexOf('Banana');
console.log(position);
fruits[1]= "Mango";
console.log(fruits);
fruits.pop()
console.log(fruits)
fruits.push('watermelon')
console.log(fruits)
// array er suru theke add  er jonne unshift or remove er jonne shift

/* You and your friends Tom, Jane, Peter and John got their final exam results. Your total
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade

Write a program to find your and your friends’ grades using if-else.*/

var tom = 66;
var nahid = 85;
var jane = 95;
var peter = 56;
var john = 40;

var gradeA= 80
var gradeB= 60
var gradeC= 50
var gradeD= 40

if(tom>=gradeA){
    console.log('tom get A');
}
else if(tom>=gradeB && tom<gradeA){
    console.log('tom get B');
}
else if(tom>=gradeC && tom<gradeB){
    console.log('tom get C');
}
else if(tom>=gradeD && tom<gradeC){
    console.log('tom get D');
}

else{
    console.log('tom fail in exam');
}

if(nahid>=gradeA){
    console.log('nahid get A');
}
else if(nahid>=gradeB && nahid<gradeA){
    console.log('nahid get B');
}
else if(nahid>=gradeC && nahid<gradeB){
    console.log('nahid get C');
}
else if(nahid>=gradeD && nahid<gradeC){
    console.log('nahid get D');
}

else{
    console.log('nahid fail in exam');
}

/* You are given three numbers 13, 79, and 45. Write a program that will print the
largest number using if-else.*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1>num2){
    if(num>num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}

else{
    if(num2>num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// check isosceles of triangle
var side1 =9;
var side2 =8;
var side3 =8;
if(side1==side2 || side1==side3 || side2==side3){
    console.log("isosceles");
}