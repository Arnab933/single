const prompt = require('prompt-sync')();

num = prompt("Enter the number of terms:");
let a,b,c

for(let i = 0;i < num;i++){
    if(i < 1){
        a = i;
        process.stdout.write(a +' ');
    }
    else if(i == 1){
        b = i;
        process.stdout.write(b +' ');
    }
    else{
        c = a + b;
        process.stdout.write(c + ' ');
        a = b;
        b = c;
    }
}
console.log();