# finally keyword
# try:
#     list1 = [1, 2, 3, 4, 5]
#     n = int(input("Enter an index:"))
#     print(list1[n])
# except:
#     print("pls enter a valid input")
#     # finally:
#     print("I am always executed")
#

def func1(x):
    try:
        list2 = [1, 2, 3, 4, 5, 6, 7]
        return list2[x]
    except:
        print("some error occurred")
        return 0

    finally:  # before  return the value of the index this block is always executed 
        print("i am executed")


a = func1(4)
print(a)