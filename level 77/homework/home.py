def array_to_dict(keys, values):
    result = {}
    for i, key in enumerate(keys):
        result[key] = values[i] if i < len(values) else None
    return result


keys = ["name", "age", "city", "country"]
values = ["John", 25, "New York"]

print(array_to_dict(keys, values))
