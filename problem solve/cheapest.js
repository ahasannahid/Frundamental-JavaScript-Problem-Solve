const phones = [
    {name: 'Samsung', camera: 12, stroge: '32gb', price: 36000, color: 'silver'},
    {name: 'walton', camera: 10, stroge: '32gb', price: 22000, color: 'silver'},
    {name: 'iPhone', camera: 12, stroge: '32gb', price: 82000, color: 'silver'},
    {name: 'xiomi', camera: 12, stroge: '32gb', price: 52000, color: 'silver'},
    {name: 'oppo', camera: 12, stroge: '32gb', price: 20000, color: 'silver'},
    {name: 'nokia', camera: 12, stroge: '32gb', price: 44000, color: 'silver'},
    {name: 'htc', camera: 12, stroge: '32gb', price: 62000, color: 'silver'},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone);
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones)
console.log(mySelection);