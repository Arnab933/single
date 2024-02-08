# List
list1 = [1, 2, 3, 4, 5, "Arnab", "Sujit", 20.5]
for i in list1:
    print(i)
if 5 in list1:
    print("yes found it")
else:
    print("Not founded")


print(list1[len(list1)-3])
print(list1[-3])

if "na" in "Arnab":  # here check "na" exist in Arnab or not
    print("yes")
else:
    print("no")

list2 = [i for i in range(20)]
print(list2)
list3 = [i for i in range(30) if i % 2 == 0]
print(list3)