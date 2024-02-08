class Person:
    name = ""
    age = 0
    occupation = "student"
    def info(self): # here self is like this this keywork in c++ or java
        print(f"{self.name} is a {self.occupation}")

sujit = Person()
sujit.name = "Sujit"
sujit.age = 21
sujit.occupation = "student"
# print(sujit.name)
# print(sujit.age)
# print(sujit.occupation)
sujit.info()
print(type(sujit.age))
n = 21
print(type(n))