function mostFreqChar(str){
    let freq={};
    for(let i=0;i<str.length;i++){
        if(!freq[str[i]]){
            freq[str[i]]=1;
        }
        else{
            freq[str[i]]++;
        }
    }

    let maxChar="";
    let maxCount=0;
    for(let key in freq){
        if(freq[key]>maxCount){
            maxChar=key;
            maxCount=freq[key];
        }
    }
    return maxChar;
}
let str="aabccsssss"
console.log(mostFreqChar(str));