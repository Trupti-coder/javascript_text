function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // Different lengths, not equal
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false; // Elements at the same index are different
        }
    }

    return true; // All elements are equal
}

const array1 = [11, 22, 33];
const array2 = [11, 22, 33];

console.log(arraysAreEqual(array1, array2)); // true

//practice

function arrayAreEqual(arr1,arr2){
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    
    }
    return true;
        
}
const array3=[1, 22, 3];
const array4=[1, 22, 3];

console.log(arrayAreEqual(array3,array4));


//practice

/*function arrayEquality(arr1,arr2){
    if(arr1.length!==arr2.length){
        return "false!!";
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return "false!!";
        }
    }
    return "True";
}
//const array1=["22","33"];
//const array2=["22","33"];
console.log(arrayEquality(["22","33"],["22","33","1"]))*/





function equal(arr1,arr2){
    if(arr1.length !== arr2.length){
        return "false";
    }
    for (i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return "false";
        }
    }
    return "true";
}
console.log(equal(["11","1","33"],["11","11","33"]));