function sandglass(rows){
     // Upper part
     for (let i = rows; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= rows - i; j++) {
            str += ' ';
        }

        for (let k = 1; k <= (2 * i - 1); k++) {
            str += '*';
        }
        console.log(str);
    }
}