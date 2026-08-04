const users = {
    username: "Suhas",
    price: 999,
    
    welcomeMessage: function(){
        console.log(` ${this.username} ,  welcome to the website`);
        console.assertlog(this)
    }
}

// users.welcomeMessage()
// users.username = "Krishna"
// users.welcomeMessage()

// 

// function chai(){
//     let username = "Suhas"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//         let username = "Suhas"
//     console.log(this.username)
// }

// const chai = () => {
//         let username = "Suhas"
//     console.log(this.username)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 1))

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )


// console.log(addTwo(3, 1))

const myArray = [2, 5, 6, 7, 8]