let obj = { a: 1 };

function addProperty(obj, key, value) {
    obj[key] = value;
}
addProperty(obj, 'b', 2);
console.log(obj); // { a: 1, b: 2 }
