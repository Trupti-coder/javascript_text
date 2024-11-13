function sumOfRange(start,end){
    let sum=0;
    for(let i=start;i<=end;i++){
        sum+=i;   
     }
     return sum;

}
console.log(sumOfRange(1,5));
console.log(sumOfRange(1,100));