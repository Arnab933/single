a = int(input("Enter a number:"))

match a:
    case 0:
        print("Number is 0")
    case 1:
        print("Number is 1")
    case 2:
        print("Number is 2")
    case 3:
        print("Number is 3")
    case 4:
        print("Number is 4")
    case _:
        print("Number is > 4")

# after match one condition doesn't check other condition
b = int(input("Enter the number:"))

match b:
    case 0:
        print("Number is zero")
    case _ if (b < 10):
        print("Number is < 10")
    case _ if (b < 20):
        print("number is < 20")
    case _:
        print("Number is > 20")

price = 200
budget = 222
if price > budget:
    print("can't buy now")
elif price == budget:
    print("Also you can buy now")
else:
    print("you can buy")