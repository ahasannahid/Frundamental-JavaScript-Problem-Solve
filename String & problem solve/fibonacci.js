// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// fibonacci er somoy i=2 or 3rd value theke suru hby jehetu duita value predefine kore neua lgby.
const fibo = [0, 1];
for(let i = 2; i<=20; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);