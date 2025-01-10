function crossPattern(rows){
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows; j++) {
            if (j === Math.ceil(rows / 2) || i === Math.ceil(rows / 2)) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }

}
crossPattern(7);