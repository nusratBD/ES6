const numbers = [2, 56, 78, 33];
const total = numbers.reduce((previous, current)=>{
    return previous + current;
},0);
console.log(total);