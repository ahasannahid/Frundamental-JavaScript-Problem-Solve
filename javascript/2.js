function number(multi){
    let sum=1;
     for(let i=0; i<multi.length; i++){
         sum=sum*multi[i];
     }
     return sum;
 }
 
 const arr=[2, 3, 4, 5]
 console.log(number(arr));