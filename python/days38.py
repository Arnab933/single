# custom error

n = input("Enter the number below 10:")
if n != "quit":
    if 10 >= int(n) >= 0:
        raise ValueError("pls enter a valid number")
