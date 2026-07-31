// Primitive DataTypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt



// Reference (Non primitive )

// Array, Objects, Functions
// const hero = ["Superman", "Batman", "Hanuman"];
// console.log(hero)

// let myObj = {
//     name:"Suhas S Pai",
//     age:22,
// }

// const myFunction = function(){
//     console.log("Hello World!")
// }

// console.log(myFunction)

// Memory

// stack( Primitive DataType), Heap( Non-Primitive DataType)

let ProName = "Jathayu"

let AnProject = ProName

AnProject = "KaliSOS"

// console.log(ProName)
// console.log(AnProject)

let userOne = {
    email: "Suhas@gmail.com",
    upi: "user@ylb"
}

let userTwo = userOne

userTwo.email = "Rahul@gmail.com"

console.log(userOne);
console.log(userTwo);

