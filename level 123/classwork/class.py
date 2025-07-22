def highest_rank(arr):
    best = 0
    occs = 0
    for item in arr:
        times = arr.count(item)
        if times > occs:
            best = item
            occs = times
        elif times == occs:
            if best < item:
                best = item
    return best





#____________________________________________



def highest_rank(arr):
    counts = {}
    for el in arr:
        if el in counts:
            counts[el] += 1
        else:
            counts[el] = 1
    max_friq = max(counts.values())
    arr1 = []
    for num , count in counts.items():
            if count == max_friq:
                arr1.append(num)
    return max(arr1)


#____________________________________________


def to_float_array(arr): 
    return list(float(x) for x in arr)




