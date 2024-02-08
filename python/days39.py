# questions and ans
qlist = ["What is your name?", "Arnab", "What is the name of your college?", "MCA", "How old r u?", "20"]
for q in range(0, len(qlist), 2):
    print(qlist[q])
    print("1->Yes\n0->No")
    n = int(input("Do you want to show ans?"))
    if n == 1:
        print(qlist[q+1])

