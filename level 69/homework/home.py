def password_check():
    correct_password = "12348765"
    while True:
        user_password = input("შეიყვანეთ პაროლი: ")
        if user_password == correct_password:
            print("პაროლი სწორია!")
            break
        else:
            print("პაროლი არასწორია, გთხოვთ სცადოთ ისევ.")
