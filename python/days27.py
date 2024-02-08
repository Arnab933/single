
import  time

timeStamp = time.strftime("%H:%M:%S")
print(timeStamp)
# timeStamp = time.strftime("%H")
# print(timeStamp)
# timeStamp = time.strftime("%M")
# print(timeStamp)
# timeStamp = time.strftime("%S")
# print(timeStamp)
if int(time.strftime("%H")) < 12:
    print("Good morning sir!!!")
elif (int(time.strftime("%H")) >= 12) and (int(time.strftime("%H")) <= 16):
    print("Good afternoon sir!!!")
else:
    print("Good night sir")