const accountId = 933945
let accoutEmail = "apratihar18@gmail.com"
var accoutPass = "Arnab@933"
accoutCity = "Jhargram"
let nothing;  //if not declared any value then value of that will be undefined
// accountId = 897242 //we can't change the const variable

console.log(accountId);

accoutEmail = "apratihar933@gmail.com"
accoutPass = "sujit@933"
accoutCity = "Binpur"

console.table([accountId,accoutEmail,accoutPass,accoutCity,nothing]);

var a = 10
let b = 15
{
    var a = 20
    let b = 50
    console.log("The value of a and b:")
    console.log(a,b)
}
console.log("The value of a and b:")
console.log(a,b)
/*
prefer not to use var because of issue block scope and functinal scope
var is always globally scoped where let is not   
*/

