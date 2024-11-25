function capitlizeString(str){
    let result="";
    let capitlizeNext=true;

    for(let i=0;i<str.length;i++){
        let char =str[i];

        if(char === ' '){
            result += char;
            capitlizeNext =true;
        }
        else{
            if(capitlizeNext && char >= 'a' && char <= 'z'){
                result += String.fromCharCode(char.charCodeAt(0)-32);
                capitlizeNext=false;
            }
            else{
                result+=char;
                capitlizeNext=false;
            }
        }
    }
    return result;

}
let str = "hello from javascript mesh !"; 
console.log(capitlizeString(str));