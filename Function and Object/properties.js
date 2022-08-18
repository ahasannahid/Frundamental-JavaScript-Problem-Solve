var shoppingCart ={
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 10
}

// get specific keys?property value from an object. when i know the specific property name.
var penCount = shoppingCart.pen;

// alternative system
var penCount2 = shoppingCart['pen'];

// get specific keys?property value from an object. when i don't know the specific property name.
/*var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);*/

var propertyName = 'books';
var propertyValues = shoppingCart[propertyName];
console.log(propertyValues);