class Person: 
    name = ""
    occu = ""
    age = 0
    # def set(self,name,age):
    #     self.name = name
    #     self.age = age
    # def get(self):
    #     print(self.name)
    #     print(self.age)    
    def __init__(self,occu):
        self.name = input("Enter the name:")
        self.age = int(input("Enter the age:"))
        self.occu = occu
        print(self.name)
        print(self.age)
        print(self.occu)
        
student = Person("student")
# student.set("Arnab",20)
# student.get()


    
