for (var i =0; i <=20; i++){
    console.log(i);
    if (i > 5){
        break;
    }
}

var roast =0;
while(roast < 10){
    console.log('gift nen');
    roast++;
    if (roast > 4){
        break;
    }
}

var items =['bottle', 'mouse', 'sunglass', 'pen', 'notebook'];

for(var i =0; i<  items.length; i++){
    var item = items[i];
    if(item =='pen'){
        break;
    }
    console.log(item);
}

var numbers =[45, 32, 34, 13, 407, 50];

for(var i =0; i<  numbers.length; i++){
    var number = numbers[i];
    if(number < 100){
        break;
    }
    console.log(number);
}