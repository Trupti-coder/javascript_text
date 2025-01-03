function mergeSortedArray(arr1,arr2){
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

     // Compare elements from both arrays and add the smaller one to the merged array
     while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;

}

// Example usage
let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let result = mergeSortedArrays(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]