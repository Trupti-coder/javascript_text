function findFirstDuplicate(){
    let seen = {}; // Object to store seen elements
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            return arr[i]; // Return the first duplicate
        }
        seen[arr[i]] = true; // Mark the element as seen
    }
    return -1;

}