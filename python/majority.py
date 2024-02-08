nums = [7,7,5,7,5,1,5,7,5,5,7,7,5,5,5,5]
print(len(nums))
count = 1
elmt = nums[0]
for i in range(1,len(nums)):
    if count == 0:
        elmt = nums[i]
        count += 1
    elif elmt == nums[i]:
        count += 1
    else:
        count -= 1
   
print(elmt)
print(len(nums))
