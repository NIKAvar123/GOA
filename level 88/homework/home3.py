def even_numbers(arr,n):
    new_arr = [] 
    arr = arr[::-1]
    count = 0
    for i in arr: 
        if i % 2 == 0:
            if count < n: 
                new_arr.append(i)
                count += 1 
    return new_arr[::-1]
                