# string methods
# strings are immutable in python
name = "Arnab"
print(len(name))
print(name.upper())
print(name.lower())
name2 = "!!!!Arnab!!!!!!! Pratihar"
print(name2.rstrip("!"))  # print !!!!Arnab  so only delete tail specified("!")character
print(name2.replace("Arnab", "John"))  # replace old string by a new string but only that string remaining
# are same as it is

para = "hi myself Arnab Pratihar"
print(para.split(" "))  # created a new list by separate " "
print(para.capitalize())  # capitalized the para string,remember it that capitalize method only chnge the first
# character to upper case but remaining all character converts it to lowercase
str1 = "hii i'm sujit pratihar"
# print(str1.center(12))  did not work here
print(para.count("a"))  # count the number of a lies in the para string
name3 = "I went to Paramanandapur Jagannath Institution in Balaipanda !!!!!"
print(name3.endswith("!"))  # endswith is  a boolean method
print(name3.endswith("t", 0, 6))
print(name3.find("went"))  # return the first index of first occurrence if not matched then return -1
print(name3.index("went"))  # same as find method, but it gives an error if not found

name4 = "Hiiam20yrsold"
print(name4.isalnum())  # return the boolean result if the string exist only alphabetic and numeric
name5 = "Hiiamyrsold"
print(name5.isalpha())  # return boolean result is the string exist only alphabetic character

print(name5.isprintable())  # returns if all character is printable
print(name5.islower())  # if lowercase

print(name5.isspace())  # if space

para2 = "My Name Is Arnab"
print(para2.istitle())  # if started character is uppercase

print(para2.swapcase())  # swap all string uppercase to lowercase and lowercase to uppercase

para3 = "hii i am arnab"
print(para3.title())  # convert every starting character in uppercase
