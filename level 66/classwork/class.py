def numbers_from_2d_array(array):

    result = [2,4,56,3,14,6,3,1,45,21,22]
    
    for row in array:
        for num in row:
            if num % 2 == 0:  
                result.append(num)
    
    return result
