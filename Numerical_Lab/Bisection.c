#include<stdio.h>
#include<stdlib.h>

// find root for the equation:  (x^3 - x^2 - 1 = 0) upto two decimal places



int is_same(float a,float b) { return (int)(a * 100) == (int)(b * 100); }

 // (int)(2.0345 * 100) = 203   // (int)(2.0356 * 100)  = 203


float fun(float n){
        return (n*n*n - n*n - 1);
}

float bisection(float a,float b){
    float mid = (a+b) / 2;
    if(is_same(a,b))
        return mid;
    else if(fun(a) * fun(mid) < 0)
        return bisection(a,mid);
    else
        return bisection(mid,b);
}

int main(){
    float a = 0.0,b = 0.0;
    printf("Enter the interval for the equation:  x^3 - x^2 - 1 = 0\nEnter a:");
    scanf("%f",&a);
    printf("Enter b:");
    scanf("%f",&b);

    printf("Root of the equation is:%.2f\n",bisection(a,b));
  return 0;
}