

def check_input():
    entered_texts = set()
    while True:
        user_input = input("შეიყვანეთ ტექსტი: ")
        if user_input in entered_texts:
            print("ამ ტექსტი უკვე შეყვანილია.")
        else:
            entered_texts.add(user_input)
            print(f"თქვენი შეტანილი ტექსტი: {user_input}")
            break
