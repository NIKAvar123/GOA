class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
    
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"{amount} ₾ შეტანილია. მიმდინარე ბალანსი: {self.balance} ₾")
        else:
            print("თანხა უნდა იყოს დადებითი!")
    
    def withdraw(self, amount):
        if 0 < amount <= self.balance:
            self.balance -= amount
            print(f"{amount} ₾ გატანილია. მიმდინარე ბალანსი: {self.balance} ₾")
        else:
            print("არასაკმარისი თანხა ან არასწორი თანხა!")
    
    def show_balance(self):
        print(f"{self.owner}: {self.balance} ₾")

# მაგალითი
account = BankAccount("გიორგი", 1000)
account.show_balance()
account.deposit(500)
account.withdraw(300)
account.show_balance()