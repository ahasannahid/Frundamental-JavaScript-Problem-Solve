function minInArray(numbers){
    console.log('array inside the array', numbers);
    let largest = numbers[0];

    for(let i = 0; i < numbers.length; i++){ 
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const height =[167, 190, 120, 165, 137, 265];
const tallest = minInArray(height);
console.log('tallest person is', tallest);