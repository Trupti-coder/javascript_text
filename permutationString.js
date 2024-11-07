function permuteString(str) {
    const result = [];
    permuteHelper(str.split(''), 0, str.length - 1, result);
    return result;
}

function permuteHelper(arr, left, right, result) {
    if (left === right) {
        result.push(arr.join(''));
    } else {
        for (let i = left; i <= right; i++) {
            swap(arr, left, i);
            permuteHelper(arr, left + 1, right, result);
            swap(arr, left, i);  // backtrack
        }
    }
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Example usage:
let permutations = permuteString("ABC");
console.log(permutations);  // Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
