def num_first_letters(str1, str2):
    if isinstance(str1, str) and isinstance(str2, str):
        return str1[0] == str2[0]
    else:
        raise ValueError("arrguments")

print(num_first_letters("hello", "hero"))  
print(num_first_letters("apple", "banana"))  
print(num_first_letters("world", "wolf"))  
print(num_first_letters("dog", "cat"))  
