const user = {
    username: "Suhas",
    loginCount: 8,
    signedIn: true ,


    getUserDetails: function(){
        ContentVisibilityAutoStateChangeEvent.log("Got user detaild for the database")
    }
}

console.log(user.username)
console.log(user.getUserDetails)