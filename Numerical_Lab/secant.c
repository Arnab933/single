#include<stdio.h>
#include<stdlib.h>

float x_func(float x){ return x*x*x - 2*x - 5; }

int is_same(float x1,float x2){ return (int)(x1 * 1000) == (int)(x2 * 1000);}

float secant(float x1,float x2){

    float x3 = (x1 * x_func(x2) - x2 * x_func(x1))/(x_func(x2) - x_func(x1)); 
    if(is_same(x1,x2))
        return x1;
    else
        return secant(x2,x3);
}


int main(){

    printf("Enter the interval for root of the equation: x^3 - 2x - 5\n");
    float x1 = 0.0,x2 = 0.0;
    
    printf("Enter the a:");
    scanf("%f",&x1);

    printf("Enter the b:");
    scanf("%f",&x2);

    printf("The root of the equation is:%.2f\n",secant(x1,x2));
 return 0;
}