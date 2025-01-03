function findMajorityElementInArray(arr){
    let maxCount = 0; // To keep track of the maximum count
    let majorityElement = null; // To store the majority element

     // Outer loop to pick each element
     for (let i = 0; i < arr.length; i++) {
        let count = 0; // Reset count for each element

          // Inner loop to count occurrences of the selected element
          for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++; // Increment count when a match is found
            }
        }


        // Update majority element if this element occurs more frequently
        if (count > maxCount) {
            maxCount = count;
            majorityElement = arr[i];
        }
    }

    return majorityElement;

}