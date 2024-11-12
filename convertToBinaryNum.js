function toBinary(n){
    if(n===0)return "0";

    let binary ="";
    while(n>0){
        let remainder =n%2;
        binary=remainder+binary;
        n=Math.floor(n/2);
    }
    return binary;

}
console.log(toBinary(5));