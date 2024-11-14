function getPermutations(str){
    if(str.length===1){
        return [str];
    }

    const permutation=[];

    for(let i=0;i<str.length;i++){
        const currentChar=str[i];
        let remainChars='';
        for(let j=0;j<str.length;j++){
            if(i !==j){
                remainChars=remainChars+str[j];
            }
        }
        const remainingPermutations=getPermutations(remainChars);
        for(let perm of remainingPermutations){
            permutation.push(currentChar+perm);
        }
        
    }
    return permutation;
}