// singleton
// object.create

// object literals
const mySym = Symbol("key1");
const JSuser = {
    name: "Haider",
    "full name": "Haider Zaidi",
    age: 18,
    [mySym]: "mykey1",
    location: "Lucknow",
    email: "haider@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Friday"],
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "haider@chatgpt.com";
// Object.freeze(JSuser);
JSuser.email = "haider@microsoft.com";
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello Js user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());
