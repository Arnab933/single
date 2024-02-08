
letter = "hey my name is {0} and country is {1}"
name = "Arnab"
country = "India"
print(letter.format(name, country))

print(f"hey my name is {name} and country is {country}")

txt = "price of maggi is {price:.2f} "
print(txt.format(price=7.5676))

# using f string
price = 7.5678
txt = f"price of maggi is:{price:.2f}"
print(txt)
print(f"{2*30}")