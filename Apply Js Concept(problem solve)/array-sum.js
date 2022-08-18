function getSumOfAnArray(numbers){
    console.log(numbers);
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){    
        sum = sum + numbers[i];   
        console.log(i, numbers[i], sum); 
    }
    return sum;   
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers =[];
    for(let i =0; i <numbers.length; i++){
        const index = i;
        const element = numbers[index];

        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }       
    }
    return oddNumbers;
}

const myNumbers =[12, 65, 45, 78, 32, 45, 91];
const sumOfArray = getSumOfAnArray(myNumbers);
console.log('sum of this array', sumOfArray);

const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log('odd number array' ,oddNumbers);
const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumbersSum);