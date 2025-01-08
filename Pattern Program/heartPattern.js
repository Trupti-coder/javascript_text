function heartPattern(){
    let n=rows/2;
    for(let i = n / 2; i <= n; i += 2){
        let str = '';
        for (let j = 1; j < n - i; j += 2) {
            str += ' ';
        }

        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }
        for (let j = 1; j <= i; j++) {
            str += '*';
        }
        console.log(str);
    }
    for (let i = n; i >= 1; i--) {
        let str = '';
        for (let j = i; j < n; j++) {
            str += ' ';
        }
        for (let j = 1; j <= (i * 2) - 1; j++) {
            str += '*';
        }
        console.log(str);
    }
}