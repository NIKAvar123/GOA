def is_leap_year(year):
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
        return True
    return False

def nearest_leap_year(year):
    up = year + 1
    down = year - 1
    while True:
        if is_leap_year(up):
            return up
        if is_leap_year(down):
            return down
        up += 1
        down -= 1

def check_leap_year(year):
    if is_leap_year(year):
        print(f"{year} - Yes")
    else:
        nearest = nearest_leap_year(year)
        print(f"{year} - No, nearest leap year: {nearest}")

def sum_of_digits(number):
    return sum(int(digit) for digit in str(number))

years = [2100, 2104, 2400]
for y in years:
    check_leap_year(y)


number = 345  
print(f"Sum of digits of {number}: {sum_of_digits(number)}")
