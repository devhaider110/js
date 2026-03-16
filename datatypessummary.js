// *************** Primitive data types ***************

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// String
const str = "Haider";

// Number
const score = 100;
const scoreValue = 100.3;

// Boolean
const isLoggedIn = false;

// null
const temp = null;

// undefined
const email = undefined;

// Symbol
const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

// Bigint
const Bignumber = 34565665621544n;





// *************** Non-Primitive (Reference) ***************

// Array, Object, Function

// Array
const hero = ["Iron Man", "Thor", "Hulk", "Loki"];

// Object
let obj = {
    Name : "Haider",
    Age : 19,
    "Job Role" : "SDE",
}

// Function
let myFunction = function() {
    console.log("Haider");
    
}



// *************** Stack and Heap ***************

// Stack (Primitive Datatype / Call by Value)
// let youtubeID = "Samir";
// let anotherId = youtubeID;
// anotherId = "Sayed";
// console.log(youtubeID);
// console.log(anotherId);

// Heap (Non-Primitive DataType / Call by Reference)
let UserOne = {
    Name : "Haider",
    age : 19,
    email : "Haider@mail.com"
}

let UserTwo = UserOne;

UserTwo.email = "Sayed@gmail";
console.log(UserOne.email);
console.log(UserTwo.email);
