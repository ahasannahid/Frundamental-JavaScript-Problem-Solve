/*
একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট 
প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি 
নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 
*/

function bestFriends(friends){
    console.log('array inside the array', friends);
    let largeFriend = friends[0];
    for(let i = 0; i < friends.length; i++){
        const friendIndex = i;
        const friendName = friends[i];
        // console.log(friendIndex, friendName);
        if(friendName.length > largeFriend.length){
            largeFriend = friendName;
        }       
    }
    return largeFriend
}

const friends =['nahid', 'ahasan', 'habib','ahasanNahid', 'farhan', 'samudra', 'saurav', 'salman'];
const largeFriend = bestFriends(friends);
console.log('largeName Friend', largeFriend);