#include<stdio.h>
#include<stdlib.h>

float fun(float x,float y){
    return ((y-x) / (y+x));
}


float Euler(float x,float y,float step,float target){
    float jump = target/step;
    float c = 0;
    while (c++ != step)
    {
        y += jump*(fun(x,y));
        x += jump; 
    }
    return y;
}

int main(){
    float x0 = 0.0,y0 = 0.0;
    printf("Enter the initial condition\nX:");
    scanf("%f",&x0);

    printf("Y:");
    scanf("%f",&y0);
 
    float x = 0.0,h = 0.0;
 
    printf("Enter the step:");
    scanf("%f",&h);
 
    printf("Enter the target value of X:");
    scanf("%f",&x);
  
    printf("The value of Y when the value of X is:%.2f is:%.2f",x,Euler(x0,y0,h,x));
  return 0;
}