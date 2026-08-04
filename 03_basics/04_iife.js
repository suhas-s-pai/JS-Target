// // Immediatly Invoked Function Expression

// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`)
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`)
// })('Suhas')

let champ1 = 5
let champ2 = 7
function doniAdd(ek, doni){
    let total = ek + doni
    return doni
}

let result1 = doniAdd(champ1, champ2)
let result2 = doniAdd(7, 6)