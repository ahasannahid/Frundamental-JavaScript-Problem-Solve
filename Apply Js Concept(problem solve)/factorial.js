function factorial(number) {
    let result = 1;
    for (i = 1; i <= number; i++) {
        result = result * i;
        console.log(i, result);
    }
    return result;
}

const result = factorial(3);
console.log(result);

// factorial using reverse way

/*function factorial(number) {
    let result = 1;
    for (i = number; i >=1; i--) {
        result = result * i;
        console.log(i, result);
    }
    return result;  
}
const number = 6;
const fact = factorial(number);
console.log('factorial of:', number, fact);
*/