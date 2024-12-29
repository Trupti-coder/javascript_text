function arrayToObject(arr){

    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].id;
        result[key] = arr[i];
    }
    return result;
}

console.log(arrayToObject([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
// Output: { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }