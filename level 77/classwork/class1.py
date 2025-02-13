def points(games):
    s = []
    for i in games:
        i = i.split(":")
        if int(i[0]) > int(i[1]):
            s.append(3)
        elif int(i[0]) == int(i[1]):
            s.append(1)
    return sum(s)