function countProperties(obj){
    let count=0;
    for(let key in obj){
        count++;
    }
    return count;
}

// Example
let obj = { a: 1, b: 2, c: 3 };
console.log(countProperties(obj)); // 3