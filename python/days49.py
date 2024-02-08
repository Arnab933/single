f = open('myfile.txt','r')   #here  'r' denotes the read mode we can't read using another mode like 'w'(write mode)
# print(f) nothing print
text = f.read()
print(text)
# print(f.read())
f.close()

f1 = open('arnab.txt','w') # 'w' mode write the file only if the file is not exist then creates a new file 
f1.write('hey u\n')
f1.write('i am arnab pratihar')
f1.close()

f1 = open('arnab.txt','a')
f1.write('\ni read in midnapore college dept of computer science')

with open('sujit.txt' , 'a') as f:
    f.write('\ni am sujit')
