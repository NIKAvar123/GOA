def main():
    while True:
        print("\nშეიყვანეთ ორი რიცხვი ნამრავლის გამოსათვლელად ან 'exit' პროგრამის დასასრულებლად.")
        user_input = input("რაიმე ტექსტი: ")
        if user_input.lower() == 'exit':
            print("პროგრამა დასრულდა.")
            break

        try:
            num1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
            num2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
            print(f"რიცხვების ნამრავლია: {num1 * num2}")
        except ValueError:
            print("გთხოვთ, შეიყვანოთ ვალიდური რიცხვები.")

if __name__ == "__main__":
    main()
