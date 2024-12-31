function compareStringCount(str1,str2){
    let leng1=str1.length;
    let leng2=str2.length;
    if(leng1===leng2){
        return "Equal"; 
     }
     else if(leng1<leng2){
        return `${str1} is shorter than ${str2}`;
     }
     else{
        return`${str1} is greater than ${str2}`;
     }
}
console.log(compareStringCount("ab","abcc"));




