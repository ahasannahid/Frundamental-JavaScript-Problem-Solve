function isLeapYear(year){
    const reminder = year % 4;
    if(reminder ===0){
        // console.log('this year is leapyear', year);
        return true;
    }
    else{
        // console.log('this year is not leapyear', year);
        return false;
    }
    // return false;
}
const isMyYearLeapYear = isLeapYear(1952);
console.log('my year', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1953);
console.log('my year', isHerYearLeapYear);