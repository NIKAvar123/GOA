def pluralize(word):
    lst1 = ["s","x","z","ch","sh"]
    word = str(word)
    if word[-1] in lst1 :
        word +="es"
    elif word[-2:] in lst1 :
        word +="es"
    elif word.endswith("y") and not word[-2] in "aeiou":
        word = word[:-1]+"ies"
    else :
        word+="s"
    return word







def largest_power(N):
    k = 0
    while 3**k < N:
        k += 1
    return k - 1
    