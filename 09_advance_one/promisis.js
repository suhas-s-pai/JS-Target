const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task completed')
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 reolved")
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve(username: "Suhas", password: "123")
        }else{
            reject('ERRROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function)

