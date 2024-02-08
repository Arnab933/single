#MAP
l = [1, 2, 3, 4, 5, 6]

def cube(n):
    return n*n*n
newlist=[]
for item in l:
    newlist.append(cube(item))
print(newlist)

newlist3 = list(map(lambda x: x*x*x,l))  # lambda
print(newlist3)

newlist2 = list(map(cube,l))  # here map is functio  that returns an object and we have to convert in into list
# the map fuction takes a function and an list then perform that function every element of that list
print(newlist2)
 
#FILTER
