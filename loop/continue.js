var numbers =[45, 32, 34, 13, 407, 48, 200];

for(var i =0; i<  numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}