s1 = {1, 2, 3, 4, 5, 6, 7, 8}
print(s1)
s2 = {1, 2, 10, 11, 12, 13}
print(s1.union(s2))
print(s1.intersection(s2))
s3 = {1, 2, 4}
s3.intersection_update(s1)  # update the s3 with intersectio operation
print(s3)

s4 = {1, 2, 3, 4, 5}
s5 = {3, 4, 6, 8, 9, 10, 11}
print(s4.symmetric_difference(s5))  # print those values that are not common s4 and s5
print(s4.difference(s5))  # s4 - s5

s6 = {1, 3, 2, 5}
s7 = {6, 7, 8}
print(s6.isdisjoint(s7))  # check isdisjoint s6 and s7 means no any common value
s6.add(100)  # add value in set
s6.remove(3)  # remove but if value is not exist then throw an error
# s6.discard(120) also same to remove function but if value is not exist then don't throw any error

s6.pop()  # remove the last element of the set
# del s6  # delete the set properly
if 1 in s6:
    print("1 is present in s6")
