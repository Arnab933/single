// flow control 

if(2 == "2") //return true;
    console.log("executed")
else
    console.log("Not exucuted")



if(2 === "2") //return false because "===" checking both value and reference 
    console.log("executed")
else
    console.log("Not exucuted")



let balance = 1000
if(balance > 900)
    console.log("your account is safe"),//separate by comma for multiple line 
    console.log("hello brother")
else
    console.log("your account is not safe ")

let key = 3;
switch (key) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("Not");
        break;
}


const userEmail = "apratihar18@gmail.com"
if (userEmail)
    console.log("Got user email")
else
    console.log("Don't have any email")

//falsy value:false,0,-0,null,"",BIGINT 0n,undefined,NaN

//tuthy value:"0","false"," ", [],{},function(){}k


let Email = ["arnab",3391,true]
if(Email.length === 0)
    console.log("hii")

console.log(Object.keys(Email))  // return an array which contain index of the array here display ['0','1','2']  


let val1 = 5 ?? 10 //assigned 5 
console.log(val1) 
val1 = null ?? 10  // if the value is null then assigned other value like 10 if not then assign first value 
console.log(val1)

val1 = undefined ?? 15 //assigned 15
console.log(val1)  


let val2 = null ?? undefined ?? 20 ?? 23  // after null/undefined the first value will be assigned 
console.log(val2)


//ternery operator
let a = 10,b = 20
//result = condition ? expression_if_true : expression_if_false
let result = a < b ? b : a;
console.log(result)

a < b ? console.log("b is greater"):console.log("a is greater")

const arr = [1,2,3,4,5,6,7,8,9,10]
for(const num of arr)
    console.log(num)


const greetings = "Hello world!!"
for (const ch of greetings) {
    console.log(`Each char is:${ch}`)
}

// Map:The map objects holds key value pairs and remembers the original insertion order of keys.Any value(both objects and primitive) can be
// use either key or value.
const map = new Map()
map.set("a","Arnab")
map.set("b", "Sujit")
console.log(map.get("a"))
console.log(map)

//we can insert same data multiple time means in JS map is unique 

for (const key_val of map) {
    console.log(key_val)  // every time return an array with key and currosponding value  
}

for (const [key,val] of map) {
    console.log(key,":-",val)
}


//forin loop
for (const key in map) {  //not iterable for map
   console.log(key)
}

