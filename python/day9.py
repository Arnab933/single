# explicit type casting
a = "10"
b = "20"
print(a, b)
print(a + b)  # print as string
print(int(a) + int(b))  # print as int
c = "Arnab"
# print(int(c))  # error can't convert it into string

# implicit type casting
d = 10
e = 20.5
print(d + e)  # here convert e into float for data loss
