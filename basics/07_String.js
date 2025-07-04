// const name = "mamta"
// const repoCount = 10 

// console.log(name + repoCount + "Value");
// console.log(`Hello my name is ${name} and my repo count ${repoCount}`);
// // (``) back text -> used for string interpolation. 
// const gameName = new String('mamtakmgupta')
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length); 
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const myname = new String('mt-guptaji')

const newString = myname.substring(0,4)
console.log(newString);
const anotherString = myname.slice(-10, 4)
console.log(anotherString);

const newStringOne = "    mumma    "
console.log(newString);
console.log(newStringOne.trim());

const url = "https://mamta.com/mamta%20gupta"
url.replace('%20','-')
console.log(url.replace('%20','-'))

console.log(url.includes('mamta'))

console.log(url.includes('madhu'))

console.log(myname.split('-'))
    

