const sym = Symbol("")

const student = {
    "name" : "", // internally store like "string"
     age : 0,
    [sym] : "mykey1",  //here sym is a symbol datatype
    day : ["sunday","monday","tuesday"]
}

student.name = "Arnab"
student.age = 20

console.log(student.name,student.age)
console.log(student.day)
console.log(student["name"])
console.log(student[sym])

// for change the value 
student.name = "sujit"
console.log(student.name)

//for lock the object 
// Object.freeze(student)
// student.name = "AP"
// console.log(student.name) //but here display "sujit" because the name is not modified 

console.log(student)


//function

student.welcome1 = function(){
    console.log("hii users")
}
student.welcome2 = function(){
    console.log(`hello users,${this.name}`)

}

console.log(student.welcome1())
console.log(student.welcome2())

