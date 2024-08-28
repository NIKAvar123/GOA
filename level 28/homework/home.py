def to_alternating_case(string):
    result =  ""
    for char in string:
        if char.islower():
            result = result + char.upper()
        else:
            result = result + char.lower()
    return result