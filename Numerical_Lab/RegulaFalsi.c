#include<stdio.h>
#include<stdlib.h>
#include<math.h>

// find root of the equation: x + log(x) - 2 = 0 upto three decimal places;

float fun(float x) { return (x + log(x) - 2); }

int is_same(float x1,float x2){
   return (int)(x1*1000) == (int)(x2*1000);
}

float regula_falsi(float x1,float x2){

     while (!is_same(x1,x2))
    {
        float x0 = (x1*fun(x2) - x2*fun(x1))/(fun(x2) - fun(x1));   // calculate the x0

       if(fun(x1) * fun(x0) < 0)  // if 
            x2 = x0;
        else
            x1 = x0;
    }
    return x1;
}

int main(){
    float x1  = 0, x2 = 0;
    printf("Enter the interval for the equation: x + log(x) - 2 = 0\nEnter a:");
    scanf("%f",&x1);
    printf("Enter b:");
    scanf("%f",&x2);
    if(x1 > x2){
        float temp = x1;
        x1 = x2;
        x2 = temp;
    }
    printf("The root is:%.2f\n",regula_falsi(x1,x2));
    
 return 0;
}
