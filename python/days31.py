# set
# set:a collection of unordered collection of items.in python set is immutable
s = {2, 2, 3, 4, 5}
print(s)

s1 = {}
print(type(s1))  # here print 'dict' because set and dict both syntax is same  that is start with {}
# for that reason if we want to create an empty set then we have to use this syntax
s2 = set()
print(type(s2))  # now s2 is an empty set

for val in s:
    print(val)