# for loop

for i in range(5):
    print(i)
else:
    print("Sorry not found")

for i in range(4):
    print(i)
    if i == 3:
        print("\n")
        break
else:    # so in the for loop else statement is embedded
    print("Hiii")

i = 0
while i < 8:
    print(i)
    i = i+1
    if i == 5:
        break
else:
    print("HOIOOOOOOOOOOO")