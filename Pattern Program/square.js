function square(rows){

    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 1; j <= rows; j++) {
            str += "*";
        }
        console.log(str);
    }

}