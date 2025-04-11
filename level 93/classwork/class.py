remainder = lambda x: x % 2

# მომხმარებლისგან რიცხვის მიღება
num = int(input("შეიყვანე რიცხვი: "))

# ნაშთის გამოტანა
print("ნაშთი 2-ზე გაყოფისას:", remainder(num))

print("----------------------------------------------------------")


# sxvadasxva monacemebi setshi
my_set = {42, "hello", 3.14, False, (1, 2)}

# unda davamatot 1 da true
my_set.add(True)
my_set.add(1)

#set
print("Set:", my_set)

# shevamowmot aris tuara romelime matgani
print("aris tuara True?", True in my_set)
print("aris tu ara 1?", 1 in my_set)



print("----------------------------------------------------------------------")


# Dictionary-ის შექმნა
person = {
    "name": "nika",
    "lastname": "mumladze",
    "age": 25
}

# მნიშვნელობების დაბეჭდვა
print("Name:", person["name"])
print("Lastname:", person["lastname"])
print("Age:", person["age"])

print("----------------------------------------------------------")

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


doubled = list(map(lambda x: x * 2, numbers))
print("gaormagebuli:", doubled)


divisible = list(filter(lambda x: x % 3 == 0, numbers))
print("3ze undashtod gayofili:", divisible)

print("-----------------------------------------------------------")

numbers = [5, 12, 18, 7, 25]


even_numbers = list(filter(lambda x: x % 2 == 0, numbers))

print("ლუწი რიცხვები სიიდან:", even_numbers)


print("-------------------------------------------------------------")

numbers = [3, 8, 15, 22, 5]


updated_numbers = list(map(lambda x: x + 10, numbers))

print("დამატებული 10 თითოეულ ელემენტს:", updated_numbers)

print("--------------------------------------------------------------")

from functools import reduce


numbers = [4, 7, 10, 3, 6]


total = reduce(lambda x, y: x + y, numbers)

print("yvela ricxvis jami:", total)
