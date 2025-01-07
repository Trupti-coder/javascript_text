function xPattern(rows){
    for(let i=1;i<=rows;i++){
        let str='';
        for(let j=1;j<=rows;j++){
            if(j === i || j === (rows-i+1)){
                str+="*";
            }
            else{
                str += ' ';
            }

        }
        console.log(str);
    }
}
xPattern(5);