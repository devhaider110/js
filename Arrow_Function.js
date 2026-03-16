const user = {
    username: "Haider",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Zaidi"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Zaidi"
//     console.log(this.username) // this keyword work only with object
// }

// chai()

// const chai = function() {
//     let username = "Haider"
//     console.log(this.username); //this keyword work only with object
// }

// chai()

// const chai = () => {
//     let username = "Haider"
//     console.log(this.username);
// }

// chai()

// function addTwo (num1, num2) {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Samir"}) 

console.log(addTwo(3, 4))

// const myArray = [2, 5, 8, 9, 6]

// myArray.forEach( () {})
