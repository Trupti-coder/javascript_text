function plainObject(){
    return Object.create(null);
}

// Example
let obj = createPlainObject();
obj.name = "Alice";
console.log(obj); // { name: "Alice" }
console.log(Object.getPrototypeOf(obj)); // null