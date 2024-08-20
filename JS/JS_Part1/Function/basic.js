const sum = function(num1 , num2){
    return num1 + num2
}

console.log(sum(10,20))

function sum2(num1,num2){ 
    return num1 + num2
}
console.log(sum2(10,20))


//Both are allowed in js but difference is sum is variable function declaration and sum2 is normal function declaration


const sum3 = function(){
    console.log("hiii")
}


const sum4 = function(){
    console.log("hiii")
}



console.log(typeof sum3,typeof sum(10,20),typeof sum4())


//return string
function loginMessage(username){
    return `${username} just login recently`
}

console.log(loginMessage("Arnab"))

// if we want to give the default value in as parameter then we have to assign in function def like loginMessage("Arnab")