function generateKeyValueArray(obj){
    let keys=[];
    let values=[];

    for(let key in obj){
        keys[keys.length]=key;
        values[values.length]=obj[key];
    }
    return {keys:keys,values:values};

}