const numbers = [45, 65, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// alternative version
// for of loop. array er element alada kore dekhar jonne. const er por je variable thakbe sekhane elemnt gula dekhabe and of er por array er nam thakbe.
for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'xiomi phone One night', price: 19000},
    {id: 2, name: 'iphone', price: 19000},
    {id: 3, name: 'mac book air', price: 119000},
    {id: 4, name: 'lenevo yoga laptop 2025', price: 19000},
    {id: 5, name: 'Dell inspiron laptop', price: 19000},
    {id: 6, name: 'Samsung phone note 8', price: 19000},
    {id: 7, name: 'Nokia old age phone gone', price: 19000},
    {id: 8, name: 'Phone one', price: 19000},
]
// array er nam sadaronoto plural hby. element sigular hby.
for(const product of products){
    // console.log(product);
}

function matchProducts(products, search){
    const matched = [];
    for(const product of products){
        /* if(product.name.includes(search)){
             matched.push(product);
        }*/
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'laptop');
// function theke kisu return na korle by default undefine return korbe.
console.log(result);
