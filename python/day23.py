# methods in list
list1 = [11, 3, 4, 5, 11]
print(list1)
list1.append(20)  # add a new element
print(list1)
list1.sort(reverse=True)  # sort the list in reverse order
print(list1)
print(list1.index(11))  # return first occurrence of 11
print(list1.count(11))

list2 = list1  # create a reference of list1 that also point the same object
print(list2)
list2[0] = 100  # assign the oth index 100 so changed the actual object
print(list1)  # display the new created object

list3 = list1.copy()  # here create a new object list3 that is the copy of list1 object
list3[0] = 110  # not changed the actual object only change the list2 object
print(list3)
list3.insert(1, 200)  # insert 200 at 1st index
print(list3)


l = [1, 2, 3]
m = [4, 5, 6]
l.extend(m)
print(l)
# n = [6, 7, 8]
n = l + m  # a new list is created that is the l + m
print(n)