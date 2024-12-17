def check_input():
    import string


    special_chars = string.punctuation
    indices_with_numbers = []
    

    user_input = input("შეიყვანეთ ტექსტი: ")


    for index, char in enumerate(user_input):
        if char.isdigit(): 
            indices_with_numbers.append(index)
        elif char in special_chars:  
            print(f"ერორი: ტექსტი შეიცავს ნიშანს '{char}' ინდექსზე {index}")
            return


    if indices_with_numbers:
        print(f"ერორი: ტექსტი შეიცავს რიცხვებს შემდეგ ინდექსებზე: {indices_with_numbers}")
    else:
        print("წარმატებული ოპერაცია")


check_input()
