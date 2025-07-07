let myDate = new Date()
console.log(myDate);
console.log(myDate.toString);
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString);
console.log(myDate.toLocaleTimeString);
console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString());

// let newDate = new Date("2023-07-07")
// console.log(newDate);
// console.log(newDate.toLocaleDateString());


let newDate01 = new Date("07-07-2003")
console.log(newDate01);
console.log(newDate01.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
// console.log(newDate.getTime());
console.log(Date.now()/1000);

let newDate = new Date(2003, 4, 2)
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

// newDate.toLocaleString('default', {
//     weekday: "long"
// })

