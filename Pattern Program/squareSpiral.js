function squareSpiral(){
    let matrix = Array.from({ length: n }, () => Array(n).fill(' '));
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let count = 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = '*';
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = '*';
        }
        right--;
        
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = '*';
            }
            bottom--;
        }
}