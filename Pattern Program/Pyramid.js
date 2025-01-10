function  doublePyramid(){
    for(let i=0;i<=rows;i++){
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }

        for (let k = 1; k <= i; k++) {
            str += '*';
        }
        for (let l = 1; l < i; l++) {
            str += '*';
        }
        console.log(str);
    }

    for (let i = rows - 1; i >= 1; i--) {
        let str = '';


    }

    for (let j = 1; j <= rows - i; j++) {
        str += ' ';
    }

}