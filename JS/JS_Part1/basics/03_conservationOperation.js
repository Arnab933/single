let score = 30

console.log(typeof score)

score = "30"
console.log(typeof score)

console.log(typeof Number(score))

let digit = "23ab"
let valueInNumber = Number(digit) 
console.log(valueInNumber) //print NaN
console.log(typeof valueInNumber)

let val = null
console.log(Number(null)) //print 0

val = 20
console.log(Boolean(val)) //true
/*
1 => true
"strng" => true
0 => false
*/