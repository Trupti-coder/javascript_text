function countWords(str){
    let count=0;
    let inWords=0;
    for(let i=0;i<str.length;i++){
        if(str[i] !==''){
            if(!inWords){
                count++;
                inWords=true;
            }
        }
        else{
            inWords=false;
        }
       
        
        
    }
    return count;

}