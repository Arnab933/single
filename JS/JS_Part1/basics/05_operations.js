console.log("2" > 1)  // true because automatic js convert "2" as number

console.log(null == 0) //false
console.log(null > 0) //false
console.log(null >= 0) // true so null converted into number and treated as 0,so ans is true

//strictly check
console.log("2" == 2) //ans is true  "2" convert as number
console.log("2" === 2) // false here "===" checks the value as well as data types both