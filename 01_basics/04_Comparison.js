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
