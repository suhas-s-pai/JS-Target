const obj1 = {1: "a", 2: "b"}
const obj2 = {2: "a", 3: "b"}
const obj3 = {4: "a", 5: "b"}

// const obj3 = { obj1, obj2 }
const obj4 = Object.assign({},obj1, obj2, obj3)
console.log(obj3)

const users = [
    {
        id: 1,
        email: "Suhas@gmail.com"
    },
    {
        id: 1,
        email: "Suhas@gmail.com"
    },
]

users[1].gmail
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))

const course = {
    courseName: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor 

const {courseInstructor: instructor} = course

console.log(instructor)

const navbar = () {

}

// {
//     "name": "Suhas",
//     "courseName": "JavaScript",
//     "price": "free"
// }

[
    {},
    {},
    {}
]