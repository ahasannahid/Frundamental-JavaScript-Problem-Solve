function number(multi){
    let sum=1;
    for(let i=0; i<multi.length; i++){
        sum=sum*multi[i];
    }
    return sum;
}

const arr=[15, 12, 10];
console.log(number(arr));