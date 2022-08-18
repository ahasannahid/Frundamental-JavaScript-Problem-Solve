//Problem 5: isBestFriend
function isBestFriend(friend1, friend2){
    if(typeof friend1 === 'object' && typeof friend2 === 'object'){
    // if data type is object execute this condition
    if((friend1.name).toLowerCase() === (friend2.friend).toLowerCase() && (friend2.name).toLowerCase() === (friend1.friend).toLowerCase()){
    return true;
    }
    else{
    return false;
    }
    }
    else{
    // error message for wrong data type of input
    return 'please enter an object';
    }
    }
const friend1 = {
    name: 'abul',
    friend: 'babul'
};

const friend2 = {
    name: 'babul',
    friend: 'abul'
};

const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);
