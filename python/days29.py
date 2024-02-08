# doc string is a type of string that is written in the first line after the definition of a function not other line
# if we write doc string after the first line of definition then that is not treated as doc string
def square(n):
    '''hi i'm a method for calculating square of a number'''
    '''hii arnab '''
    return n**2


print(square(12))
print(square.__doc__)
print(type(square.__doc__))