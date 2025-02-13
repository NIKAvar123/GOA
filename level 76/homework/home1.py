def sum_two_largest(lst):
    if len(lst) < 2:
        return None

    max1 = max(lst)
    lst.remove(max1)  
    max2 = max(lst)   

    return max1 + max2

print(sum_two_largest([3, 7, 2, 9, 5]))  
print(sum_two_largest([10, 10, 5, 3]))   
print(sum_two_largest([1]))  
