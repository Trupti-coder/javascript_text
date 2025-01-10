function rightArrowhead(){
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }

    for (let i = rows - 1; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
}