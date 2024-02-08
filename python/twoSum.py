nums = [2, 7, 11, 15]
terget = 9
emp_dic = {}
for i, n in enumerate(nums):
    differ = terget - n
    if differ in emp_dic:
        print([emp_dic[differ],i])
        break
    emp_dic[n] = i
n = 2
if n in emp_dic:
    print(emp_dic)
# print(emp_dic)
print(emp_dic.items())
for key, value in emp_dic.items():
    print(key,value)