function print(...num){  // here ...num like var args in C
    return num;
}
console.log(print(10,20,30,40,50))


function display(num1,num2,...num){
    console.log(num1,num2)
    return num;
}
console.log(display(10,20,30,40,50,60))  //display from 30 because 10 and 20 are num1,num2



const user1 = {
    userName : "Arnab",
    price : 199
}
const user2 = {
    userName : "Sujit",
    price : 200
}

const user3 = {
    userName : "AP",
    price : 300
}

function handleObject(anyobject){
    console.log(`user is:${anyobject.userName} and price is:${anyobject.price}`)
}
handleObject(user1)
handleObject(user2)

handleObject({userName:"MyName",price:1000})

