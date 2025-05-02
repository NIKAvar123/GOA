def powers(n):
    result = []
    power = 0

    while n > 0:
        if n & 1:
            result.append(2 ** power)
        power += 1
        n >>= 1

    return result




def missing_no(nums):
    for i in range(0, 101):
        if not i in nums: return i


def between_extremes(arr):
    return max(arr) - min(arr)
