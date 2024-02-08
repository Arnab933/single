name = input("Enter your name:")
print("Your name is:", name)

a = input("Enter the first number:")
b = input("Enter the second number:")
print(a + b)  # here print as string not sum of two number because python takes the input as string
# so we have to use typecasting method

print(int(a) + int(b))  # here print sum

# remember it that we can't use typecasting for any text
# print(int("Arnab")) # like this