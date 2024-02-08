f = open('ap.txt','r')
while True:
    line = f.readline()   # readline is a method which returns a string line if any line is not exist then it return an empty string
    if not line:   #when readline method returns an empty string then condition becomes false
        break
    print(line)

markssheet = open('Markssheet.txt','r')
i = 0
while True:
    i = i+1
    line = markssheet.readline()
    if not line:
        break
    m1 = line.split(",")[0]
    m2 = line.split(",")[1]
    m3 = line.split(",")[2]
    print(f"The marks of the student {i} in Java is {int(m1)}")
    print(f"The marks of the student {i} in Practical is {int(m2)}")
    print(f"The marks of the student {i} in Viva is {int(m2)}")
    
writeLines = open('writelines.txt','w')
lines  = "Arnab Pratihar is typing"  
writeLines.writelines(lines)  # using writelines method we can write any content in a file
# if lines is an iterable object(list) then this method write as list 

# list = [1, 2, 3]# here not write because content must be string
list = [ '1', '2', '3','4', '5']
# writeLines.writelines(list)

# also we can use for loop
for val in list:
    writeLines.write(val)
writeLines.close()
   