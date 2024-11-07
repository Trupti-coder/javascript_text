// Program to generate Fibonacci series up to n terms
function fibonacciSeries(n) {
    let fib = [0, 1]; // Initialize the first two numbers of the series
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Calculate the next number in the series
    }
    return fib.slice(0, n); // Return the series up to n terms
}

// Example: Generate the first 10 numbers in the Fibonacci series
console.log(fibonacciSeries(5));
















