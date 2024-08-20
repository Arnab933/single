
{
    let a = 10
    var b = 20
    const c = 30
}

// console.log(a) // not display so let is locally scoped 
console.log(b)  //display 30 so var is globally scoped variable 
// console.log(c) //also const is locally scoped 

var d = 40
let e = 50
const f = 70
{
    var d = 30
    let e = 60
    const f = 100
}
console.log(d)  //d = 30  because d is globally scoped variable 
console.log(e)  //e = 50
console.log(f)  //f = 70  

array = [1,2,3,4,5,6,7,8]
element = []
for (let i = 0; i < array.length; i++) {
    element[i] = array[i];
}
console.log(element)



console.log(sum(20))
function sum(n){
    return n
}



// console.log(addTwo(5))  //here occured error because variable function decaration
const addTwo = function(num){
    return num+2
}