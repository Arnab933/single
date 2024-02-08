# dictionaries is an ordered  collection of data that is mapped  a value corresponding a key
# dic = {91: "Arnab", 49: "Debjit", 90: "Suvendu"}
# print(dic[91])
# print(dic.get("sujit"))
# print(dic.get("Arnab"))  # not access key using value  here get none
# # print(dic["Arnab"])  # here through an error

# print(dic.keys())  # display all keys value disc.keys() function return an array of keys
# for keys in dic.keys():
#     print(keys)

# # also we can display all values using dic.values() function
# print(dic.values())

# print(dic.items())  # display the dictionary but key and value wise
# for key, value in dic.items():
#     print(f"The value corresponding to the key:{key} is {value}")
# string = "([{}])"
# dic2 = {'(':')', '{':'}', '[':']'}
# for i,ch in enumerate(string):
#     if i == len(string)/2:
#         break
#     print(dic2[ch])
# bol_dic = {}
# i = 0
# while i<3:
#     name = int(input("enter the name:"))
#     val = input("Enter true or false:") 
#     bol_dic[name] = val
#     i+=1
# print(bol_dic)
# if bol_dic[1] == 'true':
#     print('jiii')


# map={}
# map[101] = 1
# temp = 100
# while temp<103:
#     if map[temp] == 1:
#         print("hiii")
#     map[temp]= 1
#     temp += 1
# print("hello")

map = {100:[0,1],101:[1,0]}
print(map[100][1])

    