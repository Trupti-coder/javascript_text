function seprateKeysAndValues(){
    let keys=[];
    let values=[];
    let index=[];

    let properties=['name','age','city'];

    for(let i=0;i<properties.length;i++){
        let key=properties[i];
        if(obj[key] !== undefined){
            keys[index]=key;
            values[index]=obj[keys];
            index++;
        }
    }
    return{
        keys:keys,
        values:values
    };
}
//Example
let exampleObj={
    name:'Alice',
    age:25,
    city:'Wonderland'
};

let result=seprateKeysAndValues(exampleObj);
console.log(result.keys);
console.log(result.values);