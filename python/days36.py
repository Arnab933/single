# exception handling 

# n = input("Enter a number:")
# print(f"The multiplication table of {n} is:")
# try:
#     for i in range(1,11):
#         print(f"{n}X{i} is:{int(n)*int(i)}")
# except: # Exception as e:
#     print("Pls enter a valid input")
    
# print("The program is successfully run")


# multiple types of error
try:
    n = int(input("Enter the index:"))
    list = [1, 3, 4, 5]
    print(list[n])
except ValueError:
    print("Value error")
except IndexError:
    print("Index error")