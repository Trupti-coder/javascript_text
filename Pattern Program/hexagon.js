function hexagon(){
    for(let i=1;i<=rows;i++){
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }
        for (let k = 1; k <= rows + (i - 1); k++) {
            str += '*';
        }
        
    }

}