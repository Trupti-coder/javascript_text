function evenOddString(str){
    let resultstr='';
    for(let i=0;i<str.length;i++){
        let code=str.charCodeAt(i);
        if(i%2===0){
            if(code>=97 && code<=122){
               code-=32
            }
        } 
        else{
            if(code>=65 && code<=90){
                code+=32
            }
        }
        resultstr+=String.fromCharCode(code);

    }
    return resultstr;
}
let str="Hello Word";
console.log(evenOddString(str));