//Primitive
// 7 types : String,Number, Boolean, Null, undefined, Symbol ,BigInt
const score = 100
const scoreValue = 101.34
const inLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
console.log(id === anotherId)

const bigNumber = 12345456663434532536543674536465n; 
console.log(typeof bigNumber)
console.log(bigNumber)

// Reference(non primitive)
//Array,objects,Functions 

let myObjects = {
    name : "Arnab",
    age : 21
}

myObjects.name = "sujit" //change the name as sujit
console.log(typeof myObjects)// object type
console.log(myObjects.name)

//in js we can treat the function as variable 
const myFunction = function(){   
    console.log("Hello world!!!")
}

console.log(typeof myFunction) // print function type means function is a data type in js
myFunction() //call function()

const heroes = ["arnab","debjit","debasish"]
console.log(typeof heroes) //object
console.log(heroes) //print the array
