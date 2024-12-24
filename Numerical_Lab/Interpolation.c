#include<stdio.h>
#include<math.h>
#define N 10

// Factorial function
float fact(int n) {
    if (n <= 1)
        return 1.0;
    return n * fact(n - 1);
}

// Compute forward x function
float x_fun_forward(int n, int *x, int X) {
    float ans = 1.0;
    for (int i = 0; i < n; i++) // (X - x0)*(X - x1)*(X - x2)*...
        ans *= (X - x[i]);
    return ans;
}

// Compute backward x function
float x_fun_backward(int n, int *x, int X) {
    float ans = 1.0;
    for (int i = 0; i < n; i++) // (X - xn)*(X - x(n-1))*(X - x(n-2))*...
        ans *= (X - x[n - 1 - i]);
    return ans;
}

// Generate the difference table
void generate_diff_table(float diff_table[N][N], int n) {
    for (int j = 1; j < n; j++) {
        for (int i = 0; i < n - j; i++) {
            diff_table[i][j] = diff_table[i + 1][j - 1] - diff_table[i][j - 1];
        }
    }
}

// Display the difference table
void display_diff_table(float diff_table[N][N], int n) {
    printf("The difference table is:\n");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i; j++) { // Display only valid entries
            printf("%.2f ", diff_table[i][j]);
        }
        printf("\n");
    }
}

// Forward interpolation
float newton_forward(float diff_table[N][N], int *x, int X, int n) {
    float h = x[1] - x[0];
    float Y = 0.0;
    for (int i = 0; i < n; i++) {
        Y += (diff_table[0][i] / (fact(i) * pow(h, i))) * x_fun_forward(i, x, X);
    }
    return Y;
}

// Backward interpolation
float newton_backward(float diff_table[N][N], int *x, int X, int n) {
    float h = x[1] - x[0];
    float Y = 0.0;
    for (int i = 0; i < n; i++) {
        Y += (diff_table[n - 1 - i][i] / fact(i)) * x_fun_backward(i, x, X);
    }
    return Y;
}

int main() {
    int n = 0;
    printf("Enter the number of points: ");
    scanf("%d", &n);

    float diff_table[N][N] = {0}; // Initialize difference table to 0
    int x[N];
    
    printf("Enter all x points: ");
    for (int i = 0; i < n; i++) {
        scanf("%d", &x[i]);
    }

    printf("Enter all y points: ");
    for (int i = 0; i < n; i++) {
        scanf("%f", &diff_table[i][0]); // Take values (y0, y1, y2, ...)
    }

    int X = 0;
    printf("Enter the X value: ");
    scanf("%d", &X);

    // Generate the difference table
    generate_diff_table(diff_table, n);
    display_diff_table(diff_table, n);

    // Calculate using Newton's Forward and Backward formulas
    float forward_result = newton_forward(diff_table, x, X, n);
    float backward_result = newton_backward(diff_table, x, X, n);

    printf("The interpolated value using Newton's Forward Formula is: %.2f\n", forward_result);
    printf("The interpolated value using Newton's Backward Formula is: %.2f\n", backward_result);

    return 0;
}
