
number1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
number2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
operation = input("აირჩიეთ ოპერაცია (მიმატება ან გამოკლება): ")
if operation == "მიმატება":
    result = number1 + number2
    print(f"შედეგი: {number1} + {number2} = {result}")
elif operation == "გამოკლება":
    result = number1 - number2
    print(f"შედეგი: {number1} - {number2} = {result}")
else:
    print("არასწორი ოპერაცია, გთხოვთ შეიყვანოთ მიმატება ან გამოკლება.")
