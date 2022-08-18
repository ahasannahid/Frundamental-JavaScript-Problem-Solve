const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. kala kala sada sada';
const lyrics1 = '  tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. kala kala sada sada  ';

const partial = lyrics.slice(6, 9);
console.log(partial);

const partial1 = lyrics.substring(6, 9);
console.log(partial1);

const part = lyrics.charAt(6);
console.log(part);


// remove white space from start and end
console.log(lyrics1.trim());

// concat
const str1 = 'hello' ;
const str2 = 'world' ;
console.log(str1.concat(" ",str2))
