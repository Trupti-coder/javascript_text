function longestValidParentheses(){
    let stack = [-1];
    let maxLength = 0;

    for (let i = 0; i < s.length; i++){
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

    }
}