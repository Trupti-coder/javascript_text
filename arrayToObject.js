function arrayToObject(arr){

    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].id;
        result[key] = arr[i];
    }
    return result;
}