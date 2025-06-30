# 1. Animal და Dog კლასები
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Dog(Animal):
    def bark(self):
        return f"Woof! მე ვარ {self.name}"

# 2. მანქანების კლასები
class Vehicle:
    def __init__(self, model, year):
        self.model = model
        self.year = year

class Car(Vehicle):
    def __init__(self, model, year, brand):
        super().__init__(model, year)
        self.brand = brand

    def get_info(self):
        return f"ეს არის {self.brand} {self.model}, {self.year}"

# 3. სტუდენტების კლასები
class Person:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def getFullName(self):
        return f"{self.first_name} {self.last_name}"

class Student(Person):
    def __init__(self, first_name, last_name, grade):
        super().__init__(first_name, last_name)
        self.grade = grade

    def get_student_info(self):
        return f"{self.getFullName()} - კლასი: {self.grade}"

# 4. Shape და Rectangle კლასები
class Shape:
    def getArea(self):
        return 0

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def getArea(self):
        return self.width * self.height

# 5. Employee და Manager კლასები
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department

    def get_manager_info(self):
        return f"მე ვარ {self.name}, ვმუშაობ {self.department}-ში და ჩემი ხელფასია {self.salary}"
