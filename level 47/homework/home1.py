def multiplication_table():
    table = []
    for i in range(1, 11):
        row = [i * j for j in range(1, 3)]
        table.append(row)
    return table


result = multiplication_table()

for row in result:
    print(row)
