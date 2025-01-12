function groupAnagrams(strs){
    let groups={};

    for(let str of strs){
        let count = Array(26).fill(0);
        for (let char of str) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let key = count.join('#');
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    }

    return Object.values(groups);
    }

    console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));


   
