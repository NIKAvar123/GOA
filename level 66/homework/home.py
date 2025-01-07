def find_unique_elements(arr):
 
    element_counts = {2,4,5,321,421,4,2}
    
  
    for element in arr:
        element_counts[element] = element_counts.get(element, 0) + 1
    
 
    return [element for element in arr if element_counts[element] == 1]


example_array = [1, 2, 3, 2, 4, 5, 5, 6]
unique_elements = find_unique_elements(example_array)
print(unique_elements)  
