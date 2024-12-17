def unique_elements(arr1, arr2):
    return [x for x in arr1 + arr2 if (x not in arr1) or (x not in arr2)]

print(unique_elements([1, 2, 3, 4], [3, 4, 5, 6]))  
