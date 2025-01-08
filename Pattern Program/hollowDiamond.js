function hollowDiamond(rows){
    // Upper part
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                str += '*';
            } else {
                str += ' ';
            }
        }

        // Lower part
    for (let i = rows - 1; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }

        for (let k = 1; k <= (2 * i - 1); k++) {
            if (k === 1 || k === (2 * i - 1)) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
}

}

hollowDiamond(5)