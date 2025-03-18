def even_or_odd(s):
    odds = []
    evens = []
    for i in s:
        if int(i) % 2 == 0:
            evens.append(int(i))
        else:
            odds.append(int(i))
    result = ''
    if sum(evens) > sum(odds):
        result = "Even is greater than Odd"
    elif sum(odds) > sum(evens):
        result = 'Odd is greater than Even'
    else:
        result =  "Even and Odd are the same"
            
    
    return result
