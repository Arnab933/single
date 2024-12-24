#include<stdio.h>
#include<stdlib.h>

float numo_fun(int count,float target,float*x,int n){
    float ans = 1.0;
    for (int i = 0; i < n; i++)
    {
        if(i == count) continue; // increment i by one for skip x[i]  
        ans *= (target-x[i]);
    }
    return ans;
}

float deno_fun(int count,float* x,int n){
    float ans  = 1.0;
    float val = x[count];  //store the value of ith index
    for (int i = 0; i < n; i++)
    {
        if(i == count) continue; // increment i by one for skip x[i]  
        ans *= (val - x[i]);
    }
    return ans;
}

float lagrange(float* x,float* y,float target, int n){
    float ans = 0.0;
    for (int i = 0; i < n; i++)
    {
         ans += (numo_fun(i,target,x,n)/deno_fun(i,x,n))*y[i];
    }
    return ans;
}



int main(){
    int n = 0;
    printf("Enter the number of points:");
    scanf("%d",&n);

    float *x = (float*)calloc(n,sizeof(float));  
    float *y = (float*)calloc(n,sizeof(float)); 

    printf("Enter all X points:");
    for (int i = 0; i < n; i++)
        scanf("%f",&x[i]);          // store all X points in an array
    
    printf("Enter all Y points:");
    for (int i = 0; i < n; i++)
        scanf("%f",&y[i]);       // store all Y points in an array

    float target = 0.0;
    printf("Enter the target X point:");
    scanf("%f",&target);

    printf("The corresponding value of %.2f is:%.2f\n",target,lagrange(x,y,target,n));
    
  return 0;
}