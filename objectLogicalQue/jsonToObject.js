function parseJSON(){
    return eval('(' + json + ')');

}


// Example
let jsonString = '{"name":"Alice","age":25}';
console.log(parseJSON(jsonString)); // { name: "Alice", age: 25 }