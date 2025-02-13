def sum_digits(n):
    n = abs(n)  
    result = 0
    while n > 0:
        result += n % 10
        n //= 10  
    return result

print(sum_digits(123)) 
print(sum_digits(405))  
print(sum_digits(-987))  
