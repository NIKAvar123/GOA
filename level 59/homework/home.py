
#codewars

def find_it(seq):
    result = 0
    for num in seq:
        result ^= num
    return result

