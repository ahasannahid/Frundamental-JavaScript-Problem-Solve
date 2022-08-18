const nayok = {
    name: 'sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['Apu', 'Razz', 'Salam', 'Amir'],

    movies:[{name: 'no. 1', year: 2009}, {name: 'king khan', year: 2018}],

    act: function(){
        console.log('acting like sakib khan');
    },

    car:{
        brand: 'tesla',
        price: 5000000,
        model: 2025,
        manufacturer: {
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'usa'
        }
    }
}
//console.log(nayok.car.manufacturer);
// console.log(nayok.act);
nayok.act();