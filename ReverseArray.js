function reverseArray(array) {
    var start = 0;
    var end = array.length - 1;
    while (start < end) {

        // Swap elements at start and end
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        
        // Move towards the middle
        start++;
        end--;
    }
    return array;
}

// Example usage:
var originalArray = [1, 2, 3, 4, 5];
var newArray = reverseArray(originalArray);
console.log(newArray); // Output: [5, 4, 3, 2, 1]



