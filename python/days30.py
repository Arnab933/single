def fact(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fact(n - 1)


x = 5
print(fact(x))

fibo = []
n = int(input("Enter the term:"))
for i in range(0, n):
    if i == 0 or i == 1:
        fibo.append(i)
    else:
        fibo.append(fibo[i - 1] + fibo[i - 2])

print(fibo)


def fibo2(n):
    if n == 0 or n == 1:
        return n
    else:
        return fibo2(n - 1) + fibo2(n - 2)


print(fibo2(9))