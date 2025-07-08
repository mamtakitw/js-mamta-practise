//objects can be declared in two ways:- 1.constructor and 2. litrals
// when we make object from constructor it is always a singleton
// but if it is made from litrals then it is not a singleton

// object.create (constructor method to make object)

//  singleton 

// Object Litrals


const mySym = Symbol("key1")

const JsUser = {
    Name: "mamta",
    "full name": "Hitesh Choudhry",
    [mySym]: "mykey1",  // if we define symbol then we have to put them in square bracet and when we will not use square bracet then it will be string data type
    Age: 21,
    location: "Bihar",
    Email: "mamtakmgupta07@gmail.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // litral methods to make the object.

console.log(JsUser.Email);
//console.log(JsUser[Email]); // wrong without double codes
console.log(JsUser["Email"]); // correct
console.log(JsUser["full name"]);
console.log(typeof(mySym));
console.log(JsUser[mySym]);

JsUser.Email = "mamtakumarigupta012@gmail.com"
console.log(JsUser["Email"]);




 


