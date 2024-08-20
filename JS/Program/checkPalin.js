function checkPalin(num){
   let s = num.toString();
   console.log(s.charA);

}


const prompt = require('prompt-sync')();
num = prompt("Enter the number:");

num = parseInt(num);

if(isNaN(num)){
    console.log("Enter a valid number");
    return;
}
else{
    if(checkPalin(num))
        console.log(`The number ${num} is a palindrome number`);
    else
        console.log(`The number ${num} is not a palindrome number`);
}
