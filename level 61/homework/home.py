from collections import Counter

def duplicate_arrays(a, b):
    return Counter(a) == Counter(b)

a = [1, 2, 3]
b = [1, 2, 2, 3]
duplicate_arrays(a, b)  # false

a = [1, 2, 2, 3]
b = [1, 2, 2, 3]
duplicate_arrays(a, b)  # true
