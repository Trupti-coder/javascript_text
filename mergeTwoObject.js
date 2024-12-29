function mergeTwoObject(obj1,obj2){
    let result = {};

    for (let key in obj1) {
        result[key] = obj1[key];
    }


    for (let key in obj2) {
        if (result[key] !== undefined) {
            result[key] += obj2[key];
        } else {
            result[key] = obj2[key];
        }
    }
    return result;
}