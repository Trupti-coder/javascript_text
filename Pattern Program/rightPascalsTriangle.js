function rightPascalsTriangle(rows){
    // Upper part
    for (let i = 1; i <= rows; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }

    // Lower part
    for (let i = rows - 1; i >= 1; i--) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }

}

rightPascalsTriangle(5);

/* output

*
**
***
****
*****
****
***
**
*

*/
