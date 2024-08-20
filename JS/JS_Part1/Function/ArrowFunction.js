const user = {
    userName:"Arnab",
    roll : 3391,
    getMessage : function(age){
        console.log(`${this.userName},welcome to website`)
        console.log(`Your age is:${age}`)
    }
}

user.getMessage(21)

user.userName = "Sujit"
user.getMessage(22)

console.log(this)  //display an empty object 


//replace "function" key and add "=>" after "()" like ()=>
const fun = () => {  //arrow function 
    console.log("hiii you're very funny boy")
}
fun()


const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(10,20))


//implicit return type

const addtwo = (num1,num2) => ( num1 + num2 )
console.log(addTwo(20,40))


const retObj = () => ({username:"Arnab"})  // or ("Arnab")   if we want to return any object then must use "{}"" bracket
console.log(retObj())

// Immediately Invoked Function Expressions 
(function chai(){
    console.log("connected")
})();

// chai() 


