# 4 types of functions
"""
1.default arguments
2.keyword arguments
3.variable length arguments
4.required arguments
"""


# a = int(input("Enter the first number:"))
# b = int(input("Enter the second number:"))


# required arguments
def sum1(x, y=20):
    return x + y


print("Sum is:", sum1(20))


# default arguments
def sum2(x=1, y=9):
    return x + y


print("sum is:", sum2(2, 7))
print("sum is:", sum2(3))  # second value assign from the function


# keyword arguments
def sum3(x=20, y=30):
    return x + y


print("Sum is:", sum3(x=10, y=20))  # no matter if the value of x and y are inorder or not


# variable length arguments

def average(*numbers):  # here numbers is as a tuple
    print(type(numbers))
    s = 0
    for i in numbers:
        s = s + i
    print("sum is:", s)


average(2, 3, 4, 5, 6)


def aveRage(**numbers):
    print("Hello ", numbers["Sujit"])
    print("hiii", numbers["Debjit"])

aveRage(Sujit="Arnab", Debjit="Suman")
