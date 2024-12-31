
function objectAreEqual(obj1,obj2){
   let keys1=[];
   let keys2=[];

   for(let key in obj1){
    keys1.push(obj1.key);
   }

   for(let key in obj2){
    keys2.push(key)
   }

   if(obj1.length !== obj2.length){
    return false;
   }

   for(key of keys1){
    if(obj1[key] !== obj2[key]){
        return false;
    }
   }
   return true;
}

