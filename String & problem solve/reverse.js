function reverseString(text){
    let reverse = '';
    for(let i = text.length - 1; i >= 0 ; i--){
        const element = text[i];
        reverse = reverse + element;
        console.log(element, reverse);
    }
    return reverse;
}

const myStrig = "i am a good boy";
const reversed = reverseString(myStrig);
console.log('reversed output:', reversed);