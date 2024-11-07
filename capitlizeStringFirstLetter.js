function capitlizeString(str){
    let result='';
    
        let code=str.charCodeAt(0);
        if(code>=97 && code<=122){
            code-=32;
        }
        result+=String.fromCharCode(code);
    
    for(let i=1;i<str.length;i++){
        result+=str.charAt(i);
    }
    return result;
}
let str="hello from javascript mesh !";
console.log(capitlizeString(str));