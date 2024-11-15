const numbers=[1,2,3,4,5,6,7];

function doubled(num){
    return  num * 2;
}
const double=numbers.map(doubled);
console.log(double);