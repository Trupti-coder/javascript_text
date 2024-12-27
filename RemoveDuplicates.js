
// function removeDuplicates(arr) {
//     return [...new Set(arr)];//The Set object in JavaScript is a collection of unique values.
// }
// //console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(["trupti","trupti","rani"])); 



//without built in methods



function removeDuplicates(arr){
    var result=[];
    for (i=0;i<arr.length;i++){
        var isDuplicate=false;
        for(j=0;j<result.length;j++){
            if(arr[i]===result[j]){
                isDuplicate=true;
                break;

            }
        }
        if(!isDuplicate){
            result.push(arr[i]);
        }


    }
    return result;
}
var arr=["1","2","4","4","7"];
newarr=removeDuplicates(arr);
console.log(newarr);





