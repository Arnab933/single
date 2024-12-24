#include<stdio.h>
#include<math.h>
# define N 10


float fact(int n){
    float f = 1.0;
    if(n <= 1)
        return f;
    else
       return n*fact(n-1);
}

float x_fun(int n,int*x,int X){
    float ans = 1.0;

    for (int i = 0; i < n; i++)  // calculate (x-x0)*(x-x1)*(x-x2)...........(x-xn)
        ans *= (X-x[i]);    
    return ans;
}



int main(){
    int n = 0;
    printf("Enter the number of points:");
    scanf("%d",&n);

    float diff_table[n][n];

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            diff_table[i][j] = 0;   //whole matrix value is 0
        }
    }
    int x[n];
    printf("Enter all x points:");
    for (int i = 0; i < n; i++)
    {
        scanf("%d",&x[i]);
    }
    int h = x[1] - x[0];  //calculate the difference 

    printf("Enter all y points:");
    for (int i = 0; i < n; i++)
    {
        scanf("%f",&diff_table[i][0]);  // take values (00,10,20,30,40,......)
    }

    int X = 0;
    printf("Enter the X value:\n");
    scanf("%d",&X);

   for (int j = 1; j < n; j++)  // column iterate 1 to < n
   {
        for (int i = 0; i < n - j; i++)  // row iterate 0 to n - j
        {
            diff_table[i][j] = diff_table[i + 1][j - 1] - diff_table[i][j - 1];   //
        }
        
   }
   

    printf("The difference table is:\n");
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            printf("%.2f ",diff_table[i][j]);
        }
        printf("\n");
    }
    
    float Y = 0.0;
    for (int i = 0; i < n ; i++)
    {
        Y += (diff_table[0][i]/(fact(i)*pow(h,i)))*x_fun(i,x,X);  // 
    }
    printf("The corresponding value of the Y(f(x)) is:%.2f",Y);
  
  return 0;
}