function permutation(s){
    let results = [];
    function permute(arr, m = []) {
        if (arr.length === 0){
            results.push(m.join(''));

        }
        else{
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr, m.concat(next));
            }
        }
    }
    permute(s.split(''));
    return results;

}