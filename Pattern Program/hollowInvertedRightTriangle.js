function hollowInvertedRightTriangle(rows){

    for (let i = rows; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            if (j === 1 || j === i || i === rows) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }

}

hollowInvertedRightTriangle(5);