import math

def count_area(shape, *params):
    if shape == "rectangle" and len(params) == 2:
        length, width = params
        return length * width
    
    elif shape == "circle" and len(params) == 1:
        radius = params[0]
        return math.pi * radius ** 2
    
    elif shape == "triangle" and len(params) == 3:
        a, b, c = params
      
        s = (a + b + c) / 2
        area = math.sqrt(s * (s - a) * (s - b) * (s - c))
        return area
    
    else:
        return "Invalid input"


print(count_area("rectangle", 5, 10))  
print(count_area("circle", 7)) 
print(count_area("triangle", 3, 4, 5))  
