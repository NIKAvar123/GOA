def most_frequent_item_count(collection):
    highest = 0
    for element in collection:
        if collection.count(element) >= highest:
            highest = collection.count(element)
    return highest
                    



def is_square(n):  
    
    # cuadrado obtenido por n ** 2
    if n < 0:
        return False
    i = 0
    while i * i <= n:
        if i * i == n:
            return True
        i += 1
    return False

        

def xo(s):
    s = s.lower()
    countx = 0
    county = 0
    for i in range(len(s)):
        if s[i] == "x":
            countx = countx + 1
        elif s[i] == "o":
             county = county + 1
    if countx == county:
        return True
    elif countx == 0 and county == 0:
        return True
    else:
        return False