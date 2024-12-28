function generateKeyValueArray(obj){
    let keys=[];
    let values=[];

    for(let key in obj){
        keys[keys.length]=key;
        values[values.length]=obj[key];
    }
    return {keys:keys,values:values};

}
// Example usage
var exampleObj = {
    name: "Alice",
    age: 25,
    profession: "Engineer"
};