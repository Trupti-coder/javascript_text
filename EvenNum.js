function checkEvenNum(number){
    let n=5;
    for(let i=0;i<=n;i++){
        if(i%2==0){
            console.log("even number");
        }
        else{
            console.log("not even number");
        }
    }
}

let number=10;
console.log(checkEvenNum(number));