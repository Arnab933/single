# encryption data problem
import string
import random

# initializing size of string
N = 3
str = "Arnab"
# using random.choices()
# generating random strings
res1 = ''.join(random.choices(string.ascii_lowercase, k=N))
res2 = ''.join(random.choices(string.ascii_lowercase, k=N))
# print result
print("The generated random string : " + res2+str+res1)
str2 = "Arnab"
print(str2.rstrip(str2[-1]))


str3 = "Arnab is a good boy"
list1 = str3.split(" ")
print(list1)
# for s in list1:
    # if(len(s))
# str4 = str3.
