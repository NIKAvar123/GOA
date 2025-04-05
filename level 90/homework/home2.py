def battle(x, y):
    power_x = 0
    for i in range(len(x)) :
        power_x += ord(x[i])-64
    power_y = 0
    for j in range(len(y)) :
        power_y += ord(y[j])-64
    if power_x > power_y :
        return x
    elif power_x < power_y :
        return y
    else :
        return "Tie!" 