const score = 300
console.log(score) // display 300

const balance = new Number(300)
console.log(balance) //display [Number:300]

console.log(score.toString())
let str = score.toString()  //return the string representation of the Number
console.log(typeof str)

const cost = 100.23556
console.log(cost.toFixed(2)) // Number of digits after the decimal point,must be 0 - 20


const num = 12.83
console.log(num.toPrecision(3))  // return 

const num2 = 10000000
console.log(num2.toLocaleString('en-IN'))  //return 1,00,00,000

//-------------Math-----------------
console.log(Math)

console.log(Math.abs(-45)) // return the absolute value means number value which is not negative

console.log(Math.round(3.3)) //return the round value if the value is <= n.5 then  the number will be n+1

console.log(Math.ceil(4.2))  // return the upper bound 
console.log(Math.floor(4.2))  //return the lower bound

console.log(Math.max(2,3,4,5,6,7,8))
console.log(Math.min(2,3,4,5,67,7))