def split_string(st):
    word = ''
    words = []
    for index, letter in enumerate(st):
        word += letter
        if len(set(word) & set(st[index+1:])) > 0:
            continue
        else:
            words.append(word)
            word = ''


    result = [len(x) for x in words]
    return result