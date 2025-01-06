function hollowRightTriangle(){
    for (let i = 1; i <= rows; i++) {
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