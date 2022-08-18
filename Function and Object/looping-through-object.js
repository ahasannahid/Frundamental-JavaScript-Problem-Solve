var shoppingCart ={
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 10,
    shoes: 2
}

// var shoppingItems =['books', 'sunglass', 'shoes', 'pen'];

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart)
console.log(values);

for(var i = 0; i < keys.length; i++){
    // console.log(keys[i]);
    // console.log(shoppingCart[i]);
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName]
    console.log(propertyName,  propertyValue);

}

// for in loop
for(var propertyName in shoppingCart){
   const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}
 
