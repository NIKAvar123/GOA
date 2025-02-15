def multi_table(number):
    result = []
    for i in range(1, 11):
        result.append(f"{i} * {number} = {i * number}")
    return "\n".join(result)

print(multi_table(5))
