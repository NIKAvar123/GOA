def accum(str):
    res = []

    for i in range(len(str)):
        upper = str[i].upper()
        lower = str[i].lower() * i
        res.append(upper + lower)
    return '-'.join(res)