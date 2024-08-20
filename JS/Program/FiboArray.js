const prompt = require('prompt-sync')();
num = prompt("Enter a terms:");

let fibo = Array(num);

for(let i = 0;i < num;i++){
    if(i <= 1)
        fibo[i] = i;
    else
        fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log("The fibonacci series is:");
for(let i = 0;i < num;i++){
    process.stdout.write(i +' ');
}
console.log();