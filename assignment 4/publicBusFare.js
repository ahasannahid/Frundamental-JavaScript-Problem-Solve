//Problem 4: publicBusFare
function publicBusFare(people){
    const busFair = 250;
    if(typeof people === 'number'){
    // if input type is number then execute this condition
    const reminder = people % 50;
    if(reminder === 0){
    const publicBusFare = busFair * 0;
    return publicBusFare;
    }
    else if(reminder < 11){
    publicBusFare = busFair * reminder;
    return publicBusFare;
    }
    else if(reminder >= 11){
    // if reminder greater or equal 11 than execute this part
    const reminderAfterMicro = reminder % 11;
    if(reminderAfterMicro === 0){
    publicBusFare = busFair * 0;
    return publicBusFare;
    }
    else {
    publicBusFare = busFair * reminderAfterMicro;
    return publicBusFare;
    }
    }
    }
    else{
    // if input type is no number then show the error message
    return 'please enter a number type input';
    };
    }

console.log(publicBusFare(565));

