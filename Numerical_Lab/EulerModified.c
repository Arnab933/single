#include<stdio.h>

float fun(float x, float y) {
 return (y - x) / (y + x);
}
float EulerModified(float x, float y, float step, float target) {
 while (x < target) {
     float m1 = fun(x, y);
     float m2 = fun(x + step, y + step * m1);
     y = y + (step / 2) * (m1 + m2);
     x = x + step;
  }
  return y;
}
int main() {
  float x0, y0, step, target;
  printf("Enter initial values (x0, y0): ");
  scanf("%f %f", &x0, &y0);
  printf("Enter step size: ");
  scanf("%f", &step);
  printf("Enter target value of x: ");
  scanf("%f", &target);
  printf("The value of y at x = %.2f is: %.2f\n", target,EulerModified(x0, y0, step, target));
 return 0;
}
