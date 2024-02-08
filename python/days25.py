tup = (1, 2, 3, 4, 5, 6, 7, 8, 9)
ind = tup.index(3)
print(ind)
ind2 = tup.index(6, 3, 7)
print(ind2)

l = list(tup)  # change tuple to list
print(l)
l.append("Arnab")
tup = tuple(l)  # change list to tuple 
print(tup)