function groupAnagrams(strs){
    let group={};

    for(let str of strs){
        let count = Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
    }

   
}