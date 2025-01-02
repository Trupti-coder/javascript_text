function invertedTriangle(rows){
    for (let i = rows; i >= 1; i--) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }

}
