// const products = [
//     {name: 'phone', price: 12000},
//     {name: 'laptop', price: 32000}
// ]
// const products = [15, 56, 87]
const products = {
    '0': 15,
    '1': 56,
    '2': 87
}

// function compare(a, b) {
//     if (a == b) {
//      return true;
//     } else {
//      return false;
//     }
//    }
//    const result = compare(15, "15");
//    console.log(result);

   function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   const result = compare(25, 25);
   console.log(result);