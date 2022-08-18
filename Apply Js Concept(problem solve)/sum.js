// let sum = 0;
// for(i = 0; i<=7; i++){
//     sum = sum + i;
//     console.log(i, sum); 
// }

function sumOfNumbers(number) {
    let sum = 0;
    for (i = 0; i <= number; i++) {
        sum = sum + i;
        console.log(i, sum);
    }
    return sum;
}

const num =10;
const sum = sumOfNumbers(num);
// sumOfNumbers(num);
console.log(sum);