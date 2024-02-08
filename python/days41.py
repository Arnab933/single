# short if else  statements

a = 30
b = 35
print("A") if a > b else print("=") if a == b else print("B")  # remember it works left to right

c = 10 if a < b else 0  # we can also assign the value like this here not needed to write else c = 0
print(c)