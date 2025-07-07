// array

const myArr =[0, 1, 2, 3, 4, 5, true, 'hitesh']

console.log(myArr);
// // console.log(typeof(myArr));
// // console.log(myArr[0]); // indexing
// // console.log(myArr[1]);
// // // console.log(myArr["one"]); // this is wrong 
// // // A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
// // //A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.

// // const myHeros = ["katrina", "kareena", "Kariti"]
// // console.log(myHeros);

// // // const myArr2 = new Array(1, 2, 3, 4)
// // // console.log(myArr2);

// // // // Array methods

// // // myArr.push(6)
// // // console.log(myArr);

// // // myArr.push(7) // add elements in array at last
// // // console.log(myArr);

// // // myArr.pop() // remove last elements from the array
// // // console.log(myArr);

// // myArr.unshift(9) // add the element at the starting of arrays
// // console.log(myArr);

// // myArr.shift() // to remove the the unshift elements/ in case there is not any unshift element then shift will remove 1st element from the array
// // console.log(myArr);
// console.log(myArr);
// console.log(typeof(myArr));
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof(newArr));

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn1);  
console.log(myn2);  






