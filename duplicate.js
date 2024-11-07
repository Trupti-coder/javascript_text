// /*function countVowels(arr){
//     let vowels=["a","e","i","o","u","A","E","I","O","U"];
//     let count=0;

//     for(let i=0;i<arr.length;i++){
//         let str=arr[i];

//         for(let j=0;j<str.length;j++){
//             for(let k=0;k<vowels.length;k++){
                // if(arr[j]===vowels[k]){
//                     count++;
//                 }
//             }
//         }
//     }
//     return arr;

    
// }
// let array=["hello", "from", "trupti"];
// let countss=countVowels(array);
// console.log(countss);*/


function countVowels(str){
    let vowels=["a","e","i","o","u","A","E","I","O","U"];
    let count=0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vowels.length;j++){
            if(str[i]===vowels[j]){
                count++;
            }
        }
    }
    return count;
}

console.log(countVowels("truptii"));

