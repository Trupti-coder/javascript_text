function fibonacciSeries(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
        if (fib[i] > 144) break;
    }
    return fib;
}

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function sumEvenIndexDigits(fib) {
    let sum = 0;
    for (let i = 0; i < fib.length; i += 2) {
        sum += sumOfDigits(fib[i]);
    }
    return sum;
}

let n = 12; // You can change this value to generate more terms
let fibSeries = fibonacciSeries(n);
console.log("Fibonacci Series:", fibSeries);
console.log("Sum of digits of even index numbers:", sumEvenIndexDigits(fibSeries));
