import math

def count_area(*args):

    if len(args) == 2:
        length, width = args
        return length * width


    elif len(args) == 1:
        radius = args[0]
        return math.pi * (radius ** 2)


    elif len(args) == 3:
        base, height, _ = args
        return (base * height) / 2

    else:
        return "გთხოვთ, გადმოეცით სწორების რაოდენობის არგუმენტები"


print(count_area(5, 10))  
print(count_area(7))    
print(count_area(6, 8, 0)) 
