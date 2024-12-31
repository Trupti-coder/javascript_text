let obj = { b: 2, a: 1 };

function sortByKeys(obj) {
    let sorted = {};
    let keys = [];
    for (let key in obj) keys.push(key);
    keys.sort(); // Sort keys alphabetically

    for (let key of keys) {
        sorted[key] = obj[key];
    }
    return sorted;
}
console.log(sortByKeys(obj)); // { a: 1, b: 2 }
