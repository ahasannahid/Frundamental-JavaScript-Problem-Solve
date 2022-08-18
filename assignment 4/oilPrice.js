//Problem 3: oilPrice
function oilPrice(dieseal, petrol, octane){
    if(typeof dieseal === 'number' && typeof petrol === 'number' && typeof octane === 'number'){
    // if data type is number execute this condition
    const diesealPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
    const totalDiesealPrice = dieseal * diesealPrice;
    const totalPetrolPrice = petrol * petrolPrice;
    const totalOctanePrice = octane * octanePrice;
    const totalOilPrice = totalDiesealPrice + totalPetrolPrice + totalOctanePrice;
    return totalOilPrice;
    }
    else{
    // error message for wrong data type of input
    return 'please input oil quantity as a number';
    }
    }
const dieseal = 1;
const petrol = 1;
const octane = 1;
const totalOilPrice = oilPrice(dieseal, petrol, octane);
console.log(totalOilPrice);