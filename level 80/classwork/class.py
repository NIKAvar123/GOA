def sum_of_digits(n: int) -> int:
    total = 0
    while n:
        total += n % 10  
        n //= 10 
    return abs(total)  

print(sum_of_digits(1234))
print(sum_of_digits(-567))
