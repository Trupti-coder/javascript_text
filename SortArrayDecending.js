function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  var numbers = [12, 10, 15, 11, 14, 13, 16];
  bubbleSort(numbers);
  console.log(numbers);


  /*function bubbleSortDescending(arr) {
    let n = arr.length;
    let swapped;
    
    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent elements
            if (arr[j] < arr[j + 1]) {
                // Swap if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
        // If no two elements were swapped in the inner loop, then break
        if (!swapped) break;
    }
    
    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
let sortedArray = bubbleSortDescending(array);
console.log("Sorted array (descending):", sortedArray);
*/