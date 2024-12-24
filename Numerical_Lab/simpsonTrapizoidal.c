#include<stdio.h>
#include<stdlib.h>


float x_fun(float x){
    return  1/(1 + x * x);
}

float simpson13(float a,float b,int n){
    float h = (b-a) / n;
    float area = x_fun(a) + x_fun(b);
    float odd_area = 0.0,even_area = 0.0;

    for(int i = 1;i < n;i++){
        a += h;
        if(i % 2) 
            odd_area += x_fun(a);
        else
            even_area += x_fun(a);
    }
    
    area = (h/3)*(area + odd_area*4 + 2*even_area);
    return area;

}

float trapizoid(float a,float b,int n){
    float h = (b - a) / n;
    float area = (x_fun(a) + x_fun(b)) / 2;
    for (int i = 1; i < n; i++)
    {
        a += h;
        area += x_fun(a);
    }
    return h * area;
}

int main(){
    float a = 0.0,b = 0.0;
    printf("Enter the interval:\nEnter a:");
    scanf("%f",&a);
    printf("Enter b:");
    scanf("%f",&b);

    printf("Enter the total step:");
    float n = 0.0;
    scanf("%f",&n);
    
    printf("The area is:%.2f\n",simpson13(a,b,n));
    printf("The area is:%.2f\n",trapizoid(a,b,n));
  
 return 0;
}