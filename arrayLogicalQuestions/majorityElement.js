function majorityElement(arr){
    let count = 0, candidate = null;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
        }
        count += (arr[i] === candidate) ? 1 : -1;
    }
    count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === candidate) {
            count++;
        }
    }
    return count > arr.length / 2 ? candidate : null;
    
}

// Input
let arr6 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(arr6)); // Output: 4