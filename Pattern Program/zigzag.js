function zigzag(rows){

    for (let i = 1; i <= 3; i++) {
        let str = '';

        for (let j = 1; j <= rows; j++) {
            if (((i + j) % 4 === 0) || (i === 2 && j % 4 === 0)) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }

}

zigzag(15);
