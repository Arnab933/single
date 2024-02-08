fruit = "mango"
len1 = len(fruit)
print(len1)
print(fruit[0:5])  # 0 indices that from what index and 5 indices that to 5-1 index
print(fruit[:5])  # also this will be work
print(fruit[1:5])

# negative slicing
print(fruit[0:len(fruit)-3])
# also u can write this
print(fruit[0:-5])

print(fruit[-1:-3])  # not print anything because -1 means index 4 and -3 means index 2 so 4 to 2 no any char
print(fruit[-3:-1])  # print ng

nm = "Harry"
print(nm[-4:-2])