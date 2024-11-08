function isArmstrong(number){
    let sum=0;
    let temp=number;
    let digits=String(number).length;

    while(temp>0){
        let lastDigit=temp%10;
        sum+=lastDigit**digits;
        temp=Math.floor(temp/10);

    }
    return sum===number;
}
console.log(isArmstrong(153));
console.log(isArmstrong(122));
console.log(isArmstrong(-156));