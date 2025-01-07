function hollowDiamond(){
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
}