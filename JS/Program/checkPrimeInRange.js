function isPrime(num){
    if(num <= 1)
        return false;
    c = 2;
    while(c*c <= num){
        if(num % c == 0)
            return false;
        c++;
    }
    return true;
}

lower = 1
upper = 100;

for(let i = lower;i < upper;i++){
    if(isPrime(i)){
        // console.log(i +" ");  //this display with new lines
        process.stdout.write(i+ ' ');
    }
}
console.log();