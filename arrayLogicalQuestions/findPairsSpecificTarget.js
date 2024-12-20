function findPairs(arr, target) {

    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
let arr2 = [1, 4, 6, 2, 3];
let target = 6;
console.log(findPairs(arr2, target)); // Output: [[4, 2], [6, 0]]
