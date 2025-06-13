class Student:
    def __init__(self, name, age):
        self._name = name
        self._age = age

    def getName(self):
        return self._name

    def setName(self, name):
        self._name = name

    def getAge(self):
        return self._age

    def setAge(self, age):
        self._age = age


#_____________________________________________________

class Book:
    def __init__(self, title, author, pages):
        self._title = title
        self._author = author
        self._pages = pages

    def getTitle(self):
        return self._title

    def setTitle(self, title):
        self._title = title

    def getAuthor(self):
        return self._author

    def setAuthor(self, author):
        self._author = author

    def getPages(self):
        return self._pages

    def setPages(self, pages):
        self._pages = pages


#_____________________________________________________

class Car:
    def __init__(self, brand, model, year):
        self._brand = brand
        self._model = model
        self._year = year

    def getFullName(self):
        return f"{self._brand} {self._model}"

    def setYear(self, year):
        self._year = year

    def getYear(self):
        return self._year



#_____________________________________________________
class Rectangle:
    def __init__(self, width, height):
        self._width = width
        self._height = height

    def getArea(self):
        return self._width * self._height

    def getPerimeter(self):
        return 2 * (self._width + self._height)

    def setWidth(self, width):
        self._width = width

    def setHeight(self, height):
        self._height = height


#_____________________________________________________
class User:
    def __init__(self, username, email, password):
        self._username = username
        self._email = email
        self._password = password

    def getUsername(self):
        return self._username

    def setUsername(self, username):
        self._username = username

    def getEmail(self):
        return self._email

    def setEmail(self, email):
        self._email = email

    def getPassword(self):
        return self._password

    def setPassword(self, newPassword):
        self._password = newPassword
