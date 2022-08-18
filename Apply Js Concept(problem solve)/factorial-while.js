// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= numbers){
//         result = result * num;
//         num++;
//     }
//     return result;
// }
// const numbers = 5;
// const result = factorial(numbers);
// console.log(result);

// reverse way

function factorial(number){
    let num = numbers;
    let result = 1;
    while(num >= 1){
        result = result * num;
        num--;
    }
    return result;
}
const numbers = 8;
const result = factorial(numbers);
console.log(result);