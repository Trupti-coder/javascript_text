function hasUniqueChars(str){
    let seenChars={};
    for(let i=0;i<str.length;i++){
        const char=str[i];

        if(seenChars[char]){
            return false;
        }
        seenChars[char]=true;
    }
    return true;
}
console.log(hasUniqueChars("hello"));
console.log(hasUniqueChars("car"));