// // ++++++++++++++  Number   ++++++++++++++++++++++++//
// const Score = 10
// console.log(Score);
// console.log(typeof(Score));

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // value after decimal point

// const otherNumber = 23.9876
// console.log(otherNumber.toPrecision(3)); // nearest value 

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN'));

// // ++++++++++++++++ Maths ++++++++++++++++++++++++++++++++ //

console.log(Math);
console.log(Math.abs(-4)); // negative converts in positive but positive will not convert in negative
console.log(Math.round(5.6)); // round of nearest
console.log(Math.floor(4.6)); // lowest nearest
console.log(Math.ceil(4.2)); // highest nearest
console.log(Math.max(3, 4, 6, 2));
console.log(Math.min(3, 4, 6, 1));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);
const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);


