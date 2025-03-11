def smallest_integer(matrix):
    nums = set(sum(matrix, []))
    n = 0
    while n in nums: n += 1
    return n


def find(matrix, n):
    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if matrix[i][j]==n:
                return True
    return False

def smallest_integer(matrix):
    i = 0
    while find(matrix, i):
        i+=1
    return i