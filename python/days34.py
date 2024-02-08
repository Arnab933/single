# method of dictionaries

ep1 = {122: 45, 123: 60, 91: 92, 90: 41}
ep2 = {145: 56, 146: 60, 150: 67}

ep1.update(ep2)
print(ep1)
# ep1.clear()
# print(ep1)
ep1.pop(122)  # delete the 122 key valuew
print(ep1)
del ep1[123]
print(ep1)

# for delete the last item from dictionaries
ep1.popitem()
print(ep1)

# difference between del and clear
# del keyword delete the dictionaries object where clear method only return an empty dictionaries
