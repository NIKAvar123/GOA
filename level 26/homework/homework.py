def filter_evens(num_list):
    res = []
    for i in num_list:
        if i %2 == 0:
            res.append(i)

    return res

starting_list = list(range(11))
print(starting_list)
print(filter_evens(starting_list))



