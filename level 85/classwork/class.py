def char_concat(word):
    Result = []
    Length = len(word)
    for i in range(Length // 2):
        Result.append(word[i])
        if i !=Length - i - 1:
            Result.append(word[-(i + 1)])
        Result.append(str(i + 1))
    return ''.join(Result)

