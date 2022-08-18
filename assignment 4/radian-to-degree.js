// Problem:1 radianToDegree
function radianToDegree(radians)
{
// Math.PI give the value of PI.
if(typeof radians === 'number'){
let degree = radians * (180 / Math.PI);
degree = degree.toFixed(2);
return degree;
}
else{
// error message for wrong data type of input
return 'please input a number';
}
}
const radian = 1;
const degree = radianToDegree(radian);
console.log(degree);
console.log(typeof degree);