function isPrime(number){
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

num = 19

if(isNaN(num))
    console.log("Enter a valid number");
else if(isPrime(num))
    console.log(num +" is a prime numeber");
else
    console.log("The number is not a prime number");
