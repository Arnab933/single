//memory allocation
//stack(primitve) and heap(non-primitive) 
let myName = "Arnab Pratihar"
let anotherName = myName  //not the actual value(myName) only the copy of myName value 

anotherName = "Sujit Pratihar"

console.log(myName)
console.log(anotherName)

let user={
    name:"Arnab",
    email:"apratihar933@gmail.com"
}
let anotherUser = user  // pass the actual value of the user object not copy
anotherUser.name = "sujit"  //change the actual data of both object 

console.log(user.name)  // sujit
console.log(anotherUser.name) //sujit