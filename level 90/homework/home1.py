def count_zeros(x):
    count = 0 
    for number in range(1, x + 1):
        while number > 0:
            digit = number % 10
            if digit == 0:
                count += 1
            number = number // 10
    return count