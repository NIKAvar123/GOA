class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"მე ვარ {self.name}, {self.age} წლის.")
 
#_________________________________

class Calculator:
    def add(self, a, b):
        return a + b

    def subtract(self, a, b):
        return a - b

    def multiply(self, a, b):
        return a * b

    def divide(self, a, b):
        if b == 0:
            return "ნულზე გაყოფა არ შეიძლება"
        return a / b

#_________________________________


class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

class Library:
    def __init__(self):
        self.books = []

    def addBook(self, book):
        self.books.append(book)

    def listBooks(self):
        for book in self.books:
            print(f"{book.title} - {book.author}")


#_________________________________
class Animal:
    def __init__(self, name):
        self.name = name

    def makeSound(self):
        print(f"{self.name} რაღაც ხმას გამოსცემს.")

class Dog(Animal):
    def bark(self):
        print(f"{self.name} ვაფ-ვაფს ამბობს.")

#_________________________________

class User:
    def __init__(self, username):
        self.username = username

    def login(self):
        print(f"მომხმარებელი {self.username} ავტორიზებულია.")

class Admin(User):
    def deleteUser(self, user):
        print(f"მომხმარებელი {user.username} წაიშალა.")
