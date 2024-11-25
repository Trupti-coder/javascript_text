let a=5;
let b=10;
console.log(`before Swap:a=${a},b:${b}`);
//Swap using Add and Sub
a=a+b;
b=a-b;
a=a-b;
console.log(`after swap:a=${a},${b}`);
//Swap using Mul and Div
console.log(`before Swap:a=${a},b:${b}`);
 a=a*b;
 b=a/b;
 a=a/b;
console.log(`after swap:a=${a},${b}`);
//swap using Bitwise XOR
console.log(`before Swap:a=${a},b:${b}`);
a=a^b;
b=a^b;
a=a^b;
console.log(`after swap:a=${a},${b}`);




