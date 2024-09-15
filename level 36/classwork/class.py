def remove_duplicate_words(s):
    words = s.split(" ")
    result = []
    
    for word in words:
        if word not in result:
            result.append(word)
    
    return " ".join(result)