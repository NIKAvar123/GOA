def domain_name(url):

    if url.startswith("http://"):
        url = url[7:]
    elif url.startswith("https://"):
        url = url[8:]
    

    if url[:4] == "www.":
        url = url[4:]
    

    domain = ""
    for char in url:
        if char == '.' or char == '/':
            break
        domain += char
    
    return domain
