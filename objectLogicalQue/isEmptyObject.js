function isEmptyObject(obj){
    for(let key in obj){
        return false;

    }
    return true;
}
// Example
let obj1 = {};
let obj2 = { a: 1 };
console.log(isEmptyObject(obj1)); // true
console.log(isEmptyObject(obj2)); // false