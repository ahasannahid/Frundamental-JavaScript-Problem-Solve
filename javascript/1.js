function avg(numbers){
    let sum = 0;
    for(let i= 0;i<numbers.length; i++){
        // console.log(i);
        const element = numbers[i];
        sum = sum+element;
    }
    //console.log(sum);
    const avg = sum/numbers.length;
    return avg;
}


const arr = [2, 45, 76, 87, 34];
const result = avg(arr);
console.log(result);