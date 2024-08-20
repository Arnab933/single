const tender = new Object()
console.log(tender) 

const student = {}
console.log(student)  

// both are same but difference is tender is singleton object and student is non singleton object 

student.id = "20221991"
student.name = "Arnab"
student.isLoggedIn = false

console.log(student) 


const regStudent = {
    name : "Arnab",
    email : "apratihar18@gmail.com",
    fullname : {
        studentFullName : {
            firstName : "Arnab",
            lastName : "Pratihar"
        }
    }  
}


console.log(regStudent.fullname.studentFullName.firstName)


const obj1 = { 1 : "a", 2 : "b" , 3 : "c" }
const obj2 = { 4 : "d" , 5 : "e", 6 : "f"}
const obj3 = {obj1,obj2}
console.log(obj3)    // { obj1: { '1': 'a', '2': 'b', '3': 'c' },obj2: { '4': 'd', '5': 'e', '6': 'f' }  }


const ob = Object.assign({}, obj1, obj2) // here obj1 and obj2 are copied into an empty object {} always the first object is target and 
//remaining are source object 

console.log(ob)  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

console.log({...obj1,...obj2}) //also merged two objects

//array of objects 
const arr = [ 
    Arnab = {
        email : "apratiahr18@gmail.com",
        roll : 3391
    },
    Sujit = {
        email : "apratihar933@gmail.com",
        roll : 1991
    },

]
console.log(arr[0].email)



// using objects keys

const Student = {
    name : "Arnab",
    roll : 3391,
    registrationNumber : 20223391,
    dept : "CS"
}
console.log(Object.keys(Student)) // return an array that contains all keys values of the object like name is a key in this object 
console.log(Object.values(Student)) // return an array which contains all values 

console.log(Object.entries(Student))  //return an array of arrays where every element(array) contains two element first is the key and second is the value

//some time we have to check is a ky exist or not in any object 
console.log(Student.hasOwnProperty("dept")) //return true  // in obejct every key act like property of that object means here student object has its some property like name,roll,regNo,dept but no any property of age
console.log(Student.hasOwnProperty("age"))   // so returns false



// object destructuring
const {registrationNumber : regNo} = Student  // here restructured registrationNumber to regNo  
console.log(regNo) 


const myobj = {
    name:"Arnab",
    title : "Pratihar",
    addr : "Jhargram"
}

// for (const st of myobj){ //occur an error because in JS object is not iterable 
//     console.log(st)
// }