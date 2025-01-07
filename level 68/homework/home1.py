def round_number():
    number = int(input("შეიყვანეთ რიცხვი: "))
    power_of_ten = 10 ** (len(str(number)) - 1)
    rounded_number = (number // power_of_ten + 1) * power_of_ten
    print(f"გადასაფორმი რიცხვი: {rounded_number}")
