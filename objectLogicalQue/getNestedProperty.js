function getNestedProperty(obj,keys){
    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        if (current[keys[i]] !== undefined) {
            current = current[keys[i]];
        } else {
            return undefined; // Return undefined if the property doesn't exist
        }
    }
    return current;

}

// Example
let nestedObj = { a: { b: { c: 42 } } };
console.log(getNestedProperty(nestedObj, ['a', 'b', 'c'])); // 42
console.log(getNestedProperty(nestedObj, ['a', 'b', 'd'])); // undefined