//Problem 5: isBestFriend
function isBestFriend(friend, friend1){
    if(typeof friend === 'object' && typeof friend1 === 'object'){
    if((friend.name) === (friend1.friend) && (friend1.name) === (friend.friend)){
    return true;
    }
    else{
    return false;
    }
    }
    else{
   
    return ' enter  object';
    }
    }
const friend = {
    name: 'abul',
    friend: 'babul'
};

const friend1 = {
    name: 'babul',
    friend: 'abul'
};

const bestFriend = isBestFriend(friend, friend1);
console.log(bestFriend);
