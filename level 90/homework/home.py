def openOrSenior(data):
    list =[]
    for age, handicap in data:
    
        if age >= 55 and handicap > 7:
            list.append('Senior')
            
        else: list.append('Open')
    return list