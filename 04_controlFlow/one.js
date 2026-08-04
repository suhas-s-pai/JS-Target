// const isUserLoggedIn = true
// const marks = 35

// if( marks === 36){
//     console.log("Fail")
// }
// else
// {
// console.log("Pass")
// }

// const man = 400000

// if( man >= 500000)
// {
//     const status1 = "Rich"
//     console.log(`This man is ${status1}`)
// }
// else{
//     const status2 = "Poor"
//     console.log(`This man is ${status2}`)
// }

// const balance = 50

// if( balance < 1000) console.log("Cant Apply"), console.log("Can Apply")

// if( balance <= 100)
// {
//     console.log("less than 100")
// }
// else if( balance <= 300)
// {
//     console.log("less than 300")
// }
// else if( balance <= 400)
// {
//     console.log("Less than 400")
// }
// else
// {
//     console.log("Greater than 400")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 1==2){
    console.log("Can Apply for Intenship")
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("Logged in successful")
}