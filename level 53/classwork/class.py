import math

def getArea(a, b=None, c=None):
    if not b:
        print("circle")
        return math.pi * a * a
    elif not c:
        print("rectangle")
        return a * b
    print("triangle")
    s = ( a + b + c) / 2
    return math.sqrt(s(s -a)(s-b)*(s-c))

getArea(10)
getArea(10, 90)
getArea(4,5,6)