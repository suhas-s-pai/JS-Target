// const name = "Suhas "

// const repoCount = 25

// console.log(name + repoCount + " HardWork") // outDated ok and not to use

// const temple = "Manjeshwar "

// const lalki = "Bangra"

// console.log(`The heavist Lalki in GSB community is ${lalki} lalki of ${temple} temple.`)

// console.log(`${temple} temple's pride is ${lalki} lalki`)

const Lalki = new String('GarudaMantap')

// console.log(Lalki[1])
// console.log(Lalki[3])

console.log(Lalki.__proto__)

console.log(Lalki.length)


console.log(Lalki.toUpperCase())
console.log(Lalki.charAt(2))

console.log(Lalki.indexOf('M'));

const newString = Lalki.substring(-12, 4)
console.log(newString)

const newStringOne = "      Suhas       "
console.log(newStringOne)
console.log(newStringOne.trim())


const url = "https://Suhas.com/Suhas%20Pai"

console.log(url.replace('%20', '-'))

console.log(url.includes('Suhas'))