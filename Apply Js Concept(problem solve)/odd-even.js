 function isEven(number){
    const reminder  = number % 2;
    console.log(reminder)
    if(reminder === 0){
        // console.log('Number is even');
        return true;
    }
    else{
        // console.log('Number is Odd');
        return false;
    }
 }

 const myNumber = isEven(500);
 console.log(myNumber);

//  console.log(isEven(500));