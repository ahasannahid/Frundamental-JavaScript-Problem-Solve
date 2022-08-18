const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. kala kala sada sada';

const doesExist = lyrics.includes('pakhi');
console.log(doesExist);
//if i want to ignone case sensative 
const searchString = 'Tumi';
const exist = lyrics.toLowerCase().includes(searchString.toLowerCase()); 
 console.log(exist);
  
// indexOf
 console.log(lyrics.indexOf('kala'));

 if(lyrics.indexOf('Sada') !== -1){
    console.log('exist inside the string');
 }
 else{
    console.log('can not find it');
 }

//  startsWith
console.log(lyrics.startsWith('tumi'));
// endsWith
const fileName = 'biodata.pdf';
const otherFile = 'pic.png';

console.log(fileName.endsWith('.pdf'));