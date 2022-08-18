// Problem:2 isJavaScriptFile
function isJavaScriptFile (fileName){
    if(typeof fileName === 'string'){
    // if data type is string execute this condition
    if(fileName.endsWith('.js') === true){
    return true;
    }
    else{
    return false;
    }
    }
    else{
    // error message for wrong data type of input
    return 'please input a string value';
    }
    }

const fileName = 'index.js';
const result = isJavaScriptFile(fileName);
console.log(result);