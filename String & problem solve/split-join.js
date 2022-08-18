const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tumay bolte parini. kala kala sada sada';

// letter alada korte caile
const parts = lyrics.split('');
console.log(parts);
// word alada kort caile
const word = lyrics.split(' ');
console.log(word);

// sentence alada korte caile
const sentence = lyrics.split('.');
console.log(sentence);

// join from array
const line = [
    'tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tumay bolte parini',
    'kala kala sada sada'
  ];

const newSong = line.join(' ');
console.log(newSong);

