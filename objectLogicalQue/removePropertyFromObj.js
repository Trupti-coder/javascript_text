
let obj = { a: 1, b: 2 };

function removeProperty(obj, key) {
    delete obj[key];
}
removeProperty(obj, 'b');
console.log(obj); // { a: 1 }
