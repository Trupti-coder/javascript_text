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


/*

//practice

function compareStringLength(str1,str2){
    len1=str1.length;
    len2=str2.length;
    if(len1===len2){
        return " Length Are Equal";
    }
    else if(len1<len2){
        return `length of ${str1} is shorter than ${str2}`;
    }
    else{
        return `length of ${str1} is greater than ${str2}`;
    }
}
//console.log(compareStringLength("truptii","Rani"));
//console.log(compareStringLength("trup","Rani"));
console.log(compareStringLength("trup","Raniii"))*/


//fibonasi series

function fibonasiSeries(n){
    let fibo=[0,1];
    for(let i=2;i<n;i++){
     fibo[i]=fibo[i-1]+fibo[i-2];
    }
    return fibo.slice(0,n);
}
console.log(fibonasiSeries(10));