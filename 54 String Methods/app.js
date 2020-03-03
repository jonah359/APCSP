let string = "my name is Jonah       "

// check length
console.log(string.length)

// conversion
// let num = 5
// let s = num.toString()

// search
let s = string.startsWith("m")

s = string.includes("i")

// modifying strings
s = string.toLowerCase()
s = string.toUpperCase()
s = string.trim()
s = string.slice(3,7)

// combining
s = string + "I am good"

s = string.concat("I am good")

// template literal
 
s = `Hello! ${string} 
I am good.`

// convert user input to number
s = 3
const num = Number(s)

console.log(num)